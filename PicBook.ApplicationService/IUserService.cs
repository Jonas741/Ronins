using PicBook.Domain;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PicBook.ApplicationService
{
    public interface IUserService
    {
        Task<UserEntity> GetById(string userId);
        Task AddNew(UserEntity entity);
        Task Update(UserEntity entity);
        Task Delete(UserEntity entity);
        Task<IEnumerable<UserEntity>> GetAll();
    }
}