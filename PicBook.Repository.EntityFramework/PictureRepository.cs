using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicBook.Repository.EntityFramework
{
    class PictureRepository : GenericCrudRepository<PictureEntity>, IPictureRepository
    {
        public PictureRepository(ApplicationDbContext dbContext)
        {
            Context = dbContext;
        }

        public async Task<IEnumerable<PictureEntity>> GetPicturesOfUser(Guid userId)
        {
            return await FindAll(x => x.UserId == userId);
        }

        public async Task<IEnumerable<PictureEntity>> GetPublicPictures()
        {
            return await FindAll(x => x.IsPublic);
        }
    }
}
