const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`Bot - Informations`, message.guild.iconURL)
        .setColor("#15f153")
        .addField('Version', 'Bot Version [3.1.0]', true)
        .addField('Bot Owner', '@🇳🇱💰ItzYaBoiJay💰🇳🇱#2079', true)
        .setThumbnail(sicon)
        .addField("Updates:", 'readded stats!')
        .addField('Current Problems :', 'Level Reset Trying to fix', true)
        .addField('Engine Version', '``$[error]``', true)
        .setFooter('Guild created at:')
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
}
