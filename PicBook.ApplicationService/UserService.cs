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

        public async Task AddNew(UserEntity entity)
        {
            await _userRepository.Create(entity);
        }

        public async Task<IEnumerable<UserEntity>> GetAll()
        {
            return await _userRepository.FindAll();
        }

        public async Task<UserEntity> GetById(string userId)
        {
            return await _userRepository.FindById(userId);
        }
        
        public async Task Update(UserEntity entity)
        {
            await _userRepository.Update(entity);
        }

        public async Task Delete(UserEntity entity)
        {
            await _userRepository.Delete(entity);
        }
    }
}