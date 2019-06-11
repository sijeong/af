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
            var d = DateTime.Now;

            return new List<Sales>()
            {
                new Sales {Id = 1, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "AAP****", Date =  d},
                new Sales {Id = 2, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "GOG****", Date =  d },
                new Sales {Id = 3, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "MSF****", Date =  d },
                new Sales {Id = 4, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "PAG****", Date =  d },
                new Sales {Id = 5, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "CFX****", Date =  d },
                new Sales {Id = 6, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "VN*****", Date =  d },
                new Sales {Id = 7, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "TOT****", Date =  d },
                new Sales {Id = 8, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "CAM****", Date =  d },
                new Sales {Id = 9, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ROK****", Date =  d },
                new Sales {Id = 10, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "LTM****", Date =  d },
                new Sales {Id = 11, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ATM****", Date =  d },
                new Sales {Id = 12, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "DOR****", Date =  d },
                new Sales {Id = 13, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "ACE****", Date =  d },
                new Sales {Id = 14, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "DAO****", Date =  d },
                new Sales {Id = 15, Data =  r.Next(1, 40) , SalesA = r.Next(1, 60), SalesB = r.Next(1, 80), ProspectA = r.Next(30, 90), ProspectB = r.Next(50, 60), Label = "SUP****", Date =  d },


            };
        }


    }
}
