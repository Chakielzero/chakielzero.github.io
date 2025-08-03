// Lista de juegos
const juegos = [
    {
        id: "Alan Wake",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/alan.webp",
        altText: "Alan Wake",
        title: "Alan Wake",
        downloadLink2: "https://nephobox.com/s/1LzsELFiNmRtTZ0myNT_1nw" // Segundo enlace de descarga

    },       
    {
        id: "Alone In The Dark",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/alone.webp",
        altText: "Alone In The Dark",
        title: "Alone In The Dark",
        downloadLink2: "https://terabox.com/s/1n0mT_DM6yLnnmxjra-X-sw" // Segundo enlace de descarga

   },
   {
        id: "Assasing Creed",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/assasing.webp",
        altText: "Assasing Creed",
        title: "Assasing Creed",
        downloadLink2: "https://terabox.com/s/1MuTkzEEPUZ83sbXyI_-sig" // Segundo enlace de descarga

    },       
    {
        id: "Assassin's Creed Rogue",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/assarogue.webp",
        altText: "Assassin's Creed Rogue",
        title: "Assassin's Creed Rogue",
        downloadLink2: "https://nephobox.com/s/1coxcL_SUb2hr-PSRsFdDHQ" // Segundo enlace de descarga

    },       
    {
        id: "Assassin's Creed IV Black Flag",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/assiv.webp",
        altText: "Assassin's Creed IV Black Flag",
        title: "Assassin's Creed IV Black Flag",
        downloadLink2: "https://terabox.com/s/1zIFbJqVme6AkCHvwzkGHog" // Segundo enlace de descarga

    },       
    {
        id: "Batman Arkham Asylum GOTY",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/batmanasy.webp",
        altText: "Batman Arkham Asylum GOTY",
        title: "Batman Arkham Asylum GOTY",
        downloadLink2: "https://terabox.com/s/14QYoqdpMxP9ppGtHppOxIg" // Segundo enlace de descarga

    },       
    {
        id: "Batman Arkham Knight",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/batman.webp",
        altText: "Batman Arkham Knight",
        title: "Batman Arkham Knight",
        downloadLink2: "https://terabox.com/s/1pLC0_QKP-d3arKwQmQq1cQ" // Segundo enlace de descarga

    },       
    {
        id: "Control Ultimate Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/control.webp",
        altText: "Control Ultimate Edition",
        title: "Control Ultimate Edition",
        downloadLink2: "https://terabox.com/s/1vSvx9h6GVuX_6bliskQ95g" // Segundo enlace de descarga

    },       
    {
        id: "Cuphead",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/cuphead.webp",
        altText: "Cuphead",
        title: "Cuphead",
        downloadLink2: "https://terabox.com/s/1QzkpWlFpdml0wnpl6IVElg" // Segundo enlace de descarga

    },       
    {
        id: "CRISIS CORE FINAL FANTASY VII REUNION",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/finalfan7.webp",
        altText: "CRISIS CORE FINAL FANTASY VII REUNION",
        title: "CRISIS CORE FINAL FANTASY VII REUNION",
        downloadLink2: "https://terabox.com/s/1JbMg10BDOjmBhjgbIAhHug" // Segundo enlace de descarga

   },
   {
        id: "Cyberpunk 2077",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/cyber.webp",
        altText: "Cyberpunk 2077",
        title: "Cyberpunk 2077",
        downloadLink2: "https://terabox.com/s/1mZlDg13CWPKx-IE843JQtQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Dark-Souls-III",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dark3.webp",
        altText: "Dark-Souls-III",
        title: "Dark-Souls-III",
        downloadLink2: "https://terabox.com/s/1biTow4umayP-bq4OS-ZDTQ" // Segundo enlace de descarga

    },       
    {
        id: "Days Gone",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/daysgone.webp",
        altText: "Days Gone",
        title: "Days Gone",
        downloadLink2: "https://terabox.com/s/1D8txaOgG6dTDlASVC8qstg" // Segundo enlace de descarga

    },       
    {
        id: "Dead Space 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dead2.webp",
        altText: "Dead Space 2",
        title: "Dead Space 2",
        downloadLink2: "https://nephobox.com/s/1DLi9SqRL3_dp8qrCOfxYxQ" // Segundo enlace de descarga

    },       
    {
        id: "Deadpool",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/deadpool.webp",
        altText: "Deadpool",
        title: "Deadpool",
        downloadLink2: "https://nephobox.com/s/1oocuHjwXYIKawY8G0mrQWQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Devil May Cry 4 Special Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dmc4.webp",
        altText: "Devil May Cry 4 Special Edition",
        title: "Devil May Cry 4 Special Edition",
        downloadLink2: "https://nephobox.com/s/1bP52rEUEdSo_dLeO11Da6Q" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dmc5.webp",
        altText: "Devil May Cry 5",
        title: "Devil May Cry 5",
        downloadLink2: "https://nephobox.com/s/1m2k1spoYZX5Co3xiQDYicA" // Segundo enlace de descarga

    },       
    {
        id: "DOOM 2016",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/doom.webp",
        altText: "DOOM 2016",
        title: "DOOM 2016",
        downloadLink2: "https://terabox.com/s/1IBxYroMtY5YCQtB0pZMB0w" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Sparking Zero",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dbzero.webp",
        altText: "Dragon Ball Sparking Zero",
        title: "Dragon Ball Sparking Zero",
        downloadLink2: "https://nephobox.com/s/1HjdaQJHAj50HieQZYWXVmw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Xenoverse",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dbxeno.webp",
        altText: "Dragon Ball Xenoverse",
        title: "Dragon Ball Xenoverse",
        downloadLink2: "https://terabox.com/s/15a5thHisp1HM7Htkt5YKNQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Kakarot",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/dbkakarot.webp",
        altText: "Dragon Ball Z Kakarot",
        title: "Dragon Ball Z Kakarot",
        downloadLink2: "https://nephobox.com/s/1xtfwvyr8KXlLIvokxQyX9A" // Segundo enlace de descarga

    },       
    {
        id: "Fallout 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/fallout4.webp",
        altText: "Fallout 4",
        title: "Fallout 4",
        downloadLink2: "https://terabox.com/s/1k9CHM6yApNouep7Q_z34xA" // Segundo enlace de descarga

    },       
    {
        id: "Far Cry 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/farcry3.webp",
        altText: "Far Cry 3",
        title: "Far Cry 3",
        downloadLink2: "https://nephobox.com/s/1IfllUSbc9QaqugwqPmTzcQ" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy's: Into the Pit",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/fnafinto.webp",
        altText: "Five Nights at Freddy's: Into the Pit",
        title: "Five Nights at Freddy's: Into the Pit",
        downloadLink2: "https://terabox.com/s/1eY-mNwRC4IY7QmpI8mQpJQ" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy's: The Secret of the Mimic",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/fnafmimic.webp",
        altText: "Five Nights at Freddy's: The Secret of the Mimic",
        title: "Five Nights at Freddy's: The Secret of the Mimic",
        downloadLink2: "https://terabox.com/s/1rLAui08QIanbfXKXNkOSjg" // Segundo enlace de descarga   

    },       
    {
        id: "God of War",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/gow.webp",
        altText: "God of War",
        title: "God of War",
        downloadLink2: "https://terabox.com/s/1cYx9MBIDlYgbrsZ10qpT7A" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto San Andreas",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/gtasa.webp",
        altText: "Grand Theft Auto San Andreas",
        title: "Grand Theft Auto San Andreas",
        downloadLink2: "https://terabox.com/s/19nSFEOLqHd-treaVnCgCWw" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto V",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/gtav.webp",
        altText: "Grand Theft Auto V",
        title: "Grand Theft Auto V",
        downloadLink2: "https://nephobox.com/s/1l6fF6rbNHiI4O56cOgFBAA" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto IV",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/gtaiv.webp",
        altText: "Grand Theft Auto IV",
        title: "Grand Theft Auto IV",
        downloadLink2: "https://nephobox.com/s/1f1khERQaToGYmQAYCzXmHw" // Segundo enlace de descarga

    },       
    {
        id: "Hellblade Senuas Sacrifice",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/hell.webp",
        altText: "Hellblade Senuas Sacrifice",
        title: "Hellblade Senuas Sacrifice",
        downloadLink2: "https://terabox.com/s/1h-kmD4TOcEhFC5aCNuXWgg" // Segundo enlace de descarga

    },       
    {
        id: "Hollow Knight Godmaster",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/hollow.webp",
        altText: "Hollow Knight Godmaster",
        title: "Hollow Knight Godmaster",
        downloadLink2: "https://nephobox.com/s/1sO8HCf33lsuV0jOSUuTW1A" // Segundo enlace de descarga

    },       
    {
        id: "It Take Two",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/takestwo.webp",
        altText: "It Take Two",
        title: "It Take Two",
        downloadLink2: "https://terabox.com/s/12VQUTW0VOIauQ7yrltK0fw" // Segundo enlace de descarga

    },       
    {
        id: "Just Cause 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/justcause2.webp",
        altText: "Just Cause 2",
        title: "Just Cause 2",
        downloadLink2: "https://terabox.com/s/1-piRXRf1LnVkLOKvisaF3w" // Segundo enlace de descarga

    },       
    {
        id: "Kena: Bridge of Spirits",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/kena.webp",
        altText: "Kena: Bridge of Spirits",
        title: "Kena: Bridge of Spirits",
        downloadLink2: "https://terabox.com/s/18Kjxfmm9y7Fmso-SRX1yvw" // Segundo enlace de descarga

    },       
    {
        id: "Kingdom Hearts III",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/kh3.webp",
        altText: "Kingdom Hearts III",
        title: "Kingdom Hearts III",
        downloadLink2: "https://terabox.com/s/1GO8PkbnrcB-s9Nv5T4h_ew" // Segundo enlace de descarga

    },       
    {
        id: "Left 4 Dead 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/l4d2.webp",
        altText: "Left 4 Dead 2",
        title: "Left 4 Dead 2",
        downloadLink2: "https://terabox.com/s/15ZVdC4UDqYvmVDFpx1Dl0A" // Segundo enlace de descarga

    },       
    {
        id: "Mad Max",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/mad.webp",
        altText: "Mad Max",
        title: "Mad Max",
        downloadLink2: "https://terabox.com/s/1tVH3fnUB9LSzwve1XFv6Gg" // Segundo enlace de descarga

    },       
    {
        id: "Mafia II",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/mafia2.webp",
        altText: "Mafia II",
        title: "Mafia II",
        downloadLink2: "https://terabox.com/s/1HM3fMmFFihdaRyvNJkyzUg" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Rising Revengeance",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/mgr.webp",
        altText: "Metal Gear Rising Revengeance",
        title: "Metal Gear Rising Revengeance",
        downloadLink2: "https://nephobox.com/s/1lnU-vLowBjDU6CSTjk0bSQ" // Segundo enlace de descarga

    },       
    {
        id: "Metro 2033 Redux",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/metro.webp",
        altText: "Metro 2033 Redux",
        title: "Metro 2033 Redux",
        downloadLink2: "https://terabox.com/s/1CDbk11fibEQ3hEJrCyEQUQ" // Segundo enlace de descarga

    },       
    {
        id: "MiSide",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/miside.webp",
        altText: "MiSide",
        title: "MiSide",
        downloadLink2: "https://terabox.com/s/1Sn8X9kz_D-NfkEaLr_ciIQ" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat X",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/mortalkombatx.webp",
        altText: "Mortal Kombat X",
        title: "Mortal Kombat X",
        downloadLink2: "https://terabox.com/s/1x80zCSWR0c8HjSJdCJpK8g" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed Most Wanted 2005",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/nfsmost.webp",
        altText: "Need for Speed Most Wanted 2005",
        title: "Need for Speed Most Wanted 2005",
        downloadLink2: "https://nephobox.com/s/1DSd2d8rlsaufJiBrbzp0UA" // Segundo enlace de descarga

    },       
    {
        id: "Need For Speed Rivals",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/nfsrivals.webp",
        altText: "Need For Speed Rivals",
        title: "Need For Speed Rivals",
        downloadLink2: "https://nephobox.com/s/1_NaZ3UM5sB3xAKxNfP6WOg" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed Underground 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/nfsun2.webp",
        altText: "Need for Speed Underground 2",
        title: "Need for Speed Underground 2",
        downloadLink2: "https://nephobox.com/s/1seFaeszjpcr0djA2NLLQ1Q" // Segundo enlace de descarga

    },       
    {
        id: "Nier Automata",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/nier.webp",
        altText: "Nier Automata",
        title: "Nier Automata",
        downloadLink2: "https://terabox.com/s/1osOhEAWC9Vd3QmguUVW5gg" // Segundo enlace de descarga

    },       
    {
        id: "No Man´s Sky",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/nomansky.webp",
        altText: "No Man´s Sky",
        title: "No Man´s Sky",
        downloadLink2: "https://terabox.com/s/1XHg6EZqbOzfPqztT1Yh03A" // Segundo enlace de descarga
        
    },       
    {
        id: "Ori and the Blind Forest Definitive Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/ori.webp",
        altText: "Ori and the Blind Forest Definitive Edition",
        title: "Ori and the Blind Forest Definitive Edition",
        downloadLink2: "https://nephobox.com/s/15Z17dmjCpBjDE4R2Bb-jxQ" // Segundo enlace de descarga

    },       
    {
        id: "Portal",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/portal.webp",
        altText: "Portal",
        title: "Portal",
        downloadLink2: "https://terabox.com/s/1puRcXBII7Yg5v_xdTo1WOA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 2 Remake",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/re2.webp",
        altText: "Resident Evil 2 Remake",
        title: "Resident Evil 2 Remake DX11",
        downloadLink2: "https://terabox.com/s/1M2rH6UufMdMExGKnYgEQJQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 3 Remake",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/residentevil3remake.webp",
        altText: "Resident Evil 3 Remake",
        title: "Resident Evil 3 Remake",
        downloadLink2: "https://nephobox.com/s/1GA49eLcDwypnwXG-KCEVOw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 5 Gold Latino",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/resident5.webp",
        altText: "Resident Evil 5 Gold Latino",
        title: "Resident Evil 5 Gold Latino",
        downloadLink2: "https://terabox.com/s/1K7Xnmgx76qq37dTcEGSr4Q" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 6",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/re6.webp",
        altText: "Resident Evil 6",
        title: "Resident Evil 6",
        downloadLink2: "https://terabox.com/s/1FlQ7LK09MGMxfPAFHmyoiQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 7 DX11",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/re7.webp",
        altText: "Resident Evil 7 DX11",
        title: "Resident Evil 7 DX11",
        downloadLink2: "https://terabox.com/s/1x9WayWENXdq2jPf-frhvyg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Revelation Complete",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/rereve.webp",
        altText: "Resident Evil Revelation Complete",
        title: "Resident Evil Revelation Complete",
        downloadLink2: "https://terabox.com/s/12KqUw4kPAM6dFAgq5bTvLw" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/rdr.webp",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption",
        downloadLink2: "https://nephobox.com/s/1EqnjQsji0gBa1_t2GXrMbA" // Segundo enlace de descarga

    },       
    {
        id: "Saints Row: The Third",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/saints.webp",
        altText: "Saints Row: The Third",
        title: "Saints Row: The Third",
        downloadLink2: "https://nephobox.com/s/1l-tMy48d67WNkHqFx06UFw" // Segundo enlace de descarga

    },       
    {
        id: "Sekiro Shadows Die Twice GOTY Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/sekiro.webp",
        altText: "Sekiro Shadows Die Twice GOTY Edition",
        title: "Sekiro Shadows Die Twice GOTY Edition",
        downloadLink2: "https://terabox.com/s/1P0mgGmWexmj0Ei6_gM65JA" // Segundo enlace de descarga

    },       
    {
        id: "Shadow of the Tomb Raider Definitive Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/shadow.webp",
        altText: "Shadow of the Tomb Raider Definitive Edition",
        title: "Shadow of the Tomb Raider Definitive Edition",
        downloadLink2: "https://terabox.com/s/1yfpklrKFuoNsNPlDpUDRWg" // Segundo enlace de descarga

    },       
    {
        id: "Silent Hill 2 Remake",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/silent.webp",
        altText: "Silent Hill 2 Remake",
        title: "Silent Hill 2 Remake",
        downloadLink2: "https://terabox.com/s/1zo1JCkQvK314gWRDS6CvQw" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Unleashead Recompiled",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/sonicunleashead.webp",
        altText: "Sonic Unleashead Recompiled",
        title: "Sonic Unleashead Recompiled",
        downloadLink2: "https://terabox.com/s/1pRG6Kw6wfypuT95TCnTg9w" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man Web of Shadows",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/spidermanweb.webp",
        altText: "Spider-Man Web of Shadows",
        title: "Spider-Man Web of Shadows",
        downloadLink2: "https://nephobox.com/s/16ZYKeEhegzOrH-2CVlZZGQ" // Segundo enlace de descarga

    },       
    {
        id: "State of Decay 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/sod2.webp",
        altText: "State of Decay 2",
        title: "State of Decay 2",
        downloadLink2: "https://terabox.com/s/1mB2JSjZcmWiZRHd_hmZl-A" // Segundo enlace de descarga

    },       
    {
        id: "Stray",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/Stray.webp",
        altText: "Stray",
        title: "Stray",
        downloadLink2: "https://nephobox.com/s/1ybj9iOMw-x9PSzVBD3J2fQ" // Segundo enlace de descarga

    },       
    {
        id: "Street Fighter V",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/streetv.webp",
        altText: "Street Fighter V",
        title: "Street Fighter V",
        downloadLink2: "https://terabox.com/s/1U8AauRRPPZ2ypJT7rL9uIQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Bros Dimensions",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/mariodimensions.webp",
        altText: "Super Mario Bros Dimensions",
        title: "Super Mario Bros Dimensions Fangame+ Controles Winlator",
        downloadLink2: "https://terabox.com/s/1TXaGfX3M8jHg1EKEnLqSxg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Flashback",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/marioflashback.webp",
        altText: "Super Mario Flashback",
        title: "Super Mario Flashback Fangame+ Controles Winlator",
        downloadLink2: "https://terabox.com/s/1D-lnPFuzqakcierLhZbbnQ" // Segundo enlace de descarga
        
    },       
    {
        id: "TEKKEN 7 Definitive Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/tekken7.webp",
        altText: "TEKKEN 7 Definitive Edition",
        title: "TEKKEN 7 Definitive Edition",
        downloadLink2: "https://terabox.com/s/1XpnI0VoBAFv7GqkF1yPh8g" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider Man 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/thespiderman2.webp",
        altText: "The Amazing Spider Man 2",
        title: "The Amazing Spider Man 2",
        downloadLink2: "https://nephobox.com/s/1O3KWhVAeTDP0O8r7fSSwdQ" // Segundo enlace de descarga
        
    },       
    {
        id: "The Evil Within",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/evil.webp",
        altText: "The Evil Within",
        title: "The Evil Within",
        downloadLink2: "https://terabox.com/s/1eGQ4kh60mHDJh-eDPl5A0g" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Korra",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/korra.webp",
        altText: "The Legend of Korra",
        title: "The Legend of Korra",
        downloadLink2: "https://terabox.com/s/1lhHZyzd8KcROwKhqwCs8Kw" // Segundo enlace de descarga
        
    },       
    {
        id: "The Witcher 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/witcher.webp",
        altText: "The Witcher 3",
        title: "The Witcher 3",
        downloadLink2: "https://terabox.com/s/1pFxcJglip4IDxj6hnIonFg" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 3 y 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/tony3y4.webp",
        altText: "Tony Hawks Pro Skater 3 y 4",
        title: "Tony Hawks Pro Skater 3 y 4",
        downloadLink2: "https://terabox.com/s/1ObfV3Iu-IhCW02GZ9p6F-w" // Segundo enlace de descarga

    },       
    {
        id: "Yakuza 0",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/pc/yakuza.webp",
        altText: "Yakuza 0",
        title: "Yakuza 0",
        downloadLink2: "https://terabox.com/s/1GMm0CWZPUVY8JaCTzwRrTA" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
