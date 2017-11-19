using System.Linq;
using System.Threading.Tasks;
using PicBook.Domain;
using System;
using Microsoft.EntityFrameworkCore;

namespace PicBook.Repository.EntityFramework
{
    public class UserRepository : GenericCrudRepository<UserEntity>, IUserRepository
    {
        public UserRepository(ApplicationDbContext dbContext)
        {
            Context = dbContext;
        }

        public async Task AddPicture(UserEntity user, PictureEntity picture)
        {
            user.Pictures.Add(picture);
            await Context.SaveChangesAsync();
        }

        public async Task<UserEntity> FindById(Guid userId)
        {
            return await Find(x => x.Id == userId);
        }

        public async Task<UserEntity> FindByIdentifier(string userIdentifier)
        {
            return await Find(x => x.UserIdentifier == userIdentifier);
        }
    }
}