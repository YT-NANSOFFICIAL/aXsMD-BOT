let fs = require('fs') 
let chalk = require('chalk')

owner = [
  ['628XXXXXXXXXXX'],
  ['628XXXXXXXXXXX'],
  ['628XXXXXXXXXXX', 'Owner', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
mods = [] // Want some help?
prems = [] // Premium user has unlimited limit

///// DONASI.JS \\\\\
DonateArdhiXs = `┏━━━〔 ıll *DONATE* llı 〕━━━❑
⬡ *DANA:* 628XXXXXXXXXXX
⬡ *GOPAY:* 628XXXXXXXXXXX
⬡ *OVO:* 628XXXXXXXXXXX
⬡ *PULSA:* 628XXXXXXXXXXX
⬡ *LINKAJA:* 628XXXXXXXXXXX
⬡ *SAWERIA:* https://saweria.com
┗━━━━━━━━━━━━━━━━━━❑
_“Sedekah itu dapat menghapus dosa sebagaimana air itu memadamkan api.”_
_*(HR. At-Tirmidzi)*_

_Terimakasih yang sudah mendonasikan untuk bot_
Contact person Owner:
wa.me/628XXXXXXXXXXX (Owner)`

//// SETTING CREATOR.JS \\\\
nick = '兰｢ȺɍđħɨXs｣兰'
number = '6288294052009'
email = 'info@ardhi.eu.org'
kota = '🏠BOGOR'
urlweb = 'https://www.ardhi.eu.org'

urlinstagram = 'https://www.instagram.com/ardhixs_/'

//// IMAGE \\\\
thumbmenu = './media/thumb.jpg'
thumbmenu1 = 'https://telegra.ph/file/54bff157f5832a12ae132.jpg'

APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'aXsMD-BOT'
  var sticker_author = '@ardhixs_'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
packname = sticker_name
author = sticker_author
wm = '℘aXsMD'

Intervalmsg = 1800 //detik

multiplier = 1000 // The higher, The harder levelup

rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
