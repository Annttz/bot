const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {

    const playerSkip = new EmbedBuilder()
    .setAuthor({name: `Skipping **${track.title}** aie ya eu un soucis les gars`, iconURL: track.thumbnail})
    .setColor('#EE4B2B')

queue.metadata.send({ embeds: [playerSkip] })


}
