using System;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class PictureEntity : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string ImgPath { get; set; }

        [Required]
        public UserEntity User { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public bool IsPublic { get; set; }

        [Required]
        public Guid FileId { get; set; }
    }
}
