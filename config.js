const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263712096602";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263xxxxxxxxx,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263712096602,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_55_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzeDkrYjdiVDh5MzFCOGI4UDNKQ3BsQzBubGxpNUpIWVA5MjZhTDRFL0c0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QkN0NU5DVlJPZTdCWmJvSzdEZmJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIyZTgxYzgzLTBjM2YtNDY4Mi04MTMwLWVkMjRmMTFmNTcxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMDIsXG4gICAgICAxMjgsXG4gICAgICA0NCxcbiAgICAgIDExOCxcbiAgICAgIDIwLFxuICAgICAgMjA3LFxuICAgICAgNTEsXG4gICAgICA3NCxcbiAgICAgIDIxOCxcbiAgICAgIDIzNixcbiAgICAgIDEwOCxcbiAgICAgIDUzLFxuICAgICAgMTI4LFxuICAgICAgMTA1LFxuICAgICAgMjAyLFxuICAgICAgMTIwLFxuICAgICAgMTcyLFxuICAgICAgODMsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyNSxcbiAgICAgIDIzNCxcbiAgICAgIDE0MCxcbiAgICAgIDEzMyxcbiAgICAgIDEyLFxuICAgICAgNzgsXG4gICAgICAxMyxcbiAgICAgIDIxOCxcbiAgICAgIDExMixcbiAgICAgIDEwNyxcbiAgICAgIDIzOCxcbiAgICAgIDE3MCxcbiAgICAgIDEwMyxcbiAgICAgIDIzOCxcbiAgICAgIDYzLFxuICAgICAgMjMsXG4gICAgICAxOTIsXG4gICAgICA5NCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSlY0TDVTRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEyMDk2NjAyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ3OTE5NDE5ODk5OTU0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGo5b2s4UXJMaUZ0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzMVVjVFdZNENtR252U1JBMXc0bkdRbmZyTnM4bmxMaUJvQWZBeE9icnhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldsMVdZNUZZQ1V2THgyVHVwYjFIRjdHN2Z2Lzl1aFRHSnkvMGRHcUF4RmhwbE80TEUySjRFcmJoa2wrMWNNZnkwbi9HTEV4SGdsd1BTOG5SZWQxdkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJDUks5QlFEbjc5L2M5ckcvYzdVUGZjeDBQbXIzK1VkK2U5NDRrRm9MT2p4MFpwRzZQalJsbWgwMGZ4MkEwemxoTEFWNWRVQldkQW5PL3N0MmQ5Ymd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMjA5NjYwMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4NTA5MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVGxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1UbC5qc29uIjogIntcImtleURhdGFcIjpcImdkT1F4UzdGWG5ka3dvaTRQMEJ1aHgzbWJkZHIxa2VkdU9Ka3hEL25uS009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MjQ4MTg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4NTA5MzQ1NjFcIn0iCn0=  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "arlico_06",
  ownername:process.env.OWNER_NAME|| "Arlico",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Arlico"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
