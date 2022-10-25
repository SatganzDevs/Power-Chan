let handler = async (m, { conn }) => {
let ontol = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, ontol, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i
handler.limit = true

module.exports = handler
