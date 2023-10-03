const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');
module.exports = {
    name: 'back',
    description: "ON RELANCE BLC",
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.node.isPlaying()) return inter.editReply({ content: `YA R ${inter.member}`, ephemeral: true });

        if (!queue.history.previousTrack) return inter.editReply({ content: `T'ES CON? Y'AVAIT PAS DE SON ${inter.member}WESH😪`, ephemeral: true });

        await queue.history.back();

        const BackEmbed = new EmbedBuilder()
        .setAuthor({name: `CEST REPARRRRTI`})
        .setColor('#FA9EF3')

        inter.editReply({ embeds: [BackEmbed] });
    },
};