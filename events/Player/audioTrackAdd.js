const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {
    if (!client.config.app.ExtraMessages) return

    const audioTrackAdd = new EmbedBuilder()
    .setAuthor({name: ` ${track.title} DANS LA Q 🔥 `, iconURL: track.thumbnail})
    .setColor('#2f8136')

queue.metadata.send({ embeds: [audioTrackAdd] })

}
