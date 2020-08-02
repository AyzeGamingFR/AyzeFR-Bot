// default dependancies

var discord = require("discord.js");
var fs = require("fs");


// bot.on("message", msg => {})

bot.on("message", msg => {
  
  if (msg.content === botPrefix +"teengirl") {
    
    var teenGirlMessageEmbed = new discord.RichEmbed()
      teenGirlMessageEmbed.setColor("#")
      teenGirlMessageEmbed.setTitle("")
      teenGirlMessageEmbed.setImage("../Images/NSFW/Girl/Tiny" +mathRandomNumber +".jpg");
    
    msg.channel.send(teenGirlMessageEmbed)
    
  }
  
});
