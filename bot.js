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


bot.login(process.evl.token)
