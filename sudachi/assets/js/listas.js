// Lista de juegos
const juegos = [       
    {
        id: "A Short Hike",
        imgSrc: "assets/img/HIKE.jpg",
        altText: "A Short Hike",
        title: "A Short Hike.nsp",
        downloadLink2: "https://terabox.com/s/1QLkxNwHn56_RdAPaxRIpCA" // Segundo enlace de descarga
    },       
    {
        id: "ANIMAL WELL",
        imgSrc: "assets/img/ANIWELL.jpg",
        altText: "ANIMALL WELL",
        title: "ANIMAL WELL.nsp",
        downloadLink2: "https://terabox.com/s/1gUh9ldXtLJkxh4TrwBUY7g" // Segundo enlace de descarga

    },       
    {
        id: "ARMS",
        imgSrc: "assets/img/ARMS.jpg",
        altText: "ARMS",
        title: "ARMS.nsp",
        downloadLink2: "https://terabox.com/s/1xx0pp2yebYGcnmWbuhcw4Q" // Segundo enlace de descarga

    },       
    {
        id: "BACKROOM ESCAPE LABYRINTH HORROR",
        imgSrc: "assets/img/BACKROOM.jpg",
        altText: "BACKROOM ESCAPE LABYRINTH HORROR",
        title: "BACKROOM ESCAPE LABYRINTH HORROR.nsp",
        downloadLink2: "https://terabox.com/s/1X_CFSVPS3-IHW_hd7yR1Pg" // Segundo enlace de descarga

    },       
    {
        id: "Bastion",
        imgSrc: "assets/img/BASTION.jpg",
        altText: "Bastion",
        title: "Bastion.nsp",
        downloadLink2: "https://terabox.com/s/1EjaWHiZ2PPBPRqT87HeaUQ" // Segundo enlace de descarga

    },       
    {
        id: "Batman Arkham Knight",
        imgSrc: "assets/img/BATMAN.jpg",
        altText: "Batman Arkham Knight",
        title: "Batman Arkham Knight.nsp",
        downloadLink2: "https://terabox.com/s/1221YkjBHvRGEriVnIcplDA" // Segundo enlace de descarga

    },       
    {
        id: "Bayonetta 2",
        imgSrc: "assets/img/BAYO2.jpg",
        altText: "Bayonetta 2",
        title: "Bayonetta 2.nsp",
        downloadLink2: "https://terabox.com/s/1Zflp75ozyF3lzBxuvSDCvw" // Segundo enlace de descarga

    },       
    {
        id: "Bioshock Remastered ",
        imgSrc: "assets/img/BIO.jpg",
        altText: "Bioshock Remastered ",
        title: "Bioshock Remastered.xci",
        downloadLink2: "https://terabox.com/s/1-BGTW7y9toBTt1ZapXidYQ" // Segundo enlace de descarga

    },       
    {
        id: "Blades of Time",
        imgSrc: "assets/img/BLADES.jpg",
        altText: "Blades of Time",
        title: "Blades of Time.nsp",
        downloadLink2: "https://terabox.com/s/1d8LYMkElCy8JE_UgWzXLkw" // Segundo enlace de descarga

    },       
    {
        id: "Blasphemous 2",
        imgSrc: "assets/img/FEMUS2.jpg",
        altText: "Blasphemous 2",
        title: "Blasphemous 2.xci",
        downloadLink2: "https://terabox.com/s/1oAKDizxXGlf7sim9JlP5Eg" // Segundo enlace de descarga

    },       
    {
        id: "BULLETSTORM DUKE OF SWITCH EDITION",
        imgSrc: "assets/img/BULLET.jpg",
        altText: "BULLETSTORM DUKE OF SWITCH EDITION",
        title: "BULLETSTORM DUKE OF SWITCH EDITION.nsp",
        downloadLink2: "https://terabox.com/s/1nRHN30jMKSZfC-mOFV_EVQ" // Segundo enlace de descarga

    },       
    {
        id: "Burnout Paradise Remastered",
        imgSrc: "assets/img/BORNOT.jpg",
        altText: "Burnout Paradise Remastered",
        title: "Burnout Paradise Remastered.nsp",
        downloadLink2: "https://terabox.com/s/1oBXGqCckmjW10qXIoAOAbw" // Segundo enlace de descarga

    },       
    {
        id: "Call Of Juarez",
        imgSrc: "assets/img/CALL.jpg",
        altText: "Call Of Juarez",
        title: "Call Of Juarez.nsp",
        downloadLink2: "https://terabox.com/s/1ZuuXWIB0QRtu8BvFco0iIQ" // Segundo enlace de descarga

    },       
    {
        id: "Cars 3 Driven to Win",
        imgSrc: "assets/img/CARS3.jpg",
        altText: "Cars 3 Driven to Win",
        title: "Cars 3 Driven to Win.nsp",
        downloadLink2: "https://terabox.com/s/1aJbDCQInXfK2vZ0Ont4SrQ" // Segundo enlace de descarga

    },       
    {
        id: "Cat Warrior",
        imgSrc: "assets/img/CAT.jpg",
        altText: "Cat Warrior",
        title: "Cat Warrior.nsp",
        downloadLink2: "https://terabox.com/s/1WocX7AQXGMnYPk-sOWQW2A" // Segundo enlace de descarga

    },       
    {
        id: "Celeste",
        imgSrc: "assets/img/CELE.jpg",
        altText: "Celeste",
        title: "Celeste.xci",
        downloadLink2: "https://terabox.com/s/1tQ8n8H8Hy2d7-sqmFGPEJg" // Segundo enlace de descarga

    },       
    {
        id: "Crash Bandicoot N. Sane Trilogy",
        imgSrc: "assets/img/CRASHN.jpg",
        altText: "Crash Bandicoot N. Sane Trilogy",
        title: "Crash Bandicoot N. Sane Trilogy.xci",
        downloadLink2: "https://terabox.com/s/1bwR9CwCYqceO9zlikl1O2g" // Segundo enlace de descarga

    },       
    {
        id: "CRISIS CORE FINAL FANTASY VII REUNION",
        imgSrc: "assets/img/FINAL.jpg",
        altText: "CRISIS CORE FINAL FANTASY VII REUNION",
        title: "CRISIS CORE FINAL FANTASY VII REUNION.xci",
        downloadLink2: "https://terabox.com/s/1aGN3suuj7X7x6YuBn4jVDQ" // Segundo enlace de descarga

    },       
    {
        id: "Crysis 3 Remastered",
        imgSrc: "assets/img/crysis3.jpg",
        altText: "Crysis 3 Remastered",
        title: "Crysis 3 Remastered.xci",
        downloadLink2: "https://terabox.com/s/1BJcGwcE1TnIzqShQKBd2Mg" // Segundo enlace de descarga

    },       
    {
        id: "Cuphead",
        imgSrc: "assets/img/CUD.jpg",
        altText: "Cuphead",
        title: "Cuphead.nsp",
        downloadLink2: "https://terabox.com/s/1VRWPisAp_Fsg5AuK5fhSnA" // Segundo enlace de descarga

    },       
    {
        id: "Darksiders 2 Deathinitive Edition",
        imgSrc: "assets/img/DARK.jpg",
        altText: "Darksiders 2 Deathinitive Edition",
        title: "Darksiders 2 Deathinitive Edition.nsp",
        downloadLink2: "https://terabox.com/s/119rVj519hnyYP0IMEVZm9A" // Segundo enlace de descarga

    },       
    {
        id: "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles",
        imgSrc: "assets/img/KMY.jpg",
        altText: "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles",
        title: "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles.xci",
        downloadLink2: "https://terabox.com/s/1deH9vO28IimUKC61PV1YJg" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Tropical Freeze",
        imgSrc: "assets/img/FRZ.jpg",
        altText: "Donkey Kong Country Tropical Freeze",
        title: "Donkey Kong Country Tropical Freeze.nsp",
        downloadLink2: "https://terabox.com/s/17m28161k8KWktBtlq90kfA" // Segundo enlace de descarga

    },       
    {
        id: "DOOM",
        imgSrc: "assets/img/doom.jpg",
        altText: "DOOM",
        title: "DOOM.xci",
        downloadLink2: "https://terabox.com/s/1e1lYEllW2IrLVXpWzwHe5g" // Segundo enlace de descarga

    },       
    {
        id: "DOOM Eternal",
        imgSrc: "assets/img/DMET.jpg",
        altText: "DOOM Eternal",
        title: "DOOM Eternal.nsp",
        downloadLink2: "https://terabox.com/s/19AH4jbodgMqqv5Kt3qXCmQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball FighterZ",
        imgSrc: "assets/img/DBFZ.jpg",
        altText: "Dragon Ball FighterZ",
        title: "Dragon Ball FighterZ.nsp",
        downloadLink2: "https://terabox.com/s/1cm_aGwMtSuGG_C__D32ZZA" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Xenoverse 2",
        imgSrc: "assets/img/XV2.jpg",
        altText: "Dragon Ball Xenoverse 2",
        title: "Dragon Ball Xenoverse 2.xci (PENDIENTE)",
        downloadLink2: "https://terabox.com/s/1QPfAMXLXpOUQBqaZAs9www" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Kakarot",
        imgSrc: "assets/img/DBZK.jpg",
        altText: "Dragon Ball Z Kakarot",
        title: "Dragon Ball Z Kakarot.nsp",
        downloadLink2: "https://terabox.com/s/1eNiyCEOJZa2YH8_pKfoiLA" // Segundo enlace de descarga

    },       
    {
        id: "Dying light Platinum Edition",
        imgSrc: "assets/img/DYING.jpg",
        altText: "Dying light Platinum Edition",
        title: "Dying light Platinum Edition.nsp",
        downloadLink2: "https://terabox.com/s/1De5xWYaRwlgkPaDoK_YaFw" // Segundo enlace de descarga

    },       
    {
        id: "EA SPORTS FIFA 23 Legacy Edition",
        imgSrc: "assets/img/FIFA23.jpg",
        altText: "EA SPORTS FIFA 23 Legacy Edition",
        title: "EA SPORTS FIFA 23 Legacy Edition.xci",
        downloadLink2: "https://terabox.com/s/172o7t09Qg1VBgJthSfHTNg" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy's 2",
        imgSrc: "assets/img/FNS2.jpg",
        altText: "Five Nights at Freddy's 2",
        title: "Five Nights at Freddy's 2.xci",
        downloadLink2: "https://terabox.com/s/1WOl8AgbwTGfI4JH_s_d99Q" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy's Into the Pit",
        imgSrc: "assets/img/FIVEPIT.jpg",
        altText: "Five Nights at Freddy's Into the Pit",
        title: "Five Nights at Freddy's Into the Pit.nsp",
        downloadLink2: "https://terabox.com/s/1KMN-cot7DrMItz4vOl_XTw" // Segundo enlace de descarga

    },       
    {
        id: "Five Nights at Freddy's Sister Location",
        imgSrc: "assets/img/FIVESISTER.jpg",
        altText: "Five Nights at Freddy's Sister Location",
        title: "Five Nights at Freddy's Sister Location.xci",
        downloadLink2: "https://terabox.com/s/1iciZtDiosyV6ApEs_-UmSw" // Segundo enlace de descarga

    },       
    {
        id: "Forgotten Memories Remastered",
        imgSrc: "assets/img/FORGO.jpg",
        altText: "Forgotten Memories Remastered",
        title: "Forgotten Memories Remastered.nsp",
        downloadLink2: "https://terabox.com/s/13hZSj_KZ1qTqwmcb0ZBCdA" // Segundo enlace de descarga

    },       
    {
        id: "Ghostrunner",
        imgSrc: "assets/img/GHOSTT.jpg",
        altText: "Ghostrunner",
        title: "Ghostrunner.xci",
        downloadLink2: "https://terabox.com/s/1MWsxl20BWFqUM2EwMEpVCA" // Segundo enlace de descarga

    },       
    {
        id: "Guns Gore and Cannoli 1",
        imgSrc: "assets/img/GUNNS.jpg",
        altText: "Guns Gore and Cannoli 1",
        title: "Guns Gore and Cannoli 1.nsp",
        downloadLink2: "https://terabox.com/s/1NaVmBW3bJ2263aodn7yyuQ" // Segundo enlace de descarga

    },       
    {
        id: "Hellblade Senuas Sacrifice",
        imgSrc: "assets/img/HELL.jpg",
        altText: "Hellblade Senuas Sacrifice",
        title: "Hellblade Senuas Sacrifice.nsp",
        downloadLink2: "https://terabox.com/s/1ZKQ4uTKcY3Oq5D5oSe7uCw" // Segundo enlace de descarga

    },       
    {
        id: "Hogwarts Legacy",
        imgSrc: "assets/img/HWS.jpg",
        altText: "Hogwarts Legacy",
        title: "Hogwarts Legacy.nsp",
        downloadLink2: "https://terabox.com/s/1AmjDfOe4WaFZoIvsrZcGUQ" // Segundo enlace de descarga

    },       
    {
        id: "Hot Wheels Unleashed",
        imgSrc: "assets/img/HOTW.jpg",
        altText: "Hot Wheels Unleashed",
        title: "Hot Wheels Unleashed.xci",
        downloadLink2: "https://terabox.com/s/1P22-V6Tf0YdCnkSYpdJ49w" // Segundo enlace de descarga

    },       
    {
        id: "JoJo´s Bizarre Adventure All-Star Battle R",
        imgSrc: "assets/img/jojos.jpg",
        altText: "JoJo´s Bizarre Adventure All-Star Battle R",
        title: "JoJo´s Bizarre Adventure All-Star Battle R.nsp",
        downloadLink2: "https://terabox.com/s/1gvU0k5G1MaaIE8L45z2eBQ" // Segundo enlace de descarga

    },       
    {
        id: "JUMP FORCE Deluxe Edition",
        imgSrc: "assets/img/JUMPF.jpg",
        altText: "JUMP FORCE Deluxe Edition",
        title: "JUMP FORCE Deluxe Edition.nsp",
        downloadLink2: "https://terabox.com/s/12SqscC21G0dfOnBuVAOn_Q" // Segundo enlace de descarga

    },       
    {
        id: "Kamen Rider Memory of Heroez",
        imgSrc: "assets/img/KMR.jpg",
        altText: "Kamen Rider Memory of Heroez",
        title: "Kamen Rider Memory of Heroez.xci",
        downloadLink2: "https://terabox.com/s/1X8UfThjLYqHhlZjbcvLT9w" // Segundo enlace de descarga

    },       
    {
        id: "Katana Zero",
        imgSrc: "assets/img/KTN.jpg",
        altText: "Katana Zero",
        title: "Katana Zero.xci",
        downloadLink2: "https://terabox.com/s/196aewymsQO27gPRyyHyVvg" // Segundo enlace de descarga

    },       
    {
        id: "Kirby and the Forgotten Land",
        imgSrc: "assets/img/KRBFL.jpg",
        altText: "Kirby and the Forgotten Land",
        title: "Kirby and the Forgotten Land.nsp",
        downloadLink2: "https://terabox.com/s/10gJJ6X5dqoCF8khxfQ4evw" // Segundo enlace de descarga

    },       
    {
        id: "Little Kitty2C Big City",
        imgSrc: "assets/img/kitty.jpg",
        altText: "Little Kitty2C Big City",
        title: "Little Kitty2C Big City.nsp",
        downloadLink2: "https://terabox.com/s/1jPLHWRZ8nMgz28txvA15Dw" // Segundo enlace de descarga

    },       
    {
        id: "LOLLIPOP CHAINSAW RePOP",
        imgSrc: "assets/img/LLOPOP.jpg",
        altText: "LOLLIPOP CHAINSAW RePOP",
        title: "LOLLIPOP CHAINSAW RePOP.nsp",
        downloadLink2: "https://terabox.com/s/1Nhsyrf-4a8ZeOfyAYtv7_A" // Segundo enlace de descarga

    },       
    {
        id: "Luigi's Mansion 3",
        imgSrc: "assets/img/LGM3.jpg",
        altText: "Luigi's Mansion 3",
        title: "Luigi's Mansion 3.nsp",
        downloadLink2: "https://terabox.com/s/13PHJTQSYaYCyvaIdG-o2XA" // Segundo enlace de descarga

    },       
    {
        id: "Luigi's Mansion 2 HD",
        imgSrc: "assets/img/LGM2.jpg",
        altText: "Luigi's Mansion 2 HD",
        title: "Luigi's Mansion 2 HD.nsp",
        downloadLink2: "https://terabox.com/s/1pXyo72_yOE3X_GA2pmD44A" // Segundo enlace de descarga

    },       
    {
        id: "Mario + Rabbids Sparks of Hope",
        imgSrc: "assets/img/MRBID.jpg",
        altText: "Mario + Rabbids Sparks of Hope",
        title: "Mario + Rabbids Sparks of Hope.xci",
        downloadLink2: "https://terabox.com/s/1OE4MwQmwvkpuRSp_8eE7Rw" // Segundo enlace de descarga

    },       
    {
        id: "Mario kart 8 Deluxe",
        imgSrc: "assets/img/MK8.jpg",
        altText: "Mario kart 8 Deluxe",
        title: "Mario kart 8 Deluxe.nsp",
        downloadLink2: "https://terabox.com/s/1vLYC6MXooazkcKNaBEOAEA" // Segundo enlace de descarga

    },       
    {
        id: "Mario Strikers: Battle League",
        imgSrc: "assets/img/MKRS.jpg",
        altText: "Mario Strikers: Battle League",
        title: "Mario Strikers: Battle League.xci",
        downloadLink2: "https://terabox.com/s/1qp6nYJOec3iaWoKB1jJ11w" // Segundo enlace de descarga

    },       
    {
        id: "Mario vs. Donkey Kong",
        imgSrc: "assets/img/MRDK.jpg",
        altText: "Mario vs. Donkey Kong",
        title: "Mario vs. Donkey Kong.nsp",
        downloadLink2: "https://terabox.com/s/1YcR-kkZGKtHpWIatogu7aQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party Superstars",
        imgSrc: "assets/img/MRPYSP.jpg",
        altText: "Mario Party Superstars",
        title: "Mario Party Superstars.xci",
        downloadLink2: "https://terabox.com/s/1wZ_FnEGyEky-4x7NdO7nhA" // Segundo enlace de descarga

    },       
    {
        id: "Mario y Sonic en los Juegos Olympicos Tokio 2020",
        imgSrc: "assets/img/MARIOYSONIC.jpg",
        altText: "Mario y Sonic en los Juegos Olympicos Tokio 2020",
        title: "Mario y Sonic en los Juegos Olympicos Tokio 2020.nsp",
        downloadLink2: "https://terabox.com/s/10xkSo9gpK0tyT9B2JcjLIg" // Segundo enlace de descarga

    },       
    {
        id: "Marvel vs Capcom Fighting Collection Arcade Classics",
        imgSrc: "assets/img/MVCP.jpg",
        altText: "Marvel vs Capcom Fighting Collection Arcade Classics",
        title: "Marvel vs Capcom Fighting Collection Arcade Classics.xci",
        downloadLink2: "https://terabox.com/s/1KIswN6_QgUvcTGPhYKJnlg" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man 11",
        imgSrc: "assets/img/MG11.jpg",
        altText: "Mega Man 11",
        title: "Mega Man 11.xci",
        downloadLink2: "https://terabox.com/s/1iCx5DeQSLr1YEYpk1dIH5Q" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Dread",
        imgSrc: "assets/img/MTDR.jpg",
        altText: "Metroid Dread",
        title: "Metroid Dread.nsp",
        downloadLink2: "https://terabox.com/s/1KewBmftXcoqtZ5doMmqemg" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime Remastered",
        imgSrc: "assets/img/MTPR.jpg",
        altText: "Metroid Prime Remastered",
        title: "Metroid Prime Remastered.nsp",
        downloadLink2: "https://terabox.com/s/1hLGfz_0XNl7J51TcwGYguQ" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft Dungeons ULtimate Edition",
        imgSrc: "assets/img/MCDUN.jpg",
        altText: "Minecraft Dungeons Ultimate Edition",
        title: "Minecraft Dungeons Ultimate Edition.xci",
        downloadLink2: "https://terabox.com/s/1QIuXOxLh9CAbRr2olldzoA" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft Legends",
        imgSrc: "assets/img/MCLY.jpg",
        altText: "Minecraft Legends",
        title: "Minecraft Legends.nsp",
        downloadLink2: "https://terabox.com/s/16PWRYG8HkmZAuyvPKhdFjg" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft",
        imgSrc: "assets/img/MCBK.jpg",
        altText: "Minecraft",
        title: "Minecraft.xci",
        downloadLink2: "https://terabox.com/s/1z3lt3ylvMVYh2r-WwSQg2g" // Segundo enlace de descarga

    },       
    {
        id: "Mitsurugi Kamui Hikae",
        imgSrc: "assets/img/MKH.jpg",
        altText: "Mitsurugi Kamui Hikae",
        title: "Mitsurugi Kamui Hikae.nsp",
        downloadLink2: "https://terabox.com/s/1SuuE8w_s_KG776cBW5I9KA" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat 1",
        imgSrc: "assets/img/MK1.jpg",
        altText: "Mortal kombat 1",
        title: "Mortal Kombat 1.nsp",
        downloadLink2: "https://terabox.com/s/1HLajWAtdGV7RmEQDA3enYw" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat 11",
        imgSrc: "assets/img/MK11.jpg",
        altText: "Mortal Kombat 11",
        title: "Mortal Kombat 11.nsp",
        downloadLink2: "https://terabox.com/s/1nt8znYMkxC4fj5pCik2zMA" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Ultimate Ninja Storm 4",
        imgSrc: "assets/img/NRT4.jpg",
        altText: "Naruto Ultimate Ninja Storm 4",
        title: "Naruto Ultimate Ninja Storm 4.nsp",
        downloadLink2: "https://terabox.com/s/1u331UK4Y5gKhmFZQbOGhlg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Utlimate Ninja Trilogy",
        imgSrc: "assets/img/NRTTY.jpg",
        altText: "Naruto Utlimate Ninja Trilogy",
        title: "Naruto Utlimate Ninja Trilogy.nsp",
        downloadLink2: "Link" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed: Hot Pursuit Remastered",
        imgSrc: "assets/img/NFSWHT.jpg",
        altText: "Need for Speed: Hot Pursuit Remastered",
        title: "Need for Speed: Hot Pursuit Remastered.nsp",
        downloadLink2: "https://terabox.com/s/1O2NY3UF9jq-zsN6vdFf7DQ" // Segundo enlace de descarga

    },       
    {
        id: "NEO The World Ends with You",
        imgSrc: "assets/img/NEO.jpg",
        altText: "NEO The World Ends with You",
        title: "NEO The World Ends with You.nsp",
        downloadLink2: "https://terabox.com/s/1zg_CY7e97NRnOpLD0Hja3A" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. U Deluxe",
        imgSrc: "assets/img/WIUDL.jpg",
        altText: "New Super Mario Bros. U Deluxe",
        title: "New Super Mario Bros. U Deluxe.nsp",
        downloadLink2: "https://terabox.com/s/1_ThpK4njt3WXCnYjbrbnyw" // Segundo enlace de descarga

    },       
    {
        id: "NieRAutomata The End of YoRHa Edition",
        imgSrc: "assets/img/NIER.jpg",
        altText: "NieRAutomata The End of YoRHa Edition",
        title: "NieRAutomata The End of YoRHa Edition.nsp",
        downloadLink2: "https://terabox.com/s/1OV4GYKtx1pBVW_jAD8gmdQ" // Segundo enlace de descarga

    },       
    {
        id: "Nights of Azure 2 Bride of the New Moon",
        imgSrc: "assets/img/night.jpg",
        altText: "Nights of Azure 2 Bride of the New Moon",
        title: "Nights of Azure 2 Bride of the New Moon.nsp",
        downloadLink2: "https://terabox.com/s/191nChnECC51jH8tg4knk7A" // Segundo enlace de descarga

    },       
    {
        id: "Nikoderiko The Magical World",
        imgSrc: "assets/img/NIKO.jpg",
        altText: "Nikoderiko The Magical World",
        title: "Nikoderiko The Magical World.nsp",
        downloadLink2: "https://terabox.com/s/1IGtqz0Et7H7hPLu8rLxrDg" // Segundo enlace de descarga

    },       
    {
        id: "No Man Sky",
        imgSrc: "assets/img/HMSKY.jpg",
        altText: "No Man Sky",
        title: "No Man Sky.nsp",
        downloadLink2: "https://terabox.com/s/1Ir7ZrOlzU68IYXIwSPS-fg" // Segundo enlace de descarga

    },       
    {
        id: "OCEANHORN 2",
        imgSrc: "assets/img/OCH2.jpg",
        altText: "OCEANHORN 2",
        title: "OCEANHORN 2.nsp",
        downloadLink2: "https://terabox.com/s/1fv3qwVX-lG-lHyhBzi-SKw" // Segundo enlace de descarga

    },       
    {
        id: "One Piece Odyssey Deluxe Edition",
        imgSrc: "assets/img/ONEPI.jpg",
        altText: "One Piece Odyssey Deluxe Edition",
        title: "One Piece Odyssey Deluxe Edition.xci",
        downloadLink2: "https://terabox.com/s/1utwTn9RDH-nLW3Wxu8E4vw" // Segundo enlace de descarga

    },       
    {
        id: "Pay Day 2",
        imgSrc: "assets/img/PAYDAY2.jpg",
        altText: "Pay Day 2",
        title: "Pay Day 2.xci",
        downloadLink2: "https://terabox.com/s/1tMfnbkHXlK6cr_humZcEjQ" // Segundo enlace de descarga

    },       
    {
        id: "Persona 5 Royal",
        imgSrc: "assets/img/PS5RL.jpg",
        altText: "Persona 5 Royal",
        title: "Persona 5 Royal.nsp",
        downloadLink2: "https://terabox.com/s/10Eu7Gi06KhvvfjzRGbq7zA" // Segundo enlace de descarga

    },       
    {
        id: "Plastomorphosis",
        imgSrc: "assets/img/PLMS.jpg",
        altText: "Plastomorphosis",
        title: "Plastomorphosis.nsp",
        downloadLink2: "https://terabox.com/s/1pXeGysqlCpA09IEZsHzU2Q" // Segundo enlace de descarga

    },       
    {
        id: "Pokémon Escudo",
        imgSrc: "assets/img/ESCUDO.jpg",
        altText: "Pokémon Escudo",
        title: "Pokémon Escudo.xci",
        downloadLink2: "https://terabox.com/s/1RBGe1SCRh5LJUHsqUCdsCw" // Segundo enlace de descarga

    },       
    {
        id: "Pokémon Espada",
        imgSrc: "assets/img/ESPADA.jpg",
        altText: "Pokémon Espada",
        title: "Pokémon Espada.xci",
        downloadLink2: "https://terabox.com/s/1isNOfaLQ-LOWFevmAKX73Q" // Segundo enlace de descarga 

    },       
    {
        id: "Pokémon: Let’s Go, Pikachu",
        imgSrc: "assets/img/PKMPIK.jpg",
        altText: "Pokémon: Let’s Go, Pikachu",
        title: "Pokémon: Let’s Go, Pikachu.nsp",
        downloadLink2: "https://terabox.com/s/1bvDOG2yp7Vi1VcZkpNHUNg" // Segundo enlace de descarga

    },       
    {
        id: "Pokémon Leyendas Arceus",
        imgSrc: "assets/img/PLA.jpg",
        altText: "Pokémon Leyendas Arceus",
        title: "Pokémon Leyendas Arceus.xci",
        downloadLink2: "https://terabox.com/s/1ghqUU9fRKsu29OQeI7n99Q" // Segundo enlace de descarga  

    },       
    {
        id: "Pokken Tournament DX",
        imgSrc: "assets/img/POKKEN.jpg",
        altText: "Pokken Tournament DX",
        title: "Pokken Tournament DX.xci",
        downloadLink2: "https://terabox.com/s/18ef602wucsIwjlZTcxrdwA" // Segundo enlace de descarga

    },       
    {
        id: "Poppy Play Time 3",
        imgSrc: "assets/img/POPY3.jpg",
        altText: "Poppy Play Time 3",
        title: "Poppy Play Time 3.nsp",
        downloadLink2: "https://terabox.com/s/1c87nyaLsgW8kmk8uGSyJdA" // Segundo enlace de descarga

    },       
    {
        id: "PORTAL",
        imgSrc: "assets/img/PORTAL.jpg",
        altText: "PORTAL",
        title: "PORTAL.nsp",
        downloadLink2: "https://terabox.com/s/1gsJqqLj2j2wGnZwhf2zumA" // Segundo enlace de descarga

    },       
    {
        id: "Prince of Persia The Lost Crown",
        imgSrc: "assets/img/PRFC.jpg",
        altText: "Prince of Persia The Lost Crown",
        title: "Prince of Persia The Lost Crown.xci",
        downloadLink2: "https://terabox.com/s/1egQNtraylBpleyF-eXKxxg" // Segundo enlace de descarga

    },       
    {
        id: "Princess Peach Showtime",
        imgSrc: "assets/img/PRINCPC.jpg",
        altText: "Princess Peach Showtime",
        title: "Princess Peach Showtime.xci",
        downloadLink2: "https://terabox.com/s/1Ek4fsBjBAJBBamxVGu0YhQ" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "assets/img/RDD.jpg",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption.nsp",
        downloadLink2: "https://terabox.com/s/1YSpTCxrWAoCcvKmMEz2emw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 0",
        imgSrc: "assets/img/RE0.jpg",
        altText: "Resident Evil 0",
        title: "Resident Evil 0.nsp",
        downloadLink2: "https://terabox.com/s/1B9xhgtMqV2bv4ATey16kYA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4",
        imgSrc: "assets/img/RV4.jpg",
        altText: "Resident Evil 4",
        title: "Resident Evil 4.nsp",
        downloadLink2: "https://terabox.com/s/1T5VaQ4yiDHOxOi4JRroZ3w" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 5",
        imgSrc: "assets/img/RE5.jpg",
        altText: "Resident Evil 5",
        title: "Resident Evil 5.nsp",
        downloadLink2: "https://terabox.com/s/1qmLAT3UqY9vVY9lNXaNKyg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 6",
        imgSrc: "assets/img/RV6.jpg",
        altText: "Resident Evil 6",
        title: "Resident Evil 6.nsp (PRONTO)",
        downloadLink2: "JJJJ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Revelations 2",
        imgSrc: "assets/img/RVR2.jpg",
        altText: "Resident Evil Revelations 2",
        title: "Resident Evil Revelations 2.xci",
        downloadLink2: "https://terabox.com/s/16F3Hg15bNzbiZUcKGXnlHQ" // Segundo enlace de descarga

    },       
    {
        id: "Rise Race The Future",
        imgSrc: "assets/img/RISE.jpg",
        altText: "Rise Race The Future",
        title: "Rise Race The Future.nsp",
        downloadLink2: "https://terabox.com/s/1D0055IhfLFhXYukfrvANtA" // Segundo enlace de descarga

    },       
    {
        id: "Rugrats Adventures in Gameland",
        imgSrc: "assets/img/rugrats.jpg",
        altText: "Rugrats Adventures in Gameland",
        title: "Rugrats Adventures in Gameland.nsp",
        downloadLink2: "https://terabox.com/s/1lcke0ErOt0aTbLRvgsv0eA" // Segundo enlace de descarga

    },       
    {
        id: "Saints Row The Third The Full Package",
        imgSrc: "assets/img/SAINTS.jpg",
        altText: "Saints Row The Third The Full Package",
        title: "Saints Row The Third The Full Package.xci",
        downloadLink2: "https://terabox.com/s/1ojc9s8DwuOkLzvK-qYiCYA" // Segundo enlace de descarga

    },       
    {
        id: "Sea Of Stars",
        imgSrc: "assets/img/SEA.jpg",
        altText: "Sea Of Stars",
        title: "Sea Of Stars.xci/nsp",
        downloadLink2: "https://terabox.com/s/1Lt_cne38jOMvhtpV18G2BA" // Segundo enlace de descarga

    },       
    {
        id: "Skullgirls 2ND Encore",
        imgSrc: "assets/img/SKR2.jpg",
        altText: "Skullgirls 2ND Encore",
        title: "Skullgirls 2ND Encore.nsp",
        downloadLink2: "https://terabox.com/s/1Hswpud0hQweZrX3oDn_VCA" // Segundo enlace de descarga

    },       
    {
        id: "SNK vs Capcom SVC CHAOS",
        imgSrc: "assets/img/SVC.jpg",
        altText: "SNK vs Capcom SVC CHAOS",
        title: "SNK vs Capcom SVC CHAOS.nsp",
        downloadLink2: "https://terabox.com/s/1Au2s6v7h7AwzW7key_TxMA" // Segundo enlace de descarga

    },       
    {
        id: "Snow Bros Special",
        imgSrc: "assets/img/SNOW.jpg",
        altText: "Snow Bros Special",
        title: "Snow Bros Special.xci",
        downloadLink2: "https://terabox.com/s/1hc2QuzU651YvrWj4B40NyA" // Segundo enlace de descarga

    },       
    {
        id: "Snow Runner",
        imgSrc: "assets/img/SNOWRNN.jpg",
        altText: "Snow Runner",
        title: "Snow Runner.nsp",
        downloadLink2: "https://terabox.com/s/1uHpZEpFp0WCooQ_m2UdQgQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Superstars",
        imgSrc: "assets/img/SNSP.jpg",
        altText: "Sonic Superstars",
        title: "Sonic Superstars.xci",
        downloadLink2: "https://terabox.com/s/19FamQ4H8Wh-8XFvThritBA" // Segundo enlace de descarga

    },       
    {
        id: "SONIC X SHADOW GENERATIONS",
        imgSrc: "assets/img/SNXSH.jpg",
        altText: "SONIC X SHADOW GENERATIONS",
        title: "SONIC X SHADOW GENERATIONS.xci",
        downloadLink2: "https://terabox.com/s/1ScSbu_QQ0MfEme1JtZ0gAA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Frontiers",
        imgSrc: "assets/img/SNFRON.jpg",
        altText: "Sonic Frontiers",
        title: "Sonic Frontiers.nsp",
        downloadLink2: "https://terabox.com/s/1AMEq0iFu8azfAB9x3E-YVA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Mania",
        imgSrc: "assets/img/SNMANIA.jpg",
        altText: "Sonic Mania",
        title: "Sonic Mania.nsp",
        downloadLink2: "https://terabox.com/s/1PgzPvFmgZGQkNq-_vYbQXw" // Segundo enlace de descarga

    },       
    {
        id: "Sout Park SNOW DAY",
        imgSrc: "assets/img/SOUT.jpg",
        altText: "Sout Park SNOW DAY",
        title: "Sout Park SNOW DAY.xci",
        downloadLink2: "https://terabox.com/s/1s_OhIThYxuS8KGOqHgoGhg" // Segundo enlace de descarga

    },       
    {
        id: "SpongeBob SquarePants: The Cosmic Shake",
        imgSrc: "assets/img/BOB.jpg",
        altText: "SpongeBob SquarePants: The Cosmic Shake",
        title: "SpongeBob SquarePants: The Cosmic Shake.xci",
        downloadLink2: "https://terabox.com/s/1LwauNTTNkiDUWFMMvryt6Q" // Segundo enlace de descarga

    },       
    {
        id: "Stalker Shadow Of Chernobyl",
        imgSrc: "assets/img/STKL.jpg",
        altText: "Stalker Shadow Of Chernobyl",
        title: "Stalker Shadow Of Chernobyl.nsp",
        downloadLink2: "https://terabox.com/s/1F_2cLmmHOssae3RMEShoIg" // Segundo enlace de descarga

    },       
    {
        id: "Stray",
        imgSrc: "assets/img/STRAY.jpg",
        altText: "Stray",
        title: "Stray.nsp (Pendiente)",
        downloadLink2: "https://terabox.com/s/14yqtAG4P1iVy-R04hrh9uA" // Segundo enlace de descarga

    },       
    {
        id: "Super Bomberman R2",
        imgSrc: "assets/img/SPBR2.jpg",
        altText: "Super Bomberman R2",
        title: "Super Bomberman R2.nsp",
        downloadLink2: "https://terabox.com/s/1YA2yCyQxyoftlAqA-_RnMA" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 3D World + Bowsers Fury",
        imgSrc: "assets/img/SPMR.jpg",
        altText: "Super Mario 3D World + Bowsers Fury",
        title: "Super Mario 3D World + Bowsers Fury.nsp",
        downloadLink2: "https://terabox.com/s/1XWE-qE1AT1e9vSE_w6l8Dg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Bros Wonder",
        imgSrc: "assets/img/SPMRWD.jpg",
        altText: "Super Mario Bros Wonder",
        title: "Super Mario Bros Wonder.xci",
        downloadLink2: "https://terabox.com/s/1l0M7K3_4AA97FaRXtewcSg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Odyssey",
        imgSrc: "assets/img/mario.jpg",
        altText: "Super Mario Odyssey",
        title: "Super Mario Odyssey.nsp",
        downloadLink2: "https://terabox.com/s/1y9W4WQ6g42oA4c5JtD8avg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Party Jamboree",
        imgSrc: "assets/img/PARTYJM.jpg",
        altText: "Super Mario Party Jamboree",
        title: "Super Mario Party Jamboree.xci",
        downloadLink2: "https://terabox.com/s/1hUPITc07mBmhNkg06lGlbQ" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario RPG",
        imgSrc: "assets/img/SPRPG.jpg",
        altText: "Super Mario RPG",
        title: "Super Mario RPG.nsp",
        downloadLink2: "https://terabox.com/s/1QdLtby2TBcKvGqZpJt46eA" // Segundo enlace de descarga

    },       
    {
        id: "Super Smash Bros Ultimate",
        imgSrc: "assets/img/SMASH.jpg",
        altText: "Super Smash Bros Ultimate",
        title: "Super Smash Bros Ultimate.nsp",
        downloadLink2: "https://terabox.com/s/1OG1YkBFDZW0C9IxaTg3YAQ" // Segundo enlace de descarga

    },       
    {
        id: "The Elder Scrolls V Skyrim",
        imgSrc: "assets/img/SKIV.jpg",
        altText: "The Elder Scrolls V Skyrim",
        title: "The Elder Scrolls V Skyrim.xci",
        downloadLink2: "https://terabox.com/s/1vm43Jhiw_OGPjF51nq3oag" // Segundo enlace de descarga

    },       
    {
        id: "The End Is Nigh",
        imgSrc: "assets/img/TNIGT.jpg",
        altText: "The End Is Nigh",
        title: "The End Is Nigh.nsp",
        downloadLink2: "https://terabox.com/s/1ZP7EsTvMvO7kcaNhuWyzBg" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda Breath of The Wild",
        imgSrc: "assets/img/ZELDABREAT.jpg",
        altText: "The Legend of Zelda Echoes of Wisdom",
        title: "The Legend of Zelda Echoes of Wisdom.nsp",
        downloadLink2: "https://terabox.com/s/1zzIY3tHyhcnqC1XCl22Aqw" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda Echoes of Wisdom",
        imgSrc: "assets/img/ZELDAZL.jpg",
        altText: "The Legend of Zelda Echoes of Wisdom",
        title: "The Legend of Zelda Echoes of Wisdom.xci",
        downloadLink2: "https://terabox.com/s/1msOcSm7ndl1V-CTkGPvAxg" // Segundo enlace de descarga

    },       
    {
        id: "The Legend Of Zelda Link's Awakenings",
        imgSrc: "assets/img/ZELDALINKS.jpg",
        altText: "The Legend Of Zelda Link's Awakenings",
        title: "The Legend Of Zelda Link's Awakenings.xci",
        downloadLink2: "https://terabox.com/s/1U6Um10ejISxXPsGXS6H4tA" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda  Skyward Sword HD",
        imgSrc: "assets/img/SKYWARD.jpg",
        altText: "The Legend of Zelda  Skyward Sword HD",
        title: "The Legend of Zelda  Skyward Sword HD.nsp",
        downloadLink2: "https://terabox.com/s/1n74HSSV3bBJH1IS_OEigHw" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda Tears Of The Kingdom",
        imgSrc: "assets/img/ZELDATOK.jpg",
        altText: "The Legend of Zelda Tears Of The Kingdom",
        title: "The Legend of Zelda Tears Of The Kingdom.xci",
        downloadLink2: "https://terabox.com/s/1E-eDSb3sbJs8_GZpv9Fdmg" // Segundo enlace de descarga

    },       
    {
        id: "The Witcher Wild III Hunt",
        imgSrc: "assets/img/TW3.jpg",
        altText: "The Witcher Wild III Hunt",
        title: "The Witcher Wild III Hunt.xci",
        downloadLink2: "https://terabox.com/s/1Qb53T9RHpTKvi0Aa7UG_dg" // Segundo enlace de descarga

    },       
    {
        id: "Under Night In Birth",
        imgSrc: "assets/img/UNDERBIRT.jpg",
        altText: "Under Night In Birth",
        title: "Under Night In Birth.xci",
        downloadLink2: "https://terabox.com/s/1CgKpuldfyfJ4uR8P5PNrKA" // Segundo enlace de descarga

    },       
    {
        id: "WRC 10",
        imgSrc: "assets/img/WRC10.jpg",
        altText: "WRC 10",
        title: "WRC 10.xci",
        downloadLink2: "https://terabox.com/s/1dyOjl4i3Kby3voUtzHm9fg" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
