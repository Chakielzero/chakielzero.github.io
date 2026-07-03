// Lista de juegos
const juegos = [
    {
        id: "EveryCine",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/everycine.webp",
        altText: "EveryCine",
        title: "EveryCine.apk",
        downloadLink2: "https://apkfy.one/chak" // Segundo enlace de descarga

    },
    {
        id: "Aethersx2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/aethersx2.webp",
        altText: "Aethersx2",
        title: "Aethersx2 v3668.apk",
        downloadLink2: "https://nephobox.com/s/1WHY7l0Niha8_y2zlZsRxQQ" // Segundo enlace de descarga
   },
   {
        id: "Angry Birds Space",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/angryspace.webp",
        altText: "Angry Birds Space",
        title: "Angry Birds Space Mod.apk",
        downloadLink2: "https://terabox.com/s/1S1NXrxv1bYMR61485_h6Zw" // Segundo enlace de descarga
    },       
    {
        id: "Angry Birds 2 Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/angry2.webp",
        altText: "Angry Birds 2 Mod",
        title: "Angry Birds 2 Mod.apk",
        downloadLink2: "https://terabox.com/s/1xuleW2mVTggQJaUoC09Okg" // Segundo enlace de descarga

    },       
    {
        id: "APCS3E",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/ap3.webp",
        altText: "APCS3E",
        title: "APCS3E v0.9.apk",
        downloadLink2: "https://terabox.com/s/1ym8HcnuFgFUOO_T9Cm-5Tg" // Segundo enlace de descarga

    },       
    {
        id: "ARK Mobile",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/ark.webp",
        altText: "ARK Mobile",
        title: "ARK Mobile Unlocked.apk",
        downloadLink2: "https://terabox.com/s/1FkKFuFrU9nAg3g6eg120FQ" // Segundo enlace de descarga

    },       
    {
        id: "Art of Rally",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/art.webp",
        altText: "Art of Rally",
        title: "Art of Rally v1.0.7.apk",
        downloadLink2: "https://terabox.com/s/1oSXrXOIEOhF6yX-6uxX1LQ" // Segundo enlace de descarga

    },       
    {
        id: "Beach Buggy Racing 2 Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/buggy2.webp",
        altText: "Beach Buggy Racing 2 Mod",
        title: "Beach Buggy Racing 2 Mod.apk",
        downloadLink2: "https://terabox.com/s/1k_eZVRPtBnQhwgptvf2rPA" // Segundo enlace de descarga
      
    },       
    {
        id: "Bendy And The Ink Machine",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/bendy.webp",
        altText: "Bendy And The Ink Machine",
        title: "Bendy And The Ink Machine.apk",
        downloadLink2: "https://nephobox.com/s/17CrcAN1wa601iKhTv9iscw" // Segundo enlace de descarga

    },       
    {
        id: "Blasphemous",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/blas.webp",
        altText: "Blasphemous",
        title: "Blasphemous V1.2.apk",
        downloadLink2: "https://terabox.com/s/1RaA_oHmCN3hLx46cjZmnHA" // Segundo enlace de descarga

    },       
    {
        id: "Bob Esponja: BFBB",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/bob.webp",
        altText: "Bob Esponja: BFBB",
        title: "Bob Esponja: BFBB.apk",
        downloadLink2: "https://terabox.com/s/1yJYHZ29VKigGW2YaNnBeSg" // Segundo enlace de descarga

    },       
    {
        id: "Bright Memory Infinite",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/bright.webp",
        altText: "Bright Memory Infinite",
        title: "Bright Memory Infinite.apk",
        downloadLink2: "https://terabox.com/s/1LfwMqp3AoRmU0guspiAd1Q" // Segundo enlace de descarga

    },       
    {
        id: "Bully",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/bully.webp",
        altText: "Bully",
        title: "Bully.apk +obb",
        downloadLink2: "https://nephobox.com/s/1bcL-bP6SuPzcnMFuMMkCmA" // Segundo enlace de descarga

    },       
    {
        id: "Candleman",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/vela.webp",
        altText: "Candleman",
        title: "Candleman.apk",
        downloadLink2: "https://terabox.com/s/1wBZlmBo-CrecEcHDiPmirw" // Segundo enlace de descarga

    },       
    {
        id: "Cemu Android",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/cemu.webp",
        altText: "Cemu Android",
        title: "Cemu Android",
        downloadLink2: "https://terabox.com/s/1HVMJnZ0Foo2xnNgEZtR5pg" // Segundo enlace de descarga

    },       
    {
        id: "Citra MMJ",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/mmj.webp",
        altText: "Citra MMJ",
        title: "Citra MMJ.apk",
        downloadLink2: "https://terabox.com/s/1YijcF41etlFJdIweS3fBfg" // Segundo enlace de descarga

    },       
    {
        id: "Counter Strike 1.6",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/counter.webp",
        altText: "Counter Strike 1.6",
        title: "Counter Strike 1.6 Port.apk",
        downloadLink2: "https://terabox.com/s/1c_RfGD7OUMV65qmhxeqc5g" // Segundo enlace de descarga

    },       
    {
        id: "Cuphead Mobile",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/cuphead.webp",
        altText: "Cuphead",
        title: "Cuphead Mobile.apk",
        downloadLink2: "https://terabox.com/s/1e4rcQ_DRrVmHc4lzlPTb6g" // Segundo enlace de descarga

    },       
    {
        id: "Dead Cells",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/dead.webp",
        altText: "Dead Cells",
        title: "Dead Cells 3.3.15.apk",
        downloadLink2: "https://nephobox.com/s/1-bxMqm7W4bp3riOfJNPBlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dead Space Mobile",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/deadspace.webp",
        altText: "Dead Space Mobile",
        title: "Dead Space Mobile.apk (Android 15)",
        downloadLink2: "https://terabox.com/s/1E60rfi3Ds_npKiyxyI1NnQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Figther Z Mobile",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/figtherz.webp",
        altText: "Dragon Ball Figther Z Mobile",
        title: "Dragon Ball Figther Z Mobile.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1FL6vRTu4KrBHHC-Badqdyw" // Segundo enlace de descarga

    },       
    {
        id: "Drastic",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/drastic.webp",
        altText: "Drastic",
        title: "Drastic.apk",
        downloadLink2: "https://terabox.com/s/1jXPr_yuxy_pMeZRsgPPa6w" // Segundo enlace de descarga

    },       
    {
        id: "Dream League Soccer 19",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/dls19.webp",
        altText: "Dream League Soccer 19",
        title: "Dream League Soccer 19.apk (Android 15)",
        downloadLink2: "https://terabox.com/s/1f8PxcNOATKgmdSNewP0QNQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest Builders",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/dragon.webp",
        altText: "Dragon Quest Builders",
        title: "Dragon Quest Builders.apk",
        downloadLink2: "https://nephobox.com/s/1vDKAshRAHXzQBS2NysW4HQ" // Segundo enlace de descarga

    },       
    {
        id: "DUCK TALES REMASTERED",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/duck.webp",
        altText: "DUCK TALES REMASTERED",
        title: "DUCK TALES REMASTERED.apk",
        downloadLink2: "https://nephobox.com/s/1-yHo4gVNS3zRnA0Hpy6Ebw" // Segundo enlace de descarga

    },       
    {
        id: "Egg Ns",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/eggns.webp",
        altText: "Egg NS",
        title: "Egg NS 5.1.1.apk",
        downloadLink2: "https://1024terabox.com/s/1J1eYwfXMX5ib-qKGlXJ18A" // Segundo enlace de descarga

    },       
    {
        id: "EISENHORN XENOS",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/xenos.webp",
        altText: "EISENHORN XENOS",
        title: "EISENHORN XENOS.apk",
        downloadLink2: "https://terabox.com/s/1q_Tur7FXf0AZOrWrb3Sj8Q" // Segundo enlace de descarga

    },       
    {
        id: "ePSXe",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/EPSXE.webp",
        altText: "ePSXe",
        title: "ePSXe.apk",
        downloadLink2: "https://nephobox.com/s/1YfSZkM-je8v7gJRtj_ERTw" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnaf.webp",
        altText: "Five Nights at Freddy’s",
        title: "Five Nights at Freddy’s.apk",
        downloadLink2: "https://terabox.com/s/1-2WtheRIF34mripyIhcJzQ" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnaf2.webp",
        altText: "Five Nights at Freddy’s 2",
        title: "Five Nights at Freddy’s 2",
        downloadLink2: "https://terabox.com/s/1I0Lg2MiPCWHSDSP8kNUL4Q" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnaf3.webp",
        altText: "Five Nights at Freddy’s 3",
        title: "Five Nights at Freddy’s 3.apk",
        downloadLink2: "https://terabox.com/s/1Kp3OavwnxO5jmNBhVK6Pwg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnaf4.webp",
        altText: "Five Nights at Freddy’s 4",
        title: "Five Nights at Freddy’s 4.apk",
        downloadLink2: "https://terabox.com/s/16XcV9pSeRE_g0V20NBxnmg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s Sister Location",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnafsister.webp",
        altText: "Five Nights at Freddy’s Sister Location",
        title: "Five Nights at Freddy’s Sister Location.apk",
        downloadLink2: "https://terabox.com/s/1kR6SgzRl_QXSfEw8wIlHsg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s 6 Pizzeria Simulator",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnaf6.webp",
        altText: "Five Nights at Freddy’s 6 Pizzeria Simulator",
        title: "Five Nights at Freddy’s 6 Pizzeria Simulator.apk)",
        downloadLink2: "https://terabox.com/s/1vzlwo7AhRA_9BevAdvuyZg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s Ultimate Custom Night",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/fnafultimate.webp",
        altText: "Five Nights at Freddy’s Ultimate Custom Night",
        title: "Five Nights at Freddy’s Ultimate Custom Night.apk",
        downloadLink2: "https://terabox.com/s/1ehAv2nyi6DEmYzGxpbznGg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy’s AR Special Delivery",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/power.webp",
        altText: "Five Nights at Freddy’s AR Special Delivery",
        title: "Five Nights at Freddy’s AR Special Delivery",
        downloadLink2: "https://terabox.com/s/1wyfkbBCeT_IiArCDuMX9Cg" // Segundo enlace de descarga

    },       
    {
        id: "Formula Cartoon All-Stars Mod Money",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/allstars.webp",
        altText: "Formula Cartoon All-Stars Mod Money",
        title: "Formula Cartoon All-Stars Mod Money.apk",
        downloadLink2: "https://terabox.com/s/1XFfqo0fLC_JTh5s0h2NHSQ" // Segundo enlace de descarga

    },
    {
        id: "Gamehub Lite",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/lite.webp",
        altText: "Gamehub Lite",
        title: "Gamehub Lite.apk",
        downloadLink2: "https://bit.ly/3KM266H" // Segundo enlace de descarga
        
    },       
    {
        id: "God Of War III",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/gow3.webp",
        altText: "God Of War III",
        title: "God Of War III (fangame).apk",
        downloadLink2: "https://terabox.com/s/1i6W6P4jVed1SRAEX1DN1tA" // Segundo enlace de descarga
        
    },       
    {
        id: "Gran Theft Auto V",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/gtav.webp",
        altText: "Gran Theft Auto V",
        title: "Gran Theft Auto V V0.5 (fangame).apk",
        downloadLink2: "https://terabox.com/s/1J0Mpd9OKksWUKNbpnZmn6w" // Segundo enlace de descarga

    },       
    {
        id: "Gran Theft Auto Vice City Netflix",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/gtavc.webp",
        altText: "Gran Theft Auto Vice City Netflix",
        title: "Gran Theft Auto Vice City Netflix.apk",
        downloadLink2: "https://terabox.com/s/1P2c0KgHm4BPTWfs0zLOh9Q" // Segundo enlace de descarga

    },       
    {
        id: "Grid Autosport Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/grid.webp",
        altText: "Grid Autosport Mod",
        title: "Grid Autosport Mod.apk",
        downloadLink2: "https://terabox.com/s/1FBhUB5ZwH7ks3h-EGqHuwQ" // Segundo enlace de descarga

    },       
    {
        id: "GRID LEGENDS",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/gridle.webp",
        altText: "GRID LEGENDS",
        title: "GRID LEGENDS.apk",
        downloadLink2: "https://terabox.com/s/1pTc5sByaI0TLmWIe_E2iiw" // Segundo enlace de descarga

    },       
    {
        id: "Half Life 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/hl2.webp",
        altText: "Half Life 2",
        title: "Half Life 2",
        downloadLink2: "https://nephobox.com/s/1HgpII-mH0VnUrysJNDiwPw" // Segundo enlace de descarga

    },       
    {
        id: "Halo CE",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/halo.webp",
        altText: "Halo CE",
        title: "Halo CE V8.5 (fangame).apk",
        downloadLink2: "https://terabox.com/s/1cNb7c0IW5MgA-RF3u1x1RA" // Segundo enlace de descarga
       
    },       
    {
        id: "Hill Climb Racing Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/hillclimb.webp",
        altText: "Hill Climb Racing Mod",
        title: "Hill Climb Racing Mod.apk",
        downloadLink2: "https://terabox.com/s/1Q23JhlQjOSurCM1l-iXZRw" // Segundo enlace de descarga

    },       
    {
        id: "Hitman Blood Money Reprisal",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/hitman.webp",
        altText: "Hitman Blood Money Reprisal",
        title: "Hitman Blood Money Reprisal.apk",
        downloadLink2: "https://terabox.com/s/1OFyHmzASURyjy6oKVrBohQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Hollow Knight",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/hollow.webp",
        altText: "Hollow Knight",
        title: "Hollow Knight.apk",
        downloadLink2: "https://nephobox.com/s/1i8OfZYyVgJDa0mlPT6dbFA" // Segundo enlace de descarga

    },       
    {
        id: "Human Fall Flat",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/human.webp",
        altText: "Human Fall Flat",
        title: "Human Fall Flat 2.1.0.apk",
        downloadLink2: "https://nephobox.com/s/1BYLixVSVgWunAuPolyANXA" // Segundo enlace de descarga

    },       
    {
        id: "INDIGO LAKE",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/indigo.webp",
        altText: "INDIGO LAKE",
        title: "INDIGO LAKE.apk",
        downloadLink2: "https://terabox.com/s/1ljHH-kfrRGVZoNztCWL0tQ" // Segundo enlace de descarga

    },       
    {
        id: "Jetpack Joyride Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/jetpack.webp",
        altText: "Jetpack Joyride Mod",
        title: "Jetpack Joyride Mod.apk",
        downloadLink2: "https://terabox.com/s/19WPrAvAbGucEBAu8zckpow" // Segundo enlace de descarga
       
    },       
    {
        id: "Katana ZERO NETFLIX",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/kz.webp",
        altText: "Katana ZERO",
        title: "Katana ZERO NETFLIX.apk",
        downloadLink2: "https://nephobox.com/s/1ahbLE4F6bkJOtYl9RW8SGw" // Segundo enlace de descarga

    },       
    {
        id: "Lara Croft Guardian of Light",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/lara.webp",
        altText: "Lara Croft Guardian of Light",
        title: "Lara Croft Guardian of Light.apk",
        downloadLink2: "https://terabox.com/s/1gM2XhGJCI4xtJsNV6ddhlg" // Segundo enlace de descarga
       
    },       
    {
        id: "LIMBO",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/limbo.webp",
        altText: "LIMBO",
        title: "LIMBO v1.21.apk",
        downloadLink2: "https://terabox.com/s/16CKSDht2nw3D5Db6ErE9JQ" // Segundo enlace de descarga

    },       
    {
        id: "Little Nightmares",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/litle.webp",
        altText: "Little Nightmares",
        title: "Little Nightmares.apk",
        downloadLink2: "https://nephobox.com/s/1JTGAzJbpaOaDWy6-dEaAAA" // Segundo enlace de descarga

    },       
    {
        id: "Luigi´s Mansion 2D",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/luigi.webp",
        altText: "Luigi´s Mansion 2D",
        title: "Luigi´s Mansion 2D.apk (Fangame) ",
        downloadLink2: "https://terabox.com/s/1_8Is8GIcLLFusFfD8o0H_g" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne Mobile",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/max.webp",
        altText: "Max Payne Mobile",
        title: "Max Payne Mobile Installer.apk",
        downloadLink2: "https://nephobox.com/s/13Bhus5P9sHTUzftqx9mWZg" // Segundo enlace de descarga

    },       
    {
        id: "Metal Slug 4 Aca NeoGeo",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/metalslug4.webp",
        altText: "Metal Slug 4 Aca NeoGeo",
        title: "Metal Slug 4 Aca NeoGeo.apk",
        downloadLink2: "https://terabox.com/s/1g3QhLEi7aEiF7nO2u0Poag" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft pe",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/minecraft.webp",
        altText: "Minecraft PE",
        title: "Minecraft PE 1.21.51.apk",
        downloadLink2: "https://nephobox.com/s/1tpPKcegk2UhRNWB8MHRLow" // Segundo enlace de descarga

    },       
    {
        id: "NARUTO ULTIMATE NINJA STORM MOBILE",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/naruto.webp",
        altText: "NARUTO ULTIMATE NINJA STORM MOBILE",
        title: "NARUTO ULTIMATE NINJA STORM MOBILE.apk",
        downloadLink2: "https://terabox.com/s/1ov64cykU4qGDR1-bpHNCyQ" // Segundo enlace de descarga

    },       
    {
        id: "Need For Speed Most Wanted 2012",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/nfsmost.webp",
        altText: "Need For Speed Most Wanted 2012",
        title: "Need For Speed Most Wanted 2012.apk +obb (Android 14)",
        downloadLink2: "https://nephobox.com/s/1dCoBhsHYkLzjro6CcS4-vA" // Segundo enlace de descarga

    },       
    {
        id: "Nethersx2 v2.0",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/nether.webp",
        altText: "Nethersx2 v2.0",
        title: "Nethersx2 v2.0.apk",
        downloadLink2: "https://terabox.com/s/195vQYDcfXrHQKm2WrlBu_w" // Segundo enlace de descarga

    },       
    {
        id: "N.O.V.A 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/nova3.webp",
        altText: "N.O.V.A 3",
        title: "N.O.V.A 3.apk (Android 14)",
        downloadLink2: "https://terabox.com/s/1fe7Y-nA2ReKHMEbc5aqr3g" // Segundo enlace de descarga

    },       
    {
        id: "Pizza Tower Atesquik",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pizzatower.webp",
        altText: "Pizza Tower Atesquik",
        title: "Pizza Tower Atesquik.apk",
        downloadLink2: "https://terabox.com/s/1RAEysNkbxhGp0bqKzACMqw" // Segundo enlace de descarga

    },       
    {
        id: "Poppy Playtime Chapter 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/poppy3.webp",
        altText: "Poppy Playtime Chapter 3",
        title: "Poppy Playtime Chapter 3.apk",
        downloadLink2: "https://nephobox.com/s/1tauoHixENBA8nx_SbajafQ" // Segundo enlace de descarga

    },       
    {
        id: "Poppy Playtime Chapter 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/poppy4.webp",
        altText: "Poppy Playtime Chapter 4",
        title: "Poppy Playtime Chapter 4",
        downloadLink2: "https://terabox.com/s/1KNgB4962dENs6efBTIlF0g" // Segundo enlace de descarga

    },       
    {
        id: "Portal",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/portal.webp",
        altText: "Portal",
        title: "Portal",
        downloadLink2: "https://terabox.com/s/1me8OCr9az7ZJQCPOAhwoew" // Segundo enlace de descarga

    },       
    {
        id: "Power Warriors v18.2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/power.webp",
        altText: "Power Warriors v18.2",
        title: "Power Warriors v18.2.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1rknbauHV_VQmdKgpkymbKQ" // Segundo enlace de descarga

    },       
    {
        id: "Prince of the Persia Lost Crown",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/prince.webp",
        altText: "Prince of the Persia Lost Crown",
        title: "Prince of the Persia Lost Crown.apk",
        downloadLink2: "https://terabox.com/s/1tXcm6JpHm0lnQayFlQxmBA" // Segundo enlace de descarga

    },       
    {
        id: "Proyect Zomboid",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/zomboid.webp",
        altText: "Proyect Zomboid",
        title: "Proyect Zomboid",
        downloadLink2: "https://terabox.com/s/189-2GOwT7CeiRMUrzF5Mwg" // Segundo enlace de descarga

    },       
    {
        id: "Pvz Fusion",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pvzfusion.webp",
        altText: "pvzfusion",
        title: "Pvz Fusion 2.4.1.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1g_pZJlduItmBsbakavnNoA" // Segundo enlace de descarga

    },       
    {
        id: "Rain World",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/rain.webp",
        altText: "Rain World",
        title: "Rain World.apk",
        downloadLink2: "https://nephobox.com/s/1j7tDPHOSnHyqDja-dDMWTg" // Segundo enlace de descarga

    },       
    {
        id: "REPO MOBILE",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/repo.webp",
        altText: "REPO MOBILE",
        title: "REPO MOBILE PREMIUM SIN ANUNCIOS (NO OFICIAL).apk",
        downloadLink2: "https://terabox.com/s/1w_SRzwvj-rgGXu2rxFf5rA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4 Remake",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/re4.webp",
        altText: "Resident Evil 4 Remake",
        title: "Resident Evil 4 Remake (fangame).apk",
        downloadLink2: "https://terabox.com/s/16Delch8UV1z0AGqFvIpFVA" // Segundo enlace de descarga

    },       
    {
        id: "Retro Game Center",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/retro.webp",
        altText: "Retro Game Center",
        title: "Retro Game Center.apk",
        downloadLink2: "https://nephobox.com/s/1pOtvDGM__g8fJehxMwK9Yg" // Segundo enlace de descarga

    },       
    {
        id: "RPCS3 ANDROID",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/ps3.webp",
        altText: "RPCS3 ANDROID",
        title: "RPCS3 ANDROID v7.apk",
        downloadLink2: "https://terabox.com/s/1rJ1odFsx5i1lzaPZZlqO0Q" // Segundo enlace de descarga

    },       
    {
        id: "RPCSX ANDROID",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/rpcsx.webp",
        altText: "RPCSX ANDROID",
        title: "RPCSX ANDROID.apk",
        downloadLink2: "https://terabox.com/s/1WYsIBDWVrZkw9p_YHkg3nA" // Segundo enlace de descarga

    },       
    {
        id: "Ryujinx Android",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/ryujinx.webp",
        altText: "Ryujinx Android",
        title: "Ryujinx Android.apk",
        downloadLink2: "https://terabox.com/s/17PSpqGZnl222nQK53oT7Lg" // Segundo enlace de descarga

    },       
    {
        id: "Saiyan Tournament God Warriors Dragon Z",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/saiyan.webp",
        altText: "Saiyan Tournament God Warriors Dragon Z",
        title: "Saiyan Tournament God Warriors Dragon Z.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1tnAL2LRLOujRsI6rJzmT3g" // Segundo enlace de descarga

    },       
    {
        id: "Skyline Edge",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/skyline.webp",
        altText: "Skyline Edge",
        title: "Skyline Edge V72.apk",
        downloadLink2: "https://terabox.com/s/1wzw4SzIW7CV_LX0EqoCFsw" // Segundo enlace de descarga

    },       
    {
        id: "Skul The Hero Slayer",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/skul.webp",
        altText: "Skul The Hero Slayer",
        title: "Skul The Hero Slayer.apk",
        downloadLink2: "https://terabox.com/s/1DhRq5xGOQitUxxnyskmw5w" // Segundo enlace de descarga

    },       
    {
        id: "Slime Rancher",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/slime.webp",
        altText: "Slime Rancher",
        title: "Slime Rancher (fangame).apk",
        downloadLink2: "https://terabox.com/s/1XQrj1J8Vh6LUADpvtJmejw" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Mania Plus",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/sonicmania.webp",
        altText: "Sonic Mania Plus",
        title: "Sonic Mania Plus.apk",
        downloadLink2: "https://nephobox.com/s/12xeBbE8jNMV3B-xM8-LISg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic 2 Absolute",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC1.webp",
        altText: "Sonic 2 Absolute",
        title: "Sonic 2 Absolute (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1M3oIqqfq3uPQXywdocdYGw" // Segundo enlace de descarga
        

    },       
    {
        id: "Sonic Maps",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC2.webp",
        altText: "Sonic Maps",
        title: "Sonic Maps (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1BEYNbOAUsTUwkD9C10fLgQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic P-06",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC3.webp",
        altText: "Sonic P-06",
        title: "Sonic P-06 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/15NGbUygkq-5lIl1-lG_xEA" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic 3 A.I.R",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC4.webp",
        altText: "Sonic 3 A.I.R",
        title: "Sonic 3 A.I.R (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1jRjSPB4hLOmNhN2lx1nlFQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic GT",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC5.webp",
        altText: "Sonic GT",
        title: "Sonic GT (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1IMgtJLvkkScau9VWc71FaA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Momentum",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC6.webp",
        altText: "Sonic Momentum",
        title: "Sonic Momentum (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1-UJx84DfQKYN-t-XD_umEg" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Moon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC7.webp",
        altText: "Sonic Moon",
        title: "Sonic Moon (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1redua24OtZ06emahgiTnpA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic SMS Remake 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC8.webp",
        altText: "Sonic SMS Remake 2",
        title: "Sonic SMS Remake 2 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1p9FgH9CW7MWUdfYnMjnRKg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Triple Trouble 16 bit",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC9.webp",
        altText: "Sonic Triple Trouble 16 bit",
        title: "Sonic Triple Trouble 16 bit (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1La6s0Nj5FLUI5OgEYo33QA" // Segundo enlace de descarga
        
    },       
    {
        id: "SONIC UNLEASHED",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/SONIC10.webp",
        altText: "SONIC UNLEASHED",
        title: "SONIC UNLEASHED (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1LuLOKdvJHTwuRTjIOZ6OGQ" // Segundo enlace de descarga

    },       
    {
        id: "Spider Man Miles Morales",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/miles.webp",
        altText: "Spider Man Miles Morales",
        title: "Spider Man Miles Morales V4 (Fangame).apk",
        downloadLink2: "https://terabox.com/s/190ve3VWraFq5J--7EeO1KA" // Segundo enlace de descarga

    },       
    {
        id: "Splinter Cell Conviction",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/cell.webp",
        altText: "Splinter Cell Conviction",
        title: "Splinter Cell Conviction",
        downloadLink2: "https://terabox.com/s/1tnIN9AwNl6nEoOeFAk9paw" // Segundo enlace de descarga

    },       
    {
        id: "Stardew Valley",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/stardew.webp",
        altText: "Stardew Valley",
        title: "Stardew Valley.apk",
        downloadLink2: "https://nephobox.com/s/1HvpBqh4r0yyUsWo_5WptfA" // Segundo enlace de descarga

    },       
    {
        id: "Subnautica",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/subnautica.webp",
        altText: "Subnautica",
        title: "Subnautica",
        downloadLink2: "https://terabox.com/s/1fHQfrNqODU4CCYFgjyZqLg" // Segundo enlace de descarga

    },       
    {
        id: "Subway Surfers",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/subway.webp",
        altText: "Subway Surfers",
        title: "Subway Surfers Mod.apk",
        downloadLink2: "https://terabox.com/s/1-tk6eNP0Z3oEbPDcR_7nhg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 2 HD",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/mario.webp",
        altText: "Super Mario 2 HD",
        title: "Super Mario 2 HD.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/18pipkjMIMMsi9lz49Vk0KQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Legacy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/sm4legacy.webp",
        altText: "Super Mario 4 Jugadores Legacy",
        title: "Super Mario 4 Jugadores Legacy 2.0.5 (Fangame).apk",
        downloadLink2: "https://terabox.com/s/1t8hxAFMDoY_wfbKDN2ucxA" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 4 Jugadores Online Battle",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/sm4jugadores.webp",
        altText: "Super Mario 4 Jugadores Online Battle",
        title: "Super Mario 4 Jugadores Online Battle 2.0.1 (Fangame).apk",
        downloadLink2: "https://nephobox.com/s/1HyvX_XA80-GE1ET8oweBKQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Bros Remake A Plumber Journey",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/marioremake.webp",
        altText: "Super Mario Bros Remake A Plumber Journey",
        title: "Super Mario Bros Remake A Plumber Journey.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1D5lXlx6JNGNoUjBvG7IN1g" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Maker World Engine",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/mariomakerengine.webp",
        altText: "Super Mario Maker World Engine",
        title: "Super Mario Maker World Engine 3.4.4.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1Fqo5GK7LuxX7AJ2uo59bFg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario World 2D Deluxe",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/mario2dworld.webp",
        altText: "Super Mario World 2D Deluxe",
        title: "Super Mario World 2D Deluxe.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/19driGK0q3Lz85WjRDr6L-A" // Segundo enlace de descarga

    },       
    {
        id: "Streets of Rage 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/streets4.webp",
        altText: "Streets of Rage 4",
        title: "Streets of Rage 4.apk",
        downloadLink2: "https://nephobox.com/s/1e11lwbnjTUoNeq3I9eqmdA" // Segundo enlace de descarga

    },       
    {
        id: "Super Meat Boy Forever",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/superboy.webp",
        altText: "Super Meat Boy Forever",
        title: "Super Meat Boy Forever.apk",
        downloadLink2: "https://nephobox.com/s/1io-UTzUM_Gpq7PFHm6rZTA" // Segundo enlace de descarga
       
    },       
    {
        id: "Temple Run 2 Mod",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/templerun.webp",
        altText: "Temple Run 2 Mod",
        title: "Temple Run 2 Mod",
        downloadLink2: "https://terabox.com/s/1_gHxYDZYmDc5hl8kEbcNXw" // Segundo enlace de descarga

    },       
    {
        id: "Terraria",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/terraria.webp",
        altText: "Terraria",
        title: "Terraria.apk",
        downloadLink2: "https://nephobox.com/s/1jwgGjZW4kkOG3sUvwkCxkQ" // Segundo enlace de descarga

    },       
    {
        id: "TINTIN",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/tintin.webp",
        altText: "TINTIN",
        title: "TINTIN.apk",
        downloadLink2: "https://terabox.com/s/1i0exaYsdMxmP3lsgDgZVtg" // Segundo enlace de descarga

    },       
    {
        id: "The Dark Knight Rises",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/batman.webp",
        altText: "The Dark Knight Rises",
        title: "The Dark Knight Rises.apk",
        downloadLink2: "https://terabox.com/s/15kBDEtu1Wyi55fixrJjcGQ" // Segundo enlace de descarga

    },       
    {
        id: "The Final Power Level Warrior",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/finalpower.webp",
        altText: "The Final Power Level Warrior",
        title: "The Final Power Level Warrior.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1B0tO8_kefXa3Hyn6s2akcw" // Segundo enlace de descarga
        
    },       
    {
        id: "TMNT Shedders Revenge",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/tortugas.webp",
        altText: "TMNT Shedders Revenge",
        title: "TMNT Shedders Revenge v1.1.2.apk",
        downloadLink2: "https://terabox.com/s/1HPgP8Q1wwapGaRgqcKOabQ" // Segundo enlace de descarga

    },       
    {
        id: "Ultimate Thunder BAFA alpha",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/bafa.webp",
        altText: "Ultimate Thunder BAFA alpha 2.3",
        title: "Ultimate Thunder BAFA alpha 2.3.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1P7JFk-TT1NwvOsB6EG6qXQ" // Segundo enlace de descarga

    },       
    {
        id: "Videogame Premium",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/videogame.webp",
        altText: "Videogame Premium",
        title: "Videogame Premium.apk",
        downloadLink2: "https://nephobox.com/s/1-sDmVNnqVlfOeT3MkW4yrw" // Segundo enlace de descarga
       
    },       
    {
        id: "Vita3k",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/vita3k.webp",
        altText: "Vita3k",
        title: "Vita3k V12.apk",
        downloadLink2: "https://nephobox.com/s/12UENuOidFdgPJtTGP1NLaA" // Segundo enlace de descarga

    },       
    {
        id: "XCOM 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/xcom2.webp",
        altText: "XCOM 2",
        title: "XCOM 2",
        downloadLink2: "https://terabox.com/s/1YRqgiHyD-z718-5_HX3BfA" // Segundo enlace de descarga

    },       
    {
        id: "Yuzu Android",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/yuzu.webp",
        altText: "Yuzu Android",
        title: "Yuzu Android v278.apk",
        downloadLink2: "https://terabox.com/s/1E1zrCDwVKYW818kDOJKsQQ" // Segundo enlace de descarga

    },       
    {
        id: "Z LEGENDS 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/zlegends3.webp",
        altText: "Z LEGENDS 3",
        title: "Z LEGENDS 3 v.2.2.4.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1bHQKWkq51ryJNBZLrCJ4Mw" // Segundo enlace de descarga

    },       
    {
        id: "Zenkai Awakening-BETA2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/zenkai.webp",
        altText: "Zenkai Awakening-BETA2",
        title: "Zenkai Awakening-BETA2.apk (Fangame)",
        downloadLink2: "https://terabox.com/s/1npSOkKLxzKpMeOvpq4FSJw" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
