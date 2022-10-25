const fetch = require('node-fetch')
const axios = require('axios')
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
m.reply('Mohon Ditunggu yah Bro')
    const url = `https://zenzapis.xyz/downloader/musically?apikey=mmc&url=${args[0]}`
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url.result.nowm, 'tiktok.mp4', 
`              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
_© 𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄_
`.trim(), m)
} catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
    const url = await fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=mmc&url=${args[0]}`)
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.sendButtonVid(m.chat, url.result.nowm, txt, wm, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

module.exports = handler
