using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avatar.Models
{
    public class Generator
    {
        public static List<Sales> GetData()
        {
            var r = new Random();
            return new List<Sales>()
            {
                new Sales {Id = 1, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "AAP****" },
                new Sales {Id = 2, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "GOG****" },
                new Sales {Id = 3, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "MSF****" },
                new Sales {Id = 4, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "PAG****" },
                new Sales {Id = 5, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "CFX****" },
                new Sales {Id = 6, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "VN*****" },
                new Sales {Id = 7, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "TOT****" },
                new Sales {Id = 8, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "CAM****" },
                new Sales {Id = 9, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ROK****" },
                new Sales {Id = 10, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "LTM****" },
                new Sales {Id = 11, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ATM****" },
                new Sales {Id = 12, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "DOR****" },
                new Sales {Id = 13, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ACE****" },
                new Sales {Id = 14, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "DAO****" },
                new Sales {Id = 15, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "SUP****" },


            };
        }
    }
}
