using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avatar.Hubs;
using Avatar.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace Avatar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {

        private readonly AvatarContext _context;
        private IHubContext<StreamHub> _hub;

        public ScheduleController(AvatarContext context, IHubContext<StreamHub> hub)
        {
            this._context = context;
            this._hub = hub;
        }

        //[HttpGet()]
        //public async Task<ActionResult<IEnumerable<MonthlySchedule>>> GetSchedule()
        //{
        //    var res = await _context.MonthlySchedule.ToListAsync();

        //    return res;
        //}
    }
}