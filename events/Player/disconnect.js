const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Disconnected ya plus rien uwu 💦`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
