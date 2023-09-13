const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});


client.on('messageCreate', message => {
  switch (message.content) {
    case '!status':
      message.reply('Active!');
      break;
    case '!Efeniko':
      message.reply('Viego Master!');
      break;
    case '!JacksonTahiroğlu':
      message.reply('Mmmh?');
      break;
    case '!Bivalvan':
      message.reply('Experienced top laner!');
      break;
    default:
      message.reply('Server is on!');
      break;
  }
});

const mySecret = process.env['token'];
client.login(mySecret);