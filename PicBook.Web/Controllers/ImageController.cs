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
  //[Authorize]
  [Route("api/image")]
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

    [HttpPost("upload/{userIdentifier}")]
    public async Task<IActionResult> Upload(string userIdentifier)
    {
      List<IFormFile> files = Request.Form.Files.ToList();
      var filePath = Path.GetTempFileName();
      Uri uploadedImageUri = null;
      long size = files.Sum(f => f.Length);
      UserEntity entity = null;
      entity = await _userService.GetUserdByIdentifier(userIdentifier);

      foreach (var formFile in files)
      {
        var asd = formFile.ContentType;
        if (formFile.Length > 0)
        {
          using (var ms = new MemoryStream())
          {
            formFile.CopyTo(ms);
            uploadedImageUri = await _imageService.UploadImage(ms.ToArray());
          }
          PictureEntity picture = new PictureEntity() { ImgPath = uploadedImageUri.ToString(), User = entity, UserId = entity.Id, Name = "asd" };
          await _pictureService.CreatePicture(picture);
        }
        else
        {
          // nem biztos hogy a legszebb, de szerintem exceptiont dobni sem túl szép itt
          return BadRequest();
        }

      }

      return Ok(new { count = files.Count, size, uploadedImageUri });
    }

    [HttpDelete("delete/{uri}")]
    public async Task<IActionResult> Delete(Uri uri)
    {
      try
      {
        PictureEntity entity = await _pictureService.GetPictureByUri(uri);
        await _pictureService.DeletePicture(entity);
      }
      catch (ArgumentNullException ane)
      {
        return BadRequest(ane);
      }

      return Ok("Picture {picture.uri} was deleted");
    }

    [HttpPut("update/{uri}")]
    public async Task<IActionResult> Update(Uri uri)
    {
      try
      {
        // ez így még nem lesz jó! -> mit akarunk updatelni?
        PictureEntity entity = await _pictureService.GetPictureByUri(uri);
        await _pictureService.UpdatePicture(entity);
      }
      catch (ArgumentNullException ane)
      {
        return BadRequest(ane);
      }

      return Ok("Picture {picture.uri} was updated");
    }

    [HttpGet("publicpictures")]
    public async Task<IActionResult> PublicPictures()
    {
      IEnumerable<PictureEntity> pictures = await _pictureService.GetAllPublicPictures();
      List<PictureDTO> picturesDTO = new List<PictureDTO>();
      foreach (PictureEntity entity in pictures)
      {
        picturesDTO.Add(new PictureDTO
        {
          uri = new Uri(entity.ImgPath)
        });
      }

      return Ok(ApiResult.Set("Public pictures.", Json(picturesDTO)));
    }

    [HttpGet("pictures/{userIdentifier}")]
    public async Task<IActionResult> Pictures(string userIdentifier)
    {
      UserEntity entity = await _userService.GetUserdByIdentifier(userIdentifier);
      IEnumerable<PictureEntity> entities = await _pictureService.GetAllPicturesByUser(entity);
      List<PictureDTO> pictures = new List<PictureDTO>();
      foreach (PictureEntity item in entities)
      {
        pictures.Add(new PictureDTO { uri = new Uri(item.ImgPath) });
      }

      return Ok(ApiResult.Set("Pictures of {id}", pictures));
    }

    [HttpGet("publicpictures/{userIdentifier}")]
    public async Task<IActionResult> PublicPicturesByUser(string userIdentifier)
    {
      UserEntity entity = await _userService.GetUserdByIdentifier(userIdentifier);
      IEnumerable<PictureEntity> entities = await _pictureService.GetPublicPicturesByUser(entity);
      List<PictureDTO> pictures = new List<PictureDTO>();
      foreach (PictureEntity item in entities)
      {
        pictures.Add(new PictureDTO { uri = new Uri(item.ImgPath) });
      }

      return Ok(ApiResult.Set("Public pictures of {id}", Json(pictures)));
    }

  }
}
