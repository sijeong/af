using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avatar.Models;
using Avatar.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Avatar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly AvatarContext _context;

        public EventController(AvatarContext context)
        {
            this._context = context;
        }

        [HttpGet()]
        public async Task<ActionResult<List<EventVM>>> GetEvents()
        {
            var res = await _context.Event.Select(e => new EventVM { Id = e.Id, Title = e.Description + " : " + e.Amount.ToString(), Start = e.Date }).ToListAsync();

            return res;
        }
    }
}