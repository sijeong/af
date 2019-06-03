using System;
using System.Collections.Generic;

namespace Avatar.Models
{
    public partial class Article
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
        public int? ViewCount { get; set; }
        public string Color { get; set; }
    }
}
