using Microsoft.EntityFrameworkCore;
using PicBook.Domain;

namespace PicBook.Repository.EntityFramework
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UserEntity> Users { get; set; }
        public DbSet<PictureEntity> Pictures { get; set; }
    }
}