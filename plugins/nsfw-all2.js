let handler  = async (m, { conn, command, args, usedPrefix, DevMode, isPrems }) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', wm, 'ᴇɴᴀʙʟᴇ', '.on nsfw', m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------
m.reply('_Tunggu Kids. . ._')
m.reply('1 Limit Telah Digunakan')
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=a243d5d9b0d811b81d63e6cf`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm, 'Next', `.${command}`, m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.limit = true
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler