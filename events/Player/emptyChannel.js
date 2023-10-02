const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `YA SONPERR JDECOLLE TO MIAMI`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
