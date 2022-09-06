let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, id } = m.quoted
    conn.sendMessage(m.chat, { delete: {
  remoteJid: m.chat,
  id: m.quoted.id,
  fromMe: m.quoted.fromMe,
  participant: m.quoted.sender
}})

}
handler.help = ['hapus', 'dell']
handler.tags = ['menu']

handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
