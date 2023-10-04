const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {
    if (!client.config.app.ExtraMessages) return

    const audioTracksAdd = new EmbedBuilder()
    .setAuthor({name: `Ca bien tout mis le sang🔥`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [audioTracksAdd] })

}
