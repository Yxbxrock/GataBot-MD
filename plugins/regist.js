const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱❕⊱╮\n\nYa estás registrado(a).\n*_¿Quieres volver a registrarte?_*\n${usedPrefix}unreg *SN|NÚMERO DE SERIE*\n\nYou are already registered.\n*_Do you want to re-register?_*\n${usedPrefix}unreg *SN|SERIAL NUMBER*`
  if (!Reg.test(text)) throw `╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\nFormato incorrecto\n*Ejemplo:*\n*${usedPrefix}registrar nombre.edad*\n\nIncorrect format\n*Example:*\n*${usedPrefix}daftar name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*The name cannot be empty.*'
  if (!age) throw 'Age cannot be empty.'
  age = parseInt(age)
  if (age > 120) throw '😹*\n*Very old* 😹'
  if (age < 10) throw ' 🙀*\n*It is very young* 🙀'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(conn.sendBut(m.chat, `╰⊱💚⊱ *REGISTERED* ⊱💚⊱╮

╭━━━[ *USER* ]━━━━⬣
│ *Name:* ${name}
│ *Age:* ${age}  
╰━━━━━━━━━━━━━━━━━━⬣
*Serial number*
${sn}`, gt , `☘ Menu`, '.menu',  m))
}
handler.help = ['registrar | register | reg'].map(v => v + ' *nombre.edad*')
handler.tags = ['xp']
handler.exp = 7

handler.command = /^(registrar|registar|daftar|reg(ister)?)$/i

module.exports = handler
