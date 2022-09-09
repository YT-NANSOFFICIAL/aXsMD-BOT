> let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }


const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            "title": `ghhfgg`.trim(),
                        "description": `©️ *ArdhiXs*`.trim(),
                        "footerText": "Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
                        "buttonText": "Click Here",
            listType: 1,
           FooterText:'',
            mtype: 'listMessage',
            sections: [
              {
      
             "rows": [{
                  "title": ` 🧝⟩⟩» OWNER BOT`,
                  "description": "Nomor Pemilik Bot Chat P/Meminta Save Tidak Akan Di Respon",
                  "rowId": `.owner`
                },{
                  "title": '🪄⟩⟩» BUAT LOGO',
                  "description": "Menampilkan Menu logo",
                  "rowId": `.textpro`
                 },{
                 "title": '💌⟩⟩» SEWA BOT',
                  "description": "sewa bot untuk grup.",
                  "rowId": `.sewazifa`
                 },{
              	"title": `💬⟩⟩» RULES BOT`,
                  "description": "Rules Yang Harus Di Patuhi User Shinn",
                  "rowId": `.snk`
                }],
                "title": "⟣─────────❲ 𝗜 𝗡 𝗙 𝗢 ❳──────────⟢"
              }, {
                "rows": [{
                  "title": `⋮☰|🏫|┅MENU———๑〘 ALL 〙`,
                  "description": "Menampilkan Menu All",
                  "rowId": '.? all'
                 }],
                "title": "⟣─────────❲ 𝗔 𝗟 𝗟 ❳──────────⟢"
                  }, {
                  "rows": [{
                  "title": "⋮☰|📝|┅MENU———๑〘 1 〙",
                  "description": "Menampilkan Menu Absen",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "⋮☰|⛩️|┅MENU———๑〘 2 〙",
                  "description": "Menampilkan Menu Anime",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "⋮☰|🎟️|┅MENU———๑〘 3 〙",
                  "description": "Menampilkan Menu Sticker",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "⋮☰|📺|┅MENU———๑〘 4 〙",
                  "description": "Menampilkan Menu Downloader",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "⋮☰|📈|┅MENU———๑〘 5 〙",
                  "description": "Menampilkan Menu Exp",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "⋮☰|🎡|┅MENU———๑〘 6 〙",
                  "description": "Menampilkan Menu Fun",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "⋮☰|🕹️|┅MENU———๑〘 7 〙",
                  "description": "Menampilkan Menu Game",
                  "rowId": `${_p}? game`
                }, {
                  "title": "⋮☰|🔮|┅MENU———๑〘 8 〙",
                  "description": "Menampilkan Menu Github",
                  "rowId": `${_p}? github`
                }, {
                  "title": "⋮☰|🏢|┅MENU———๑〘 9 〙",
                  "description": "Menampilkan Menu Group",
                  "rowId": `${_p}? group`
                }, {
                  "title": "⋮☰|🖼️|┅MENU———๑〘 10 〙",
                  "description": "Menampilkan Menu Image",
                  "rowId": `${_p}? image`
                }, {
                  "title": "⋮☰|📡|┅MENU———๑〘 11 〙",
                  "description": "Menampilkan Menu Internet",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "⋮☰|🕌|┅MENU———๑〘 12 〙",
                  "description": "Menampilkan Menu Islam",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "⋮☰|🐚|┅MENU———๑〘 13 〙",
                  "description": "Menampilkan Menu Kerang",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "⋮☰|✒️|┅MENU———๑〘 14 〙",
                  "description": "Menampilkan Menu Maker",
                  "rowId": `${_p}? maker`                
                }, {
                  "title": "⋮☰|🎙️|┅MENU———๑〘 15 〙",
                  "description": "Menampilkan Menu Voice Changer",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "⋮☰|📔|┅MENU———๑〘 16 〙",
                  "description": "Menampilkan Menu Premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "⋮☰|📨|┅MENU———๑〘 17 〙",
                  "description": "Menampilkan Menu Quotes",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "⋮☰|🌱|┅MENU———๑〘 18 〙",
                  "description": "Menampilkan Menu Rpg",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "⋮☰|🐾|┅MENU———๑〘 19 〙",
                  "description": "Menampilkan Menu Stalker",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "⋮☰|🔗|┅MENU———๑〘 20 〙",
                  "description": "Menampilkan Menu Short Link",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "⋮☰|👨‍🔧|┅MENU———๑〘 21 〙",
                  "description": "Menampilkan Menu Tools",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "⋮☰|📄|┅MENU———๑〘 22 〙",
                  "description": "Menampilkan Maker Text",
                  "rowId": `${_p}? text`
                }, {
                  "title": "⋮☰|🧼|┅MENU———๑〘 23 〙",
                  "description": "Menampilkan Menu Hentai",
                  "rowId": `${_p}? nsfw`
                }, {
                  "title": "⋮☰|☀️|┅MENU———๑〘 24 〙",
                  "description": "Menampilkan Menu Random/Gabut",
                  "rowId": `${_p}? random`
                }, {
                  "title": "⋮☰|☃️|┅MENU———๑〘 25 〙",
                  "description": "Menampilkan Text Pro Menu",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "⋮☰|💈|┅MENU———๑〘 26 〙",
                  "description": "Menampilkan Photo Oxy Menu",
                  "rowId": `${_p}? donasi`
                }],
                "title": "⟣─────────❲ 𝗟 𝗜 𝗦 𝗧 ❳──────────⟢"
                }, {
              	"rows": [{
                  "title": "⋮☰|🐻|┅MENU———๑〘 owner 〙",
                  "description": "Menampilkan Menu Owner",
                  "rowId": `${_p}? owner`
                  }],
                "title": "⟣─────────❲ 𝗢 𝗡 𝗟 𝗬 ❳──────────⟢"
              }  
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fdoc });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.command = /^ates|kates$/i

module.exports = handler
