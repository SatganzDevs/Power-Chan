let handler = async (m, { conn }) => {
let thai = 'https://api.zacros.my.id/asupan/thailand'
    conn.sendButtonImg(m.chat, thai, 'Nih', wm2, 'NEXT', '.thailand', m)
}
handler.help = ['thailand']
handler.tags = ['asupan']
handler.command = /^(thailand)$/i
handler.limit = true

module.exports = handler
