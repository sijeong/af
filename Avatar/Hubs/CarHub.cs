using Avatar.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avatar.Hubs
{
    public class CarHub:Hub
    {
        private readonly AvatarContext _context;

        public CarHub(AvatarContext context)
        {
            this._context = context;
        }
    }
}
