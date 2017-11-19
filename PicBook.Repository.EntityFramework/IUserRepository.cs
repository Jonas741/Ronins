using System.Threading.Tasks;
using PicBook.Domain;

namespace PicBook.Repository.EntityFramework
{
    public interface IUserRepository
    {
        Task Create(UserEntity entity);
        Task<UserEntity> FindByIdentifier(string userIdentifier);
    }
}