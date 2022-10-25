let handler = async (m, { conn }) => {
let ontol = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, ontol, 'Nih', wm2, 'NEXT', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i
handler.limit = true

module.exports = handler

