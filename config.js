module.exports = {
    app: {
        token: "MTE1ODMyMzc2NzU2NzcyODczMA.Gdh9Wc.Fm-5CEvJjHXK7Me5cdRU3MGAKssvDl9zYWDhi0",
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
