using System.Linq;
using System.Threading.Tasks;
using PicBook.Domain;
using System;

namespace PicBook.Repository.EntityFramework
{
    public class UserRepository : GenericCrudRepository<UserEntity>, IUserRepository
    {
        public UserRepository(ApplicationDbContext dbContext)
        {
            Context = dbContext;
        }

        public async Task<UserEntity> FindByIdentifier(string userIdentifier)
        {
            return await FindOne(x => x.UserIdentifier == userIdentifier);
        }
    }
}