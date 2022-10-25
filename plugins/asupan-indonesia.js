let handler = async (m, { conn }) => {
let lilio = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, lilio, 'Nih', wm2, 'NEXT', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i
handler.limit = true

module.exports = handler
