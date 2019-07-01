const discord = require('discord.js');

 
function sendAnnounce(bot, message, args, guild) [
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("Test"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        }
    }
}]);
