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
        .addField("Updates:", 'Updates In The Stats')
        .addField('Current Problems :', 'Level Reset Trying to fix', true)
        .addField('Our Help Server', 'https://discord.gg/QWBffeK')
        .addField('Partners', 'No Partners Yet!')
        .setFooter('Bot created at: 20 may 2019');

    return message.channel.send(serverembed);
}
