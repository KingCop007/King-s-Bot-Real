module.exports.run = (bot, message, args, Discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Kings bot help menu")
.setDescription("Heres my commands!")
.addField("No commands here", "Pry cuz this was just rewriten")

message.channel.send({embed: emb})
}
module.exports.help = {
name: "help"
}
