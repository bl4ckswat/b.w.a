const { Client, MessageMedia } = require('whatsapp-web.js');

const SmgHandler = async (text, msg, client) => {

    msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ Prakiraan cuaca Semarang 🤔⛅');

    const chat = await msg.getChat();
    const media = await MessageMedia.fromUrl('http://cuacajateng.com/prakiraan/image/img_terkini/semarang.png');
    chat.sendMessage(media, { caption: '*Terkini* ✨' });

    const media2 = await MessageMedia.fromUrl('http://cuacajateng.com/prakiraan/image/img_besok/semarang.png');
    chat.sendMessage(media2, { caption: 'Besok' })
    console.log(media.filename, media2.filename, 'Success!');
};

module.exports = {
    SmgHandler
}