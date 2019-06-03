using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace Avatar.Hubs
{
    public class StreamHub : Hub
    {
        public ChannelReader<int> Counter(int count, int delay, CancellationToken token)
        {
            var channel = Channel.CreateUnbounded<int>();

            _ = WriteItemAsync(channel.Writer, count, delay, token);

            return channel.Reader;
        }

        private async Task WriteItemAsync(ChannelWriter<int> writer, int count, int delay, CancellationToken token)
        {
            try
            {
                for (var i = 0; i < count; i++)
                {
                    token.ThrowIfCancellationRequested();
                    await writer.WriteAsync(i);
                    await Task.Delay(delay, token);
                }
            }
            catch(Exception ex)
            {
                writer.TryComplete(ex);
            }

            writer.TryComplete();
        }
    }
}
