using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class PictureEntity : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [MaxLength(128)]
        public string ContentType { get; set; }

        [Required]
        public byte[] Content { get; set; }

        [Required]
        public UserEntity User { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public bool IsPublic { get; set; }
    }
}
