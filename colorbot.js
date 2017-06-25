
/* Discord Color Bot */

const Discord = require("discord.js");
const channel = "273497322250305546";
const baseUrl = "https://discordapp.com/api";

/* get the Discord Secret Bot Token as your environmental variable */
const client  = new Discord.Client();
const token   = "MzI4MjMxNjQ4NDcyNTk2NDgy.DDA5Sw.zIyHiMuwzJO59EYwDt6wi7M7ISk";


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
//  console.log(client.channels);
  send_color();
});

function send_color() {
	options = new Discord.RichEmbed();
	options.color = 8074292;
	options.title = '*HELLO*';
	options.url = 'https://discordapp.com';
	console.log(options)
	client.channels.get(channel).send("hello", {'embed': options});
}


// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in
client.login(token);
