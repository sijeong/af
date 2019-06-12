using System;
using System.Collections.Generic;

namespace Avatar.Models
{
    public class Sales
    {
        public int Id { get; set; }
        public int Data { get; set; }
        public int SalesA { get; set; }
        public int SalesB { get; set; }
        public int ProspectA { get; set; }
        public int ProspectB { get; set; }
        public string Label { get; set; }
        public DateTime Date { get; set; }
    }
}
