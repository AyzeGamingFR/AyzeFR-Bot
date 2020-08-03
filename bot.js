// dependancies

var discord = require("discord.js");
var fs = require("fs");

var http = require("http");
var url = require("url");


// default datas

var commandsFile = require("./commands/commands.js");
	var helpMessageEmbed = require(commandsFile.helpMessagesFile.helpMessageEmbed);
	var helpPmMessageEmbed = require(commandsFile.helpMessagesFile.helpPmMessageEmbed);
	var staffListEmbed = require(commandsFile.helpMessagesFile.staffListMessageEmbed);
	var staffListPmEmbed = require(commandsFile.helpMessagesFile.staffListPmMessageEmbed);
	
// default functions

var bot = new discord.Client();

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
		
		msg.channel.send(helpMessageEmbed)
		
	}
	
	if (msg.content === botPrefix +"helppm") {
		
		msg.member.send(helpPmEmbed)
		
	}
	
	if (msg.content === botPrefix +"stafflist") {
		
		msg.channel.send(staffListEmbed)
		
	}
	
	if (msg.content === botPrefix +"stafflistpm") {
		
		msg.channel.send(staffListPmEmbed)
		
	}
	
});

bot.login(botToken);
