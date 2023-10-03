module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `Something went wrong ${inter.member}demande à @Val et casse pas les couilles`, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`<< **previous**`, ephemeral: true});
}
