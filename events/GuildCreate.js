const fs = require('fs')
const snekfetch = require('snekfetch')

module.exports = (bot, guild, discord) => {
  const channel = guild.channels.find(c => c.name == "welcome")
  const modc = guild.channels.find(c => c.name == "guild-logs")
  // post new server count
  let member = guild.owner
  let embed = new discord.RichEmbed()
  .setTitle("Introduction to MultiBot")
  .addField("Heyo! Thanks for adding me.","Before you start using me, I need to get some things straight. First of all, for some basic info about me, say `/info`.")
  .addField("To see a list of commands","Say `/help`.", true)
  .addField("If you need to report a bug:","go to use the`/contact` command")
  .addField("Done!", "Alrighty! Now you can start using all my awesome features in your server!")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  member.send({embed: embed})
