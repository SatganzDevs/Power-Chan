let handler = async (m, { conn }) => {
let babi = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, babi, 'Nih', wm2, 'NEXT', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i
handler.limit = true

module.exports = handler
