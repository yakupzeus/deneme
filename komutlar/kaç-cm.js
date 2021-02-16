const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen ölçüyorum bekle..').then(message => {
   var espriler = [' **Ulan ne sapık adamsın bir de iman edip namaz kılacaksın ülkemizin haline bak !**  ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:' ,'**Senin Malafatın  2CM ** :eggplant:' ,'**Senin Malafatın  3CM ** :eggplant:' ,'**Senin Malafatın  12CM ** :eggplant:' ,'**Senin Malafatın  15CM ** :eggplant:' ,'**Senin Malafatın  17CM ** :eggplant:' ,'**Senin Malafatın  20CM ** :eggplant:' ,'**Senin Malafatın  25CM ** :eggplant:' ,'**Senin Malafatın  28CM ** :eggplant:' ,'**Senin Malafatın  31CM ** :eggplant:' ,'**Senin Malafatın  36CM ** :eggplant:' ,'**Senin Malafatın  42CM ** :eggplant:' ,'**Senin Malafatın  48CM ** :eggplant:' ,'**Senin Malafatın  53CM ** :eggplant:' ,'**Senin Malafatın  59CM ** :eggplant:' ,'**Senin Malafatın  61CM ** :eggplant:' ,'**Senin Malafatın  99CM ZENCİ BOSS ** :eggplant:' ,'**Senin Malafatın  5CM ** :eggplant:' ,'**Senin Malafatın  6CM ** :eggplant:' ,'**Senin Malafatın  7CM ** :eggplant:' ,'**Senin Malafatın  8CM ** :eggplant:' ,'**Senin Malafatın  8CM ** :eggplant:' ,'**Senin Malafatın  9CM ** :eggplant:' ,'**Senin Malafatın  10CM ** :eggplant:' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın  12CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};