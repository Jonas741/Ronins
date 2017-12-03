using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace PicBook.Domain
{
    public class PictureEntity : Entity
    {
        [Required]
        public string ImgPath { get; set; }

        [Required]
        public UserEntity User { get; set; }

        [Required]
        public string UserId { get; set; }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsPublic { get; set; }
        public string Tags { get; set; }

        public PictureEntity()
        {
            Id = new Guid();
        }

        public List<string> TagList { get => Tags.Split('|').ToList(); }
    }
}
