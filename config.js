require("dotenv").config();
module.exports = {
  app: {
    token:
      "MTE1ODMyMzc2NzU2NzcyODczMA.GLsIGn.q7GcwVaBsxv-ur0kS7BKExM18OmrQzhe-LhqQ4",
    playing: "envoie la sauce",
    global: true,
    guild: "",
    ExtraMessages: false,
    loopMessage: false,
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "",
      commands: [],
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
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
