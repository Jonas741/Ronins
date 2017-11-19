using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using PicBook.Domain;
using PicBook.Repository.EntityFramework;

namespace PicBook.ApplicationService
{
    public class PictureService : IPictureService
    {
        private readonly IPictureRepository _pictureRepository;

        public PictureService(IPictureRepository pictureRepository)
        {
            _pictureRepository = pictureRepository;
        }

        public async Task DeletePicture(PictureEntity entity)
        {
            await _pictureRepository.DeletePicture(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity)
        {
            return await _pictureRepository.GetAllPicturesByUser(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPublicPictures()
        {
            return await _pictureRepository.GetAllPublicPictures();
        }

        public async Task<PictureEntity> GetPictureByUri(Uri uri)
        {
            return await _pictureRepository.GetPictureByUri(uri);
        }

        public async Task UpdatePicture(PictureEntity entity)
        {
            await _pictureRepository.UpdatePicture(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetPublicPicturesByUser(UserEntity entity)
        {
            return await _pictureRepository.GetPublicPicturesByUser(entity);
        }
    }
}
