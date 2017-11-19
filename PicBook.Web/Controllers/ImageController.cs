using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.IO;
using PicBook.ApplicationService;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;
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
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload()
    {
      List<IFormFile> files = Request.Form.Files.ToList();
      var filePath = Path.GetTempFileName();
      Uri uploadedImageUri = null;
      long size = files.Sum(f => f.Length);

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
        }
        else
        {
          throw new ArgumentException("valami szart akarsz feltolteni");
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
        return BadRequest();
      }

      return Ok("Picture {picture.uri} was deleted");
    }

    [HttpPut("update/{uri}")]
    public async Task<IActionResult> Update(Uri uri)
    {
      try
      {
        // ez így még nem lesz jó!
        PictureEntity entity = await _pictureService.GetPictureByUri(uri);
        await _pictureService.UpdatePicture(entity);
      }
      catch (ArgumentNullException ane)
      {
        return BadRequest();
      }

      return Ok("Picture {picture.uri} was updated");
    }

    [HttpGet("publicpictures")]
    public async Task<IActionResult> PublicPictures()
    {
      IEnumerable<PictureEntity> pictures = await  _pictureService.GetAllPublicPictures();
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

    [HttpGet("/pictures/{id}")]
    public async Task<IActionResult> Pictures(Guid id)
    {
      UserEntity entity = await _userService.GetUserById(id);
      IEnumerable<PictureEntity> entities = await _pictureService.GetAllPicturesByUser(entity);

      return Ok(ApiResult.Set("Pictures of {id}", Json(entities)));
    }
    
  }
}
