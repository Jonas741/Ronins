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

        public async Task Create(PictureEntity entity)
        {
            await _pictureRepository.Create(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllByUser(UserEntity entity)
        {
            return await _pictureRepository.GetAllPicturesByUser(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPublic()
        {
            return await _pictureRepository.GetAllPublicPictures();
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPublicByUser(UserEntity entity)
        {
            return await _pictureRepository.FindAll(x => x.IsPublic && x.UserId != entity.Id);
        }

        public async Task<IEnumerable<PictureEntity>> GetPublicPicturesByTag(string tag)
        {
            return await _pictureRepository.GetPublicPicturesByTag(tag);
        }

        public async Task<PictureEntity> GetById(Guid id)
        {
            return await _pictureRepository.Find(x => x.Id == id);
        }

        public async Task<PictureEntity> GetByUri(Uri uri)
        {
            return await _pictureRepository.GetPictureByUri(uri);
        }

        public async Task Update(PictureEntity entity)
        {
            await _pictureRepository.Update(entity);
        }

        public async Task Delete(PictureEntity entity)
        {
            await _pictureRepository.Delete(entity);
        }
    }
}
