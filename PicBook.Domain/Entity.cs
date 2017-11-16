using System;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class Entity : IEntity
    {
        [Key]
        public virtual Guid Id { get; set; }
    }
}
