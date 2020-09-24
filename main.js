 const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs')

client.commands = new Discord.Collection();


client.once('ready', () => {
    console.log('Kreek is online!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === "hi kreek") {
        message.channel.send('hi <@' + message.author + '>')
    }
})

client.on('message', message => {
    if (message.content.toLowerCase() === "bye kreek") {
        message.channel.send('bye <@' + message.author + '>')
    }
})




// Login


client.login(process.env.BOT_TOKEN);
