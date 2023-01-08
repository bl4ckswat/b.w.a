const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const https = require('https');

const BmkgHandler = async (text, msg, client) => {

    const chat = await msg.getChat();

    const fileName = 'H08_EH_Indonesia.png';
    const filePath = `./file/${fileName}`;

    const downloadImage = (url) => {
        https.get(url, (response) => {
            response.pipe(fs.createWriteStream(filePath, { flags: 'w' }));
        });
    };

    downloadImage('https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Indonesia.png');
    console.log('Downloading!');

    const fileName2 = 'Indonesia_ReflectivityQCComposite.png';
    const filePath2 = `./file/${fileName2}`;

    const downloadImage2 = (url) => {
        https.get(url, (response) => {
            response.pipe(fs.createWriteStream(filePath2, { flags: 'w' }));
        });
    };

    downloadImage2('https://inderaja.bmkg.go.id/Radar/Indonesia_ReflectivityQCComposite.png');
    console.log('Downloading!');

    const fileName3 = 'JOGJ_SingleLayerCRefQC.png';
    const filePath3 = `./file/${fileName3}`;

    const downloadImage3 = (url) => {
        https.get(url, (response) => {
            response.pipe(fs.createWriteStream(filePath3, { flags: 'w' }));
        });
    };

    downloadImage3('https://inderaja.bmkg.go.id/Radar/JOGJ_SingleLayerCRefQC.png');
    console.log('Downloading!');

    msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ menampilkan citra 📡🛰\n\n👨‍💻 mohon tunggu 10 detik');
    try {
        setTimeout(() => {
            const media = MessageMedia.fromFilePath(filePath);
            const media2 = MessageMedia.fromFilePath(filePath2);
            const media3 = MessageMedia.fromFilePath(filePath3);
            chat.sendMessage(media);
            chat.sendMessage(media2);
            chat.sendMessage(media3, { caption: 'Jawa Tengah' });
            console.log(media.filename, media2.filename, media3.filename, 'Success!');
        }, 10000);

    } catch (error) {
        return msg.reply(`Terjadi kesalahan 😵\n\n*${error}*\n\ncoba lagi nanti atau gunakan fitur lain *?help*`);
    }
};

module.exports = {
    BmkgHandler
}
