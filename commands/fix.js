module.exports.run = (bot, message, args, discord) => {
    let cmd = args.join(" ")
    if (!args) {
    message.channel.send("You must provide a command name to fix.")
} else {
      delete require.cache[require.resolve(`./${cmd}.js`)]
      message.channel.send(`Command ${cmd} has been reloaded.`)
    }
}
