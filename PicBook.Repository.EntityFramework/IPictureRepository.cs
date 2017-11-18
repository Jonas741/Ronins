using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.Repository.EntityFramework
{
    interface IPictureRepository
    {
        Task<IEnumerable<PictureEntity>> GetPicturesOfUser(Guid userId);
        Task<IEnumerable<PictureEntity>> GetPublicPictures();
    }
}
