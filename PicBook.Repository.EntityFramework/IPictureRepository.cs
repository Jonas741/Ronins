using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.Repository.EntityFramework
{
    public interface IPictureRepository : IGenericCrudRepository<PictureEntity>
    {
        Task<IEnumerable<PictureEntity>> GetAllPublicPictures();
        Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity);
        Task<PictureEntity> GetPictureById(Guid id);
        Task<PictureEntity> GetPictureByUri(Uri uri);
        Task<IEnumerable<PictureEntity>> GetPublicPicturesByTag(string tag);
    }
}
