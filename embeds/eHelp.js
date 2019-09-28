module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("S.C Bot")
    .setDescription("List of commands for S.C Bot.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**/leaderboard**
**/rank**
**/rank** \`\`@UserName\`\`
**/help**
**/ping**
**/botstats**
**/contact** \`\`BETA\`\`
**/dog**
**/kick**
**/8ball** \`\`Question\`\`
**/slap** \`\`@UserName\`\`
**/owo**
**/setinv** \`\`owner only\`\`
**/seton** \`\`owner only\`\`
**/serverinfo** 
**/clear** \`\`amount\`\`
**/help** \`\`Command\`\`` , true)
    .setFooter("S.C Bot", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}
