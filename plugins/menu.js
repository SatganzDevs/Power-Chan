let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
const defaultMenu = {
  before: `
┏─────────────────⬣
┆   *Hai*, %name 
┗┬──────────────┈ ⳹
┏┆⬡ *Tersisa* : %limit Limit
┆┆⬡ *Role* : %role
┆┆⬡ *Level* : %level [%exp / %maxexp]
┆┆⬡ *Exp* : %totalexp XP
┗┬──────────────┈ ⳹
┏┤   *Kalender*
┆┗──────────────┈ ⳹
┆⬡ *Hari* : %week %weton
┆⬡ *Tanggal* : %week %weton, %date
┆⬡ *Tanggal Islam* : %dateIslamic
┆⬡ *Waktu* : %time
┗┬──────────────┈ ⳹
┏┤   *Bot info*
┆┗──────────────┈ ⳹
┆⬡ *Uptime* : %uptime
┆⬡ *Run Bot* : Panel/RDP
┆⬡ *Total Fitur* : ${totalf}
┆⬡ *Bailyes Version* : 4.2.0
┆⬡ *Database* : %rtotalreg dari %totalreg
┆⬡ *Memory Used* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┆⬡ *Yt* :
┆⬡ ${global.linkyt}
┗─────────────────⬣
%readmore`.trim(),
  header: '┏━┈┈『 %category 』┈┈⬣',
  body: '┆⬡ %cmd %islimit %isPremium',
  footer: '┗━───────⬣\n',
  after: `
*GansBOTz@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'asupan', 'admin', 'grup', 'premium', 'bebanortu', 'maker', 'anime', 'nsfw', 'internet', 'war', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'asupan': 'Asupan',
    'maker': 'Maker',
    'group': 'Grup',
    'premium': 'Premium',
    'bebanortu': 'Bebanortu',
    'anime': 'ANIME',
    'nsfw': 'NSFW',
    'internet': 'Internet',
    'war': 'WAR MENU',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot(proses)',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game',
    'rpg': 'RPG'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'asupan') tags = {
    'asupan': 'Asupan'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
    if (teks == 'bebanortu') tags = {
    'bebanortu': 'Bebanortu'
  }
  if (teks == 'anime') tags = {
    'anime': 'ANIME MENU'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'NSFW MENU'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'war') tags = {
  'war': '𝙒𝘼𝙍 𝙈𝙀𝙉𝙐',
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot(proses)') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }

 /**************************** TIME *********************/
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${global.ucapan}, ${name}`
      const sections = [
      {
        title: '𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮',
        rows: [
          { title: '𝑨𝑳𝑳 𝑴𝒆𝒏𝒖 📋', rowId: `${_p}? all` },
          { title: '𝑮𝒂𝒎𝒆 𝑴𝒆𝒏𝒖 🎮', rowId: `${_p}? game` },
          { title: '𝑬𝒙𝒑 𝑴𝒆𝒏𝒖 📈҈ ', rowId: `${_p}? xp` },
          { title: '𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝒎𝒆𝒏𝒖 🐲҈', rowId: `${_p}? stiker` },
          { title: '𝑺𝒐𝒖𝒏𝒅 𝑴𝒆𝒏𝒖 🔊', rowId: `${_p}soundmenu` },
          { title: '𝑲𝒆𝒓𝒂𝒏𝒈 𝑴𝒆𝒏𝒖 🐚҈', rowId: `${_p}? kerangajaib` },
          { title: '𝑸𝒖𝒐𝒕𝒆𝒔 𝑴𝒆𝒏𝒖 🗣️', rowId: `${_p}? quotes` },
          { title: '𝑨𝒔𝒖𝒑𝒂𝒏 𝑴𝒆𝒏𝒖 🔞️', rowId: `${_p}? asupan` },
          { title: '𝑴𝒂𝒌𝒆𝒓 𝑴𝒆𝒏𝒖 📸️', rowId: `${_p}? maker` },
          { title: '𝑮𝒓𝒐𝒖𝒑 𝑴𝒆𝒏𝒖 👥҈', rowId: `${_p}? grup` },
          { title: '𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑴𝒆𝒏𝒖 🥨', rowId: `${_p}? premium` },
          { title: '𝑩𝒆𝒃𝒂𝒏 𝑶𝒓𝒕𝒖 𝑴𝒆𝒏𝒖 🏋️', rowId: `${_p}? bebanortu` },
          { title: '𝑨𝒏𝒊𝒎𝒆 𝑴𝒆𝒏𝒖 🇯🇵', rowId: `${_p}? anime` },
          { title: '𝑵𝑺𝑭𝑾 𝑴𝒆𝒏𝒖 🇯🇵', rowId: `${_p}? nsfw` },
          { title: '𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕 🛣️҈', rowId: `${_p}? internet` },
          { title: '𝑾𝒂𝒓 𝑴𝒆𝒏𝒖 👨‍💻️҈', rowId: `${_p}? war` },
          { title: '𝑨𝒏𝒐𝒏𝒚𝒎𝒐𝒖𝒔 𝑴𝒆𝒏𝒖 🎭҈', rowId: `${_p}? anonymous` },
          { title: '𝑵𝒖𝒍𝒊𝒔 𝑴𝒆𝒏𝒖 ✏️', rowId: `${_p}? nulis` },
          { title: '𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓 🌍҈', rowId: `${_p}? downloader` },
          { title: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖 🛠️҈', rowId: `${_p}? tools` },
          { title: '𝑭𝑼𝑵 𝑴𝒆𝒏𝒖 🎰', rowId: `${_p}? fun`},
          { title: '𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆 𝒎𝒆𝒏𝒖 📂҈', rowId: `${_p}? database` },
          { title: '𝑽𝒐𝒕𝒆 & 𝑨𝒃𝒔𝒆𝒏 🗣️҈', rowId: `${_p}? vote` },
          { title: '𝑨𝑳-𝑸𝒖𝒓𝒂𝒏 𝑴𝒆𝒏𝒖 ҈ 📖', rowId: `${_p}? quran` },
          { title: '𝑽𝒐𝒊𝒄𝒆 𝑪𝒉𝒂𝒏𝒈𝒆𝒓 🔊', rowId: `${_p}? audio` },
          { title: '𝑰𝒏𝒇𝒐 𝑴𝒆𝒏𝒖 🏢', rowId: `${_p}? info` },
          { title: '𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖 👑҈', rowId: `${_p}? owner` },
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + time,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': date,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
// subs dlu lah capek gw
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: global.ucapan,
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.send3ButtonImg(m.chat, thumb, text, wm2, 'P I N G', '.speed', 'D O N A S I', '.donasi', 'O W N E R', '.owner', ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namabot, body: date, sourceUrl: linkyt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
  } catch (e) {
    conn.reply(m.chat, '𝑴𝒂𝒂𝒇, 𝒎𝒆𝒏𝒖 𝒔𝒆𝒅𝒂𝒏𝒈 𝒆𝒓𝒓𝒐𝒓', m)
    throw e
  }
}
handler.help = ['listmenu', 'command', '?']
handler.tags = ['main']
handler.command = /^(listmenu|command|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
