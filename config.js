/*
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
   
 * Recode By Rasyid
 * Contact Me on wa.me/6282260624836
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '21204acd6f9d',
}

// Other
global.ownername = 'Rasyid '
global.owner = ['6282260624836']
global.packname = 'Created By Yuka-Bot  ❤️️'
global.author = 'Rasyid'
global.sessionName = 'Yuka-Md'
global.prefa = ['','!','.','🐦','🐤','🗿','🤤']
global.sp = '⭔'
global.mess = {
    admin: '🙅  Command ini hanya bisa digunakan oleh admin grup!',
    botAdmin: 'Jadikan bot sebagai admin terlebih dahulu! 🙏',
    owner: '⚠️ Command ini khusus Owner-sama! ⚠️',
    group: '👥  Command ini hanya bisa digunakan di dalam grup!',
    private: '⚡Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '♥️Fitur Khusus Pengguna Nomor Bot',
    done: 'Done, Oke Desu~♥️',
    wait: '```Loading, Desu~🚀```',
}
global.rules = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *.help* untuk memulai!

⚠️ Segala kebijakan dan ketentuan YukaBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan YukaBot
😖🙏`
global.thumb = fs.readFileSync('./lib/yuka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
