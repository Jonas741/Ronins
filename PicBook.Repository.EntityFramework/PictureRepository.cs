using PicBook.Domain;
using System;
using System.Collections.Generic;
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
            return await FindAll(x => x.IsPublic);
        }

        public async Task<IEnumerable<PictureEntity>> GetAllPicturesByUser(UserEntity entity)
        {
            return await FindAll(x => x.User.Id == entity.Id);
        }

        public async Task<PictureEntity> GetPictureById(Guid id)
        {
            return await Find(x => x.Id == id);
        }

        public async Task<PictureEntity> GetPictureByUri(Uri uri)
        {
            return await Find(x => x.ImgPath == uri.ToString());
        }

        public async Task<IEnumerable<PictureEntity>> GetPublicPicturesByTag(string tag)
        {
            return await FindAll(x => x.Tags.Contains(tag) && x.IsPublic);
        }
    }
}
