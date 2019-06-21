const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    let embed = new Discord.RichEmbed()
    .setTitle(`Partner Request`)
    .setDescription(mes)
    .setColor(`BLUE`)
    .setFooter(`This message was sent by ${message.author.id}`)
    .setThumbnail(bot.user.avatarURL)
    bot.channels.find('id','591142462123147279').send({ embed })
}
