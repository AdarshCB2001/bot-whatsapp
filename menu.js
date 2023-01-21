/**
 * @ Author: SeroBot Team
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-08-02 17:58:32
 * @ Description: Menu
 */

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textTnC = () => {
    return `
AkenoBot is *Bot* which is an acronym for the word Robot which means a system programmed by a computer.
So that the response or reply made by the bot is not from humans.

By using this bot, you *agree* to the following terms and conditions:
- Give a break from each command.
- Calling bots is prohibited, or you will be automatically blocked.
- Spam is strictly prohibited. Caught = auto banned.
- Bots will not respond to your comments.
- The bot doesn't save the submitted images/media.
- The bot does not store your personal data on our servers.
- Bots are not responsible for your orders to these bots.
- Bots run on the server separately (Not on the HP owner).
- The bot will be periodically monitored by the owner, so there is a possibility that the chat will be read by the owner.
- Bots will be cleaned at the beginning of each month or when deemed necessary.

-TheABCguy.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textMenu = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Ohayō gozaimasu🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Konnichiwa ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Konbanwa🌻*`
    else ucapan = `*Oyasumi Nasai~ 💤*`
    return `
Hello, ${pushname}!
${ucapan} 👋️
| Introduction |
${q3} ┈━═☆Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ☆━═┈ ${q3}

Konnichiwa minna~ Watashiwa Akeno-san desu. Watashino goshujin wa TheABCguy desu! This are some of my features✨
${readMore}
Note: 
Don't call or block instantly! ⛔
Send a command without arguments to see what each feature means.
Besides ${q3}(/)${q3} the bot will also respond to the following symbols:
${q3}\\ / ! $ ^ % & + . , -${q3}

Calculator operations use prefix (=)
(eg: =10+2+4)
╔══✪〘 ‼️ Mandatory ‼️ 〙✪
╠> ${m('tnc')} or ${m('rules')}
╚> Read and understand before proceeding

╔══✪〘 💬 Information 💬 〙✪
╠> ${m('donate')} or ${m('donate')}
╠> ${m('ping')} or ${m('speed')}
╠> ${m('owner')}
╠> ${m('stat')}
╚══✪

╔══✪〘 ⚙ Converter ⚙ 〙✪
╠> ${m('getimage')} or ${m('toimg')}
║ Turn stickers into images.
╠> ${m('sticker')} or ${m('sticker')} or ${m('s')}
║ Turn images/videos into stickers.
╠> ${m('stickergiphy')}
║ Turn giphy urls into stickers.
╠> ${m('doctopdf')} or ${m('pdf')}
║ Convert documents to pdf.
╠> ${m('qrcode')} or ${m('qr')}
║ Create QRcode from text.
╠> ${m('tts')} or ${m('say')}
║ Convert text to Google voice.
╠> ${m('shortlink')}
║ Url shortener using tinyurl.
╠> ${m('translate')}
║ Google translate text.
╠> ${m('memefy')}
║ Add text on image.
╠> ${m('tomp3')}
║ Convert video to audio.
╠> ${m('down')}
║ Change the vowel text to the letter i.
╠> ${m('ssweb')}
║ Screenshot website urls.
╠> ${m('take')}
║ Edit sticker pack and author watermark
╠> ${m('flip')}
║ Flip image horizontally/vertically.
╠> ${m('ocr')}
║ Scan text from image.
╚══✪

╔══✪〘Maker〙✪
╠> ${m('trigger')} or ${m('trigger2')}
║ Add trigger effect on image (sticker)
╠> ${m('wasted')}
║ Add wasted effect on image (sticker)
╠> ${m('attp')}
║ Animated text to picture (stickers)
╠> ${m('ttp')}
║ Text to picture (stickers)
╚══✪

╔══✪〘 📩 Downloader 📩 〙✪
╠> ${m('tiktokmp3')} or ${m('ttmp3')}
║ Download music from Tiktok links.
╠> ${m('tiktok')} or ${m('tt')}
║ Download Tiktok without watermark.
╠> ${m('igstory')}
║ Download Igstory from username.
╠> ${m('ytmp3')}
║ Download mp3 from Youtube link.
╠> ${m('ytmp4')}
║ Download mp4 from Youtube link.
╠> ${m('fbdl')}
║ Download media from Facebook links.
╠> ${m('twdl')}
║ Download media from Twitter links.
╠> ${m('igdl')}
║ Download media from Instagram links.
╚══✪

╔══✪〘 🔊 Audio Converter 🔊 〙✪
║ Add sound effects to audio.
╠> ${m('nightcore')}
╠> ${m('deepslow')}
╠> ${m('disguise')}
╠> ${m('vibrato')}
╠> ${m('earrape')}
╠> ${m('reverse')}
╠> ${m('robot')}
╠> ${m('8d')}
╠══✪
╠> ${m('cf')}
║ Custom ffmpeg complex filter (Expert user only)
╚══✪

╔══✪〘 🎊 Random 🎊 〙✪
║ Random means random.
╠> ${m('wordsofwisdom')}
╠> ${m('thesis')}
╠> ${m('poem')}
╠> ${m('fact')}
╠> ${m('quote')}
╠> ${m('anime')}
╠> ${m('memes')}
╚══✪

╔══✪〘 🔎 Search 🔍 〙✪
╠> ${m('pinterest')} or ${m('pin')}
║ Search images from pinterest.
╠> ${m('gimages')} or ${m('gimg')}
║ Search images from Google.
╠> ${m('gsearch')} or ${m('gs')}
║ Screenshot search from Google.
╠> ${m('name meaning')}
║ Primbon meaning of the name, only entertainment.
╠> ${m('sreddit')}
║ Search images from Subreddit.
╠> ${m('lyrics')}
║ Search song lyrics.
╠> ${m('play')}
║ Search songs from Youtube.
╠> ${m('kbbi')}
║ Search for the meaning of words in KBBI.
╠> ${m('yt')}
║ Search Youtube.
╚══✪

╔══✪〘 🎉 Entertainment 🎉 〙✪
╠> ${m('guess the picture')} or ${m('tbg')}
║ Play guess the picture.
╠> ${m('guess')} or ${m('tbj')}
║ Play funny charades.
╠> ${m('guess the lyrics')} or ${m('tbl')}
║ Play guess the lyrics.
╠> ${m('guess')} or ${m('guess')}
║ Play charades.
╠> ${m('is')}
║ Praise the magic shell!!!
╠> ${m('sfx')}
║ Send available audio.
╠> ${m('ToD')}
║ Group only. Truth or dare?
╚══✪

╔══✪〘 ℹ Info ℹ 〙✪
╠> ${m('checkcovid')}
║ Check the spread of covid according to location.
╠> ${m('crjogja')}
║ Jogja location weather radar.
╠> ${m('buildgi')}
║ Build GI according to the character's name.
╠> ${m('weather')}
║ Local weather information.
╠> ${m('receipt')}
║ Check the goods receipt according to the courier.
╚══✪

╔══✪〘 🤬 Anti Toxic 🤬 〙✪
║ Group only. Against harsh words.
╠> ${m('antikasar')}
╠> ${m('tables')}
╠> ${m('reset')}
╚══✪

╔══✪〘 🤩 More Useful 🤩 〙✪
╠> ${m('tagall')} or ${m('alle')}
║ Group only. Tag all members.
╠> ${m('join')} or ${m('hire')}
║ Rent a bot to join the group if slots are available.
╠> ${m('listonline')}
║ Group only. Tag all online members.
╠> ${m('remind')}
║ Resend message at specified time.
╠> ${m('list')}
║ Create a list or lists that are stored in the bot.
╠> ${m('note')}
║ Create a note or note that is stored in the bot.
╠> ${m('bye')}
║ Group only. Take out the bots.
╠> ${m('del')}
║ Delete bot messages.
║
╚══✪〘 *AkenoBot* 〙✪

Note :
Reply your message containing the command
with a '..' (double dot) to send it back.

Chat with triggers (bots, sero, serobot) or tags will be answered by simsimi.

Hope you have a great day!✨
If you find this bot helpful/useful please *donate*✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textAdmin = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Admin Group Only* ] ⚠
Here are the group admin features in this bot!

╔══✪〘 Admin Only 〙✪
╠> ${m('groupstats')}
║ Check group setting status
╠> ${m('mutegroup')} or ${m('group')} open/close
║ Besides the admin can't send messages
╠> ${m('enablebot')} or ${m('disablebot')}
║ Turn bots on or off for groups.
╠> ${m('antilinkgroup')} on/off
║ Automatic kick that sends the group link
╠> ${m('antikasarkick')} on/off
║ Automatic kick that is toxic in the group
╠> ${m('antilink')} on/off
║ Automatic kick that sends all kinds of links
╠> ${m('antivirtex')} on/off
║ Automatic kick that sends messages that are too long
╠> ${m('antidelete')} on/off
║ Anti delete message in group
╠> ${m('welcome')} on/off
║ Welcome new members to join
╠> ${m('setprofile')}
║ Change group photo
╠> ${m('setname')}
║ Change group name
╠> ${m('grouplink')}
║ To get group link
╠> ${m('promote')}
║ Make admin
╠> ${m('demote')}
║ Revoke admin rights
╠> ${m('revoke')}
║ Reset link groups
╠> ${m('kick')}
║ Kick members
╠> ${m('add')}
║ Add members
║
║ (the welcome feature often errors, it's better not to)
║
╚═〘 *AkenoBot* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textOwner = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Owner Only* ] ⚠
Here are the owner features in this bot!

╔══✪〘 Owner Only 〙✪
╠> ${m('addcoarse')}
║ Add rant to database. Restart required.
╠> ${m('restart')}
║ Restart nodejs. Windows only.
╠> ${m('listgroup')}
║ Return all groups list
╠> ${m('listlease')}
║ Return all groups list
╠> ${m('ban')}
║ Ban users.
╠> ${m('unban')}
║ Unban users.
╠> ${m('bc')}
║ Broadcast all chats.
╠> ${m('bcgroup')}
║ Broadcast all groups.
╠> ${m('leaveall')}
║ Leave all groups except premium (Cleanup)
╠> ${m('clearexitedgroup')}
║ Delete group chats that have left.
╠> ${m('deleteall')}
║ Delete all chats including groups without leaving the group.
╠> ${m('clearall')}
║ Clear all chats without deleting chats.
╠> ${m('cleanchat')}
║ Simulate clean all chat like at 01:01
╠> ${m('unblock')} or ${m('u')}
║ Unblock users.
╠> ${m('getinfo')}
║ Get info from the link group.
╠> ${m('getstory')}
║ Get story wa.
╠> ${m('addprem')}
║ Add groups to premium.
╠> _>_
║ Eva.
╠> _$_
║ Shells.
║
╚═〘 *AkenoBot* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textDonasi = () => {
    return `
Hi, thanks for using this bot, Follow and support my social media :
Instagram : https://www.instagram.com/the.abc.guy/
Youtube : https://www.youtube.com/channel/UC8_Lb5ngyl3cPuxwxTl5GpA
LinkedIn : https://www.linkedin.com/in/adarsh-chanabhat-927370194/

To develop this bot you can help by donating to:
Name : Adarsh Chanabhat
Gpay: achanabhat8@okaxis
Amazon Pay: 7040567094@apl

Regardless of the nominal, it will really help the development of this bot.
Thank you. ~TheABCguy`
}

export default {
    textTnC,
    textMenu,
    textOwner,
    textAdmin,
    textDonasi
}
