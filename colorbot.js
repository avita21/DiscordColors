
/* Discord Color Bot */

const Discord = require("discord.js");
console.log(process.env.DISCORD_KEY);
/* get the Discord Secret Bot Token as your environmental variable */
const client  = new Discord.Client();
const token   = "MzI4MjMxNjQ4NDcyNTk2NDgy.DDA5Sw.zIyHiMuwzJO59EYwDt6wi7M7ISk";
// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

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

client.login(token);