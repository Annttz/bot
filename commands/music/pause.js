const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue) return inter.editReply({ content: `Ya rien à mettre en pause mon pote ${inter.member}🤣😴`, ephemeral: true });
        
        if(queue.node.isPaused()) return inter.editReply({content: `Déjà en pause mon pote ${inter.member}🤣😴`, ephemeral: true})

        const success = queue.node.setPaused(true);
        
        const PauseEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `Current music ${queue.currentTrack.title} paused ✅` : `AIE AIE AIE ${inter.member} demande à @val ou @myw` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [PauseEmbed] });
    },
};
// embed update stoped here