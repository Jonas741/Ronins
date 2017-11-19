using System;
using System.Collections.Generic;
using System.Text;

namespace PicBook.Dto
{
    public class UserDTO
    {
        public string UserIdentifier { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Provider { get; set; }
    }
}
