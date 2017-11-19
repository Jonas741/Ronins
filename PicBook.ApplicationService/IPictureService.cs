using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IPictureService
    {
        //-user alapján + Publicok
        Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity);

        //-csak Public
        Task<IEnumerable<PictureEntity>> GetAllPublicPictures();

        //-uri alapján
        Task<PictureEntity> GetPictureByUri(Uri uri);

        //-update kép
        Task UpdatePicture(PictureEntity entity);

        //-delete kép

        Task DeletePicture(PictureEntity entity);

        Task<IEnumerable<PictureEntity>> GetPublicPicturesByUser(UserEntity entity);
    }
}
