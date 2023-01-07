const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const TrnsAIHandler = async (text, msg, client) => {

    const cmd = text.split('?');

    if (cmd.length < 2) {
        return msg.reply('Format Salah. ketik *.trns? apa yang mau di translate (Indonesia = English) *');
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
        console.log(response.data);
        return client.sendMessage(msg.from,"  ∧,,,∧\n(   ̳• · • ̳) 💬\n/    づ " +response.data.choices[0].text);
    } catch (error) {
        return msg.reply(`Terjadi kesalahan: ${error}`);
    }

}

module.exports = {
    TrnsAIHandler
};    