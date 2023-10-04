module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `pas trouvé le sang`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `Problemo ? ${inter.member}demande à @Val et casse pas les couilles`, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`<< **previous**`, ephemeral: true});
}
