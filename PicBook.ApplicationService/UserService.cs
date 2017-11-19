using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using PicBook.Domain;
using PicBook.Repository.EntityFramework;

namespace PicBook.ApplicationService
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<UserEntity> GetUserdByIdentifier(string userIdentifier)
        {
            return await _userRepository.FindByIdentifier(userIdentifier);
        }

        public async Task<UserEntity> GetUserById(Guid userId)
        {
            return await _userRepository.FindById(userId);
        }

        public async Task AddNewUser(UserEntity entity)
        {
            await _userRepository.Create(entity);
        }
        
        public async Task UpdateUser(UserEntity entity)
        {
            await _userRepository.Update(entity);
        }

        public async Task DeleteUser(UserEntity entity)
        {
            await _userRepository.Delete(entity);
        }

        public async Task<IEnumerable<UserEntity>> GetAllUsers()
        {
            return await _userRepository.FindAll();
        }
    }
}