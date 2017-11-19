using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IPictureService
    {
        Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity);

        Task<IEnumerable<PictureEntity>> GetAllPublicPictures();

        Task<PictureEntity> GetPictureByUri(Uri uri);
        Task<PictureEntity> GetPictureById(Guid id);

        Task UpdatePicture(PictureEntity entity);

        Task DeletePicture(PictureEntity entity);

        Task<IEnumerable<PictureEntity>> GetPublicPicturesByUser(UserEntity entity);
    }
}
