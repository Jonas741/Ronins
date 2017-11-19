using Microsoft.EntityFrameworkCore;
using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace PicBook.Repository.EntityFramework
{
    public class PictureRepository : GenericCrudRepository<PictureEntity>, IPictureRepository
    {
        public PictureRepository(ApplicationDbContext dbContext)
        {
            Context = dbContext;
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPublicPictures()
        {
            return await Context.Pictures.Where(x => x.IsPublic).ToListAsync();
        }

        public async Task<PictureEntity> GetPictureByUri(Uri uri)
        {
            return await FindOne(x => x.ImgPath == uri.ToString());
        }

        public async Task<IEnumerable<PictureEntity>> GetPublicPicturesByUser(UserEntity entity)
        {
            return await FindAll(x => x.IsPublic && x.UserId == entity.Id);
        }

        public async Task DeletePicture(PictureEntity entity)
        {
            await Delete(entity);
        }

        public async Task UpdatePicture(PictureEntity entity)
        {
            await Update(entity);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity)
        {
            return await FindAll(x => x.UserId == entity.Id);
        }
    }
}
