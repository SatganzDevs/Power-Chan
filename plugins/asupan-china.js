let handler = async (m, { conn }) => {
let babi = 'https://api.zacros.my.id/asupan/china'
    conn.sendButtonImg(m.chat, babi, 'Nih', wm2, 'NEXT', '.china', m)
}
handler.help = ['china']
handler.tags = ['asupan']
handler.command = /^(china)$/i
handler.limit = true

module.exports = handler
