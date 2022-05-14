/*let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/neko', {}, 'apikey'), 'Nih', wm, 'NEXT', '.nsfwneko', m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i

module.exports = handler
*/

     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jeni?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '💫 *Como las estrellas sobre las nubes*', 'Gata Dios', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jeni|jenni|jennie|Jeni|Jenni)$/i
module.exports = handler
