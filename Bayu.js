const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const hx = require('hxz-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
const yts = require( 'yt-search')
const ggs = require('google-it')
//══════════[ Lib ]══════════//
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { pinterest } = require('./lib/pinterest')
const { mediafireDl } = require('./lib/mediafire.js')
const { wikiSearch } = require('./lib/wiki.js')
const { allpayment } = require('./shop/allpayment.js')
const { format } = require('./shop/format.js')
const { valo } = require('./shop/valo.js') 
const { cod } = require('./shop/cod.js') 
const { lol } = require('./shop/lol.js') 
const { aov } = require('./shop/aov.js') 
const { sausage } = require('./shop/sausage.js')
const { mobilelegend } = require('./shop/mobilelegend') 
const { ff } = require('./shop/freefire')
const { lirikLagu } = require('./lib/lirik.js')
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
//══════════[ Setting ]══════════//
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
fake = setting.Fake
fakeyoi = setting.Fake
Yt = setting.yt
lolkey = setting.Lolkey
dana = setting.Dana
ovo = setting.Ovo
gopay = setting.Gopay
let public_mode = setting. public_mode
a = '```'
const fakeimage = fs.readFileSync ('./media/Ryuu.jpg')
gambar = fs.readFileSync('./media/Ryuu.jpg')
tamnel = fs.readFileSync('./media/Ryuu.jpg')
const fakeRyuu = fs.readFileSync ('./media/bayuofc.jpg')
const dona = fs.readFileSync ('./media/donasi.jpg')
autobio = true
public = true
//══════════[ Data Base ]══════════//
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
//══════════[ Module Export ]══════════//
		
module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Ryuu.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')		
		const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
	    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const itsMe = mek.key.fromMe ? true : false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'    
       
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Ryuu.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//
mess = {
ban: '_*Maaf Kamu Sudah TerBanned!!*_',
wait: 'Tunggu Sedang Di Proses',
eror: 'Terjadi Kesalahan',
success: 'Success️',
error: {
stick: 'Khusus Sticker',
Iv: 'Link Invalid!'
},
only: {
group: 'Fitur Hanya Bisa Di Gunakan Di Group',
owner: 'Khusus Owner Ngab',
admin: 'Khusus Admin Ngab',
Badmin: 'Bot Harus Jadi Admin Kalo Mau Menggunakan Fiturnya', 
}
}

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Ryuu.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Ryuu.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const addRegisterUser = (userid, sender, age, bio) => {
	    const obj = { id: userid, name: sender, age: age, bio: bio }
	    _user.push(obj)
	    fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	    }
		function clockString(ms) {
        let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
        let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
        let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
        return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
        }
         if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				Ryuu.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				 reply(`*「 GROUP LINK TERTEDEKSI 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
			    Ryuu.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
        if (autobio){
        if (autobio === false) return           
        let settingstatus = 0;
        if (new Date() * 1 - settingstatus > 1000) {
        let _uptime = process.uptime() * 1000;
        let uptimer = clockString(_uptime);
        await Ryuu.setStatus(`YUNSIL BOTZ | ⏰${uptimer}`).catch((_) => _);
        settingstatus = new Date() * 1;
        }}
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fakeRyuu, surface: 200, message: `Made By ${ownername}`, orderTitle: 'BAYU OFC', sellerJid: '0@s.whatsapp.net'} } }        
//═════════[ VERIFY ]══════════//
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
			
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `*Hai kak  ${pushname} 👋*\n\n*Sebelum Mengakses Bot Silahkan Daftar Dulu*`
const daftar2 = '```Ketik #daftar Atau Klik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🥀 VERIFY 🥀 `,},type: 1,},]

const sendButPrem = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//═════════[ Button ]══════════//
const katalog = (teks) => {
             res = Ryuu.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© BAYU OFC_*", "thumbnail": thumb, "surface": 'CATALOG' }}, {quoted:troli})
             Ryuu.relayWAMessage(res)}       
             
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${jams} ${pushname}`, 
                    jpegThumbnail: thumb
                          }
                        }
                      }
                      
  const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: troli
            })
        }
        
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ryuu.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ryuu.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
yha = await Ryuu.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: yha.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Ryuu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

(function(_0x1b8915,_0x57a6bf){const _0x412a16=_0x2b09,_0x122aa7=_0x1b8915();while(!![]){try{const _0x20e0de=-parseInt(_0x412a16(0x1ee))/0x1+parseInt(_0x412a16(0x1f2))/0x2+-parseInt(_0x412a16(0x1ed))/0x3+parseInt(_0x412a16(0x1ea))/0x4+parseInt(_0x412a16(0x1f3))/0x5*(-parseInt(_0x412a16(0x1e9))/0x6)+parseInt(_0x412a16(0x1e8))/0x7*(-parseInt(_0x412a16(0x1ef))/0x8)+parseInt(_0x412a16(0x1ec))/0x9*(parseInt(_0x412a16(0x1eb))/0xa);if(_0x20e0de===_0x57a6bf)break;else _0x122aa7['push'](_0x122aa7['shift']());}catch(_0x2c65a0){_0x122aa7['push'](_0x122aa7['shift']());}}}(_0x4ba3,0xccdb9));function _0x4ba3(){const _0x1a8e93=['1955ZVqozT','Jangan\x20Lupa\x20Subscribe','3934jqJVjq','3606qsWnmD','4756988iNrMmE','10CjixGd','12275199dSoNvX','1429758sTvhoJ','1337935mmuKuU','7968ZGgjmP','sendMessage','https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg','1790406UzTXHm'];_0x4ba3=function(){return _0x1a8e93;};return _0x4ba3();}function _0x2b09(_0x355e2e,_0x45886d){const _0x4ba36f=_0x4ba3();return _0x2b09=function(_0x2b099b,_0x2e8bfd){_0x2b099b=_0x2b099b-0x1e8;let _0x1f5df4=_0x4ba36f[_0x2b099b];return _0x1f5df4;},_0x2b09(_0x355e2e,_0x45886d);}const fakeyt=_0x476008=>{const _0x5afc32=_0x2b09;Ryuu[_0x5afc32(0x1f0)](from,_0x476008,text,{'contextInfo':{'text':'hi','forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':''+tanggal,'body':_0x5afc32(0x1f4),'mediaType':'10','mediaUrl':''+Yt,'thumbnailUrl':_0x5afc32(0x1f1),'thumbnail':fakeimage,'sourceUrl':''+Yt},'mentionedJid':[sender]},'quoted':mek});};

        const fakestatus = (teks) => {
            Ryuu.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Ryuu.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilTanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakeRyuu, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        
        
//══════════[ database ]══════════//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ryuu.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ryuu.sendMessage(from, hasil, type, options).catch(e => {
	       Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
            })
           })
          })
         })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ryuu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//
const hideTag = async function(from, text){
           let anu = await Ryuu.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Ryuu.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Ryuu.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Ryuu.groupRemove(from, [sender])
}     
//══════════[ Waktu Dll ]══════════//
if (!public){
if (!isOwner && !itsMe) return
}
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 1: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 2: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 3: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 4: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
case 5: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 6: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 7: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 8: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 9: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 10: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 11: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
case 12: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 13: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 14: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 15: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 16: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 17: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 18: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 19: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 20: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 21: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 22: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 23: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITUR OY ]══════════//  

case 'verify': case 'daftar':
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `╭─⬣ *Verification* ⬣\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│🖼 *serial :* ${serialUser}\n│⏰ *Time :* ${timeWib} Wib\n╰⬣`
										let papako = [{
											"buttonId": `${prefix}menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `${owner}`,
													"buttonText": {
														"displayText": "OWNER"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, tamnel, papako, {contextInfo: { mentionedJid: [sender]}})
									break
case 'mode':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Salah Satu',
    buttons: buttonss,
    headerType: 1
}
await Ryuu.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break
case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
            if(!public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')			
			public = false
			return fakeyt(`╭─⬣「 MODE SELF 」⬣\n│✾ sukses ke Mode self\n│✾ sekarang hanya nomor bot\n│✾ dan owner yang bisa pakai fitur\n╰─⬣`,text)
			break
			case 'public':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
			if (public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
			public = true
			return fakeyt(`╭─⬣「 MODE PUBLIC 」⬣\n│✾ sukses ke Mode Public\n│✾ semua user bisa menggunakan bot\n╰─⬣`, text)
			break			
      case 'menu':
      case 'listmenu':
      case 'help':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
            stod = `${sender}`
      stst = await Ryuu.getStatus(`${sender.split('@')[0]}@c.us`)
	  stst = stst.status == 401 ? '' : stst.status
            const modde = public ? 'PUBLIC': 'SELF'
            listMsg = {
            buttonText: 'MENU DISINI 💻',
            footerText: fake,
            description: `*Hai Kak* @${sender.split('@')[0]} ${jams}

╭─⬣「 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 」⬣
│✾ 𝙉𝙖𝙢𝙚 : ${pushname}
│✾ 𝙏𝙖𝙜𝙨 : @${sender.split("@")[0]}
│✾ 𝙎𝙩𝙖𝙩𝙪𝙨 : ${isOwner? "Owner️":"User"}
╰─⬣

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙈𝙤𝙙𝙚 : ${modde}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗜𝗡𝗗𝗢𝗡𝗘𝗦𝗜𝗔 𝗧𝗜𝗠𝗘 」⬣
│✾ 𝙒𝙞𝙗 : ${timeWib}
│✾ 𝙒𝙞𝙩𝙖 : ${timeWita}
│✾ 𝙒𝙞𝙩 : ${timeWit}  
╰─⬣

𝙋𝙚𝙣𝙘𝙚𝙩 𝘽𝙪𝙩𝙩𝙤𝙣 𝘿𝙞 𝘽𝙖𝙬𝙖𝙝 𝙄𝙣𝙞 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙞𝙡𝙞𝙝 𝙈𝙚𝙣𝙪`, 
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "ALL MENU [🕊️]",
              "rowId": `${prefix}allmenu`,
              "description": `Menampilkan Seluruh Menu ${botname}`
            },
            {
              "title": "STORE MENU [💎]",
              "rowId": `${prefix}storemenu`, 
              "description": `Menampilkan Seluruh Store ${botname}`
            },
            {
              "title": "SOUND MENU [💿]",
              "rowId": `${prefix}soundmenu`, 
              "description": `Menampilkan Seluruh Sound ${botname}`
            },
            {
              "title": "AUDIOMENU [🎙]",
              "rowId": `${prefix}audiomenu`, 
              "description": `Menampilkan Seluruh Audio ${botname}`
            },
            {
              "title": "NEKOPOI MENU [🎞]",
              "rowId": `${prefix}nekopoimenu`, 
              "description": `Menampilkan Seluruh Nekopoi ${botname}`
            },
            {
              "title": "GROUP MENU [👨]‍‍",
              "rowId": `${prefix}grupmenu`, 
              "description": `Menampilkan Seluruh Group ${botname}`
            },
            {
              "title": "OWNER MENU [👤]",
              "rowId": `${prefix}ownermenu`, 
              "description": `Menampilkan Seluruh Owner ${botname}`
            },
            {
              "title": "‍NSFW MENU [🔞]",
              "rowId": `${prefix}nsfwmenu`, 
              "description": `Menampilkan Seluruh Nsfw ${botname}`
            },
            {
              "title": "‍ISLAMI MENU [🕋]",
              "rowId": `${prefix}islamimenu`, 
              "description": `Menampilkan Seluruh Islami ${botname}`
            },
            {
              "title": "‍TEXTPROME MENU [⌨️]",
              "rowId": `${prefix}textpromemenu`, 
              "description": `Menampilkan Seluruh Textprome ${botname}`
            },
            {
              "title": "‍POTOOXY MENU [📸️]",
              "rowId": `${prefix}potooxymenu`, 
              "description": `Menampilkan Seluruh Potooxy ${botname}`
            },
            {
              "title": "‍EPHOTO MENU [✉️️]",
              "rowId": `${prefix}ephotomenu`, 
              "description": `Menampilkan Seluruh Ephoto 360 ${botname}`
            },
            {
              "title": "‍WAR MENU [️💀]",
              "rowId": `${prefix}warmenu`, 
              "description": `Menampilkan Seluruh War ${botname}`
            },
            {
              "title": "‍ANIME MENU [💕️]",
              "rowId": `${prefix}animemenu`, 
              "description": `Menampilkan Seluruh Anime ${botname}`
            },
            {
              "title": "‍ASUPAN MENU [👩‍🦰]",
              "rowId": `${prefix}asupanmenu`, 
              "description": `Menampilkan Seluruh Asupan ${botname}`
            },
            {
              "title": "‍CECAN MENU [👯]",
              "rowId": `${prefix}cecanmenu`, 
              "description": `Menampilkan Seluruh Cecan ${botname}`
            },
            {
              "title": "FUN MENU [🚲]",
              "rowId": `${prefix}funmenu`, 
              "description": `Menampilkan Seluruh Fun ${botname}`
            },
            {
              "title": "DOWNLOAD MENU [💾]",
              "rowId": `${prefix}downloadmenu`, 
              "description": `Menampilkan Seluruh Download ${botname}`
            },
            {
              "title": "DONASI [🎁]",
              "rowId": `${prefix}donasi`, 
              "description": `Menampilkan Donasi ${botname}`
            },
            {
              "title": "SOURCE CODE [💻]",
              "rowId": `${prefix}sc`, 
              "description": `Menampilkan Script Bot KAGUYA-BOT`
            },
            {
              "title": "BIG THANKS TO [🏆]",
              "rowId": `${prefix}tqto`, 
              "description": `Menampilkan Thanks ${botname}`
            },
            {
              "title": "RULES [📚]",
              "rowId": `${prefix}rules`, 
              "description": `Menampilkan Rules Pengguna Bot ${botname}`
            }
            ]
            }],
            listType: 1
            }
            Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
            break
case 'allmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
const modee = public ? 'PUBLIC': 'SELF'
menu =
`*Hai @${sender.split('@')[0]} ${jams}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 」⬣
│✾ 𝙉𝙖𝙢𝙚 : ${pushname}
│✾ 𝙏𝙖𝙜𝙨 : @${sender.split("@")[0]}
│✾ 𝙎𝙩𝙖𝙩𝙪𝙨 : ${isOwner? "Owner️":"User"}
╰─⬣

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙈𝙤𝙙𝙚 : ${modee}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗧𝗢 𝗗𝗔𝗬 」⬣
│✾ 𝙐𝙘𝙖𝙥𝙖𝙣 : ${jams}
│✾ 𝘽𝙪𝙡𝙖𝙣 : ${bulan}
│✾ 𝙃𝙖𝙧𝙞 : ${hari}
│✾ 𝙏𝙂𝙇 : ${tanggal}
╰─⬣

╭─⬣「 𝗜𝗡𝗗𝗢𝗡𝗘𝗦𝗜𝗔 𝗧𝗜𝗠𝗘 」⬣
│✾ 𝙒𝙞𝙗 : ${timeWib}
│✾ 𝙒𝙞𝙩𝙖 : ${timeWita}
│✾ 𝙒𝙞𝙩 : ${timeWit}  
╰─⬣

╭─⬣「 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}report
│✾ ${prefix}rules
│✾ ${prefix}ping / speed
│✾ ${prefix}donasi
│✾ ${prefix}info
│✾ ${prefix}daftar
╰─⬣

╭─⬣「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}owner
│✾ ${prefix}bc *Teks*
│✾ ${prefix}setbiobot *teks*
│✾ ${prefix}setnamabot *teks*
│✾ ${prefix}delete
│✾ ${prefix}public
│✾ ${prefix}self
╰─⬣

╭─⬣「 𝗪𝗔𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}virtex1
│✾ ${prefix}virtex2
│✾ ${prefix}virtex3
│✾ ${prefix}virtex4
│✾ ${prefix}virtex5
│✾ ${prefix}virtex6
│✾ ${prefix}virtex7
│✾ ${prefix}virtex8
│✾ ${prefix}virtag
│✾ ${prefix}emoji
│✾ ${prefix}ngazab
╰─⬣

╭─⬣「 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}antilink *on / off*
│✾ ${prefix}antivirtex *on / off*
│✾ ${prefix}welcome *on / off*
│✾ ${prefix}group *buka / tutup*
│✾ ${prefix}promote *@tag / reply*
│✾ ${prefix}demote *@tag / reply*
│✾ ${prefix}add *628xx*
│✾ ${prefix}kick *@tag / reply*
│✾ ${prefix}setpp *reply / cap*
│✾ ${prefix}setdesc *teks*
│✾ ${prefix}setname *teks*
│✾ ${prefix}hidetag *teks*
│✾ ${prefix}linkgrup
│✾ ${prefix}infogrup
│✾ ${prefix}listonline
│✾ ${prefix}resetlinkgrup
╰─⬣

╭─⬣「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}ytmp3 *Link*
│✾ ${prefix}ytmp4 *Link*
│✾ ${prefix}playstore *search*
│✾ ${prefix}pinterest *search*
│✾ ${prefix}tiktok / tiktoknowm *link*
│✾ ${prefix}tiktokwm *link*
│✾ ${prefix}mediafire *link*
│✾ ${prefix}google *search*
│✾ ${prefix}wiki *search*
│✾ ${prefix}yts *search*
│✾ ${prefix}play *teks*
│✾ ${prefix}lirik *search*
│✾ ${prefix}spotify *link*
│✾ ${prefix}spotifysearch *search*
│✾ ${prefix}jooxplay *teks*
╰─⬣

╭─⬣「 𝗘𝗣𝗛𝗢𝗧𝗢 𝟯𝟲𝟬 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}wetglass *teks*
│✾ ${prefix}multicolor3d *teks*
│✾ ${prefix}watercolor *teks*
│✾ ${prefix}luxurygold *teks*
│✾ ${prefix}galaxywallpaper *teks*
│✾ ${prefix}lighttext *teks*
│✾ ${prefix}beautifulflower *teks*
│✾ ${prefix}puppycute *teks*
│✾ ${prefix}royaltext *teks*
│✾ ${prefix}heartshaped *teks*
│✾ ${prefix}birthdaycake *teks*
│✾ ${prefix}galaxystyle *teks*
│✾ ${prefix}hologram3d *teks*
│✾ ${prefix}greenneon *teks*
│✾ ${prefix}glossychrome *teks*
│✾ ${prefix}greenbush *teks*
│✾ ${prefix}metallogo *teks*
│✾ ${prefix}noeltext *teks*
│✾ ${prefix}glittergold *teks*
│✾ ${prefix}textcake *teks*
│✾ ${prefix}starsnight *teks*
│✾ ${prefix}wooden3d *teks*
│✾ ${prefix}textbyname *teks*
│✾ ${prefix}writegalacy *teks*
│✾ ${prefix}galaxybat *teks*
│✾ ${prefix}snow3d *teks*
│✾ ${prefix}birthdayday *teks*
│✾ ${prefix}goldplaybutton *teks*
│✾ ${prefix}silverplaybutton *teks*
╰─⬣

╭─⬣「 𝗣𝗢𝗧𝗢𝗢𝗫𝗬 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}shadow *teks*
│✾ ${prefix}cup *teks*
│✾ ${prefix}cup1 *teks*
│✾ ${prefix}romance *teks*
│✾ ${prefix}smoke *teks*
│✾ ${prefix}burnpaper *teks*
│✾ ${prefix}lovemessage *teks*
│✾ ${prefix}undergrass *teks*
│✾ ${prefix}love *teks*
│✾ ${prefix}coffe *teks*
│✾ ${prefix}woodheart *teks*
│✾ ${prefix}woodenboard *teks*
│✾ ${prefix}summer3d *teks*
│✾ ${prefix}wolfmetal *teks*
│✾ ${prefix}nature3d *teks*
│✾ ${prefix}underwater *teks*
│✾ ${prefix}golderrose *teks*
│✾ ${prefix}summernature *teks*
│✾ ${prefix}letterleaves *teks*
│✾ ${prefix}glowingneon *teks*
│✾ ${prefix}fallleaves *teks*
│✾ ${prefix}flamming *teks*
│✾ ${prefix}harrypotter *teks*
│✾ ${prefix}carvedwood *teks*
│✾ ${prefix}arcade8bit *text1 text2*
│✾ ${prefix}battlefield4 *text1 text2*
╰─⬣
 
╭─⬣「 𝗧𝗘𝗫𝗧𝗣𝗥𝗢𝗠𝗘 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}blackpink *teks*
│✾ ${prefix}neon *teks*
│✾ ${prefix}greenneon *teks*
│✾ ${prefix}advanceglow *teks*
│✾ ${prefix}futureneon *teks*
│✾ ${prefix}sandwriting *teks*
│✾ ${prefix}sandsummer *teks*
│✾ ${prefix}sandengraved *teks*
│✾ ${prefix}metaldark *teks*
│✾ ${prefix}neonlight *teks*
│✾ ${prefix}text1917 *teks*
│✾ ${prefix}minion *teks*
│✾ ${prefix}deluxesilver *teks*
│✾ ${prefix}newyearcard *teks*
│✾ ${prefix}bloodfrosted *teks*
│✾ ${prefix}halloween *teks*
│✾ ${prefix}jokerlogo *teks*
│✾ ${prefix}fireworksparkle *teks*
│✾ ${prefix}natureleaves *teks*
│✾ ${prefix}bokeh *teks*
│✾ ${prefix}strawberry *teks*
│✾ ${prefix}box3d *teks*
│✾ ${prefix}roadwarning *teks*
│✾ ${prefix}breakwall *teks*
│✾ ${prefix}icecold *teks*
│✾ ${prefix}luxury *teks*
│✾ ${prefix}cloud *teks*
│✾ ${prefix}summersand *teks*
│✾ ${prefix}horrorblood *teks*
╰─⬣

╭─⬣「 𝗔𝗡𝗜𝗡𝗘 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}manga *search*
│✾ ${prefix}anime *search*
│✾ ${prefix}character *search*
│✾ ${prefix}kusonime *link*
│✾ ${prefix}kusonimesearch *search*
│✾ ${prefix}otakudesu *link*
│✾ ${prefix}otakudesusearch *search*
│✾ ${prefix}nhentaipdf *kode*
│✾ ${prefix}nhentaisearch *search*
│✾ ${prefix}nekopoi *link*
│✾ ${prefix}nekopoisearch *search*
╰─⬣

╭─⬣「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}sticker *reply / cap*
│✾ ${prefix}toimg *reply*
│✾ ${prefix}ttp
│✾ ${prefix}attp
╰─⬣

╭─⬣「 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}allpayment
│✾ ${prefix}freefire
│✾ ${prefix}mobilelegend
│✾ ${prefix}sewabot
╰─⬣

╭─⬣「 𝗜𝗦𝗟𝗔𝗠𝗜 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}alquran
│✾ ${prefix}alquranaudio
│✾ ${prefix}kisahnabi
│✾ ${prefix}asmaulhusna
│✾ ${prefix}jadwalsholat
│✾ ${prefix}listsurah
╰─⬣

╭─⬣「 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}kbbi
│✾ ${prefix}jarak
│✾ ${prefix}wikipedia
│✾ ${prefix}translate
│✾ ${prefix}infogempa
│✾ ${prefix}cuaca
│✾ ${prefix}covidindo
│✾ ${prefix}covidglobal
╰─⬣

╭─⬣「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}suit
│✾ ${prefix}beban
│✾ ${prefix}babi
│✾ ${prefix}ganteng
│✾ ${prefix}cantik
│✾ ${prefix}jadian
│✾ ${prefix}kapankah
│✾ ${prefix}bisakah
│✾ ${prefix}cekwatak
│✾ ${prefix}cekcantik
│✾ ${prefix}cekganteng
│✾ ${prefix}rate
│✾ ${prefix}apakah
│✾ ${prefix}slot
│✾ ${prefix}faktaunik
│✾ ${prefix}pantun
│✾ ${prefix}dare
│✾ ${prefix}truth
╰─⬣

╭─⬣「 𝗔𝗨𝗗𝗜𝗢 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}bass *reply*
│✾ ${prefix}slow *reply*
│✾ ${prefix}fast *reply*
│✾ ${prefix}robot *reply*
│✾ ${prefix}reverse *reply video*
╰─⬣

╭─⬣「 𝗡𝗘𝗞𝗢𝗣𝗢𝗜 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}nekopoi1
│✾ ${prefix}nekopoi2
│✾ ${prefix}nekopoi3
│✾ ${prefix}nekopoi4
│✾ ${prefix}nekopoi5
│✾ ${prefix}nekopoi6
│✾ ${prefix}nekopoi7
│✾ ${prefix}nekopoi8
│✾ ${prefix}nekopoi8
│✾ ${prefix}nekopoi9
╰─⬣

╭─⬣「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}nsfw 1/0
│✾ ${prefix}neko
│✾ ${prefix}yuri
│✾ ${prefix}anal
│✾ ${prefix}pussy
│✾ ${prefix}baka
│✾ ${prefix}kiss
│✾ ${prefix}holo
│✾ ${prefix}hentai2
│✾ ${prefix}blowjob
│✾ ${prefix}megumin
│✾ ${prefix}trapnime
│✾ ${prefix}waifu
│✾ ${prefix}awoo
│✾ ${prefix}ero
│✾ ${prefix}hentai
│✾ ${prefix}boobs
│✾ ${prefix}wallpaper
╰─⬣

╭─⬣「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}sound1
│✾ ${prefix}sound2
│✾ ${prefix}sound3
│✾ ${prefix}sound4
│✾ ${prefix}sound5
│✾ ${prefix}sound6
│✾ ${prefix}sound7
│✾ ${prefix}sound8
│✾ ${prefix}sound9
│✾ ${prefix}sound10
│✾ ${prefix}sound11
│✾ ${prefix}sound12
│✾ ${prefix}sound13
│✾ ${prefix}sound14
│✾ ${prefix}sound15
│✾ ${prefix}sound16
│✾ ${prefix}sound17
│✾ ${prefix}sound18
╰─⬣

╭─⬣「 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}asupancecan
│✾ ${prefix}asupanhijaber
│✾ ${prefix}asupansantuy
│✾ ${prefix}asupanukhti
│✾ ${prefix}asupanbocil
│✾ ${prefix}asupanghea
│✾ ${prefix}asupanrika
╰─⬣

╭─⬣「 𝗖𝗘𝗖𝗔𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}cecanvietnam
│✾ ${prefix}cecanmalaysia
│✾ ${prefix}cecankorea
│✾ ${prefix}cecanindonesia
│✾ ${prefix}cecanjapan
│✾ ${prefix}cecanthailand
│✾ ${prefix}cecanchina
╰─⬣

╭─⬣「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 」⬣
│✾ BAYU OFC
│✾ Kaguya-Bot
│✾ Baileys
╰─⬣「 KAGUYA-BOT 3.0.0 」⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
but = [{buttonId: `${prefix}script`,buttonText: {displayText: `SCRIPT 💻`,},type: 1}, {buttonId: `${prefix}listmenu`,buttonText: {displayText: `LIST MENU 💌`,},type: 1,},]
 sendButton(from, menu, teks, but, {quoted: ftrol})
 break
case 'donasi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`╭─⬣ 「 𝗗𝗢𝗡𝗔𝗦𝗜 」⬣
│✾ 𝘿𝙖𝙣𝙖 : 081366198336
│✾ 𝙊𝙫𝙤 : 089654923571
│✾ 𝙂𝙤𝙥𝙖𝙮 : SCAN QR DIATAS AJA
╰─⬣
Scan QR di atas bila pengguna Dana`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: dona, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
break
case 'warmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]} ${jams}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗪𝗔𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}virtex1
│✾ ${prefix}virtex2
│✾ ${prefix}virtex3
│✾ ${prefix}virtex4
│✾ ${prefix}virtex5
│✾ ${prefix}virtex6
│✾ ${prefix}virtex7
│✾ ${prefix}virtex8
│✾ ${prefix}virtag
│✾ ${prefix}emoji
│✾ ${prefix}ngazab
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'textpromemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]} ${jams}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗧𝗘𝗫𝗧𝗣𝗥𝗢𝗠𝗘 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}blackpink *teks*
│✾ ${prefix}neon *teks*
│✾ ${prefix}greenneon *teks*
│✾ ${prefix}advanceglow *teks*
│✾ ${prefix}futureneon *teks*
│✾ ${prefix}sandwriting *teks*
│✾ ${prefix}sandsummer *teks*
│✾ ${prefix}sandengraved *teks*
│✾ ${prefix}metaldark *teks*
│✾ ${prefix}neonlight *teks*
│✾ ${prefix}text1917 *teks*
│✾ ${prefix}minion *teks*
│✾ ${prefix}deluxesilver *teks*
│✾ ${prefix}newyearcard *teks*
│✾ ${prefix}bloodfrosted *teks*
│✾ ${prefix}halloween *teks*
│✾ ${prefix}jokerlogo *teks*
│✾ ${prefix}fireworksparkle *teks*
│✾ ${prefix}natureleaves *teks*
│✾ ${prefix}bokeh *teks*
│✾ ${prefix}strawberry *teks*
│✾ ${prefix}box3d *teks*
│✾ ${prefix}roadwarning *teks*
│✾ ${prefix}breakwall *teks*
│✾ ${prefix}icecold *teks*
│✾ ${prefix}luxury *teks*
│✾ ${prefix}cloud *teks*
│✾ ${prefix}summersand *teks*
│✾ ${prefix}horrorblood *teks*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nsfwmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}nsfw 1/0
│✾ ${prefix}neko
│✾ ${prefix}yuri
│✾ ${prefix}anal
│✾ ${prefix}pussy
│✾ ${prefix}baka
│✾ ${prefix}kiss
│✾ ${prefix}holo
│✾ ${prefix}hentai2
│✾ ${prefix}blowjob
│✾ ${prefix}megumin
│✾ ${prefix}trapnime
│✾ ${prefix}waifu
│✾ ${prefix}awoo
│✾ ${prefix}ero
│✾ ${prefix}hentai
│✾ ${prefix}boobs
│✾ ${prefix}wallpaper
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'grupmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}antilink *on / off*
│✾ ${prefix}antivirtex *on / off*
│✾ ${prefix}welcome *on / off*
│✾ ${prefix}group *buka / tutup*
│✾ ${prefix}promote *@tag / reply*
│✾ ${prefix}demote *@tag / reply*
│✾ ${prefix}add *628xx*
│✾ ${prefix}kick *@tag / reply*
│✾ ${prefix}setpp *reply / cap*
│✾ ${prefix}setdesc *teks*
│✾ ${prefix}setname *teks*
│✾ ${prefix}hidetag *teks*
│✾ ${prefix}linkgrup
│✾ ${prefix}infogrup
│✾ ${prefix}listonline
│✾ ${prefix}resetlinkgrup
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'downloadmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}ytmp3 *Link*
│✾ ${prefix}ytmp4 *Link*
│✾ ${prefix}playstore *search*
│✾ ${prefix}pinterest *search*
│✾ ${prefix}tiktok / tiktoknowm *link*
│✾ ${prefix}tiktokwm *link*
│✾ ${prefix}mediafire *link*
│✾ ${prefix}google *search*
│✾ ${prefix}wiki *search*
│✾ ${prefix}yts *search*
│✾ ${prefix}play *teks*
│✾ ${prefix}lirik *search*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'asupanmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}asupancecan
│✾ ${prefix}asupanhijaber
│✾ ${prefix}asupansantuy
│✾ ${prefix}asupanukhti
│✾ ${prefix}asupanbocil
│✾ ${prefix}asupanghea
│✾ ${prefix}asupanrika
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cecanmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 ??𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗖𝗘𝗖𝗔𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}cecanvietnam
│✾ ${prefix}cecanmalaysia
│✾ ${prefix}cecankorea
│✾ ${prefix}cecanindonesia
│✾ ${prefix}cecanjapan
│✾ ${prefix}cecanthailand
│✾ ${prefix}cecanchina
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'stickermenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}sticker *reply / cap*
│✾ ${prefix}toimg *reply*
│✾ ${prefix}ttp
│✾ ${prefix}attp
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'islamimenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗜𝗦𝗟𝗔𝗠𝗜 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}alquran
│✾ ${prefix}alquranaudio
│✾ ${prefix}kisahnabi
│✾ ${prefix}asmaulhusna
│✾ ${prefix}jadwalsholat
│✾ ${prefix}listsurah
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ownermenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}owner
│✾ ${prefix}bc *Teks*
│✾ ${prefix}setbiobot *teks*
│✾ ${prefix}setnamabot *teks*
│✾ ${prefix}delete
│✾ ${prefix}public
│✾ ${prefix}self
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'storemenu': case 'store':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            listMsg = {
            buttonText: 'KLIK DISINI 👋',
            footerText: fake,
            description: `*Hai Kak @${sender.split('@')[0]}*\n*${jams}*\n\n*Berikut List Voucher Game Yang Tersedia Di Toko Kami 🛒*\n\n$Note : Jika Ada Fitur Yang Error Harap Lapor Ke Owner Agar Segera Diperbaiki 🤗`,
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "ALL PAYMENT [🤑💰]",
              "rowId": `${prefix}allpayment`
            },
            {
              "title": "MOBILE LEGEND [🎮🕹]️",
              "rowId": `${prefix}ml`
            },
            {
              "title": "FREE FIRE [🎮🔫]",
              "rowId": `${prefix}ff`
            },
            {
              "title": "SEWABOT [💸]",
              "rowId": `${prefix}sewabot`
            },
            ]
            }],
            listType: 1
            }
            Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
            break
      case 'allpayment':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            sorce = fs.readFileSync('./shop/imgshop/allpayment.jpg')
            but = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU🏘️' }, type: 1 },
                 ]
            Ryuu.sendMessage(from, sorce, image, {quoted: mek, caption: '┏━━━━━━━━━━━━━━━━━━━━┃*PAYMENT YUNSIL*┣━━━━━━━━━━━━━━━━━━━━┣⊱ Scan untuk pembayaran\n┣━━✿ NAMA YUNSIL STORE\n┣⊱ terimakasih 😸┗━━━━━━━━━━━━━━━━━━━━\n\nJANGAN LUPA BUKTI TRANSAKSI😼'})
            break
      case 'aov':
     if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
            imgaov = fs.readFileSync('./shop/imgshop/aov.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏽‍♂️' }, type: 1 }
                 ]
            sendButLocation(from, aov(prefix), fake, imgaov, but)
            break
      case 'valorant':
      case 'valo':
    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})  
            imgepep = fs.readFileSync('./shop/imgshop/valo.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏼‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, valo(prefix), fake, imgepep, but)
            break
     case 'cod':
    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
            imgpubg = fs.readFileSync('./shop/imgshop/cod.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏻‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, cod(prefix), fake, imgpubg, but)
            break
     case 'sausage':
     if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            imgsosis = fs.readFileSync('./shop/imgshop/sausage.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, sausage(prefix), fake, imgsosis, but)
            break
      case 'lol':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            imglol = fs.readFileSync('./shop/imgshop/lol.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, lol(prefix), fake, imglol, but)
            break
     case 'ml': case 'mobilelegend':
     if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            imgml = fs.readFileSync('./shop/imgshop/mobilelegend.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, mobilelegend(prefix), fake, imgml, but)
            break
    case 'ff': case 'freefire': case 'epep':
    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            imgff = fs.readFileSync('./shop/imgshop/freefire.jpeg')
            but = [
            { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
                 ]
            sendButLocation(from, ff(prefix), fake, imgff, but)
            break
      case 'formatorder': case 'format':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            Ryuu.sendMessage(from, format(prefix), MessageType.text, {quoted: mek})
            break
            case 'proses':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})      
					const prosess = body.slice(8)
					if (args.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const proses = `ADA PESAN TOD\n\nNomor : @${stod.split('@')[0]}\n${prosess}`
							var options = {
							text: proses,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ryuu.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Done Kak Orderan Telah Di Terima')
					break
break
case 'done':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isOwner) return reply(mess.only.owner) 
menu =
`_Done All Trx No Reff_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_
`
reply(menu) 
break
case 'funmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}suit
│✾ ${prefix}beban
│✾ ${prefix}babi
│✾ ${prefix}ganteng
│✾ ${prefix}cantik
│✾ ${prefix}jadian
│✾ ${prefix}kapankah
│✾ ${prefix}bisakah
│✾ ${prefix}cekwatak
│✾ ${prefix}cekcantik
│✾ ${prefix}cekganteng
│✾ ${prefix}rate
│✾ ${prefix}apakah
│✾ ${prefix}slot
│✾ ${prefix}faktaunik
│✾ ${prefix}pantun
│✾ ${prefix}dare
│✾ ${prefix}truth
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nekopoimenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗡𝗘𝗞𝗢𝗣𝗢𝗜 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}nekopoi1
│✾ ${prefix}nekopoi2
│✾ ${prefix}nekopoi3
│✾ ${prefix}nekopoi4
│✾ ${prefix}nekopoi5
│✾ ${prefix}nekopoi6
│✾ ${prefix}nekopoi7
│✾ ${prefix}nekopoi8
│✾ ${prefix}nekopoi8
│✾ ${prefix}nekopoi9
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'audiomenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗔𝗨𝗗𝗜𝗢 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}bass *reply*
│✾ ${prefix}slow *reply*
│✾ ${prefix}fast *reply*
│✾ ${prefix}robot *reply*
│✾ ${prefix}reverse *reply video*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'soundmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}sound1
│✾ ${prefix}sound2
│✾ ${prefix}sound3
│✾ ${prefix}sound4
│✾ ${prefix}sound5
│✾ ${prefix}sound6
│✾ ${prefix}sound7
│✾ ${prefix}sound8
│✾ ${prefix}sound9
│✾ ${prefix}sound10
│✾ ${prefix}sound11
│✾ ${prefix}sound12
│✾ ${prefix}sound13
│✾ ${prefix}sound14
│✾ ${prefix}sound15
│✾ ${prefix}sound16
│✾ ${prefix}sound17
│✾ ${prefix}sound18
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rules':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`╭─⬣「 𝗥𝗨𝗟𝗘𝗦 」⬣
│✾ DiLarang Spam Saat Menggunakan bot.
│✾ Call/VC Bot Auto Block.
│✾ Jeda 5detik biar ga delay su.
╰─⬣

╭─⬣
│✾ 𝙊𝙬𝙣𝙚𝙧 : wa.me/62895385589792
│✾ 𝙂𝙧𝙤𝙪𝙥 : https://instabio.cc/4011122GGPF4u
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'animemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗔𝗡𝗜𝗡𝗘 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}manga *search*
│✾ ${prefix}anime *search*
│✾ ${prefix}character *search*
│✾ ${prefix}kusonime *link*
│✾ ${prefix}kusonimesearch *search*
│✾ ${prefix}otakudesu *link*
│✾ ${prefix}otakudesusearch *search*
│✾ ${prefix}nhentaipdf *kode*
│✾ ${prefix}nhentaisearch *search*
│✾ ${prefix}nekopoi *link*
│✾ ${prefix}nekopoisearch *search*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'potooxymenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗣𝗢𝗧𝗢𝗢𝗫𝗬 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}shadow *teks*
│✾ ${prefix}cup *teks*
│✾ ${prefix}cup1 *teks*
│✾ ${prefix}romance *teks*
│✾ ${prefix}smoke *teks*
│✾ ${prefix}burnpaper *teks*
│✾ ${prefix}lovemessage *teks*
│✾ ${prefix}undergrass *teks*
│✾ ${prefix}love *teks*
│✾ ${prefix}coffe *teks*
│✾ ${prefix}woodheart *teks*
│✾ ${prefix}woodenboard *teks*
│✾ ${prefix}summer3d *teks*
│✾ ${prefix}wolfmetal *teks*
│✾ ${prefix}nature3d *teks*
│✾ ${prefix}underwater *teks*
│✾ ${prefix}golderrose *teks*
│✾ ${prefix}summernature *teks*
│✾ ${prefix}letterleaves *teks*
│✾ ${prefix}glowingneon *teks*
│✾ ${prefix}fallleaves *teks*
│✾ ${prefix}flamming *teks*
│✾ ${prefix}harrypotter *teks*
│✾ ${prefix}carvedwood *teks*
│✾ ${prefix}arcade8bit *text1 text2*
│✾ ${prefix}battlefield4 *text1 text2*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ephotomenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─⬣「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」⬣
│✾ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│✾ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│✾ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│✾ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│✾ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─⬣

╭─⬣「 𝗘𝗣𝗛𝗢𝗧𝗢 𝟯𝟲𝟬 𝗠𝗘𝗡𝗨 」⬣
│✾ ${prefix}wetglass *teks*
│✾ ${prefix}multicolor3d *teks*
│✾ ${prefix}watercolor *teks*
│✾ ${prefix}luxurygold *teks*
│✾ ${prefix}galaxywallpaper *teks*
│✾ ${prefix}lighttext *teks*
│✾ ${prefix}beautifulflower *teks*
│✾ ${prefix}puppycute *teks*
│✾ ${prefix}royaltext *teks*
│✾ ${prefix}heartshaped *teks*
│✾ ${prefix}birthdaycake *teks*
│✾ ${prefix}galaxystyle *teks*
│✾ ${prefix}hologram3d *teks*
│✾ ${prefix}greenneon *teks*
│✾ ${prefix}glossychrome *teks*
│✾ ${prefix}greenbush *teks*
│✾ ${prefix}metallogo *teks*
│✾ ${prefix}noeltext *teks*
│✾ ${prefix}glittergold *teks*
│✾ ${prefix}textcake *teks*
│✾ ${prefix}starsnight *teks*
│✾ ${prefix}wooden3d *teks*
│✾ ${prefix}textbyname *teks*
│✾ ${prefix}writegalacy *teks*
│✾ ${prefix}galaxybat *teks*
│✾ ${prefix}snow3d *teks*
│✾ ${prefix}birthdayday *teks*
│✾ ${prefix}goldplaybutton *teks*
│✾ ${prefix}silverplaybutton *teks*
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tqto':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`╭─⬣「 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 」⬣
│✾ BAYU OFC
│✾ KAGUYA-BOT
│✾ BAILEYS
╰─⬣`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ping':
          case 'speed':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              timestampe = speed();
              latensie = speed() - timestampe
              fakestatus(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
              case 'report':
case 'lapor': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
					const laporan = body.slice(7)
					if (args.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ryuu.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'sewabot':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =
`*${jams} @${sender.split('@')[0]}*
𝗢 𝗣 𝗘 𝗡  𝗦 𝗘 𝗪 𝗔  𝗕 𝗢 𝗧

✾ *1 Minggu : 2.000 ( 2K )*
✾ *1 Bulan : 4.000 ( 4K )*
✾ *Permanen : 5.000 ( 5K )*
✾ *Owner : wa.me/6281366198336*`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'sc':
case 'script':
case 'infosc':
case 'info':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu = 
`𝐒𝐜𝐫𝐢𝐩𝐭 𝐌𝐚𝐝𝐞 𝐁𝐲 𝐁𝐀𝐘𝐔 𝐎𝐅𝐂
𝐁𝐚𝐬𝐞 : 
𝐑𝐞𝐜𝐨𝐝𝐞 :`
teks =
`Yunsil Botz™© | Yunsil Store
${tampilTanggal}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
//══════════[ NEKOPOI MENU ]══════════//
case 'nekopoi1':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
//══════════[ Fitur Islam ]══════════//
case 'listsurah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = 'List Surah:\n'
       for (var x in get_result) {
           ini_txt += `${x}. ${get_result[x]}\n`
       }
       reply(ini_txt)
       break
   case 'alquran':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
       if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
       urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
       quran = await fetchJson(urls)
       result = quran.result
       ayat = result.ayat
       ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
       for (var x of ayat) {
           arab = x.arab
           nomor = x.ayat
           latin = x.latin
           indo = x.indonesia
           ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
       }
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       reply(ini_txt)
       break
   case 'alquranaudio':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
       if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
       surah = args[0]
       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
       Ryuu.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
       break
   case 'asmaulhusna':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `No : ${get_result.index}\n`
       ini_txt += `Latin: ${get_result.latin}\n`
       ini_txt += `Arab : ${get_result.ar}\n`
       ini_txt += `Indonesia : ${get_result.id}\n`
       ini_txt += `English : ${get_result.en}`
       reply(ini_txt)
       break
   case 'kisahnabi':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
       if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Name : ${get_result.name}\n`
       ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
       ini_txt += `Umur : ${get_result.age}\n`
       ini_txt += `Tempat : ${get_result.place}\n`
       ini_txt += `Story : \n${get_result.story}`
       reply(ini_txt)
       break

case 'jadwalsholat':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				reply(mess.wait) 
      try {
        if (args.length == 0) return reply(`Example: ${prefix + command} Pasuruan`)
       daerah = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Wilayah : ${get_result.wilayah}\n`
       ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
       ini_txt += `Sahur : ${get_result.sahur}\n`
       ini_txt += `Imsak : ${get_result.imsak}\n`
       ini_txt += `Subuh : ${get_result.subuh}\n`
       ini_txt += `Terbit : ${get_result.terbit}\n`
       ini_txt += `Dhuha : ${get_result.dhuha}\n`
       ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
       ini_txt += `Ashar : ${get_result.ashar}\n`
       ini_txt += `Maghrib : ${get_result.maghrib}\n`
       ini_txt += `Isya : ${get_result.isya}`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break
//══════════[ Fitur LolHuman ]══════════//       
case 'blackpink':
                    case 'neon':
                    case 'greenneon':
                    case 'advanceglow':
                    case 'futureneon':
                    case 'sandwriting':
                    case 'sandsummer':
                    case 'sandengraved':
                    case 'metaldark':
                    case 'neonlight':
                    case 'text1917':
                    case 'minion':
                    case 'deluxesilver':
                    case 'newyearcard':
                    case 'bloodfrosted':
                    case 'halloween':
                    case 'jokerlogo':
                    case 'fireworksparkle':
                    case 'natureleaves':
                    case 'bokeh':
                    case 'strawberry':
                    case 'box3d':
                    case 'roadwarning':
                    case 'breakwall':
                    case 'icecold':
                    case 'luxury':
                    case 'cloud':
                    case 'summersand':
                    case 'horrorblood':
                    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} BAYU OFC`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ryuu.sendMessage(from, ini_buffer, image, { quoted: troli})
                     break
                     case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        Ryuu.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                    case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        Ryuu.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                    case 'character':
                    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonime':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break                
                case 'nhentaipdf':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await Ryuu.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break                                   
//══════════[ Fitur Informasi ]══════════//    
case 'kbbi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'infogempa':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await Ryuu.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'cuaca':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await Ryuu.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
reply(ini_txt)
break
case 'covidindo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
//══════════[ Fitur Asupan ]══════════//
case 'cecanvietnam':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecanmalaysia':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecankorea':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecanindonesia':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecanjapan':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecanthailand':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'cecanchina':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/china?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupancecan':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupanhijaber':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupansantuy':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupanukhti':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupanbocil':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupanghea':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
case 'asupanrika':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : BAYU OFC'})
break
//══════════[ Fitur Nfsw ]══════════//
case 'awoo':
case 'megumin':
case 'shinobu':
case 'waifu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
          kon = await getBuffer(anu.url)
          pll = `Nih Jangan Lupa Subscribe YT : BAYU OFC`
   sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'blowjob':
case 'yuri':
case 'holo':
case 'pussy':
case 'baka':
case 'anal':
case 'kiss':
case 'boobs':
case 'ero':
case 'wallpaper':
case 'hug':
case 'solo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
          reply(mess.wait)
          anu = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
          kon = await getBuffer(anu.url)
          pll = `Nih Jangan Lupa Subscribe YT : BAYU OFC`
   sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'trapnime':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
          kon = await getBuffer(anu.url)
          pll = `Nih Jangan Lupa Subscribe YT : BAYU OFC`
   sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break  
case 'hentai2':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
          kon = await getBuffer(anu.url)
          pll = `Nih Jangan Lupa Subscribe YT : BAYU OFC`
   sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
          {
            buttonId: `${prefix}hentai2`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break      
case 'hentai':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
          kon = await getBuffer(anu.url)
          pll = `Nih Jangan Lupa Subscribe YT : BAYU OFC`
   sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
          {
            buttonId: `${prefix}hentai`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'nsfw':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						Ryuu.sendMessage(from, `Bebas Nyari Hentai :v`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
//══════════[ Fitur Sticker ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
fakeyt('error')
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
fakeyt(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
fakeyt(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
fakeyt(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isQuotedSticker) return fakeyt('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakeyt('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'ttp':  
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp BAYU OFC`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    Ryuu.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
                    case 'attp':
                    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Ryuu.sendMessage(from, buffer, sticker, { quoted: mek })
break
//══════════[ Fitur fun]══════════//
case 'suit':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'apakah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              var namao = pushname
              var prfx = await Ryuu. getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'bisakah':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
              case 'jadian':
              if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
       if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break            
			case 'slot':
			if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											}
															break
case 'truth':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
break
case 'darkjokes':  
     if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT⏩'}, type: 1}]
           pto =await Ryuu.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Yh`,
           footerText: 'Klik Next Untuk Gambar Selanjutnya☕',
           buttons: gbutsan,
           headerType: 4
           }
           await Ryuu.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break		
		   case 'faktaunik':	
		   							if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									sendButMessage(from, `${ran_faktau}`, `${jams}`, [
									{
										buttonId: `${prefix}faktaunik`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);

									break
						case 'pantun':
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
													const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									sendButMessage(from, `${ran_pantun}`, `${jams}`, [
									{
										buttonId: `${prefix}pantun`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
		
									break
									case 'bagaimanakah':   
									if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
			    	bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Ryuu.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					break
//══════════[ Fitur Sound  ]══════════//
      case 'sound1':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
      menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound1.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound2.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound3.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound4.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound5.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound6.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound7.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound8.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound9.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound10.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound11.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound12.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound13.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound14.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound15.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound16.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound17.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Yunsil Botz™© | Yunsil Store`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK MENU 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound18.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//══════════[ Fitur Download ]══════════//
case 'spotify':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await Ryuu.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: lol })
                    break
                case 'spotifysearch':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await Ryuu.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: lol })
                    break
case 'ytmp3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            if (args.length < 1) return fakeyt('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateA(teks).catch(e => {
            fakeyt('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP3_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            if (args.length < 1) return fakeyt('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break    
            case 'lirik':
            if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break       
case 'playstore':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            if(!c) return reply('*Mau Cari Aplikasi Apa?!?!? Bangsat kau..!!🤬*')
            let play = await hx.playstore(c)
            let store = '\n❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
            }
            reply(store)
            break
            case 'pinterest':
            if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait)
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'play':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
        reply(mess.wait)
        let yut = await yts(q)
        yta (yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•👑 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`      
        ya = await getBuffer(thumb)
        py = await Ryuu.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
        buttons: gbutsan,
        headerType: 4
}
        await Ryuu.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break
case 'ytsearch': case 'yts':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Ryuu.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '✾ Title: ' + video.title + '\n'
		            ytresult += '✾ Link: ' + video.url + '\n'
		            ytresult += '✾ Durasi: ' + video.timestamp + '\n'
					ytresult += '✾ Views: ' + video.views + '\n'
		            ytresult += '✾ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await Ryuu.sendMessage(from, tbuff, image, {quoted : mek, caption: ytresult})
					break					
					 case 'mediafire':
					 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` MEDIAFIRE DOWNLOAD

Data Berhasil Didapatkan!

📌 Nama : ${res[0].nama}
✉️ Ukuran : ${res[0].size}
?? Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: troli})
									break
              case 'google':
case 'googlesearch':
case 'ggs':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
               case 'bass': 
               if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
										fs.unlinkSync(ran)
										})
										break
						case 'slowmo': case 'slow':
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Ryuu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}
									break
						case 'fast':
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
									break
						case 'robot':
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
									break
									case 'tiktoknowm':   case 'tiktok':
									if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									reply(mess.wait)
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											noweem = await getBuffer(nowm)
											Ryuu.sendMessage(from,noweem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Download.mp4`,quoted:mek})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
						case 'tiktokwm':
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									reply(mess.wait)
									let wem = q
									hx.ttdownloader(wem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											weem = await getBuffer(wm)
											Ryuu.sendMessage(from,weem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Wm.mp4`,quoted:mek})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break
									case 'reverse':
									if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ryuu.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
//══════════[ Fitur Owner ]══════════//
case 'owner':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: troli, 
})
menu = `Itu Owner ku kak mau nanya soal apa yaa..`
 teks =`Yunsil Botz™© | Yunsil Store`
 but = [{buttonId: `${prefix}script`,buttonText: {displayText: `SCRIPT ️💻`,},type: 1}, {buttonId: `${prefix}listmenu`,buttonText: {displayText: `LIST MENU 💌`,},type: 1,},]
 sendButton(from, menu, teks, but, {quoted: ftrol})
 break
case 'creator':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard3 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:BAYU OFC\n`
+ `ORG: Creator KAGUYA-BOT ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6283891921787:6283891921787\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `Creatornya ${botname}`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
menu = `Itu Creator ku kak mau nanya soal apa yaa..`
 teks =`Yunsil Botz™© | Yunsil Store`
 but = [{buttonId: `${prefix}script`,buttonText: {displayText: `SCRIPT 💻`,},type: 1}, {buttonId: `${prefix}listmenu`,buttonText: {displayText: `LIST MENU 💌`,},type: 1,},]
 sendButton(from, menu, teks, but, {quoted: ftrol})
 break
case 'bc':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Ryuu.chats.all()
             if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
             bc100 = await Ryuu.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Ryuu.sendMessage(_.jid, 
			{"contentText": `*「 𝐏𝐄𝐒𝐀𝐍 𝐒𝐈𝐀𝐑𝐀𝐍 𝐁𝐎𝐓 」*\n\n${body.slice(4)}`,
			"footerText": `${tampilTanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "BACK MENU 💌"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break 
             case 'delete':
      case 'del':
      case 'd':
      if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
            if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
            if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
            Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
            break
            case 'setnamabot':{
            if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
									Ryuu.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
						if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
									 if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
									Ryuu.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
									

//══════════[ Fitur Grup ]══════════//
case 'welcome':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
         if ((args[0]) === 'on') {
         if (isWelkom) return reply('Fitur welcome sudah aktif sebelumnya')
         _welkom.push(from)
         fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
         reply(`Sukses mengaktifkan fitur welcome di group ${groupMetadata.subject}`)
         } else if ((args[0]) === 'off') {
         if (!isWelkom) return reply('Fitur welcome sudah off sebelumnya')
             _welkom.splice(from, 1)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`Sukses menonaktifkan fitur welcome di group ${groupMetadata.subject}`)
         } else {
         reply('on untuk mengaktifkan, off untuk menonaktifkan')
         }
         break  
         case 'allpay':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
aduh = fs.readFileSync('./media/allpay.jpg')
Ryuu.sendMessage(from, aduh, image, {quoted: mek, caption: '─⬣ 「 PAYMENT YUNSIL 」⬣─\n\nScan qr untuk melakukan pembayaran'})
break
case 'antilink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await Ryuu.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Ryuu.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ryuu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
			if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
			if (!isGroupAdmins && !mek.key.fromMe) return reply(`Lu Admin? 🤨`)
			if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await Ryuu.groupRemove(from, [kickya])
			reply(`Succses`)
			break
case 'tagall':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Ryuu.groupUpdateSubject(from, `${body.slice(9)}`)
Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Ryuu.groupUpdateDescription(from, `${body.slice(9)}`)
Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadMediaMessage(encmedia)
Ryuu.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await Ryuu.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Ryuu.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Ryuu.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':  
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Ryuu.chats.get(ido).presences), Ryuu.user.jid]
Ryuu.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break
case 'virtex1':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex2(prefix)}`)
break
case 'virtex2':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex3(prefix)}`)
break
case 'virtes3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex4(prefix)}`)
break
case 'virtex4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex5(prefix)}`)
break
case 'virtex5':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex6(prefix)}`)
break
case 'virtex6':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex7(prefix)}`)
break
case 'virtex7':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex8(prefix)}`)
break
case 'virtex8':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtex9(prefix)}`)
break
case 'virtag':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${virtag(prefix)}`)
break
case 'emoji':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${emoji2(prefix)}`)
break
case 'ngazab':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
katalog(`${ngazap(prefix)}`)
break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `*Success Verification 🎉*\n\n${a}📛 Nama  : ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio   : ${bio_user}${a}\n\n*Verification Di Database ${botname}*`
footeregis = `Terima Kasih Telah Mendaftar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
          ]
sendButLocation(from, teks, footeregis, fakeRyuu, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}
if (budy.startsWith('>')){
            try {
	                if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    return mika.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
                    } catch(err) {
                    e = String(err)
                    reply(e)
                    }
                    }  
           if (budy.startsWith('$')){
                    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    qur = budy.slice(2)
                    exec(qur, (err, stdout) => {
                    if (err) return reply(`Fbotz :~ ${err}`)
                    if (stdout) {
                    reply(stdout)
                    }
                    })
                    }
         if (budy.startsWith('=>')){
                    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
                    var konsol = budy.slice(3)
                    Return = (sul) => {
                    var sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                    if (sat == undefined){
                    bang = util.format(sul)
                    }
                    return reply(bang)
                    }
          try {
                    reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                    console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
                    } catch(e){
                    reply(String(e))
                    }
                }
		   }
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
