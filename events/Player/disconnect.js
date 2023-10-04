const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Ya plus rien uwu 💦`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
