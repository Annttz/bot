const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `Ca laisse la baiseuse toute seule 😥`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
