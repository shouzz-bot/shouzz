const { Client } = require("buzzes.djs") //requires the lib
require("dotenv").config()
const client = new Client();
const prefix = "!"
client.on("ready", () => {
    client.init({CommandDir: "commands"}) //CommandDir must be a string
})
client.on('message', (msg) => {
    if(!msg.guild || msg.author.bot || !msg.content.startsWith(prefix)) return
    const args = msg.content.slice(prefix.length).trim().split(" ")
    client.ExecuteCommand(msg, args) //execute string, this is handled
})
client.login(process.env.TOKEN)