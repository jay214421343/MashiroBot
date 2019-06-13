const request = require('request');


bot.on('guildCreate', (g) => {
    let channels = g.channels
    let defaultChannel = channels.first()
    if (defaultChannel && defaultChannel.send) defaultChannel.send('**Hello! I am MultiBot, your helpful server management and community assistant Discord:tm: Bot**\n**You can get started `/help`\n`\n**The permission system uses Discords permissions,*\n\n**Links and Support**\nOfficial Server: <https://discord.gg/eVy4Qjd>')
