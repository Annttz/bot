module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `DEGAAAAAGE TA MERDE : ${queue.currentTrack.title} ALLEZ HOP POUBELLE` : `Something went wrong ${inter.member}... try again ? ❌`, ephemeral: true});
}