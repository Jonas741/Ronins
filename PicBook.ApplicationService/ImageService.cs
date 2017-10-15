using PicBook.Repository.AzureStorage;
using System;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    class ImageService : IImageService
    {
        private IImageRepository imgRepo;

        public ImageService(IImageRepository imgRepo)
        {
            this.imgRepo = imgRepo;
        }

        public async Task<Uri> UploadImage(byte[] imageBytes)
        {
            ImageUploadResult result = await imgRepo.UploadImage(imageBytes);
            await imgRepo.UploadImageQueue(result.ImageId);
            return result.ImageUri;
        }
    }
}
