const moment= require('moment') 
const { prefix, token, roles, MongoDB, serverId, colors } = require('../../config.json');

module.exports = {
    name: 'user',
    description: "gives info about user.",
    category: "Resources",
    guildOnly: false,

    execute({ message, Discord, args }) {
        
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        
        const member = message.guild.member(user);
        
        const embed = new Discord.MessageEmbed()
            .setColor(colors.heptagram)
            .setThumbnail(message.author.avatarURL)
            .addField(`${user.tag}`, `${user}`, true)
            .addField("ID:", `${user.id}`, true)
            .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
            .addField("Status:", `${user.presence.status}`, true)
            .addField("In Server", message.guild.name, true)
            .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
            .addField("Bot:", `${user.bot}`, true)
            .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
            .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
            .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
      
            message.channel.send({embed});
    }
}