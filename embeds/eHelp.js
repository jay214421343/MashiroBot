module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("MultiBot")
    .setDescription("List of commands for MultiBot.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**/leaderboard**
**/rank**
**/rank** \`\`@UserName\`\`
**/help**
**/ping**
**/purge** \`\`amount\`\`
**/help** \`\`Command\`\`` , true)
    .setFooter("MultiBot", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}
