let handler = async (m, { conn }) => {
m.reply(conn.sendBut(m.chat, `
╭━━〔 *ANIME LINK* 〕━━━━⬣
┃𓃠 *Version*
┃➥ ${vs}   
━━━━━━━━━━━━━━━━━━⬣
┃ ❖ https://kusonime.com
┃ ❖ https://anoboy.media
┃ ❖ https://oploverzz.net
┃ ❖ https://Otakudesu.moe
┃ ❖ https://neonime.site
┃ ❖ https://gomunime.online
┃ ❖ https://samehadaku.vip
┃ ❖ https://drivenime.com
┃ ❖ https://Anitoki.xyz
┃ ❖ https://Anime-indo.cc
┃ ❖ https://otakudere.net
┃ ❖ https://huntersekaisub.blogspot.com
┃ ❖ https://o.anibatch.me
┃ ❖ https://animeku.me
┃ ❖ https://anikyojin.net
┃ ❖ https://samehadaku.vip
┃ ❖ https://riie.jp
┃ ❖ https://asta.zonawibu.cc
┃ ❖ https://anitoki.web.id
┃ ❖ https://anime-indo.co
┃ ❖ https://meownime.moe
┃ ❖ https://meownime.ltd
┃ ❖ https://miownime.com
┃ ❖ https://nimegami.com
┃ ❖ https://anisubindo.video
┃ ❖ https://wibudesu.com
┃ ❖ https://shirainime.com
┃ ❖ https://animeku.com
┃ ❖ https://naruchiha.id
┃ ❖ https://gantzid.com
┃ ❖ https://animekompi.web.id
┃ ❖ https://www.pandanime.online
┃ ❖ https://Koenime.com
┃ ❖ https://moenime.web.id
┃ ❖ https://nontonanimeid.com
┃ ❖ https://pendekarsubs.us
┃ ❖ https://melodysubs.net
┃ ❖ https://pucuktranslation.pw
┃ ❖ https://kazefuri.net
┃ ❖ https://haruzorasubs.net
┃ ❖ https://nekopoi.care
╰━━━━━━━━━━━━━━━━━━⬣
`, gt , `☘ Menu`, '.menu',  m)) // Tambah sendiri kalo mau
}  
handler.help = ['animelink']
handler.tags = ['anime']
handler.command = /^animelink|enlaceanime|linkanime|enlacesanimes|animesenlaces$/i
handler.register = true
handler.exp = 7

module.exports = handler
