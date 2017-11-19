using System;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class PictureEntity : Entity
    {
        public string Name { get; set; }

        [Required]
        public string ImgPath { get; set; }

        [Required]
        public UserEntity User { get; set; }

        [Required]
        public Guid UserId { get; set; }

        public bool IsPublic { get; set; }

        public Guid FileId { get; set; }
    }
}
