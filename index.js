const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia, Buttons } = require('whatsapp-web.js');
const { EditPhotoHandler } = require('./feature/edit_foto');
const { ChatAIHandler } = require('./feature/chat_ai');
const { DrawAIHandler } = require('./feature/draw_ai');
const { TrnsAIHandler } = require('./feature/trns_ai');
const { SatHandler } = require('./feature/sat');
const { SmgHandler } = require('./feature/smg');
const { BmkgHandler } = require('./feature/dbmkg');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async msg => {

    const text = msg.body.toLowerCase() || '';
    const chat = await msg.getChat();
    //check status
    if (text === '?tes') {
        client.sendMessage(msg.from, '  ∧,,,∧\n(   ̳• · • ̳)\n/    づ 1 2 3 ✔️');
        console.log(chat);
    }

    if (text === '?help') {
        msg.reply(
            '  ∧,,,∧\n(   ̳• · • ̳) ᴹᵉⁿᵘ\n/    づ \n\n╭――――――― ⌜ tanya apapun ⌟\n│ ketik = *.ask? pertanyaan*\n│\n│ contoh = .ask? Berapa luas bumi\n╰―――――――――◉\n\n╭――――――― ⌜ translate 🇮🇩 ➟ 🇺🇸 ⌟\n│ ketik = *.trns? teks*\n│\n│ contoh = .trns? kucing hitam\n╰―――――――――◉\n\n╭――――――― ⌜ edit background gambar ⌟\n│ ketik pada caption = *#editbg/color*\n│\n│ contoh = 🖼️ #editbg/putih\n╰―――――――――◉\n\n╭――――――― ⌜ buat gambar dengan teks ⌟\n│ ketik = *.draw? teks*\n│\n│ contoh = .draw? kucing hitam gemuk\n╰―――――――――◉\n\n╭――――――― ⌜ menampilkan citra satelit ⌟\n│ ketik = *?sat*\n╰―――――――――◉\n\n╭――――――― ⌜ data satelit & radar BMKG ⌟\n│ ketik = *?bmkg*\n╰―――――――――◉\n\n╭――――――― ⌜ cuaca semarang ⌟\n│ ketik = *?smg*\n╰―――――――――◉\n\n╭――――――― ⌜ data covid-19 🌎 ⌟\n│ ketik = *?c19*\n╰―――――――――◉\n\n╭――――――― ⌜ data covid-19 🇮🇩 ⌟\n│ ketik = *?c19id*\n╰―――――――――◉\n\n╭――――――― ⌜ info gempa terkini ⌟\n│ ketik = *?gempa*\n╰―――――――――◉\n\n\n ^•ﻌ•^ฅ'
        );
        console.log(chat);
    }

    //hi
    if (text === 'hi') {
        client.sendMessage(msg.from, '  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Hi..```');
        console.log(chat);
    }

    if (text === 'hai') {
        client.sendMessage(msg.from, '  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Hai..```');
        console.log(chat);
    }

    if (text === 'halo') {
        client.sendMessage(msg.from, '  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Halo..```');
        console.log(chat);
    }

    if (text === 'kamu siapa') {
        const media = MessageMedia.fromFilePath('./file/bl4ckcat.jpg');
        msg.reply(media);
        client.sendMessage(msg.from, '   ╱|、\n(`   -  7\n |、⁻〵\nじしˍ,)ノ\n\n```bl4ckcat```\nAku adalah Bot 🤖 pintar dengan *A.I.*\nᴬʳᵗᶦᶠᶦᶜᶦᵃˡ ᴵⁿᵗᵉˡˡᶦᵍᵉⁿᶜᵉ / ᵏᵉᶜᵉʳᵈᵃˢᵃⁿ ᵇᵘᵃᵗᵃⁿ\n\nhttps://bl4ckswat.web.app/\n\nketik : ?help ᵘⁿᵗᵘᵏ ᵇᵃⁿᵗᵘᵃⁿ');
        console.log(chat);
    }

    if (text === '?c19id') {
        const curl = require('curl');
        curl.get('https://api.thingspeak.com/apps/thinghttp/send_request?api_key=BVNCR775364Z6GEE', (err, response) => {
            if (err) {
                console.error(err);
                msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Sorry system error..```');
            } else {
                console.log(response.body);
                msg.reply("Covid-19 🇮🇩 : " + response.body + " 😷");
            }
        });
        console.log(chat);
    }

    if (text === '?c19') {
        const curl = require('curl');
        curl.get('https://api.thingspeak.com/apps/thinghttp/send_request?api_key=EVT965ONUTM5K906', (err, response) => {
            if (err) {
                console.error(err);
                msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Sorry system error..```');
            } else {
                console.log(response.body);
                msg.reply("Covid-19 🌎 : " + response.body + " 😷");
            }
        });
        console.log(chat);
    }

    if (text === '?gempa') {
        const curl = require('curl');
        curl.get('https://api.thingspeak.com/apps/thinghttp/send_request?api_key=UIV3ANT6YF10AJ80', (err, response) => {
            if (err) {
                console.error(err);
                msg.reply('  ∧,,,∧\n(   ̳• · • ̳)\n/    づ ```Sorry system error..```');
            } else {
                console.log(response.body);
                msg.reply("₍^._.^₎ 𐒡\n\n" + response.body);
            }
        });
        const chat = await msg.getChat();
        const media = await MessageMedia.fromUrl('https://static2.emsc.eu/Images/map_zoom/WEBMAPS/24H/TWORLD.24hours.jpg');
        chat.sendMessage(media, { caption: 'Gempa Dunia *24 Jam terakhir*' })
        console.log(chat);
    }

    // edit_bg/bg_color
    if (text.includes("#editbg/")) {
        await EditPhotoHandler(text, msg);
        console.log(chat);
    }
    // #ask/question?
    if (text.includes(".ask?")) {
        await ChatAIHandler(text, msg, client);
        console.log(chat);
    }
    // #draw/question?
    if (text.includes(".draw?")) {
        await DrawAIHandler(text, msg, client);
        console.log(chat);
    }
    // #trns/question?
    if (text.includes(".trns?")) {
        await TrnsAIHandler(text, msg, client);
        console.log(chat);
    }
    // sat?
    if (text.includes("?sat")) {
        await SatHandler(text, msg, client);
        console.log(chat);
    }
    // smg?
    if (text.includes("?smg")) {
        await SmgHandler(text, msg, client);
        console.log(chat);
    }
    // bmkg?
    if (text.includes("?bmkg")) {
        await BmkgHandler(text, msg, client);
        console.log(chat);
    }
});

client.initialize();
