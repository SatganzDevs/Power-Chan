let handler = async (m, { conn }) => {
let ontol = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, ontol, 'Nih', wm2, 'NEXT', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i
handler.limit = true

module.exports = handler

