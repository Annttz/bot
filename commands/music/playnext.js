const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { QueryType, useMainPlayer, useQueue   } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "song you want to playnext",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to playnext',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Ya pas de son maggggle...  ${inter.member}🤣😴`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.editReply({ content: `Ca a pas trouvé mon pote ${inter.member}🤣😴`, ephemeral: true });

       if (res.playlist) return inter.editReply({ content: `FOCCCCK il trouve pas la playlist oooopsi ${inter.member}`, ephemeral: true });

        queue.insertTrack(res.tracks[0], 0)

        const PlayNextEmbed = new EmbedBuilder()
        .setAuthor({name: `Tqt bg ca arrive juste après 😎` })
        .setColor('#2f3136')
        
        await inter.editReply({ embeds: [PlayNextEmbed] });


    }
}
