module.exports.command = (bot,message,args) => {
  const member = message.member;
  if (! member.hasPermission('ADMINISTRATOR')) {
	 return message.channel.send(`${member} you don't have enough permissions.`);
  }
	message.channel.send("WORk");
}