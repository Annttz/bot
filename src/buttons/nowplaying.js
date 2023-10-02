const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Y'a pas pélo ouvre tes yeux zeubi 👀`, ephemeral: true });

    const track = queue.currentTrack;

    const methods = ['disabled', 'track', 'queue'];

    const timestamp = track.duration;
    
    const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

    const progress = queue.node.createProgressBar();
    

    const embed = new EmbedBuilder()
    .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
    .setThumbnail(track.thumbnail)
    .setDescription(`Volume **${queue.node.volume}**%\nDuration **${trackDuration}**\nProgress ${progress}\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}`)
    .setFooter({ text: 'Merci à Val et Antz mais surtout Val', iconURL: inter.member.avatarURL({ dynamic: true })})
    .setColor('pink')
    .setTimestamp()

    inter.editReply({ embeds: [embed], ephemeral: true });
}
