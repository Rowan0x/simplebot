module.exports.command = (bot,discord,message,args) => {
  const embed = new discord.MessageEmbed();
  const user = message.member;
  var fs = require('fs');

  message.delete()
  
  const path = "./Storage/" + user.displayName + ".html";
    if (fs.existsSync(path)) {
      embed.setColor("RED")
  embed.setDescription(`You already have a proto, please contact staff members to get it deleted.`)
      return message.channel.send(embed)
    }
  
  const forbidenWords = ["<script>","</script","<style>","</style>","onerror="]

  async function premium(){
    let msg = await message.author.send('Please provide me about yourself. ( html can be used. ) ```You can use <br> to give leave a line and <img src="image_link_here"> for your proof and stuff.```');

const filter = m => m.author.id === message.author.id
const reply = await msg.channel.awaitMessages(filter, { max: 1 }).catch(console.error);

let about = reply.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
  

let msg2 = await message.author.send('Please provide me the icon (img link only, say "skip" for nothing.)');

const filter2 = m => m.author.id === message.author.id
const reply2 = await msg2.channel.awaitMessages(filter2, { max: 1 }).catch(console.error);

let about2 = reply2.first()

let msg3 = await message.author.send('Please mention the title for your proto, say "skip" if you want default title.');

const filter3 = m => m.author.id === message.author.id
const reply3 = await msg3.channel.awaitMessages(filter3, { max: 1 }).catch(console.error);

let about3 = reply3.first()

if (about2.content === "skip" || about3.content === "skip"){
  var p = about3.content.replace("skip",`${user.displayName}`);
  var ava = about2.content.replace("skip", "https://cdn.glitch.com/14663811-5366-4b88-a2f9-daeb7251da54%2FCF%20logo.png?v=1612044546726");
  create(ava,p)
} else {
  const p = about3
  const ava = about2;
  create(ava,p)
}
    

   function create(ava,p){
     const content = `<html>
    <head>
        <title>${p}</title>
        <link rel="icon" href="${ava}" type="image/icon type">
        <link rel="stylesheet" href="/WI2h2rOIW2hraowgh">
        <meta name="description" content="Come on check out ${user.displayName}'s portofolio! one of the best protos... Want to create your own attractive proto? come checkout Createfolio.glitch.me.">
        <meta property="og:image" content="${ava}">
        <meta name="theme-color" content="#0174e9">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="nav">
            <h1>${p}</h1>
            <div class="fade"></div>
            <div class="fade2"></div>
            <div class="fade3"></div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">HIRE</a></li>
                <li><a href="https://discord.gg/Jcxexytb3z">SERVER</a></li>
            </ul>
        </div>
        <!-- <div class="ad1">
            <h1>${about}.</h1>
            <img src="https://discord.gg/Jcxexytb3z">CREATE</a>
        </div> -->
        <div class="oboy">
            ${about}
        </div>
    </body>
</html>`

  fs.appendFile('./Storage/'+ user.displayName +'.html', content, function (err) {
  if (err) throw err;
  message.author.send("Your proto is now done! go check it in <#805167008475119646>")
  const channel = bot.channels.cache.find(channel => channel.name === "portfolios")
  embed.setColor("BLUE")
    embed.setTitle(`A new proto by ${user.displayName}`)
    embed.setDescription(`Go checkout ${user.displayName}'s proto! Create your own at [createfolio](https://createfolio.glitch.me/) for free and easy, Created by Alex.\n:link: [here](https://createfolio.glitch.me/proto?get=${user.displayName})`)
    embed.setThumbnail(`${ava}`)
  channel.send(embed)
});
   }
  }
  
  async function o() {
    

let msg = await message.author.send('Please provide me about yourself. ( html can be used. ) ```You can use <br> to give leave a line and <img src="image_link_here"> for your proof and stuff.```');

const filter = m => m.author.id === message.author.id
const reply = await msg.channel.awaitMessages(filter, { max: 1 }).catch(console.error);

let about = reply.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
  

let msg2 = await message.author.send('Please provide me the icon (img link only, say "skip" for nothing.)');

const filter2 = m => m.author.id === message.author.id
const reply2 = await msg2.channel.awaitMessages(filter2, { max: 1 }).catch(console.error);

let about2 = reply2.first()

if (about2.content === "skip"){
  var ava = about2.content.replace("skip", "https://cdn.glitch.com/14663811-5366-4b88-a2f9-daeb7251da54%2FCF%20logo.png?v=1612044546726");
  create(ava)
} else {
  const ava = about2;
  create(ava)
}

   function create(ava){
     const content = `<html>
    <head>
        <title>${user.displayName} Portofolio</title>
        <link rel="icon" href="${ava}" type="image/icon type">
        <link rel="stylesheet" href="/WI2h2rOIW2hraowgh">
        <meta name="description" content="Come on check out ${user.displayName}'s portofolio! one of the best protos... Want to create your own attractive proto? come checkout Createfolio.glitch.me.">
        <meta property="og:image" content="${ava}">
        <meta name="theme-color" content="#0174e9">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="nav">
            <h1>${user.displayName} Portofolio</h1>
            <div class="fade"></div>
            <div class="fade2"></div>
            <div class="fade3"></div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">HIRE</a></li>
                <li><a href="https://discord.gg/Jcxexytb3z">SERVER</a></li>
            </ul>
        </div>
        <!-- <div class="ad1">
            <h1>${about}.</h1>
            <img src="https://discord.gg/Jcxexytb3z">CREATE</a>
        </div> -->
        <div class="oboy">
            ${about}
        </div>
    </body>
</html>`

  fs.appendFile('./Storage/'+ user.displayName +'.html', content, function (err) {
  if (err) throw err;
  message.author.send("Your proto is now done! go check it in <#805167008475119646>")
  const channel = bot.channels.cache.find(channel => channel.name === "portfolios")
  embed.setColor("BLUE")
    embed.setTitle(`A new proto by ${user.displayName}`)
    embed.setDescription(`Go checkout ${user.displayName}'s proto! Create your own at [createfolio](https://createfolio.glitch.me/) for free and easy, Created by Alex.\n:link: [here](https://createfolio.glitch.me/proto?get=${user.displayName})`)
    embed.setThumbnail(`${ava}`)
  channel.send(embed)
});
   }
}
  
  
  if (user.roles.cache.some(role => role.name === 'Premium')){
    premium()
  } else {
    o()
  }
}