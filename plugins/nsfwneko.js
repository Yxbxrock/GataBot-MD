/*let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/neko', {}, 'apikey'), 'Nih', wm, 'NEXT', '.nsfwneko', m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i

module.exports = handler
*/

//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cat']
handler.tags = ['anime']
handler.command = /^cat|gato|gata|Cat|Gato|Gata$/i

handler.fail = null

module.exports = handler
