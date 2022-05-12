/*let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elf', {}, 'apikey'), 'Nih', wm, 'NEXT', '.elf', m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

module.exports = handler


let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/elf?apikey=6fbee8ec83e7b2677026ffae')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gweh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

module.exports = handler
*/
let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/elf?apikey=6fbee8ec83e7b2677026ffae`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '☘ *Si la vida continua tal como quieres que sea, debe ser un sueño*', 'Gata Dios', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i
