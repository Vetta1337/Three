const { token, melding } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[ADVARSEL] Kommandoen ved ${filePath} mangler en data/execute egenskap.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`Ingen kommand med navnet ${interaction.commandName} ble funnet.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Det var en feil med denne kommandoen!', ephemeral: true });
	}
});

client.once(Events.ClientReady, c => {
	console.log(`Innlogget som ${c.user.tag}`);
	c.user.setPresence({
		activities: [{name: `your mom`, type: ActivityType.WATCHING}],
		status: 'dnd'
	});
	c.users.fetch('638876384558841867').then(user => {
		user.send(melding);
	});
	c.users.fetch('827856317858709524').then(user => {
		user.send(melding);
	});
	}
,);

client.login(token);



