using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PicBook.ApplicationService;
using Microsoft.AspNetCore.Http;
using System.IO;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PicBook.Web.Controllers
{
    public class ImageController : Controller
    {
        private IImageService imgService;
        public ImageController(IImageService imgService)
        {
            this.imgService = imgService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Upload")]
        public async Task<IActionResult> Upload(List<IFormFile> files)
        {
            var filePath = Path.GetTempFileName();
            Uri uploadedImageUri = null;
            long size = files.Sum(f => f.Length);

            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        formFile.CopyTo(ms);
                        uploadedImageUri = await imgService.UploadImage(ms.ToArray());
                    };
                }
            }

            return Ok(new { count = files.Count, size, uploadedImageUri });
        }
    }
}
