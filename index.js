const express = require("express");
const app = express();

app.listen(3000,() => {
  console.log("Project is running!");
});

app.get("/",(req,res) => {
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

client.once("ready",async message => {
  console.log("Bot is online!");
});

client.on('messageCreate', message => {
if (message.content === '!ping') {
message.reply('Pong!');
}
});

client.on('messageCreate', message => {
if (message.content === '!Bivalvan') {
message.reply('Usta üst koridor!');
}
});

client.on('messageCreate', message => {
if (message.content === '!status') {
message.reply('açıgım baba!');
}
});

client.on('messageCreate', message => {
if (message.content === '!Efeniko') {
message.reply('Viego Master!');
}
});

client.on('messageCreate', message => {
if (message.content === '!JacksonTahiroğlu') {
message.reply('Mal gibi bişi aq!');
}
});

const mySecret = process.env['token'];
client.login(mySecret);