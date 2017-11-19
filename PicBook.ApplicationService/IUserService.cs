using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IUserService
    {
        Task<UserEntity> GetUserdByIdentifier(string userIdentifier);
        Task<UserEntity> GetUserById(Guid userId);
        Task AddNewUser(UserEntity entity);
        Task UpdateUser(UserEntity entity);
        Task DeleteUser(UserEntity entity);
        Task<IEnumerable<UserEntity>> GetAllUsers();
    }
}