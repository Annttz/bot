const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'skip',
    description: 'DEGAGE MOI CA DE LA',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

         if (!queue || !queue.isPlaying()) return inter.editReply({ content:`T'es con wesh?? ya pas de son ${inter.member}`, ephemeral: true });

        const success = queue.node.skip();

        const SkipEmbed = new EmbedBuilder()
        .setColor('#F47C61')
        .setAuthor({name: success ? `CA A BIEN DEGAGER ${queue.currentTrack.title} 🤡` : `PROBLEMO DEMANDE A @val ou @myw ${inter.member}` })


       return inter.editReply({ embeds: [SkipEmbed] });

    },
};