module.exports.command = (bot,discord,message,args) => {
  const embed = new discord.MessageEmbed();
  const user = message.member;
  var fs = require('fs');


  
  const path = "./Storage/" + user.displayName + ".html";
    if (fs.existsSync(path)) {
      embed.setColor("RED")
  embed.setDescription(`You already have a proto, please contact staff members to get it deleted.`)
      return message.channel.send(embed)
    }
  
message.channel.send("Check DMS");
  
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

let msg3 = await message.author.send('Please provide me the icon (img link only, say "skip" for nothing.)');

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
    

   function create(ava){
     const content = `<html>
    <!DOCTYPE html>
<html lang="en" >
     <head>
  <meta charset="UTF-8">
  <title>${user.displayName} Proto</title>
  <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Sintony:400,700" rel="stylesheet" type="text/css"><link rel="stylesheet" href="https://cdn.glitch.com/5aadfcef-b3e0-444c-addd-02fda6edc4a1%2Fstyle.css?v=1614968826191">

</head>
<body>
<!-- partial:index.partial.html -->
<nav class="cd-vertical-nav">
		<ul>
			<li><a href="#section1" class="active"><span class="label">Home</span></a></li>
			<li><a href="#section2"><span class="label">About</span></a></li>
			<li><a href="#section3"><span class="label">Portfolio</span></a></li>
			<li><a href="#section4"><span class="label">Contact</span></a></li>
      </ul>
	</nav>

	<button class="cd-nav-trigger cd-image-replace">Open navigation<span aria-hidden="true"></span></button>

	<section id="section1" class="cd-section home-section">
		<div class="content-wrapper">
			<h1>${user.displayName} /><b>@<a href="" target="_blank">${user.displayName}</a></b></h1>
		</div>
	</section>

	<section id="section2" class="cd-section">
		<div class="content-wrapper">
			<h2>About</h2>
			<p>I am an ambitious person, eager for knowledge and always looking for a bigger challenge. <br />View my full skillset on <a href="https://ro.linkedin.com/in/placintadaniel" target="_blank">LinkedIn</a>.</p>
		</div>
	</section>

	<section id="section3" class="cd-section">
		<div class="content-wrapper">
			<h2>Portfolio</h2>
			<nav class="menu menu--viola menu-portofolio">
				<ul class="menu__list">
					<li class="menu__item">
						<a href="http://lavacow.com" class="menu__link" target="_blank">
							<img src="https://placehold.it/600x600" alt="" class="img-responsive" />
							<br />
							<small>Online Art Auctions</small>
						</a>
					</li>
					<li class="menu__item">
						<a href="http://www.artmark.ro" class="menu__link" target="_blank">
							<img src="https://placehold.it/600x600" alt="" class="img-responsive" />
							<br />
							<small>Auction House</small>
						</a>
					</li>
					<li class="menu__item">
						<a href="http://cluizel.ro" class="menu__link" target="_blank">
							<img src="https://placehold.it/600x600" alt="" class="img-responsive" />
							<br />
							<small>Chocolaterie</small>
						</a>
					</li>
					<li class="menu__item">
						<a href="http://cadouri-lemanoir.ro" class="menu__link" target="_blank">
							<img src="https://placehold.it/600x600" alt="" class="img-responsive" />
							<br />
							<small>Presents</small>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>

	<section id="section4" class="cd-section">
		<div class="content-wrapper">
			<h2>Connect with me</h2>
			<nav class="menu menu--iris">
				<ul class="menu__list">
					<li class="menu__item">
						<a href="https://twitter.com/Daniel_Placinta" class="menu__link" target="_blank">Twitter</a>
					</li>
					<li class="menu__item">
						<a href="https://ro.linkedin.com/in/placintadaniel" class="menu__link" target="_blank">LinkedIn</a>
					</li>
					<li class="menu__item">
						<a href="https://github.com/akizor" class="menu__link" target="_blank">GitHub</a>
					</li>
					<li class="menu__item">
						<a href="https://www.freecodecamp.com/akizor" class="menu__link" target="_blank">freeCodeCamp</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="https://cdn.glitch.com/5aadfcef-b3e0-444c-addd-02fda6edc4a1%2Fscript.js?v=1614968812697"></script>

</body>
</html>`

  fs.appendFile('./Storage/'+ user.displayName +'.html', content, function (err) {
  if (err) throw err;
  message.author.send("Your proto is now done! Thanks for using this method to create a unique portofolio website. GO check it in <#817820250815987712>")
  const channel = bot.channels.cache.find(channel => channel.name === "results")
  embed.setColor("BLACK")
    embed.setTitle(`A new proto by ${user.displayName}`)
    embed.setDescription(`Go checkout ${user.displayName}'s proto! Created by Rowan.\n:link: [here](https://germandevs.de/proto/?get=${user.displayName})`)
    embed.setThumbnail("")
  channel.send(embed)
});
   }
}
  
  
  async function o() {
    

let msg = await message.author.send('Please provide me about yourself.');

const filter = m => m.author.id === message.author.id
const reply = await msg.channel.awaitMessages(filter, { max: 1 }).catch(console.error);
  
  
let about = reply.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
    
let msg2 = await message.author.send('Please provide a sozial media link for sozial media, where you can show more of your skills. if you dont want to, say #. https://cdn.discordapp.com/attachments/817435028182269982/817470476837715968/Screenshot_2021-03-05_195539.png');
const filter2 = m => m.author.id === message.author.id
const reply2 = await msg.channel.awaitMessages(filter2, { max: 1 }).catch(console.error);

let about2 = reply2.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about2.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
    
    
let msg3 = await message.author.send('lets create 2 buttons for the footer of the page. PLease tell me the name of the first button you want to create!');
const filter3 = m => m.author.id === message.author.id
const reply3 = await msg.channel.awaitMessages(filter3, { max: 1 }).catch(console.error);

let about3 = reply3.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about3.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
    
    
let msg4 = await message.author.send('Cool! PLease tell me the link you want the person to redirect with button 1. If you dont want to enter a link press #');
const filter4 = m => m.author.id === message.author.id
const reply4 = await msg.channel.awaitMessages(filter4, { max: 1 }).catch(console.error);

let about4 = reply4.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about3.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}
    
let msg5 = await message.author.send('Now please tell me the name of the second button');
const filter5 = m => m.author.id === message.author.id
const reply5 = await msg.channel.awaitMessages(filter5, { max: 1 }).catch(console.error);

let about5 = reply5.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about3.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}  
    
let msg6 = await message.author.send('Good now the redirect link of the 2nd button. If you dont want to enter a link press #');
const filter6 = m => m.author.id === message.author.id
const reply6 = await msg.channel.awaitMessages(filter6, { max: 1 }).catch(console.error);

let about6 = reply6.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about3.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}     
    
let msg7 = await message.author.send('Now we are going to set up examples of your work, first of all get a example of your work, then provide me your 1st work name please.');
const filter7 = m => m.author.id === message.author.id
const reply7 = await msg.channel.awaitMessages(filter7, { max: 1 }).catch(console.error);

let about7 = reply7.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about7.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}      

let msg8 = await message.author.send('Good, now please send me a **link** of a image of your work. For example find a image on discord, or upload your image to Discord, then right click it and then click copy link. After you do that send me the link please. But dont upload the Image in this chat or i will break.');
const filter8 = m => m.author.id === message.author.id
const reply8 = await msg.channel.awaitMessages(filter8, { max: 1 }).catch(console.error);

let about8 = reply8.first()

for (var i = 0; i < forbidenWords.length; i++) {
  if (about7.content.includes(forbidenWords[i])) {
    message.author.send("You can't add scripts and style tag. Try again later.");
    return;
  }
}   
    {
     const content = `<html>
    <!DOCTYPE html>
<html lang="en" >
     <head>
  <meta charset="UTF-8">
  <title>${user.displayName} Proto</title>
  <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Sintony:400,700" rel="stylesheet" type="text/css"><link rel="stylesheet" href="https://cdn.glitch.com/5aadfcef-b3e0-444c-addd-02fda6edc4a1%2Fstyle.css?v=1614968826191">

</head>
<body>
<!-- partial:index.partial.html -->
<nav class="cd-vertical-nav">
		<ul>
			<li><a href="#section1" class="active"><span class="label">Home</span></a></li>
			<li><a href="#section2"><span class="label">About</span></a></li>
			<li><a href="#section3"><span class="label">Portfolio</span></a></li>
			<li><a href="#section4"><span class="label">Contact</span></a></li>
      </ul>
	</nav>

	<button class="cd-nav-trigger cd-image-replace">Open navigation<span aria-hidden="true"></span></button>

	<section id="section1" class="cd-section home-section">
		<div class="content-wrapper">
			<h1>${user.displayName} /><b>@<a href="${about2}" target="_blank">${user.displayName}</a></b></h1>
		</div>
	</section>

	<section id="section2" class="cd-section">
		<div class="content-wrapper">
			<h2>About</h2>
			<p> ${about}<br />View my full skillset <a href="${about2}" target="_blank">Here</a>.</p>
		</div>
	</section>

	<section id="section3" class="cd-section">
		<div class="content-wrapper">
			<h2>Portfolio</h2>
			<nav class="menu menu--viola menu-portofolio">
				<ul class="menu__list">
					<li class="menu__item">
						<a class="menu__link" target="_blank">
							<img src="${about8}" alt="" class="img-responsive" />
							<br />
							<small>${about7}</small>
						</a>
					</li>

        </ul>
			</nav>
		</div>
	</section>

	<section id="section4" class="cd-section">
		<div class="content-wrapper">
			<h2>Connect with me</h2>
			<nav class="menu menu--iris">
				<ul class="menu__list">
					<li class="menu__item">
						<a href="${about4}" class="menu__link" target="_blank">${about3}</a>
					</li>
					<li class="menu__item">
						<a href="${about6}" class="menu__link" target="_blank">${about5}</a>
					</li>

					</li>
				</ul>
			</nav>
		</div>
	</section>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="https://cdn.glitch.com/5aadfcef-b3e0-444c-addd-02fda6edc4a1%2Fscript.js?v=1614968812697"></script>

</body>
</html>`

  fs.appendFile('./Storage/'+ user.displayName +'.html', content, function (err) {
  if (err) throw err;
  message.author.send("Your proto is now done! Thanks for using this method to create a unique portofolio website. GO check it in <#817820250815987712>")
  const channel = bot.channels.cache.find(channel => channel.name === "results")
  embed.setColor("BLACK")
    embed.setTitle(`A new proto by ${user.displayName}`)
    embed.setDescription(`Go checkout ${user.displayName}'s proto! Created by Rowan.\n:link: [here](https://germandevs.de/proto?get=${user.displayName})`)
    embed.setThumbnail("https://cdn.glitch.com/5aadfcef-b3e0-444c-addd-02fda6edc4a1%2F992ca438d44dcaa4b18dd44b3c8954f6.jpg?v=1615187756884")
  channel.send(embed)
});
   }
}
  
  
  if (user.roles.cache.some(role => role.id === '818378064039116801')){
    premium()
  } else {
    o()
  }
}