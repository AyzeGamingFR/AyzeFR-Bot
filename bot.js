var Discord = require("discord.js");
var bot = new Discord.Client();
var fs = require("fs");


var botPrefix = "ù";


bot.on("ready", () => {

    console.log(`I was been started as ${bot.user.tag} ( ${bot.user.id} )!`)

    bot.user.setPresence("do not disturb")
    bot.user.setActivity("AyzeFR Bot, ùhelp")

});


bot.on("message", msg => {

    if (msg.content === botPrefix +"help") {

        if (msg.author === "bot") {

            msg.channel.send("You can't use this command because you are a bot !")

        } else {

            var helpPageEmbed = new Discord.MessageEmbed();
                helpPageEmbed.setColor("#0093FF")
                helpPageEmbed.setTitle("**Help Page :**")
                helpPageEmbed.addField("Hi, for the moment i don't get a help page because im a little big laggy ( my librarie discord.js is a little bit laggy ), but my fondator ( AyzeFR#4168 ) will add it soon !")

            msg.channel.send(helpPageEmbed)

            console.log(`The user ${msg.author.tag} ( ${msg.author.id} ) requested the help page !`)
            fs.writeFile("./logs.txt", "utf-8", `The user ${msg.author.tag} ( ${msg.author.id} ) requested the help page !`)

        }

    }

    if (msg.content === botPrefix +"clearconsole") {

        if (msg.author.id === "533016846031650826") {

            console.clear();
            console.log("The console have been cleared !")

            msg.channel.send("The console messages are been cleared !")
            fs.writeFile("./logs.txt", "utf-8", `The console was been cleared`)

        } else {

            msg.channel.send("You can't use this command because you are not my fondator, i sended a pm to AyzeFR.")
            fs.writeFile("./logs.txt", "utf-8", `${msg.author.tag} ( ${msg.author.id} ) tried to use the clearconsole command.`)

        }

    }

    // admin commands

});


bot.login("Njg4NzI3ODI5MDQ2NjI0MjYx.Xm4hxg.hFfGTZYyO4uZRPg7mvuDPFeIqbA");
