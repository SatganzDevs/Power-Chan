let handler = async (m, { conn }) => {
let ontol = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, ontol, 'Nih', wm2, 'NEXT', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i
handler.limit = true

module.exports = handler
