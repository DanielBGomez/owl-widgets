// Modules
const tmi = require('tmi.js');

// Configuration options
const client = new tmi.Client({
  channels: [
    'danielbgomez'
  ]
});

// Connect
client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore messages from the bot
  if (self) { return; }

  console.log(tags);

  // Parse msg
  const CommandData = /^!([a-z0-9_-]+)(?:\s*)(.*)/.exec(message);
  if(!CommandData) { return; }

  const [ fullCommand, command, params ] = CommandData;

  switch(command){
    case 'flammeo':
      console.log('Rito se la come');
    case 'say':
      console.log(`Alguien dijo: "${params}"`);
    default:
        // Ignore
        return;
  }
});