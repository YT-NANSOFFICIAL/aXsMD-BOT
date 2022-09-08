let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama nabi\nExample: ${usedPrefix + command} adam`
     let url = await fetch(`https://raw.githubusercontent.com/ArdhiXs/My-SQL-Results/main/kisahnabi/${text}.json`)
     let kisah = await url.json()
     let hasil = `*Nabi*: ${kisah.name}\n*Tanggal Lahir*: ${kisah.thn_kelahiran}\n*Tempat Lahir*: ${kisah.tmp}\n*Usia*: ${kisah.usia}\n*Kisah*: ${kisah.description}`
     conn.reply(m.chat, hasil, m)
     }
handler.help = ['kisahnabi <name>']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

module.exports = handler
                   
