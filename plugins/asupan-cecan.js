let handler = async (m, { conn }) => {
let aaa = 'https://api.zacros.my.id/asupan/cecan'
    conn.sendButtonImg(m.chat, aaa, 'Nih', wm2, 'NEXT', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler
