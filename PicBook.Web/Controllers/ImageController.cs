using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;
using PicBook.ApplicationService;
using PicBook.Dto;
using PicBook.Domain;
using PicBook.Web.Helpers;
using Microsoft.Extensions.Options;

namespace PicBook.Web.Controllers
{
  [Route("api/images")]
  public class ImageController : Controller
  {
    private IImageService _imageService;
    private IPictureService _pictureService;
    private IUserService _userService;
    private ExternalTokenHandler tokenHandler;
    private ImageTaggingHandler taggingHandler;

    public ImageController(IImageService imageService, IPictureService pictureService, IUserService userService,
      IOptions<ImageTaggingConfigurations> imageTaggingConfig, IOptions<TokenValidationConfigurations> tokenValidationConfig)
    {
      _imageService = imageService;
      _pictureService = pictureService;
      _userService = userService;
      tokenHandler = new ExternalTokenHandler(tokenValidationConfig);
      taggingHandler = new ImageTaggingHandler(imageTaggingConfig);
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload()
    {
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();

      if (!await tokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      var files = Request.Form.Files.ToList();
      var userIdentifier = Request.Form["UserId"].ToString();
      var isPublic = Convert.ToBoolean(Request.Form["IsPublic"].ToString());

      var userEntity = await _userService.GetById(userIdentifier);
      Uri uploadedImageUri = null;
      long size = files.Sum(f => f.Length);

      foreach (var formFile in files)
      {
        if (formFile.Length > 0)
        {
          string tags = "";

          using (var ms = new MemoryStream())
          {
            formFile.CopyTo(ms);
            uploadedImageUri = await _imageService.UploadImage(ms.ToArray());
            tags = await taggingHandler.MakeTaggingRequest(ms.ToArray());
          }

          PictureEntity picture = new PictureEntity()
          {
            ImgPath = uploadedImageUri.ToString(),
            User = userEntity,
            UserId = userEntity.Id,
            Name = formFile.Name,
            IsPublic = isPublic,
            Tags = tags
          };
          await _pictureService.Create(picture);
        }
      }

      return Ok(ApiResult.Set("Picture uploaded successfully.", Json(new { size = size, count = files.Count })));
    }

    [HttpGet("{userIdentifier}")]
    public async Task<IActionResult> Pictures(string userIdentifier)
    {
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();

      if (!await tokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      var userEntity = await _userService.GetById(userIdentifier);
      var pictureEntities = (await _pictureService.GetAllByUser(userEntity)).ToList();
      var pictures = pictureEntities.Select(x => new PictureDTO() { IsPublic = x.IsPublic, Uri = new Uri(x.ImgPath), Name = x.Name, UserIdentifier = x.UserId, Id = x.Id, Tags = x.TagList });

      return Ok(ApiResult.Set("Pictures fetched successfully.", pictures));
    }

    [HttpGet("search/{keyword}")]
    public async Task<IActionResult> SearchPictures(string keyword)
    {
      if (keyword == null)
        return BadRequest(ApiResult.Set("Invalid search parameters."));

      var pictureEntities = await _pictureService.GetPublicPicturesByTag(keyword);
      var pictures = pictureEntities.Select(x => new PictureDTO() { IsPublic = x.IsPublic, Uri = new Uri(x.ImgPath), Name = x.Name, UserIdentifier = x.UserId, Id = x.Id, Tags = x.TagList });

      return Ok(ApiResult.Set("Image search was successful.", pictures));
    }

    [HttpPut("update")]
    public async Task<IActionResult> Update([FromBody]PictureDTO model)
    {
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();
      var userId = Request.Headers["Token-Bearer"].ToString();

      if (!await tokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      PictureEntity pictureEntity = await _pictureService.GetById(model.Id);

      if (pictureEntity == null)
        return NotFound(ApiResult.Set("Picture not found."));

      if (pictureEntity.UserId != userId)
        return BadRequest(ApiResult.Set("The selected item does not belong to the initiating user."));

      pictureEntity.IsPublic = model.IsPublic;
      await _pictureService.Update(pictureEntity);

      return Ok(ApiResult.Set("Picture was updated successfully."));
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> Delete(string id)
    {
      if (!Guid.TryParse(id, out Guid pictureId))
        return BadRequest(ApiResult.Set("Picture id was not in a correct format."));

      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();
      var userId = Request.Headers["Token-Bearer"].ToString();

      if (!await tokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      PictureEntity pictureEntity = await _pictureService.GetById(pictureId);

      if (pictureEntity.UserId != userId)
        return BadRequest(ApiResult.Set("The selected item does not belong to the initiating user."));

      await _pictureService.Delete(pictureEntity);

      return Ok(ApiResult.Set("Picture was deleted successfully."));
    }
  }
}
