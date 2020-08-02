// default requirements

var discord = require("discord.js");
var fs = require("fs");


// bot.on("message", msg => {})

bot.on("message", msg => {
  
  if (msg.content === botPrefix + "mmostartadventure") {
    
    var mmoStartAdventureMessageEmbed = new discord.RichEmbed()
      mmoStartAdventureMessageEmbed.setColor("#")
      mmoStartAdventureMessageEmbed.setTitle()
      mmoStartAdventureMessageEmbed.addField()
      
    msg.channel.send(mmoStartAdventureMessageEmbed)
    
  }
  
});
