/*let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elaina', {}, 'apikey'), 'Nih', wm, 'NEXT', 'elaina', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler
*/
let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/elaina?apikey=6fbee8ec83e7b2677026ffae`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Elaina*', 'gt', 'SIGUIENTE 🔄', `${usedPrefix + command}`, m, false)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler
