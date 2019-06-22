const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {    
    let member = message.mentions.members.first();
    require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
      if (member) {
        let embed = new Discord.RichEmbed()
        .setTitle(message.author.username + ' kisses ' + member.user.username)
        .setColor('#eeeeee')
        .setDescription(message.author.username + ' kissed ' + member.user.username + '!')
        .setImage(json.url);

        message.channel.send(embed);
      } else message.reply('You need to mention the user to kiss!');
    });
    
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};
