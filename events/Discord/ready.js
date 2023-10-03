module.exports = async (client) => {
    console.log(`On est la ${client.user.username}\naie aie aie!`);
    client.user.setActivity(client.config.app.playing);   
};