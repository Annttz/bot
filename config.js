require("dotenv").config();
module.exports = {
  app: {
    token: "MTE1ODMyMzc2NzU2NzcyODczMA.GO8wGv.nQ_Xoio6tKmiOjTrdTRY7m5OdUu36QlIVQCuNw",
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
