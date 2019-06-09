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
**/stat** \`\`shows bot stats\`\`
**/serverinfo** 
**/purge** \`\`amount\`\`
**/help** \`\`Command\\`\`
**/userinfo** \`\`@UserName\`\`
**/dog**
**creator only**
**/setinv**
**/seton** , true)
    .setFooter("MultiBot", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}
