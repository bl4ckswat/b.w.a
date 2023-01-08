const { Configuration, OpenAIApi } = require("openai");
const { MessageMedia } = require('whatsapp-web.js');
const { API_KEY_OPEN_AI } = require('../config');
const configuration = new Configuration({
    apiKey: API_KEY_OPEN_AI,
});
const openai = new OpenAIApi(configuration);

const DrawAIHandler = async (text, msg, client) => {

    const cmd = text.split('?');

    if (cmd.length < 2) {
        return msg.reply('Format Salah. ketik *.draw? gambar yang kamu mau *');
    }

    msg.reply('. . . . . . .  🤔');
    const question = cmd[1];

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Translate this into English:" + question,
            temperature: 0.3,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        console.log(response.data.choices[0].text);

    } catch (error) {
        return msg.reply(`Terjadi kesalahan 😵\n\n*${error}*\n\ncoba lagi nanti atau gunakan fitur lain *?help*`);
    }

    try {
        const gam = response.data.choices[0].text;
        const response = await openai.createImage({
            prompt: gam,
            n: 1,
            size: "512x512",
        });
        var imgUrl = response.data.data[0].url;
        const media = await MessageMedia.fromUrl(imgUrl);
        return client.sendMessage(msg.from, media, { caption: "Ini dia ^•ﻌ•^ฅ" });
    } catch (error) {
        return msg.reply(`Terjadi kesalahan 😵\n\n*${error}*\n\ncoba lagi nanti atau gunakan fitur lain *?help*`);
    }
}

module.exports = {
    DrawAIHandler
};    
