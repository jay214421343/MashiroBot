const premiumServers = require("../config.json").premiumServers
const checkPremium = require('../embeds/checkPremium.js');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  let preMessage = checkPremium(bot, message, true)

  let em = new Discord.RichEmbed()
    .setColor("7289DA")
    .setAuthor(`${bot.user.username} Premium`, bot.user.avatarURL)
    .setDescription(preMessage)

  message.channel.send({ embed: em }).then(m => m.delete(55000))
}
