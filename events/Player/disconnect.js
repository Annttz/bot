const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `CA MA KICKK ZEUBI`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
