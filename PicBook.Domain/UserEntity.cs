using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PicBook.Domain
{
    public class UserEntity : Entity
    {
        public string UserIdentifier { get; set; }

        [Required]
        public string Email { get; set; }

        public string Name { get; set; }
        public string Provider { get; set; }

        public ICollection<PictureEntity> Pictures { get; set; }
    }
}