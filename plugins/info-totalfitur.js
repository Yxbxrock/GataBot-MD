let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
m.reply(conn.sendBut(m.chat, `╭━━━〔𝙏𝙊𝙏𝘼𝙇 | 𝙏𝙊𝙏𝘼𝙇𝙁𝙀𝘼𝙏𝙐𝙍𝙀〕━━━⬣ 
┃𓃠 *Version*
┃➺ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *total fitur*
┃➺ ${totalf}
┃ *Total features currently*
┃➺ ${totalf}
╰━━━━━━━━━━━━━━━━━━━━━⬣`, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}

handler.help = ['totalctr | totalfeature']
handler.tags = ['info']
handler.command = /^(totalfitur|totalfeature|featuretotal|ctrtotal|totalcaracteristicas|caracteristicastotal|totalctrtc|totalcttc|totalctrt|totalctrs|totalctr)$/i
handler.exp = 5
module.exports = handler
