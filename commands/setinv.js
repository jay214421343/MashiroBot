const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	var neko = message.guild.members.find("id", "358661627459141642");
	if (message.member !== neko)return message.channel.send("You do not have the proper permissions to use this command");
	if (neko) {
	client.user.setStatus("invisible");
	message.channel.send('My Master set my status to: ``"invisible"``');
	console.log('You set my status to invisible');
	}
}
