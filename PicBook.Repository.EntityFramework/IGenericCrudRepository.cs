using System.Threading.Tasks;
using PicBook.Domain;
using System.Collections.Generic;
using System.Linq.Expressions;
using System;

namespace PicBook.Repository.EntityFramework
{
    public interface IGenericCrudRepository<TEntity> where TEntity : class, IEntity
    {
        Task Create(TEntity entity);
        Task Delete(TEntity entity);
        Task Update(TEntity entity);
        Task<IEnumerable<TEntity>> FindAll(Expression<Func<TEntity, bool>> filterExpression);
        Task<IEnumerable<TEntity>> FindAll();
        Task<TEntity> Find(Expression<Func<TEntity, bool>> filterExpression);
    }
}