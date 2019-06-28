const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {
      let embed = new Discord.RichEmbed()
      .setTitle(`BOT UPDATE LOGS`)
      .setThumbnail(bot.user.avatarURL)
      .setDescription(`**Version [__3.1.0__] Added log, kick, fix Commands**`)
      .setColor(`RANDOM`)
      message.channel.send("Loading Log...").then(msg => {
        setTimeout(() => {
          msg.edit({ embed })
        }, 5000)
      })
    }
