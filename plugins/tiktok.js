const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    tiktokdlv3(args[0]).then(r => {
    let video = r.video.no_watermark
    conn.sendFile(m.chat, video, '', `*Link*: ${await shortlink(video)}\n\n_${wm}_`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler


async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('http://ardhixs.c1.biz/txt.php?url='+encodeURIComponent(url))).data : ''
}
