const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var rules = new discord.RichEmbed()
    .setTitle("Regels:")
    .setDescription("Niet pesten! \n Niet schelden. \n Luister naar staff leden! \n Heb respect voor elkaar! \n Niet spamen. \n geen staff tagen.")
    .setColor("#6463ff");

    message.author.send(rules);

    message.channel.send("De regels staan in je DM.");




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "regels"
}