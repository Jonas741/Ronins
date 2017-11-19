using System.Threading.Tasks;
using PicBook.Domain;
using System;

namespace PicBook.Repository.EntityFramework
{
    public interface IUserRepository
    {
        Task Create(UserEntity entity);
        Task<UserEntity> FindByIdentifier(string userIdentifier);

        Task<UserEntity> FindById(Guid userId);
    }
}