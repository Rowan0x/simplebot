module.exports.command = (bot,discord,message,args) => {
  const embed = new discord.MessageEmbed();
  const fs = require("fs");
  const member = message.mentions.members.first();
  if (message.member.hasPermission('ADMINISTRATOR')) {
	 const path = "./Storage/" + member.displayName + ".html";
    if (fs.existsSync(path)) {
      fs.unlink('./Storage/'+member.displayName+'.html', function (err) {
  if (err) throw err;
  embed.setColor("GREEN")
  embed.setDescription(`${member.displayName}'s proto is now deleted!'`)
        message.channel.send(embed);
      });
    } else {
      embed.setColor("RED")
  embed.setDescription(`Proto named ${member.displayName} doesn't exist.`)
        message.channel.send(embed);
    }
  } else {
    return message.channel.send(`${member} you don't have enough permissions. Ask an admin to delete your website`);
  }
  
}