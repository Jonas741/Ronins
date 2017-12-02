using System;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class Entity : IEntity
    {
        public Entity()
        {
            CreatedAt = DateTimeOffset.Now;
            UpdatedAt = DateTimeOffset.Now;
        }

        [Required]
        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}
