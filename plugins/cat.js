/*import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
_aaaaaa_
`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['cat']
handler.tags = ['anime']
handler.command = /^cat$/i
handler.fail = null
export default handler
*/

//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://cataas.com/cat')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
Pikacu
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['cat']
handler.tags = ['anime']
handler.command = /^cat$/i
handler.fail = null
export default handler
