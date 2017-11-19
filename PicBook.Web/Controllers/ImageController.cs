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

namespace PicBook.Web.Controllers
{
  //[Authorize]
  [Route("api/image")]
  public class ImageController : Controller
  {
    private IImageService imageService;

    public ImageController(IImageService imageService)
    {
      this.imageService = imageService;
    }
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost]
    [Route("upload")]
    public async Task<IActionResult> Upload(/*[FromForm] List<IFormFile> files*/)
    {
      List<IFormFile> files = Request.Form.Files.ToList();

      //full path to file in temp location
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
            uploadedImageUri = await imageService.UploadImage(ms.ToArray());
          }

          //using (var stream = new FileStream(filePath, FileMode.Create))
          //{
          //  await formFile.CopyToAsync(stream);
          //}
        }
        else
        {
          throw new ArgumentException("valami szart akarsz feltolteni");
        }

        //process uploaded files
        //Don't rely on or trust the FileName property without validation.
      }

      return Ok(new { count = files.Count, size, uploadedImageUri });
    }
  }
}
