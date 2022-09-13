let fetch = require('node-fetch')

let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = await fetch(`https://api-axs.herokuapp.com/api/dowloader/fbdown?url=${args[0]}`)
    let json = await res.json()
    if (!json.status) throw json
    let aXs = `*Title*: ${json.result.title}\n*Type*: ${json.result.links[0].type}\n*Quality*: ${json.result.links[0].quality}\n*Size*: ${json.result.links[0].size}\n\n*Link*: ${await shortlink(json.result.links[0].url)}`
    await m.reply('Sedang di proses..')
    await conn.sendFile(m.chat, json.result.links[0].url, 'ArdhiXs', aXs, m)
}
handler.help = ['fb2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^fb2|facebook2|fbdl2$/i
handler.limit = true
handler.group = true

module.exports = handler


async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('http://ardhixs.c1.biz/txt.php?url='+encodeURIComponent(url))).data : ''
}
