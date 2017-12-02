using System;

namespace PicBook.Domain
{
    public interface IEntity
    {
        DateTimeOffset CreatedAt { get; set; }
        DateTimeOffset UpdatedAt { get; set; }
    }
}