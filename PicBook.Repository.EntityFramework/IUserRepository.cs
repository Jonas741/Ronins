using System.Threading.Tasks;
using PicBook.Domain;
using System;

namespace PicBook.Repository.EntityFramework
{
    public interface IUserRepository : IGenericCrudRepository<UserEntity>
    { 
        Task<UserEntity> FindByIdentifier(string userIdentifier);
        Task<UserEntity> FindById(Guid userId);
    }
}