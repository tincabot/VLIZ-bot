let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
let chtxt = `\`REGISTRO ANULADO\`\n\n👤 Usuario: ${m.pushName || 'Anónimo'}\n☁️ Pais: ${global.userNationality}`
await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '😔 ¡Un usuario menos en mi base de datos!',
thumbnailUrl: fotoperfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

return conn.reply(m.chat, `*『✅』 Usted Ya No Está En Mi Base De Datos*`, m, rcanal)

}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
