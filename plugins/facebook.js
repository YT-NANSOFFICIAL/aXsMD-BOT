let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://m.facebook.com/`
  let res = await fetch(`https://madangsek.my.id/facebook/?url=` + text)
  let json = await res.json()
  let aXs = `*Title*: ${json.title}\n*Size*: ${json.filesize}\n\n*Link*: ${await shortlink(json.videoUrl)}`
  conn.sendFile(m.chat, json.videoUrl, 'ArdhiXs', aXs, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^fb|facebook(dl|download)$/i

handler.limit = true
handler.group = true
 
module.exports = handler


async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('http://ardhixs.c1.biz/txt.php?url='+encodeURIComponent(url))).data : ''
}
/*let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	// let res = await fetch(`https://madangsek.my.id/facebook/?url=` + args[0])
	let res = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=f9f2-4657-e43f&url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.result.hd.url
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', author, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler*/


/* let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	let res = await fetch(`https://madangsek.com/api/facebook/?url=` + args[0])
	//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let url = json.videoUrl
	m.reply('Sedang diproses...')
	if (url) await conn.sendFile(m.chat, url, 'fb.mp4', wm, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = true
handler.premium = false

module.exports = handler */
