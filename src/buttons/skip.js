module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `YA PAS DE SON WESH 🤣`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `Bien kick ${queue.currentTrack.title}` : `Something went wrong ${inter.member}demande à @Val et casse pas les couilles`, ephemeral: true});
}