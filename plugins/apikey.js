let handler = async m => m.reply(`
┌─〔 *APIKEY FREE* 〕
├➥ *Bany :* adadeh
├➥ *leyscoders:* MIMINGANZ
├➥ *xteam:* MIMINETBOT
├➥ *Videfikri:* no apikey
├➥ *Caliph:* FreeApi
├➥ *Zeks:* apivinz
├➥ *OnlyDevCity:* PunyaIkyAds
├➥ *Tobs-api:* BotWeA
├➥ *shizukaa:* itsmeiky633
├➥ *vhtear:* LoliHunter
├➥ *ZeksApi* = PmzFe9Hq4xYdwha6pxiXd9jgLnh
├➥ *LeysKey* = MNQYOVSL
├➥ *apixteam* = 7415bc4287ad5ca8
├➥ *apiKey* = 7ed90d537ab5edddb6ba6465
├➥ *LolKey* = Danwfrostkey
├➥ *odckey* = onlygay
├➥ *onlydev* = PunyaIkyAds
├➥ *xteam* = AbilGanss
├➥ *BarBarKey* = IDxO1TFYnKADlX4pxcHa
├➥ *AbilGanssVhtearKey* = 1BlnApiIkyPake
├➥ *xteamkey* = AbilGanss
├➥ *TobzKey* = Bidmzz1sJ2L1TKyqaMEU
├➥ *ApiDevolover* = HokageBR
├➥ *TechApi* = 5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ
├➥ *Zeksapi* = apivinz
├➥ *shizukaapi* = itsmeiky633
├➥ *apivhtear* = 1BlnApiIkyPake
┃ 「 *Pesan Dari My Owner* 」
┃ > *Trimakasih Telah Membantu*
┃ *Jalanya Bot Ini :)*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./src/welcome.jpg')}, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
               }
               
             },
             {
             quickReplyButton: {
               displayText: 'Tanpa Watermark',
               id: `.tiktoknowm ${text}`,
             }
           },
           {
             quickReplyButton: {
               displayText: 'dengan watermark',
               id: `.tiktokwm ${text}`,
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

//await conn.sendBut(m.chat, wm, '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', `.menu`, m)
  
handler.help = ['apikey']
handler.tags = ['info']
handler.command = /^apikey$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 5

module.exports = handler
