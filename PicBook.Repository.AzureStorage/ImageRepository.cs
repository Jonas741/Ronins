using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace PicBook.Repository.AzureStorage
{
    class ImageRepository : IImageRepository
    {
        public async Task<ImageUploadResult> UploadImage(byte[] imgBytes)
        {
            throw new NotImplementedException();
        }

        public Task UploadImageQueue(Guid imageId)
        {
            throw new NotImplementedException();
        }
    }
}
