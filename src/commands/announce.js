const Discord = require('discord.js');
const { config, colors } = require('../config/config.json');
const pjson = require('../../package.json');

exports.run = async (client, message, args, level) => {
    const anchannel = message.mentions.channels.first();

    const announcementMessage = args.slice(1).join(' ');
    if (!announcementMessage) {
      return message.reply('You must provide a message to announce!');
    }

    const embed = new Discord.MessageEmbed()
      .setTitle('📣 **Announcement!** 📣')
      .setColor(client.config.colors.heptagram)
      .setDescription(announcementMessage)
      .setTimestamp()
.setFooter({
      text: `Message sent by Heptagram || ${pjson.version}`,
      iconURL: `${client.config.cdn.sqlogo}`,
    });

    anchannel.send({ embeds: [embed] });

    const anembed = new Discord.MessageEmbed()
      .setTitle('<a:verifyblue:951863100292857859> Done! <a:verifyblue:951863100292857859>')
      .setDescription(`Announcement has been sent to ${anchannel}`)
      .setColor(client.config.colors.heptagram)
      .setTimestamp()
.setFooter({
      text: `Message sent by Heptagram || ${pjson.version}`,
      iconURL: `${client.config.cdn.sqlogo}`,
    });

    message.reply({ embeds: [anembed] });
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "announce",
  category: "Moderation",
  description: "Make an Announcemnet in your Server",
  usage: "announce <channel> <msg>"
};

