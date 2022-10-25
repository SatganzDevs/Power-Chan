let fs = require('fs')
let handler = async (m, { conn } ) => {    
m.reply('Wait suhu')
let anu =`
🇮🇹LACOSA NOSTRA🇮🇹
🍏MATA IPHONE🍏
📡f¥m dO $¥$... 57384 Caracteres

𝐕𝐢𝐫𝐮𝐬 𝐓𝐞𝐥𝐚𝐡 𝐃𝐢 𝐋𝐮𝐦𝐩𝐮𝐡 𝐊𝐚𝐧〽️
🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟
`
m.reply(anu)
}
handler.help = ['virtex9']
handler.tags = ['war']
handler.command = /^(virtex9)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
