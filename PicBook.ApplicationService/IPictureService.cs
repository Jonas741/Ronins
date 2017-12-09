using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IPictureService
    {
        Task Create(PictureEntity entity);
        Task<IEnumerable<PictureEntity>> GetAllByUser(UserEntity entity);
        Task<IEnumerable<PictureEntity>> GetAllPublic();
        Task<IEnumerable<PictureEntity>> GetAllPublicByUser(UserEntity entity);
        Task<IEnumerable<PictureEntity>> GetPublicPicturesByTag(string tag);
        Task<PictureEntity> GetByUri(Uri uri);
        Task<PictureEntity> GetById(Guid id);
        Task Update(PictureEntity entity);
        Task Delete(PictureEntity entity);
    }
}
