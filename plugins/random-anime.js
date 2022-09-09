let fetch = require('node-fetch')
let handler = async(m, { conn, command }) => {
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendMessage(m.chat, {
        image: await(await fetch(json.url)).buffer(),
        caption: `${json.url}`,
        buttons: [
          {buttonId: `.${command}`, buttonText: {displayText: 'NEXT🔜'}, type: "RESPONSE"}
        ],
        headerType: 'IMAGE'
  }, { quoted: m })
}
handler.help = ['waifu','neko','shinobu','megumin','bully','cuddle','cry','hug','awoo','kiss','lick','pat','smug','bonk','yeet','blush','smile','wave','highfive','handhold','nom','bite','glomp','slap','kill','kick','happy','wink','poke','dance','cringe']
handler.tags = ['internet']
handler.command = /^waifu|neko|shinobu|megumin|bully|cuddle|cry|hug|awoo|kiss|lick|pat|smug|bonk|yeet|blush|smile|wave|highfive|handhold|nom|bite|glomp|slap|kill|kick|happy|wink|poke|dance|cringe$/i
handler.limit = true

module.exports = handler
