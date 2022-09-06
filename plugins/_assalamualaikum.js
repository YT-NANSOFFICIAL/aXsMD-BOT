let fs = require('fs')
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, fs.readFileSync('./media/nabilla.mp3'), '', '', m, true)
}
handler.customPrefix = /^(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)$/i
handler.command = new RegExp

module.exports = handler
