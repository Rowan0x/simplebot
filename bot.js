const discord = require("discord.js");
const bot = new discord.Client();
const fs = require('fs');
const prefix = "!";
const db = require('quick.db');
const token = ("ODE4MTg5MTI5OTY3MjA2NDAw.YEUcAQ.1nhvRyKQgPbxsRBPvqMU_FtudDA");
const embed = new discord.MessageEmbed();
const express = require("express");
const app = express();

bot.once('ready', () => {
    bot.user.setActivity('Im under da woter', { type: 'WATCHING' }).then(presence => console.log(`Activity set to ${presence.activities[0].name}`)).catch(console.error);
    console.log("CF functions are now started!")
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    const path = "./Commands/" + command + ".js";
    if (fs.existsSync(path)) {
        require(path).command(bot,discord,message,args)
      } else {
          message.channel.send("Invaild command. :flushed:")
      }

});

bot.login(token);
require('./webstartup.js');