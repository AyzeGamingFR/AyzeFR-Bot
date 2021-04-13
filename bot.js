// default requires

const Discord = require("discord.js");

// default vars

const botAuthor = "AyzeLYC | AyzeLYC#4168";
const botAuthorId = 533016846031650826"";
var botPrefix = "!";
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
var reason = "";
var userMentionned = 0;

client.on("ready", () => {
    
    console.log("The bot has been started the " +Date.prototype.Hours +" : " +Date.prototype.getMinutes +" " +Date.prototype.getDay +" / " +Date.prototype.getMonth +" / " +Date.prototype.getFullYear +"as " +client.user.tag +".");
    
});

client.on("guildMemberAdd", userJoined => {
    
    
    
});

client.on("guildMemberRemove", userLeft => {
    
    
    
});

client.on("message", msg => {
    
    if (msg.content.startsWith === discordPrefix +"help") {
        
        embed.setColor("#00FF000");
        embed.setAuthor(msg.author);
        embed.setTitle();
        embed.setDescription();
        msg.channel.send(embed);
        
    };
    if (msg.content.startsWith === discordPrefix +"warn") {
        
        if (msg.author.id in staffMembers) {
            
            userMentionned = msg.mentions.members.first().id;
            reason = msg.content.trim(discordPrefix.length +4 +userMentionned.length).slice();
            if (userMentionned in staffMembers) {
                
                embed.setColor();
                embed.setAuthor();
                embed.setTitle();
                embed.setDescription();
                msg.channel.send(embed);
                
            } else {
                
                
                
            };
            
        } else {
            
            embed.setColor("#FF0000");
            embed.setAuthor(msg.author);
            embed.setTitle("**You don't get the access to this command !**");
            embed.setDescription("Only the staff members got the access to this command.");
            
        };
        
    };
    if (msg.content.startsWith === discordPrefix +"mute") {
        
        
        
    };
    if (msg.content.startsWith === discordPrefix +"kick") {
        
        
        
    };
    if (msg.content.startsWith === discordPrefix +"ban") {
        
        if (msg.author.id in staffMembers) {
            
            userMentionned = msg.mentions.members.first();
            reason = msg.content.trim(discordPrefix.length +3 +userMentionned.length).slice();
            if (userMentionned in staffMembers) {
                
                console.log("The user " +msg.author +" tried to ban the user " +userMentionned.tag +" for " +reason +" the " +Date.getHour +" : " +Date.getMinutes +" - " +Date.getDay +" / " +Date.getMonth +" / " +Date.getFullYear +" .");
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**Ban fail !**");
                embed.setDescription("You can't ban the user " +userMentionned.tag +" because he is in the staff.");
                msg.channel.send(embed);
                embed.setColor("#FF0000");
                embed.setAuthor(msg.author);
                embed.setTitle("**Ban fail !**");
                embed.setDescription("The user " +msg.author +" tried to ban the user " +userMentionned.tag +" for " +reason +" .");
                logsChannel.send(embed);
                
            } else {
                
                console.log();
                embed.setColor("#00FF00");
                embed.setAuthor();
                embed.setTitle();
                embed.setDescription();
                msg.channel.send();
                
            };
            
        } else {
            
            
            
        };
        
    };
    
});
