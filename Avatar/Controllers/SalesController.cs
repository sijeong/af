using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avatar.Hubs;
using Avatar.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Avatar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private IHubContext<SalesHub> _hub;

        public SalesController(IHubContext<SalesHub> hub)
        {
            _hub = hub;
        }

        public IActionResult Get()
        {
            var interval = new Interval(() => _hub.Clients.All.SendAsync("publishSalesData", Generator.GetData()));

            return Ok(new { Message = "Ok" });
        }
        [HttpGet("init")]
        public ActionResult<List<Sales>> GetInitialState()
        {
            return Ok(
                new List<Sales>
                {
                    new Sales{Id = 1, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1, Label="" },
                    new Sales{Id = 2, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 3, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 4, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 5, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 6, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 7, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 8, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 9, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    new Sales{Id = 10, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    //new Sales{Id = 11, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    //new Sales{Id = 12, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    //new Sales{Id = 13, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    //new Sales{Id = 14, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },
                    //new Sales{Id = 15, Data = 1, SalesA= 1, SalesB = 1, ProspectA = 1, ProspectB = 1,Label="" },

            });
        }
    }
}