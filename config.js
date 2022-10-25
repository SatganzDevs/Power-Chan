let fs = require('fs')

//Info maszeh
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Ganti di Handler.js
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.namabot = 'Power Chan - Md' //nama BOT Lu
global.packname = 'Power Chan - Md'
global.author = '𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄' //nama Owner
global.ownernya = '6281316701742'
global.linkyt = 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA' //link yt lu
global.linkig = 'https://instagram.com/satganzdevs.xyz' //link ig lu
global.linkgh = '-' //link github lu
global.titlebot = `⫹⫺ WhatsApp Bot | By 𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄`
global.wm2 = '© 𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄' //ganti aja kalau mau
global.wm = '© 𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄'
global.colong1 = 'Ciss 📸'
global.colong2 = '© 𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄'
global.kontak2 = [
['6281316701742', '𓂺', '𝚂𝙰𝚃𝙶𝙰𝙽𝚉 𝙳𝙴𝚅𝚂 〄', 'Sᴀᴠᴇ Aᴊᴀ Yᴇ Oᴡɴᴇʀ Kᴜ Bᴀɪᴋ Kᴏᴋ', true],
]

//Biodata OWNER Bre
global.RL = 'HAMBA ALLAH' //jenis kelamin lu
global.gender = 'Boys' //jenis kelamin lu
global.agama = 'islam' //agama lu
global.age = '14' //usia lu sekarang
global.kelas = '10' //kelas lu
global.hobi = 'coding' //hobi lu bre
global.tempat = 'INDONESIA , pekanbaru' //tempat tinggal lu

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  males: 'https://malesin.xyz',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.lolkey = 'a243d5d9b0d811b81d63e6cf'
global.xkey = 'YourApikey'
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//img nya
global.thumb = fs.readFileSync('./thumbnail.jpg')
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']

//Proses berlangsung
global.wait = '_*𝒔𝒆𝒅𝒂𝒏𝒈 𝒅𝒊 𝒑𝒓𝒐𝒔𝒆𝒔...*_'
global.eror = '_*𝒎𝒂𝒂𝒇 𝒔𝒆𝒓𝒗𝒆𝒓 𝒆𝒓𝒓𝒐𝒓...*_'

//========Url Template Buttons=========//
global.dtu = 'Group bot'
global.urlnya = "https://chat.whatsapp.com/DXzNLv2I7mh01ikTbyFXBq"

//============= callButtons =============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '3'

//============= Games ================//
global.benar = '_*Benar*_✅'
global.salah = '_*Salah*_❌'
global.dikit = "dikit lagi"

global.multiplier = 100 // The higher, The harder levelup

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//=========== Requirements ==========//

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
