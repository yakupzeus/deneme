const Discord = require('discord.js');
const slots = [':grapes:', ':tangerine:', ':pear:', ':cherries:', ':lemon:'];

exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];

    if (slot1 === slot2 && slot1 === slot3) {
        message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

<:mutlupanda:810846299544485890>    UuuuuUUu Şanslı Günündesin
        `);
    } else {
        message.channel.send(`
        ${slot1} : ${slot2} : ${slot3}

<:uzgunpanda:810846134716334090>    Kaybettin Lan :(
        `);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slots'],
  permLevel: 0
};

exports.help = {
  name: 'slots',
  description: 'Slots oyunu oynatır',
  usage: 'slots'
};