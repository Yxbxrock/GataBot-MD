/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
bear = "Source Code"
ye = `Wa.me/${m.sender.split`@`[0]}`
let esce = `╭━━━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━━━⬣
┃💗 *Hi!* ${ye} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 *Version*
┃➥ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ *Active During* 
┃➥ ${uptime}
┃ღ *Mode:* 
┃➥ ${global.opts['self'] ? 'Self' : 'publik'}
┃ღ *Users* 
┃➥ ${Object.keys(global.db.data.users).length} 
┃ღ *Forbidden Chats*
┃➥ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃ღ *Prohibited Urs*
┃➥ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━━━⬣`/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() },            
           hydratedFooterText: gt,
           hydratedButtons: [{*/
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menus/Menu1.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: esce,
           hydratedFooterText: gt,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Github',
               url: "https://github.com/GataNina-Li/GataBot-MD"
              }   
            },
              {
              urlButton: {
               displayText: 'instagram',
               url: instagram	           
             }
           },
			     {
             quickReplyButton: {
               displayText: 'Speed',
               id: '.ping',
             }
	   },
             {
             quickReplyButton: {
               displayText: 'All menu',
               id: '.allmenu',
             }
	   },
             {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
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

handler.help = ['estado | status']
handler.tags = ['info']
handler.command = /^estado|status|estate|state|stado|stats|botstat(us)?$/i
handler.exp = 4 

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
	
    }
