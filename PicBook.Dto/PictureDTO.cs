using System;
using System.Collections.Generic;
using System.Text;

namespace PicBook.Dto
{
    public class PictureDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Uri Uri { get; set; }
        public bool IsPublic { get; set; }
        public string UserIdentifier { get; set; }
        public List<string> Tags { get; set; }
    }
}
