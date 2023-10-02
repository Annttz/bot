module.exports = {
    app: {
        token: 'MTE1ODMyMzc2NzU2NzcyODczMA.GvjeEQ.3NZeArMuAcZyRgtIAvLk2PRmbNgIHky7wUI5ig',
        playing: 'envoie la sauce',
        global: true,
        guild: '',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
