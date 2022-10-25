let handler = async (m, { conn }) => {
	//tolong jngan diganti atau dihapus u cuma make
    let txt = `
Bot ini menggunakan script github Family-Md

Recode & Tambah Fitur By ArieTube ini linknya silahkan comot https://youtu.be/XYIdel2-bR8
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


