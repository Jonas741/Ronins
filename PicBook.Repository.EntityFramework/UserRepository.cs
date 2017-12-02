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

        public async Task<UserEntity> FindById(string userId)
        {
            return await Find(x => x.Id == userId);
        }
    }
}