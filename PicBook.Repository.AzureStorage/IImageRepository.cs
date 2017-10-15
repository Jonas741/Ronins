using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.Repository.AzureStorage
{
    public interface IImageRepository
    {
        Task<ImageUploadResult> UploadImage(byte[] imgBytes);

        Task UploadImageQueue(Guid imageId);
    }
}
