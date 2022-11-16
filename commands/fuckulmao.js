const { timeout } = require('timers/promises');
const { Client, GatewayIntentBits, Events } = require('discord.js')
const { melding } = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// on ready, send a message to the user
client.once(Events.ClientReady, c => {
	console.log(`Innlogget som: ${c.user.tag}`);
	c.users.fetch('257107960331763716').then(user => {
		user.send(melding);
	});
	}
,);