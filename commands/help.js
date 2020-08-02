// default requirements

var discord = require("discord.js");
var fs = require("fs");


// default bot datas

var botPrefix = "ù";


// bot.on("message", msg => {})

bot.on("message", msg => {
  
  if (msg.content.startsWith === botPrefix +"help") {
    
    if (msg.author.bot) {
      
      msg.channel.send(`You can't execute this command ${msg.author} because you are a bot.`)
      
    }
    
  }
  
});
