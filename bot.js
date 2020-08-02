// dependancies

var Discord = require("discord.js");
var fs = require("fs");


// default functions

var bot = new Discord.Client();


// bot.on('ready', ())

bot.on('ready', () => {
	
	console.log("");
	
	var botReadEmbed = new Discord.RichEmbed()
		botReadEmbed.setColor("#");
		botReadEmbed.setAuthor({"name": "",
"id": "533016846031650826"});
		botReadEmbed.setTitle("");
		botReadEmbed.addField("")
	
	msg.channel({"name": "📰ayzefrbot-logs",
"id": ""}).send(botReadEmbed)
	
});

bot.login(botToken);
