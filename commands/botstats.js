const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }

    let djs = require('discord.js').version
    let njs = process.versions.node
    let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`Bot - Informations`, message.guild.iconURL)
        .setColor("#15f153")
        .addField('Version', 'Bot Version [3.1.0]', true)
        .addField('Bot Owner', '@🇳🇱💰ItzYaBoiJay💰🇳🇱#2079', true)
        .setThumbnail(sicon)
        .addField("Updates:", 'Added /contact')
        .addField('Current Problems :', 'Level Reset Trying to fix', true)
        .addField('Our Help Server', 'https://discord.gg/QWBffeK')
        .addField('Partners', 'No Partners Yet!')
        .addField("Node Version", njs, true)
        .addField("Discord.js Version", djs, true)
        .addField("Ram Usage", ram + "MB / 32GB", true)
        .addField("Servers", `${client.guilds.size}`, true)
        .addField("Channels", `${client.channels.size}`, true)
        .addField("Users", `${client.users.size.toLocaleString()}`, true)
        .addField("Ping", `${Math.round(client.ping)}ms`, true)
        .setFooter('Bot created at: 20 may 2019');

    return message.channel.send(serverembed);
}
