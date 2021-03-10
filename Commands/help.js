module.exports.command = (bot,discord,message,args) => {
  const embed = new discord.MessageEmbed();
  const user = message.member;
  var fs = require('fs');
  
       embed.setColor("BLACK")
  embed.setDescription(`say !porto for new website`)
      return message.channel.send(embed)
    }