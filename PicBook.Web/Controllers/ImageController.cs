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

namespace PicBook.Web.Controllers
{
  [Route("api/images")]
  public class ImageController : Controller
  {
    private IImageService _imageService;
    private IPictureService _pictureService;
    private IUserService _userService;

    public ImageController(IImageService imageService, IPictureService pictureService,
      IUserService userService)
    {
      _imageService = imageService;
      _pictureService = pictureService;
      _userService = userService;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload()
    {
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();

      if (!await ExternalTokenHandler.Validate(token, provider))
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
          using (var ms = new MemoryStream())
          {
            formFile.CopyTo(ms);
            uploadedImageUri = await _imageService.UploadImage(ms.ToArray());
          }

          PictureEntity picture = new PictureEntity()
          {
            ImgPath = uploadedImageUri.ToString(),
            User = userEntity,
            UserId = userEntity.Id,
            Name = formFile.Name,
            IsPublic = isPublic
          };
          await _pictureService.Create(picture);
        }
      }

      return Ok(ApiResult.Set("Picture uploaded successfully.", Json(new { size = size, count = files.Count })));
    }

    [HttpGet]
    [Route("")]
    [Route("{userIdentifier}")]
    public async Task<IActionResult> Pictures(string userIdentifier)
    {
      var pictureEntities = new List<PictureEntity>();
      var publicPictureEntities = new List<PictureEntity>();

      if (userIdentifier != null)
      {
        var token = Request.Headers["Token"].ToString();
        var provider = Request.Headers["Token-Provider"].ToString();

        if (!await ExternalTokenHandler.Validate(token, provider))
          return BadRequest(ApiResult.Set("Token validation failed."));

        var userEntity = await _userService.GetById(userIdentifier);
        pictureEntities = (await _pictureService.GetAllByUser(userEntity)).ToList();
        publicPictureEntities = (await _pictureService.GetAllPublicByUser(userEntity)).ToList();
      }
      else
        publicPictureEntities = (await _pictureService.GetAllPublic()).ToList();

      var pictures = new List<PictureDTO>();
      pictures.AddRange(pictureEntities.Select(x => new PictureDTO() { IsPublic = x.IsPublic, Uri = new Uri(x.ImgPath), Name = x.Name, UserIdentifier = x.User.Id, Id = x.Id }));
      pictures.AddRange(publicPictureEntities.Select(x => new PictureDTO() { IsPublic = x.IsPublic, Uri = new Uri(x.ImgPath), Name = x.Name, UserIdentifier = x.UserId, Id = x.Id }));

      return Ok(ApiResult.Set("Pictures fetched successfully.", pictures));
    }

    [HttpPut("update/{uri}")]
    public async Task<IActionResult> Update(Uri uri)
    {
      //TODO: Write logic.
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();

      if (!await ExternalTokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      PictureEntity entity = await _pictureService.GetByUri(uri);
      await _pictureService.Update(entity);

      return Ok("Picture was updated.");
    }

    [HttpDelete("delete/{uri}")]
    public async Task<IActionResult> Delete(Uri uri)
    {
      //TODO: Write logic.
      var token = Request.Headers["Token"].ToString();
      var provider = Request.Headers["Token-Provider"].ToString();

      if (!await ExternalTokenHandler.Validate(token, provider))
        return BadRequest(ApiResult.Set("Token validation failed."));

      PictureEntity entity = await _pictureService.GetByUri(uri);
      await _pictureService.Delete(entity);

      return Ok("Picture {picture.uri} was deleted");
    }
  }
}
