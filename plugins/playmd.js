/*process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const { servers, yta, ytv } = require('../lib/y2mate')
let fs = require('fs')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
let chat = global.db.data.chats[m.chat]
let results = await yts(text)
let vid = results.all.find(video => video.seconds < 3600)
if (!vid) throw 'Konten Tidak ditemukan'
let isVideo = /2$/.test(command)
let yt = false
let yt2 = false
let usedServer = servers[0]
for (let i in servers) {
let server = servers[i]
yt = await yta(vid.url, server)
yt2 = await ytv(vid.url, server)
usedServer = server
}
let { dl_link, thumb, title, filesize, filesizeF } = yt
let anu =  `
*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
*link sumber:* 
${vid.url}
`
let message = await prepareWAMessageMedia({ image: thumb }, { upload: conn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: anu,
imageMessage: message.imageMessage,
hydratedContentText: `jika video tidak sesuai
silahkan ketik .yta link YouTube untuk mengunduh audio
dan ketik .ytv link YouTube Untuk Mengunduh Video`.trim(),
hydratedFooterText: wm,
hydratedButtons: [{
urlButton: {
displayText: '📍instagram',
url: instagram
}},
{
quickReplyButton: {
displayText: 'video 360p',
id: `.ytmp4 ${vid.url}`,
}},
{
quickReplyButton: {
displayText: 'video 720p',
id: `.ytv720 ${vid.url}`,
}},
{
quickReplyButton: {
displayText: 'Audio',
id: `.ytmp3 ${vid.url}`,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(playmd)$/i
handler.exp = 0
module.exports = handler*/
