let handler = async (m, { conn }) => {
	const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
m.reply('_Sedang diproses..._')
let hyzer = 'https://api.zacros.my.id/randomimg/cosplay'
    conn.sendButtonImg(m.chat, hyzer, 
namabot, ownername, 'NEXT', '.cosplay', fkontak)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler