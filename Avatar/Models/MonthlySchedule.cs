using System;
using System.Collections.Generic;

namespace Avatar.Models
{
    public partial class MonthlySchedule
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime From { get; set; }
        public decimal Amount { get; set; }
    }
}
