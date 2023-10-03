const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue} = require('discord-player');

module.exports = {
    name: 'clear',
    description: 'DEGAGE TOUT',
    voiceChannel: true,

    async execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks.toArray()[1]) return inter.editReply({ content: `No music in the queue after the current one ${inter.member}... try again ? ❌`, ephemeral: true });

        await queue.tracks.clear();

        const ClearEmbed = new EmbedBuilder()
        .setAuthor({name: `CA A TOUT VIDE LE S 🗑️`})
        .setColor('#2f3136')
        
        inter.editReply({ embeds: [ClearEmbed] });

    },
};