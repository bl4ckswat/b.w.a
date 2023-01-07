const { Client, MessageMedia } = require('whatsapp-web.js');

const SatHandler = async (text, msg, client) => {

    msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ menampilkan citra satelit 🛰');

    const chat = await msg.getChat();
    const media = await MessageMedia.fromUrl('http://weather.is.kochi-u.ac.jp/HS/00Latest.jpg');
    chat.sendMessage(media);

    const mediasat = await MessageMedia.fromUrl('https://www.goes.noaa.gov/dimg/jma/fd/rb/10.gif');
    client.sendMessage(msg.from, mediasat);

    const media2 = await MessageMedia.fromUrl('http://weather.is.kochi-u.ac.jp/QL/00LatestX.jpg');
    chat.sendMessage(media2, { caption: 'Citra Satelit Terbaru' })
    console.log(media.filename, mediasat.filename, media2.filename, 'Success!');
};

module.exports = {
    SatHandler
}