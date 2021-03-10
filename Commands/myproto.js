module.exports.command = (bot,discord,message,args) => {
  const embed = new discord.MessageEmbed();
  const db = require('quick.db');
  const user = message.author;
  let bal = db.fetch(`proto_${message.guild.id}_${user.id}`)
  if (bal === null) bal = 0;
  embed.setColor("BLUE")
  embed.setDescription("**"+message.member.displayName + "** you currently have **" + bal + "** protos.")
	message.channel.send(embed);
}