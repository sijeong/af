using Avatar.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace Avatar.Hubs
{
    public class EmployeeHub : Hub
    {
        private readonly AvatarContext _context;

        public EmployeeHub(AvatarContext context)
        {
            this._context = context;
        }
        public override async Task OnConnectedAsync()
        {
            Console.WriteLine("!!!connected");
            await Task.Delay(1000);
        }

        public ChannelReader<Employee[]> GetEmps(string name)
        {
            var channel = Channel.CreateUnbounded<Employee[]>();
            _ = WriteItems(channel.Writer, name);

            return channel.Reader;
        }

        private async Task WriteItems(ChannelWriter<Employee[]> writer, string name)
        {
            //var data = _context.Employee.Where(e => e.Name == name).ToArray();
            //await writer.WriteAsync(data);
            writer.TryComplete();
        }
    }
}
