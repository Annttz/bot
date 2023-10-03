const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `Y'a plus de son la miff uwu`})
    .setColor('#2f3136')

    queue.metadata.send({ embeds: [emptyQueue] })
}
