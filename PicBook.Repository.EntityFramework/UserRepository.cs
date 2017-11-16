using System.Linq;
using System.Threading.Tasks;
using PicBook.Domain;

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
            var users = await FindAll(u => u.UserIdentifier == userIdentifier);


            return users.FirstOrDefault();
        }
    }
}