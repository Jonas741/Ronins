using System;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class Entity : IEntity
    {
        public Entity()
        {
            Id = Guid.NewGuid();
            CreatedAt = DateTimeOffset.Now;
            UpdatedAt = DateTimeOffset.Now;
        }

        public Guid Id { get; set; }

        [Required]
        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}
