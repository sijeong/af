using System;
using System.Collections.Generic;

namespace Avatar.Models
{
    public partial class Event
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}
