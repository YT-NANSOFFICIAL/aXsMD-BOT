let fs = require('fs')
let handler = async (m, { conn }) => {
let apaar = `
┏━━━〔 ıll *SCRIPT* llı 〕━━━❑
▢ *SC*: https://github.com/ArdhiXs/aXsMD-BOT
▢ *NOTE*: 
• This script is free. Don't forget to follow my github
• Script ini gratis. Jangan lupa untuk mengikuti github ku
┗━━━━━━━━━━━━━━━━━━❑`
conn.sendFile(m.chat, fs.readFileSync('./media/script.png'), 'ArdhiXs.AXS', apaar, m)
// Don't delete!!
}
handler.help = ['script']
handler.tags = ['info']
handler.command = /^script|sc(bot)$/i

module.exports = handler