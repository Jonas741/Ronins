using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IImageService
    {
        Task<Uri> UploadImage(byte[] imageBytes);
    }
}
