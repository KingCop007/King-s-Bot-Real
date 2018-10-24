const Discord = require("discord.js");
const bot = new Discord.NewClient();
const fs = require("fs");
var prefix = ">"
//Bot init
bot.command = Discord.Collection()
fs.readdir("./commands", (err, files) => {
	console.log("Loading/Reading commands.")
if(err) console.log(err)
	 files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
		 bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
	 });
});
//Command handler.

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
  }
})


bot.login(process.evl.token)
