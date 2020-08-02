// dependancies

var Discord = require("discord.js");
var fs = require("fs");

var http = require("http");
var url = require("url");


// default functions

var bot = new Discord.Client();

var botStartedYear = new Date.getYear();
var botStartedMonth = new Date.getMonth();
var botStartedDay = new Date.getDay();
var botStartedHour = new Date.getHours();
var botStartedMinute = new Date.getMinutes();
var botStartedSecond = new Date.getSecond();
var botStartedMillisecond = new Date.getMillisecond();


// bot.on('ready', ())

bot.on('ready', () => {
	
	console.log("");
	
	var botReadEmbed = new Discord.RichEmbed()
		botReadEmbed.setColor("#")
		botReadEmbed.setAuthor({"name": "",
"id": "533016846031650826"})
		botReadEmbed.setTitle(`**I am ready to work as ${bot.user.tag} !**`)
		botReadEmbed.addField(`I was started the ${botStartedDay}:${botStartedMonth}:${botStartedYear} at ${botStartedHour}:${botStartedMinute}:${botStartedSecond}:${botStartedMillisecond} !`)
	
	msg.channel({"name": "📰ayzefrbot-logs",
"id": ""}).send(botReadEmbed)
	
});

bot.on("guildMemberAdd", () => {
	
	console.log(`The user ${user.name} joined the discord server ${guild.name} the ${Date.getDay}:${Date.getMonth}:${Date.getYear} at ${Date.getHour}:${Date.getMinute}:${Date.getSecond}:${Date.getMillisecond} !`)
	msg.channel.send(`The user ${user.name} joined the server !\nWe are now ${guild.members.memberCount} members.`)
	
});

bot.on("message", msg => {
	
	if (msg.content === botPrefix +"help") {
		
		var helpMessageEmbed = new Discord.RichEmbed()
			helpMessageEmbed.setColor("#")
			helpMessageEmbed.setAuthor({"name": "AyzeFR",
"id": "533016846031650826"})
			helpMessageEmbed.setTitle("**Help Page :**")
			helpMessageEmbed.addField("")
		
		msg.channel.send(helpMessageEmbed)
		
	}
	
	if (msg.content === botPrefix +"helppm") {
		
		var helpPmEmbedMessage = new Discord.RichEmbed()
			helpPmEmbedMessage.setColor("#")
			helpPmEmbedMessage.setTitle("")
			helpPmEmbedMessage.addField(``)
		
		msg.member.send(helpPmEmbedMessage)
		
	}
	
});

bot.login(botToken);
