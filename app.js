const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect:true});
const fs = require('fs');
const sql = require('sqlite');
const config = require('./config.json');
const levelerCore = require('./functions/levelSystem');
const talkedRecently = new Set();

sql.open(`./db/mainDB.sqlite`);

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args, sql));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm'){
    if (!message.content.startsWith(config.prefix)){
      client.users.get(config.ownerID).send(`${message.author.id}, ${message.author.username}: ${message.content}`);
    }else{
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);
  
      let args = message.content.split(' ').slice(1);
  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, sql, Discord);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`);
        return;
      }
    }
  }else{
    if (!message.content.startsWith(config.prefix)){
      sql.all(`SELECT roleName FROM bListRoles WHERE guildID=${message.guild.id}`).then(rCheck=>{
        var blRoles = rCheck.map(g=>g.roleName);
        if(message.member.roles.some(r=>blRoles.includes(r.name))) {
          return;
        }else{
          if (talkedRecently.has(message.author.id)) {
            return;
          }else{
            levelerCore.scoreSystem(client, message, sql, Discord);
            talkedRecently.add(message.author.id);
            setTimeout(() => {
            talkedRecently.delete(message.author.id);
            }, 4000);
          }
        }
      });
    }else{
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);
  
      let args = message.content.split(' ').slice(1);
  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, sql, Discord);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`);
        return;
      }
    }
  }
});

client.on('ready', () => {
	client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
});

function game1() {
    client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
}

function game2() {
    client.user.setActivity(`Use /help for Help!`, { type: "PLAYING" });
    setTimeout(game3, 30000)
}

function game3() {
   client.user.setActivity(`Prefix is /`, { type: "PLAYING" });
    setTimeout(game4, 300000);
}
function game4() {
   client.user.setActivity(`You`, { type: "LISTENING" });
    setTimeout(game5, 30000);
}
function game5() {
   client.user.setActivity(`Beta`, { type: "PLAYING" });
    setTimeout(game1, 30000);
}

client.on('ready', () => {
setInterval(() => {
    dbl.postStats(client.guilds.size)
  }, 3600000);
});

client.login(config.token);
console.log('Ready');
