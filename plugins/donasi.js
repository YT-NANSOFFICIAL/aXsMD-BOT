let fs = require('fs')
let handler = async (m, { conn }) => {
let donatear = `
┏━━━〔 ıll *DONATE* llı 〕━━━❑
▢ *DANA:* ${dana}
▢ *GOPAY:* ${gopay}
▢ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━❑`
conn.sendFile(m.chat, fs.readFileSync('./media/donasi.png'), 'ArdhiXs.AXS', donatear, m)
// Tambah sendiri kalo mau
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler