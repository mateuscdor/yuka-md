/**
#CREDITS NYA JANGAN DIHAPUS TOD!!

✎CREDITS
Dika Ardnt. (Base Ori)

Source Kode Disini:
https://github.com/DikaArdnt/Hisoka-Morou
*/

require('./config')
const { MessageType, default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const request = require('request')
const moment = require('moment-timezone')
const speed = require('performance-now')
const hx = require('hxz-api')
const xfar = require('xfarr-api');
const yts = require( 'yt-search')
const { performance } = require('perf_hooks')
const { pinterest, wallpapercave, wallpaper, wallpaperhd, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const { wikiSearch } = require('./lib/wiki')
const { fbdl } = require("./lib/fbdl")
const { yta, ytv } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const database = require('./database.json')
let p = 0
const simbol = '•'
fake = '```2022 © Copyright By Yuka```'
const ownerNumber = global.owner
const ownername = global.ownername

global.db = JSON.parse(fs.readFileSync('./lib/database.json'))
if (global.db) global.db = { sticker: {}, database: {}, game: {}, others: {}, users: {}, chats: {}, settings: {}, ...(global.db || {})
}

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []

module.exports = hisoka = async (hisoka, m, chatUpdate) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == hisoka.user.id ? true : false
const isOwner = ownerNumber.includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

 // Group
const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
if (m.isGroup && !m.key.fromMe && database.allow.antilink && !isCreator && !isGroupAdmins){
if (budy.match(`https://chat.whatsapp.com`)) {
hisoka.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${groupMetadata.subject}`}, {quoted:m})
hisoka.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}
// Public & Self
if (!hisoka.public) {
if (!m.key.fromMe) return 
}

// Push Message To Console
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
 setInterval(() => {
fs.writeFileSync('./lib/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

//SendMessage
const sendMess = (from, teks) => {
return hisoka.sendMessage(from, { text: teks })
}
//SendMediaUrl
const sendFileFromUrl = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return hisoka.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "video"){
return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "audio"){
return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
} else {l
return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}

const d = new Date
let locale = 'id'
const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
const gmt = new Date(0).getTime() - new Date('1 Januari 2022').getTime()
moment.tz.setDefault("Asia/Jakarta").locale("id");
var date = new Date();
var weton = ['Pahing','pon','wage','kliwon','legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}
switch(bulan1) {
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break;
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break;
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break;
}
var tanggal = '' + hari + ' ' + weton + ' - ' + tanggal + ' ' + bulan1 + ' ' + tahun;


//CopasChikaBot
hisoka.sendReadReceipt(m.chat, sender, [m.key.id]) 
 
 
switch(command) {
case 'sc': {
m.reply(`*Base By Dika :* https://github.com/DikaArdnt/Hisoka-Morou

*Recode By Rasyid :* https://github.com/kagoyaa/`)
}
break
case 'donate': case 'donasi':
m.reply(`
*Donasi*
*Pulsa :* 082260624836
*Dana :* 082260624836
`)
break
case 'chat': {
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
hisoka.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'join': {
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'revoke':
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin 
let link = await hisoka.groupRevokeInvite(m.chat)
await m.reply( `*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
break
case 'leave': {
if (!isCreator && !m.key.fromMe) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setprofile': case 'setpp': {
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 await fs.unlinkSync(media)
} else if (!isCreator && !m.key.fromMe) {
await hisoka.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
 await fs.unlinkSync(media)
}
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Masukkan value open/close'
if (args[0].toLowerCase() === 'close') {
await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'hidetag':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
var group = await hisoka.groupMetadata(m.chat)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: m
}
hisoka.sendMessage(m.chat, optionshidetag, text)
break
case 'tagall': case 'infoall':
if (!m.isGroup) throw mess.group
if (!isGroupAdmins && !m.key.fromMe) throw mess.admin
let startnum = 1
let teks = `*_Tag All Member_*\n*Pesan : ${q ? q : '-'}*\n\n`
for (let mem of groupMembers) {
teks += `${startnum++}. @${mem.id.split('@')[0]}\n`
}
teks += `\n⋙ *YUKA* ⋘`
hisoka.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
m.reply(mess.wait)
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'wallpaper': {
m.reply(mess.wait)
anu = await wallpaperhd(text)
result = anu[Math.floor(Math.random(), anu.length)]
hisoka.sendMessage(m.chat, { image: { url: result }}, { quoted: m })
}
break
case 'wikimedia':
if (!text) return m.reply(' Yang Mau Di Cari Apa? ')
res = await wikiSearch(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`,
sendFileFromUrl(m.chat,res[0].thumb,result,m).catch(e => {
})
break
case 'hentai': {
if (database.allow.nsfw) return m.reply(`Fitur Nsfw Belum Aktif⚠️`)
m.reply(mess.wait)
anu = await hentai()
result = anu[Math.floor(Math.random(), anu.length)]
hisoka.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
}
break
case 'anime':
if (!q) throw 'Mo cari anime apa?'
await m.reply(mess.wait)
xfar.Anime(q).then(async data => {
let txt = `*───「 ANIME-SEARCH 」───*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*📚 Url :* ${i.link}\n─────────────────────\n`
}
await sendFileFromUrl(m.chat,data[0].thumbnail,txt,m)
})
.catch((err) => {
for (let x of ownerNumber) {
sendMess(x, `${command} Error: \n\n` + err)
}
m.reply('Error!')
})
break

case 'webtonsearch': case 'webtoon':
if (!q) return m.reply('Mau cari webtoon apa?')
await m.reply(mess.wait)
xfar.Webtoons(q).then(async data => {
let txt = `*───「 WEBTOONS-SEARCH 」───*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*🤴🏻 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📚 Url :* ${i.url}\n────────────────────\n`
}
await m.reply(txt)
})
.catch((err) => {
m.reply('Error!')
})
break
case 'drakor':
if (!q) return m.reply('Mau cari drakor apa?')
await m.reply(mess.wait)
xfar.Drakor(q).then(async data => {
let txt = `*──「 DRAKOR-SEARCH 」──*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*📆 Years :* ${i.years}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📚 Url :* ${i.url}\n─────────────────────\n`
}
await sendFileFromUrl(m.chat,data[0].thumbnail,txt,m)
})
.catch((err) => {
m.reply('Error!')
})
break
case 'character': case 'karakter':
if (!q) return m.reply('Mau cari karakter apa?')
await m.reply(mess.wait)
xfar.Character(q).then(async data => {
let txt = `*──「 CHARACTER-SEARCH 」──*\n\n`
for (let i of data) {
txt += `*📫 Character :* ${i.character}\n`
txt += `*📚 Url :* ${i.link}\n───────────────────\n`
}
await sendFileFromUrl(m.chat,data[0].thumbnail,txt,m)
})
.catch((err) => {
m.reply('Error!')
})
break
case 'manga':
if (!q) return m.reply('Mau cari manga apa?')
await m.reply(mess.wait)
xfar.Manga('naruto').then(async data => {
let txt = `*───「 MANGA-SEARCH 」───*\n\n`
for (let i of data) {
 txt += `*📫 Title :* ${i.judul}\n`
 txt += `*📚 Url :* ${i.link}\n──────────────────────\n`
}
await sendFileFromUrl(m.chat,data[0].thumbnail,txt,m)
})
.catch((err) => {
m.reply('Error!')
})
break
case 'film':
if (!q) return m.reply('Mau cari film apa?')
await m.reply(mess.wait)
xfar.Film(q).then(async data => {
let txt = `*───「 FILM-SEARCH 」───*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*🎞️ Type :* ${i.type}\n`
txt += `*📟 Quality :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*📚 Url :* ${i.link}\n─────────────────\n`
}
await sendFileFromUrl(m.chat,data[0].thumb,txt,m)
})
.catch((err) => {
m.reply('Error!')
})
break
case 'quotesanime': case 'quoteanime': {
anu = await quotesAnime()
result = anu[Math.floor(Math.random(), anu.length)]
let buttons = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
let buttons = [{buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: anu.result.message,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break 
case 'tiktoknowm':
if (!text) throw 'Masukkan Query Link!'
var { TiktokDownloader } = require('./lib/tiktokdl')
m.reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
})
console.log(res) 
let buttons = [{buttonId: `tiktokwm ${text}`, buttonText: {displayText: '» With Watermark'}, type: 1},
{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}]
let buttonMessage = {
video: { url: res.result.nowatermark },
caption: `Press The Button Select Download`,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
break
case 'tiktokwm':
if (!text) return m.reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
m.reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
//reply(mess.error.api)
})
console.log(res)
let buttons1 = [{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}]
let buttonMessage1 = {
video: { url: res.result.watermark },
caption: `Press The Button Select Download`,
footerText: 'Press The Button Below',
buttons: buttons1,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage1, { quoted: m })
break
case 'tiktokmp3': case 'tiktokaudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
let buttons2 = [{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
{buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1}]
let buttonMessage2 = {
text: `Download From ${text}`,
footerText: 'Press The Button Below',
buttons: buttons2,
headerType: 2
}
let msg = await hisoka.sendMessage(m.chat, buttonMessage2, { quoted: m })
hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
}
break
case 'igstory': case 'instagramstory':
if(!text) throw m.reply('Usernamenya?')
hx.igstory(text)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
sendFileFromUrl(m.chat,i.url, i.type, m) 
}
}
});
break
case 'ytplay':
if (!text) throw ('Judul??')
let teks1 = args.join(' ')
m.reply(mess.wait)
let yut = await yts(teks1)
res = await y2mateV(`${yut.videos[0].url}`).catch(e => {
m.reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `YOUTUBE PLAY*

*_Data Status!_*
*•Title : ${res[0].judul}*
*•Ext : YOUTUBE PLAY*

*_Presss Select Enter Button_*`
ya = await getBuffer(res[0].thumb) 
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
locationMessage: { 
degreesLatitude: 0,
degreesLongitude: 0, 
jpegThumbnail: ya,
},
hydratedContentText: `${result}`,
hydratedFooterText: `Beta Version : 1.1.0`,
hydratedButtons: [{
urlButton: {
displayText: 'View On YouTube',
url: `${yut.videos[0].url}`
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 822-6062-4836'
}
}, {
quickReplyButton: {
displayText: 'VIDEO',
id: `ytmp4 ${yut.videos[0].url}`
}
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `ytmp3 ${yut.videos[0].url}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
break
case 'yts':
case 'ytsearch':
if (!q) return reply(mess.wrongFormat)
m.reply(mess.wait)
try {
res = await yts(q)
a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`Title : ${i.title}\`\`\`
\`\`\`Views : ${i.views}\`\`\`
\`\`\`Upload : ${i.ago}\`\`\`
\`\`\`Durasi : ${i.timestamp}\`\`\`
\`\`\`Channel : ${i.author.name}\`\`\`
\`\`\`Link : ${i.url}\`\`\``
}
b = a.trim()
hisoka.sendMessage(m.chat, { image: { url: res.all[0].image }, caption: b }, { quoted: m })
///sendFileFromUrl(res.all[0].image, image, {quoted: m, caption: b})
} catch (e) {
console.log(e)
m.reply(`${e}`)
}
break
case 'ytmp3':
if (!text) throw ('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply('error link')
let teks12 = args.join(' ')
m.reply(mess.wait)
res = await y2mateA(teks12).catch(e => {
m.reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `*YOUTUBE MP3*

*_Data Status!_*
*•Title : ${res[0].judul}*
*•Quality : ${res[0].quality}*
*•Ext : MP3*
*•Size : ${res[0].size}*

_Tunggu Sebentar Audio Sedang Dikirim_`
hisoka.sendMessage(m.chat, { image: { url: res[0].thumb }, caption: result }, { quoted: m }).then((lalu) => {
sendFileFromUrl(m.chat, res[0].link, {quoted: m, mimetype: 'audio/mp3', filename: res[0].output})
})
break
case 'ytmp4':
if (!text) throw ('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply('error link')
//let teks = args.join(' ')
m.reply(mess.wait)
res = await y2mateV(q).catch(e => {
m.reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `*YOUTUBE MP4*

*_Data Status!_*
*•Title : ${res[0].judul}*
*•Ext : MP4*
*•Size : ${res[0].size}*

_Tunggu Sebentar Video Sedang Dikirim_`
hisoka.sendMessage(m.chat, { image: { url: res[0].thumb }, caption: result }, { quoted: m }).then((lalu) => {
hisoka.sendMessage(m.chat, { video: { url: res[0].link }, caption: `*_SUKSES SEND VIDEO_*`}, { quoted: m })
})
break
case 'igdl': case 'instagram':
if (!text) return m.reply('Linknya?')
m.reply(mess.wait)
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
})
console.log(res)
sendFileFromUrl(m.chat,res.result.link,res.result.desc,m)
break
case 'twitdl': case 'twitter': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '» Audio'}, type: 1}]
let buttonMessage = {
video: { url: anu.result.HD || anu.result.SD },
caption: util.format(anu.result),
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [{buttonId: `twitter ${text}`, buttonText: {displayText: '» Video'}, type: 1}]
let buttonMessage = {
image: { url: anu.result.thumb },
caption: util.format(anu.result),
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 4
}
let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
}
break
case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
}
break
case 'pindl': case 'pinterestdl': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
}
break
case 'public': {
if (!isCreator && !m.key.fromMe) throw mess.owner
hisoka.public = true
m.reply('Sukses Mengubah Ke Mode Public')
}
break
case 'self':{
if (!isCreator && !m.key.fromMe) throw mess.owner
hisoka.public = false
m.reply('Sukses Mengubah Ke Mode Self')
}
break
case 'runtime':
m.reply(`*Runtime :* ${runtime(process.uptime())}`)
break
case 'ping': case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${ownername}.;;;`
+ `FN:${ownername}.\n` // full name
+ `ORG:${ownername};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await hisoka.sendMessage(m.chat, { contacts: { displayName: `${ownername}`, contacts: [{ vcard }] } }, { quoted: m })
let buttons3 = [{buttonId: `allmenu`, buttonText: {displayText: 'BACK MENU '}, type: 1}]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage3, { quoted: msg })
}
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'rules': {
let buttons100 = [{buttonId: 'owner', buttonText: {displayText: 'Owner Bot'}, type: 1}]
let buttonMessage100 = {
image: {url: 'https://i.ibb.co/jfP3PQp/ac794b3747a3.jpg' },
caption: global.rules,
footerText: `${tanggal} ${fake}`,
buttons: buttons100,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage100, { quoted: m})
}
break
case 'allmenu':{
let thumbn = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Y U K A B O T`)
anu = `╭•「 *Group Menu👥* 」
├${simbol} ${prefix}linkgroup
├${simbol} ${prefix}antilink [button]
├${simbol} ${prefix}ephemeral [option]
├${simbol} ${prefix}setpp
├${simbol} ${prefix}setname [text]
├${simbol} ${prefix}group [option]
├${simbol} ${prefix}add @user
├${simbol} ${prefix}kick @user
├${simbol} ${prefix}revoke [reset link]
├${simbol} ${prefix}promote @user
├${simbol} ${prefix}demote @user
├${simbol} ${prefix}tagall 
├${simbol} ${prefix}hidetag [text]
╰────────❒ 

╭•「 *Downloader Menu🚀* 」
├${simbol} ${prefix}tiktoknowm [url]
├${simbol} ${prefix}tiktokwm [url]
├${simbol} ${prefix}tiktokmp3 [url]
├${simbol} ${prefix}instagram [url]
├${simbol} ${prefix}instagramstory @username
├${simbol} ${prefix}twitter [url]
├${simbol} ${prefix}twittermp3 [url]
├${simbol} ${prefix}ytplay [url]
├${simbol} ${prefix}ytmp3 [url]
├${simbol} ${prefix}ytmp4 [url]
├${simbol} ${prefix}facebook [url]
├${simbol} ${prefix}pinterestdl [url]
╰────────❒ 

╭•「 *Search Menu🔎* 」
├${simbol} ${prefix}pinterest [query]
├${simbol} ${prefix}wallpaper [query]
├${simbol} ${prefix}wikimedia [query]
├${simbol} ${prefix}ytsearch [query]
├${simbol} ${prefix}anime [query]
├${simbol} ${prefix}film [query]
├${simbol} ${prefix}manga [query]
├${simbol} ${prefix}webtoon [query]
├${simbol} ${prefix}karakter [query]
├${simbol} ${prefix}drakor [query]
╰────────❒ 

╭•「 *Random Menu🎲* 」
├${simbol} ${prefix}hentai
├${simbol} ${prefix}quotesanime
├${simbol} ${prefix}motivasi
├${simbol} ${prefix}dilanquote
├${simbol} ${prefix}bucinquote
├${simbol} ${prefix}katasenja
├${simbol} ${prefix}puisi
╰────────❒ 

╭•「 *Convert Menu🎯* 」
├${simbol} ${prefix}toimage
├${simbol} ${prefix}sticker
├${simbol} ${prefix}tovideo
├${simbol} ${prefix}togif
├${simbol} ${prefix}tourl
╰────────❒ 

╭•「 *Main Menu☕* 」
├${simbol} ${prefix}ping
├${simbol} ${prefix}owner
├${simbol} ${prefix}menu / ${prefix}help / ${prefix}?
├${simbol} ${prefix}delete
╰────────❒ 

╭•「 *Owner Menu👑* 」
├${simbol} ${prefix}chat [option]
├${simbol} ${prefix}join [link]
├${simbol} ${prefix}leave
├${simbol} ${prefix}setexif
├${simbol} ${prefix}nsfw [button]
├${simbol} ${prefix}block @user
├${simbol} ${prefix}unblock @user
╰────────❒ 

╭•「 *Random Anime🌈* 」
├${simbol} ${prefix}loli
├${simbol} ${prefix}neko
├${simbol} ${prefix}waifu
├${simbol} ${prefix}shinobu
├${simbol} ${prefix}megumin
├${simbol} ${prefix}bully
├${simbol} ${prefix}cuddle
├${simbol} ${prefix}cry
├${simbol} ${prefix}hug
├${simbol} ${prefix}awoo
├${simbol} ${prefix}kiss
├${simbol} ${prefix}lick
├${simbol} ${prefix}pat
├${simbol} ${prefix}smug
├${simbol} ${prefix}bonk
├${simbol} ${prefix}yeet
├${simbol} ${prefix}blush
├${simbol} ${prefix}smile
├${simbol} ${prefix}wave
├${simbol} ${prefix}highfive
├${simbol} ${prefix}handhold
├${simbol} ${prefix}nom
├${simbol} ${prefix}bite
├${simbol} ${prefix}glomp
├${simbol} ${prefix}slap
├${simbol} ${prefix}kill
├${simbol} ${prefix}happy
├${simbol} ${prefix}wink
├${simbol} ${prefix}poke
├${simbol} ${prefix}dance
├${simbol} ${prefix}cringe
╰────────❒ 

╭•「 *Nsfw Menu🥀* 」
├${simbol} ${prefix}ass
├${simbol} ${prefix}ahegao
├${simbol} ${prefix}bdsm
├${simbol} ${prefix}blowjob
├${simbol} ${prefix}cuckold
├${simbol} ${prefix}cum
├${simbol} ${prefix}ero
╰────────❒

╭•「 *Game Menu🎮* 」
├${simbol} ${prefix}family100
├${simbol} ${prefix}tebak gambar
├${simbol} ${prefix}tebak kata
├${simbol} ${prefix}tebak lagu
├${simbol} ${prefix}tebak kalimat
├${simbol} ${prefix}tebak lirik
├${simbol} ${prefix}tebak lontong
├${simbol} ${prefix}kuismath
├${simbol} ${prefix}tictactoe
╰────────❒

╭•「 *Text Pro🖼️* 」
├${simbol} ${prefix}3dchristmas
├${simbol} ${prefix}3ddeepsea
├${simbol} ${prefix}americanflag
├${simbol} ${prefix}3dscifi
├${simbol} ${prefix}3drainbow
├${simbol} ${prefix}3dwaterpipe
├${simbol} ${prefix}halloweenskeleton
├${simbol} ${prefix}sketch
├${simbol} ${prefix}bluecircuit
├${simbol} ${prefix}space
├${simbol} ${prefix}metallic
├${simbol} ${prefix}fiction
├${simbol} ${prefix}greenhorror
├${simbol} ${prefix}transformer
├${simbol} ${prefix}berry
├${simbol} ${prefix}thunder
├${simbol} ${prefix}magma
├${simbol} ${prefix}3dcrackedstone
├${simbol} ${prefix}3dneonlight
├${simbol} ${prefix}impressiveglitch
├${simbol} ${prefix}naturalleaves
├${simbol} ${prefix}fireworksparkle
├${simbol} ${prefix}matrix
├${simbol} ${prefix}dropwater
├${simbol} ${prefix}harrypotter
├${simbol} ${prefix}foggywindow
├${simbol} ${prefix}neondevils
├${simbol} ${prefix}christmasholiday
├${simbol} ${prefix}3dgradient
├${simbol} ${prefix}blackpink
├${simbol} ${prefix}gluetext
╰────────❒

╭•「 *Photo Oxy📷* 」
├${simbol} ${prefix}shadow
├${simbol} ${prefix}romantic
├${simbol} ${prefix}smoke
├${simbol} ${prefix}burnpapper
├${simbol} ${prefix}naruto
├${simbol} ${prefix}lovemsg
├${simbol} ${prefix}grassmsg
├${simbol} ${prefix}lovetext
├${simbol} ${prefix}coffecup
├${simbol} ${prefix}butterfly
├${simbol} ${prefix}harrypotter
├${simbol} ${prefix}retrolol
╰────────❒

╭•「 *Ephoto🌌* 」
├${simbol} ${prefix}ffcover
├${simbol} ${prefix}crossfire
├${simbol} ${prefix}galaxy
├${simbol} ${prefix}glass
├${simbol} ${prefix}neon
├${simbol} ${prefix}beach
├${simbol} ${prefix}blackpink
├${simbol} ${prefix}igcertificate
├${simbol} ${prefix}ytcertificate
╰────────❒`
let btn = [{
urlButton: {
displayText: 'My Rest Api',
url: 'https://kagoya-api.herokuapp.com'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 822-6062-4836'
}
}, {
quickReplyButton: {
displayText: 'S T A T U S B O T',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'O W N E R',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'R U L E S',
id: 'rules'
}
}]
hisoka.send5ButImg(m.chat, anu, `Status: User Yuka Bot\nNama: ${pushname}\n${tanggal}`, thumbn, btn)
}
break
case 'groupmenu':{
m.reply(`╭•「 *Group Menu👥* 」
├${simbol} ${prefix}linkgroup
├${simbol} ${prefix}antilink [button]
├${simbol} ${prefix}ephemeral [option]
├${simbol} ${prefix}setpp
├${simbol} ${prefix}setname [text]
├${simbol} ${prefix}group [option]
├${simbol} ${prefix}add @user
├${simbol} ${prefix}kick @user
├${simbol} ${prefix}revoke [reset link]
├${simbol} ${prefix}promote @user
├${simbol} ${prefix}demote @user
├${simbol} ${prefix}tagall 
├${simbol} ${prefix}hidetag [text]
╰────────❒ `)
}
break
case 'downloadermenu':{
m.reply(`╭•「 *Downloader Menu🚀* 」
├${simbol} ${prefix}tiktoknowm [url]
├${simbol} ${prefix}tiktokwm [url]
├${simbol} ${prefix}tiktokmp3 [url]
├${simbol} ${prefix}instagram [url]
├${simbol} ${prefix}instagramstory @username
├${simbol} ${prefix}twitter [url]
├${simbol} ${prefix}twittermp3 [url]
├${simbol} ${prefix}ytplay [url]
├${simbol} ${prefix}ytmp3 [url]
├${simbol} ${prefix}ytmp4 [url]
├${simbol} ${prefix}facebook [url]
├${simbol} ${prefix}pinterestdl [url]
╰────────❒ `)
}
break
case 'searchmenu':{
m.reply(`╭•「 *Search Menu🔎* 」
├${simbol} ${prefix}pinterest [query]
├${simbol} ${prefix}wallpaper [query]
├${simbol} ${prefix}wikimedia [query]
├${simbol} ${prefix}ytsearch [query]
├${simbol} ${prefix}anime [query]
├${simbol} ${prefix}film [query]
├${simbol} ${prefix}manga [query]
├${simbol} ${prefix}webtoon [query]
├${simbol} ${prefix}karakter [query]
├${simbol} ${prefix}drakor [query]
╰────────❒ `)
}
break
case 'randommenu':{
m.reply(`╭•「 *Random Menu🎲* 」
├${simbol} ${prefix}hentai
├${simbol} ${prefix}quotesanime
├${simbol} ${prefix}motivasi
├${simbol} ${prefix}dilanquote
├${simbol} ${prefix}bucinquote
├${simbol} ${prefix}katasenja
├${simbol} ${prefix}puisi
╰────────❒ `)
}
break
case 'convertmenu':{
m.reply(`╭•「 *Convert Menu🎯* 」
├${simbol} ${prefix}toimage
├${simbol} ${prefix}sticker
├${simbol} ${prefix}tovideo
├${simbol} ${prefix}togif
├${simbol} ${prefix}tourl
╰────────❒ `)
}
break
case 'mainmenu':{
m.reply(`╭•「 *Main Menu☕* 」
├${simbol} ${prefix}ping
├${simbol} ${prefix}owner
├${simbol} ${prefix}menu / ${prefix}help / ${prefix}?
├${simbol} ${prefix}delete
╰────────❒ `)
}
break
case 'ownermenu':{
m.reply(`╭•「 *Owner Menu👑* 」
├${simbol} ${prefix}chat [option]
├${simbol} ${prefix}join [link]
├${simbol} ${prefix}leave
├${simbol} ${prefix}setexif
├${simbol} ${prefix}nsfw [button]
├${simbol} ${prefix}block @user
├${simbol} ${prefix}unblock @user
╰────────❒ `)
}
break
case 'randomanime':{
m.reply(`╭•「 *Random Anime🌈* 」
├${simbol} ${prefix}couple
├${simbol} ${prefix}loli
├${simbol} ${prefix}neko
├${simbol} ${prefix}waifu
├${simbol} ${prefix}shinobu
├${simbol} ${prefix}megumin
├${simbol} ${prefix}bully
├${simbol} ${prefix}cuddle
├${simbol} ${prefix}cry
├${simbol} ${prefix}hug
├${simbol} ${prefix}awoo
├${simbol} ${prefix}kiss
├${simbol} ${prefix}lick
├${simbol} ${prefix}pat
├${simbol} ${prefix}smug
├${simbol} ${prefix}bonk
├${simbol} ${prefix}yeet
├${simbol} ${prefix}blush
├${simbol} ${prefix}smile
├${simbol} ${prefix}wave
├${simbol} ${prefix}highfive
├${simbol} ${prefix}handhold
├${simbol} ${prefix}nom
├${simbol} ${prefix}bite
├${simbol} ${prefix}glomp
├${simbol} ${prefix}slap
├${simbol} ${prefix}kill
├${simbol} ${prefix}happy
├${simbol} ${prefix}wink
├${simbol} ${prefix}poke
├${simbol} ${prefix}dance
├${simbol} ${prefix}cringe
╰────────❒`)
}
break
case 'nsfwmenu':
m.reply(`╭•「 *Nsfw Menu🥀* 」
├${simbol} ${prefix}ass
├${simbol} ${prefix}ahegao
├${simbol} ${prefix}bdsm
├${simbol} ${prefix}blowjob
├${simbol} ${prefix}cuckold
├${simbol} ${prefix}cum
├${simbol} ${prefix}ero
╰────────❒`)
break
case 'gamemenu':
m.reply(`╭•「 *Game Menu🎮* 」
├${simbol} ${prefix}family100
├${simbol} ${prefix}tebak gambar
├${simbol} ${prefix}tebak kata
├${simbol} ${prefix}tebak lagu
├${simbol} ${prefix}tebak kalimat
├${simbol} ${prefix}tebak lirik
├${simbol} ${prefix}tebak lontong
├${simbol} ${prefix}kuismath
├${simbol} ${prefix}tictactoe
╰────────❒`)
break
case 'makermenu':
m.reply(`╭•「 *Text Pro🖼️* 」
├${simbol} ${prefix}3dchristmas
├${simbol} ${prefix}3ddeepsea
├${simbol} ${prefix}americanflag
├${simbol} ${prefix}3dscifi
├${simbol} ${prefix}3drainbow
├${simbol} ${prefix}3dwaterpipe
├${simbol} ${prefix}halloweenskeleton
├${simbol} ${prefix}sketch
├${simbol} ${prefix}bluecircuit
├${simbol} ${prefix}space
├${simbol} ${prefix}metallic
├${simbol} ${prefix}fiction
├${simbol} ${prefix}greenhorror
├${simbol} ${prefix}transformer
├${simbol} ${prefix}berry
├${simbol} ${prefix}thunder
├${simbol} ${prefix}magma
├${simbol} ${prefix}3dcrackedstone
├${simbol} ${prefix}3dneonlight
├${simbol} ${prefix}impressiveglitch
├${simbol} ${prefix}naturalleaves
├${simbol} ${prefix}fireworksparkle
├${simbol} ${prefix}matrix
├${simbol} ${prefix}dropwater
├${simbol} ${prefix}harrypotter
├${simbol} ${prefix}foggywindow
├${simbol} ${prefix}neondevils
├${simbol} ${prefix}christmasholiday
├${simbol} ${prefix}3dgradient
├${simbol} ${prefix}blackpink
├${simbol} ${prefix}gluetext
╰────────❒

╭•「 *Photo Oxy📷* 」
├${simbol} ${prefix}shadow
├${simbol} ${prefix}romantic
├${simbol} ${prefix}smoke
├${simbol} ${prefix}burnpapper
├${simbol} ${prefix}naruto
├${simbol} ${prefix}lovemsg
├${simbol} ${prefix}grassmsg
├${simbol} ${prefix}lovetext
├${simbol} ${prefix}coffecup
├${simbol} ${prefix}butterfly
├${simbol} ${prefix}harrypotter
├${simbol} ${prefix}retrolol
╰────────❒

╭•「 *Ephoto🌌* 」
├${simbol} ${prefix}ffcover
├${simbol} ${prefix}crossfire
├${simbol} ${prefix}galaxy
├${simbol} ${prefix}glass
├${simbol} ${prefix}neon
├${simbol} ${prefix}beach
├${simbol} ${prefix}blackpink
├${simbol} ${prefix}igcertificate
├${simbol} ${prefix}ytcertificate
╰────────❒`)
break
case 'help': case 'menu': case '?':{
let ted = `y`
const menulist = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"listMessage" :{
"title": `Hallo Kak *${pushname}*\nSaya Adalah Yuka Bot Yang Menggunakan Baileys-md Library.\n\nPerlu Di Ketahui Bot Ini Menggunakan Program Multi-Device Dari WhatsApp`,
"description": "*Jika Ada Bug Harap Melaporkan Owner🙏*",
"buttonText": "CLICK HERE",
"footerText": fake,
"listType": "SINGLE_SELECT",
"sections": [{
"footerText": tanggal,
"title": tanggal,
"rows": [{
"title": "Group Menu👥",
"rowId": `.groupmenu`,
"description": "Group Menu, Fitur Yang Hanya Bisa Di Pakai Admin Grup, NOTE : BOT HARUS JADI ADMIN UNTUK MENGAKSES FITUR"
},{
"title": "Downloader Menu🚀",
"rowId": `.downloadmenu`,
"description": "Downloader Fitur Download YouTube, Dlll"
},{
"title": "Search Menu🔎",
"rowId": `.searchmenu`,
"description": "Search Menu Pencarian"
},{
"title": "Random Menu🎲",
"rowId": `.randommenu`,
"description": "Random ?"
},{
"title": "Convert Menu🎯",
"rowId": `.convertmenu`,
"description": "Sticker Dll"
},{
"title": "Main Menu☕",
"rowId": `.mainmenu`,
"description": "Fitur Biasa"
},{
"title": "Owner Menu👑",
"rowId": `.ownermenu`,
"description": "Fitur Yang Hanya Bisa Di Pakai Owner-Sama~👑"
},{
"title": "Random Anime🌈",
"rowId": `.randomanime`,
"description": "Yuka-Bot Akan Mengirim Gambar Anime Random!🎲"
},{
"title": "Nsfw Menu🥀",
"rowId": `.nsfwmenu`,
"description": "Yuka-Bot Akan Mengirim Gambar Hentai Random!🎲"
},{
"title": "Game Menu🎮",
"rowId": `.gamemenu`,
"description": "Macam Macam Game Yang Seru Buat Di Mainkan 🎮"
},{
"title": "Maker Menu⚙️",
"rowId": `.makermenu`,
"description": "Text Pro, Photooxy, Ephoto Maker ⚙️"
},{
"title": "All Menu🚀",
"rowId": `.allmenu`,
"description": "Menampilkan Seluruh Menu Yuka-Bot📝"
}]
}]
}
}), {mentionedJid: [m.sender],quoted:m})
await hisoka.relayMessage(m.chat, menulist.message,{ messageId: menulist.key.id, waitForAck: false }); 
}
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'waifu':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
m.reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
hisoka.sendImage(m.chat, data.url, mess.done, m)
//hisoka.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'waifu': case 'loli':
m.reply(lang.wait())
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
hisoka.sendImage(m.chat, data.url, mess.done, m)
})
break
case 'nsfw':
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
if (args[0] === "off") {
	if (database.allow.nsfw) return m.reply(`Sudah Nonaktifkan Sebelumnya`)
database.allow.nsfw = true
m.reply(`NsFw Berhasil Di Nonaktifkan !`)
} else if (args[0] === "on") {
	if (!database.allow.nsfw) return m.reply(`Sudah Aktif Sebelumnya`)
database.allow.nsfw = false
m.reply(`NsFw Berhasil Di Aktifkan !`)
} else {
let buttons10 = [{buttonId: `.nsfw on`, buttonText: {displayText: 'nsfw on'}, type: 1},{buttonId: `.nsfw off`, buttonText: {displayText: 'nsfw off'}, type: 1}]
let buttonMessage3 = {
text: `ON/OFF!! `,
footerText: 'Press The Button Below',
buttons: buttons10,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage3, { quoted: m })
//hisoka.sendButMessage(m.chat, 'Mode Nfsw', `© ${ownername}`, [{buttonId: 'nsfw on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'nsfw off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: m})
}
break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
if (database.allow.nsfw) return m.reply(`Fitur Nsfw Belum Aktif⚠️`)
m.reply(mess.wait)
axios.get(`https://kagoya-api.herokuapp.com/api/nsfw/${command}`)
.then(({data}) => {
hisoka.sendImage(m.chat, data.result, mess.done, m)
})
break
case 'antilink':
if (!m.isGroup) return m.reply(mess.group)
if (!isGroupAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === "on") {
if (database.allow.antilink) return m.reply(`Sudah Aktif Sebelumnya`)
database.allow.antilink = true
m.reply(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!database.allow.antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
database.allow.antilink = false
m.reply(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons11 = [{buttonId: `.antilink on`, buttonText: {displayText: 'antilink on'}, type: 1},{buttonId: `.antilink off`, buttonText: {displayText: 'antilink off'}, type: 1}]
let buttonMessage4 = {
text: `ON/OFF!! `,
footerText: 'Press The Button Below',
buttons: buttons11,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage4, { quoted: m })
//hisoka.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{buttonId: 'antilink on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antilink off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: m})
}
break
//game

case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await hisoka.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./lib/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
}
break
case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await hisoka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'My Rest Api',
url: 'https://kagoya-api.herokuapp.com'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 822-6062-4836'
}
}, {
quickReplyButton: {
displayText: 'S T A T U S B O T',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'O W N E R',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'R U L E S',
id: 'rules'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
default:
if (budy.startsWith('=>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m = String(err)
await m.reply(m)
}
}
if (budy.startsWith('$')) {
if (!isCreator && !m.key.fromMe) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
