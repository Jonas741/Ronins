using System.Threading.Tasks;
using PicBook.Domain;
using System;

namespace PicBook.Repository.EntityFramework
{
    public interface IUserRepository : IGenericCrudRepository<UserEntity>
    { 
        Task<UserEntity> FindById(string userIdentifier);
    }
}