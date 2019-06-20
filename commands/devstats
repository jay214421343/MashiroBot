const { version } = require("discord.js")
const moment = require("moment");
exports.run = (client, message, args, sql) =>{
            message.channel.send(`= DEV STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users      :: ${client.users.size.toLocaleString()}
• Servers    :: ${client.guilds.size.toLocaleString()}
• Channels   :: ${client.channels.size.toLocaleString()}
• Node       :: ${process.version}`, {code: "asciidoc"})
• Ping       :: ${client.ping.toFixed(0)}ms ;
}
