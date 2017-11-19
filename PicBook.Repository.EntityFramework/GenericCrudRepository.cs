using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PicBook.Domain;

namespace PicBook.Repository.EntityFramework
{
    public abstract class GenericCrudRepository<TEntity> : IGenericCrudRepository<TEntity> where TEntity : class, IEntity
    {
        protected ApplicationDbContext Context;

        public async Task<IEnumerable<TEntity>> FindAll(Expression<Func<TEntity, bool>> filterExpression)
        {
            IQueryable<TEntity> entities = Context.Set<TEntity>();
            if (filterExpression != null)
            {
                entities = entities.Where(filterExpression);
            }

            return await entities.ToListAsync();
        }

        public async Task<TEntity> Find(Expression<Func<TEntity, bool>> filterExpression)
        {
            return await Context.Set<TEntity>().FirstOrDefaultAsync(filterExpression);
        }
        
        public virtual async Task Create(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            
            Context.Set<TEntity>().Attach(entity);
            Context.Set<TEntity>().Add(entity);
            await Context.SaveChangesAsync();
        }

        public virtual async Task Update(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            
            Context.Set<TEntity>().Attach(entity);
            Context.Entry(entity).State = EntityState.Modified;
            await Context.SaveChangesAsync();
        }

        public virtual async Task Delete(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            Context.Set<TEntity>().Attach(entity);
            Context.Entry(entity).State = EntityState.Deleted;
            await Context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TEntity>> FindAll()
        {
            return await Context.Set<TEntity>().ToListAsync();
        }
    }
}