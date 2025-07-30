// Lista de juegos
const juegos = [
    {
        id: "AC ® III Liberation",
        imgSrc: "assets/img/aciii.jpg",
        altText: "AC ® III Liberation",
        title: "AC ® III Liberation (PCSE00053) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1JXN8P9LPya7dapji79SuFg" // Segundo enlace de descarga

    },       
    {
        id: "Angry Birds™ Star Wars",
        imgSrc: "assets/img/angrybirdstar.jpg",
        altText: "Angry Birds™ Star Wars",
        title: "Angry Birds™ Star Wars (PCSE00294) (USA).zip",
        downloadLink2: "https://nephobox.com/s/17XZqc-94rQfXwe5XAWkyhg" // Segundo enlace de descarga

    },       
    {
        id: "Angry Birds™ Trilogy",
        imgSrc: "assets/img/angrybird.jpg",
        altText: "Angry Birds™ Trilogy",
        title: "Angry Birds™ Trilogy (PCSE00322) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1d92pPKlZkzkGDCumU5UQOA" // Segundo enlace de descarga

    },       
    {
        id: "Attack On Titan Wings Of Freedom",
        imgSrc: "assets/img/aotitan.jpg",
        altText: "Attack On Titan Wings Of Freedom",
        title: "Attack On Titan Wings Of Freedom (USA) (PCSE00812).zip",
        downloadLink2: "https://nephobox.com/s/1w0q8bEj9ru5mZee3d_Djgw" // Segundo enlace de descarga

    },       
    {
        id: "Attack On Titan 2",
        imgSrc: "assets/img/aotitan2.jpg",
        altText: "Attack On Titan 2",
        title: "Attack On Titan 2 (JPN) (PCSG01102).zip",
        downloadLink2: "https://nephobox.com/s/1dgFzOsXbpBdyrUNw9Qk72g" // Segundo enlace de descarga
        
    },       
    {
        id: "BLAZBLUE CP EXTEND",
        imgSrc: "assets/img/blazblue.jpg",
        altText: "BLAZBLUE CP EXTEND",
        title: "BLAZBLUE CP EXTEND (PCSE00677) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1d_nlz8pnqCSC9oCJQa-FwQ" // Segundo enlace de descarga

    },       
    {
        id: "Borderlands 2",
        imgSrc: "assets/img/borderlands2.jpg",
        altText: "Borderlands 2",
        title: "Borderlands 2 (PCSE00383) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1Kftg_nJOQ5RM8JuU2SWXpA" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty Black Ops - Declassified",
        imgSrc: "assets/img/cod.jpg",
        altText: "Call of Duty Black Ops - Declassified",
        title: "Call of Duty Black Ops - Declassified (PCSE00097) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1VJ4P-HZZUuj6JFegRQfkFw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Battle of Z",
        imgSrc: "assets/img/dragonball.jpg",
        altText: "Dragon Ball Z Battle of Z",
        title: "Dragon Ball Z Battle of Z (PCSE00305) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1VNNT9sgwEPantw6eOjD18w" // Segundo enlace de descarga

    },       
    {
        id: "FIFA13",
        imgSrc: "assets/img/fifa13.jpg",
        altText: "FIFA13",
        title: "FIFA13 (USA) (PCSE00093).zip",
        downloadLink2: "https://nephobox.com/s/1SAAZk_nmfTOjpp1xcUt8Fw" // Segundo enlace de descarga

    },       
    {
        id: "FIFA15",
        imgSrc: "assets/img/fifa15.jpg",
        altText: "FIFA15",
        title: "FIFA15 (PCSE00482).zip",
        downloadLink2: "https://nephobox.com/s/1KZK6Mtq-C7uvJUvE7QUYPQ" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X HD Remaster",
        imgSrc: "assets/img/final.jpg",
        altText: "Final Fantasy X HD Remaster",
        title: "Final Fantasy X HD Remaster (USA) (PCSE00293).zip",
        downloadLink2: "https://nephobox.com/s/1buLzihGmCIboJb7McThk6A" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X 2 HD Remaster",
        imgSrc: "assets/img/final2.jpg",
        altText: "Final Fantasy X-2 HD Remaster",
        title: "Final Fantasy X-2 HD Remaster (USA) (PCSE00283).zip",
        downloadLink2: "https://nephobox.com/s/1jgGq3XYSspIxQFwjLLt0ng" // Segundo enlace de descarga

    },       
    {
        id: "God of War Collection",
        imgSrc: "assets/img/godofwar.jpg",
        altText: "God of War Collection",
        title: "God of War Collection.zip",
        downloadLink2: "https://nephobox.com/s/1cQxw6-P5sQRAEeAS0uBghg" // Segundo enlace de descarga

    },       
    {
        id: "GRAVITY RUSH",
        imgSrc: "assets/img/gravityrush.jpg",
        altText: "GRAVITY RUSH",
        title: "GRAVITY RUSH (PCSA00011).zip",
        downloadLink2: "https://nephobox.com/s/1lnW9d-3lFzGU1qbjKAIPAw" // Segundo enlace de descarga

    },       
    {
        id: "Guilty Gear XX Accent Core Plus R",
        imgSrc: "assets/img/guilty.jpg",
        altText: "Guilty Gear XX Accent Core Plus R",
        title: "Guilty Gear XX Accent Core Plus R (USA) (PCSE00137).zip",
        downloadLink2: "https://nephobox.com/s/1QThJHQ9HbHFz2cN_zqtUiA" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth1",
        imgSrc: "assets/img/hyper1.jpg",
        altText: "Hyperdimension Neptunia Re;Birth1",
        title: "Hyperdimension Neptunia Re;Birth1 (USA) (PCSE00443).zip",
        downloadLink2: "https://nephobox.com/s/16kNC5UPmND3O4UjxuAp1Vg" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth2 Sisters Generation",
        imgSrc: "assets/img/hyper2.jpg",
        altText: "Hyperdimension Neptunia Re;Birth2 Sisters Generation",
        title: "Hyperdimension Neptunia Re;Birth2 Sisters Generation (USA) (PCSE00508).zip",
        downloadLink2: "https://nephobox.com/s/1PBJ96OXVzM67Z7_ayWY56A" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth3 V Generation",
        imgSrc: "assets/img/hyper3.jpg",
        altText: "Hyperdimension Neptunia Re;Birth3 V Generation",
        title: "Hyperdimension Neptunia Re;Birth3 V Generation (USA) (PCSE00661).zip",
        downloadLink2: "https://nephobox.com/s/1iZ5MEPLE--59QSn5D5U1Ig" // Segundo enlace de descarga

    },       
    {
        id: "Injustice Gods Among Us - Ultimate Edition",
        imgSrc: "assets/img/injustice.jpg",
        altText: "Injustice Gods Among Us - Ultimate Edition",
        title: "Injustice Gods Among Us - Ultimate Edition (PCSE00271) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1WcF9wTVIThd_MJ3Ys_h4Hg" // Segundo enlace de descarga

    },       
    {
        id: "J-STARS Victory VS",
        imgSrc: "assets/img/jstars.jpg",
        altText: "J-STARS Victory VS",
        title: "J-STARS Victory VS (PCSE00595) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1_bSdOYVemI6YQgQB62pQqg" // Segundo enlace de descarga

    },       
    {
        id: "Killzone Mercenary",
        imgSrc: "assets/img/killzone.jpg",
        altText: "Killzone Mercenary",
        title: "Killzone Mercenary (PCSA00107) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1_V2eMDbVmNRT0tQHj3dmug" // Segundo enlace de descarga

    },       
    {
        id: "LittleBigPlanet PlayStationVita",
        imgSrc: "assets/img/bigplanet.jpg",
        altText: "LittleBigPlanet PlayStationVita",
        title: "LittleBigPlanet PlayStationVita (PCSA00017) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1r3OXRlC-JevqKjiC3UwGLQ" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3",
        imgSrc: "assets/img/metalgear2.jpg",
        altText: "Metal Gear Solid 3",
        title: "Metal Gear Solid 3 (PCSE00079) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1A6PmfPbHiwK5Kl18sOck2A" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid HD",
        imgSrc: "assets/img/metalsolidhd.jpg",
        altText: "Metal Gear Solid HD",
        title: "Metal Gear Solid HD (PCSE00020) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1yVgQcIbELwIEEcMnNgU9yw" // Segundo enlace de descarga

    },       
    {
        id: "METAL SLUG 3",
        imgSrc: "assets/img/metal3.jpg",
        altText: "METAL SLUG 3",
        title: "METAL SLUG 3 (PCSE00665) (USA).zip",
        downloadLink2: "https://nephobox.com/s/16RpvOIpWnHK9dSl3EMkmTA" // Segundo enlace de descarga
        
    },       
    {
        id: "Minecraft - PlayStation®Vita Edition",
        imgSrc: "assets/img/minecraft.jpg",
        altText: "Minecraft - PlayStation®Vita Edition",
        title: "Minecraft - PlayStation®Vita Edition [PCSB00560] [EUR].zip",
        downloadLink2: "https://nephobox.com/s/1syd5IkV2FxfF9y5LcgYQWQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Kart Vita",
        imgSrc: "assets/img/mkvita.jpg",
        altText: "Mario Kart Vita",
        title: "Mario Kart Vita.vpk",
        downloadLink2: "https://nephobox.com/s/1mbeFVeEYUh-C5cmjVAaHSg" // Segundo enlace de descarga

    },       
    {
        id: "MLB 15 The Show",
        imgSrc: "assets/img/mlb15.jpg",
        altText: "MLB 15 The Show",
        title: "MLB 15 The Show (PCSA00511) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1JLoZcsVSRj4mnuGb4JckkQ" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat 9",
        imgSrc: "assets/img/mk9.jpg",
        altText: "Mortal Kombat 9",
        title: "Mortal Kombat 9 (PCSE00023).zip",
        downloadLink2: "https://nephobox.com/s/1bpFK6DX8de3uVTuQA1mXUg" // Segundo enlace de descarga

    },       
    {
        id: "One Piece Unlimited World Red",
        imgSrc: "assets/img/opunlimited.jpg",
        altText: "One Piece Unlimited World Red",
        title: "One Piece Unlimited World Red (USA) (PCSE00423).zip",
        downloadLink2: "https://nephobox.com/s/1lGp0f4jI_zLqQZwR53uePg" // Segundo enlace de descarga

    },       
    {
        id: "PlayStation All-Stars",
        imgSrc: "assets/img/playallstars.jpg",
        altText: "PlayStation All-Stars",
        title: "PlayStation All-Stars (PCSA00069) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1sg6RNoAhfDTD-alvQe-YdQ" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Legends",
        imgSrc: "assets/img/rayman.jpg",
        altText: "Rayman Legends",
        title: "Rayman Legends (PCSE00277) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1OJoT4KuvTMb9vbY33NVQ6w" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Revelations 2",
        imgSrc: "assets/img/resident.jpg",
        altText: "Resident Evil Revelations 2",
        title: "Resident Evil Revelations 2 (USA) (PCSE00608).zip",
        downloadLink2: "https://nephobox.com/s/1vyJnxVQiP2IISKe0bLW76Q" // Segundo enlace de descarga

    },       
    {
        id: "Resistance - Burning Skies",
        imgSrc: "assets/img/resistance.jpg",
        altText: "Resistance - Burning Skies",
        title: "Resistance - Burning Skies (PCSA00008) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1PvyO-jzzlBa_-EoASA4n2g" // Segundo enlace de descarga

    },       
    {
        id: "Ridge Racer",
        imgSrc: "assets/img/ridge.jpg",
        altText: "Ridge Racer",
        title: "Ridge Racer (USA) (PCSE00001).zip",
        downloadLink2: "https://nephobox.com/s/1myJAq2ciMgdzWn1oH1bOQA" // Segundo enlace de descarga

    },       
    {
        id: "Sly Cooper - Thieves in Time",
        imgSrc: "assets/img/slycoopertime.jpg",
        altText: "Sly Cooper - Thieves in Time",
        title: "Sly Cooper - Thieves in Time (PCSA00068).zip",
        downloadLink2: "https://nephobox.com/s/1Yzs3z7yBucktRA5d9wSATQ" // Segundo enlace de descarga

    },       
    {
        id: "Street Fighter X Tekken",
        imgSrc: "assets/img/streetfigtherxtekken.jpg",
        altText: "Street Fighter X Tekken",
        title: "Street Fighter X Tekken (PCSE00005) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1PX0D96qnkgAZ5irMVmfUSw" // Segundo enlace de descarga

    },       
    {
        id: "Sword Art Online Lost Song",
        imgSrc: "assets/img/sword.jpg",
        altText: "Sword Art Online Lost Song",
        title: "Sword Art Online Lost Song (USA) (PCSE00740).zip",
        downloadLink2: "https://nephobox.com/s/1Ey2Deeno8K6wLVZjHHyA9g" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider-Man",
        imgSrc: "assets/img/spiderman2.jpg",
        altText: "The Amazing Spider-Man",
        title: "The Amazing Spider-Man (USA) (PCSE00333).zip",
        downloadLink2: "https://terabox.com/s/163LDWUrs8qD6KCN-Ni8AXA" // Segundo enlace de descarga

    },       
    {
        id: "The Binding of Isaac - Rebirth",
        imgSrc: "assets/img/isaac.jpg",
        altText: "The Binding of Isaac - Rebirth",
        title: "The Binding of Isaac - Rebirth (PCSE00507) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1bbvQor2ajMuSXfw11kJu3w" // Segundo enlace de descarga

    },       
    {
        id: "The Walking Dead - S2",
        imgSrc: "assets/img/walkingdead.jpg",
        altText: "The Walking Dead - S2",
        title: "The Walking Dead - S2 (PCSE00372) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1PF4-TbMgHShf25xh1GyVFQ" // Segundo enlace de descarga

    },       
    {
        id: "Toukiden 2",
        imgSrc: "assets/img/toukiden2.jpg",
        altText: "Toukiden 2",
        title: "Toukiden 2 (USA) (PCSE00940).zip",
        downloadLink2: "https://nephobox.com/s/1rkFDc7Yps7ZvtKMfOyL3yg" // Segundo enlace de descarga

    },       
    {
        id: "Uncharted Golden Abyss",
        imgSrc: "assets/img/Uncharted.jpg",
        altText: "Uncharted Golden Abyss",
        title: "Uncharted Golden Abyss (PCSA00029).zip",
        downloadLink2: "https://nephobox.com/s/1HbaVqJpqGrziVdy0XcCMQA" // Segundo enlace de descarga

    },       
    {
        id: "Velocity2X",
        imgSrc: "assets/img/velocity2x.jpg",
        altText: "Velocity2X",
        title: "Velocity2X (PCSE00374) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/16elIrDlQD3SQwIBaO6gYDg" // Segundo enlace de descarga

    },       
    {
        id: "WipEout 2048",
        imgSrc: "assets/img/wipeout.jpg",
        altText: "WipEout 2048",
        title: "WipEout 2048 (PCSA00015) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/18LjujkQrUG6qCUU1jI_TCg" // Segundo enlace de descarga

    },       
    {
        id: "WRC 5",
        imgSrc: "assets/img/wrc5.jpg",
        altText: "WRC 5",
        title: "WRC 5 (PCSE00667) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1X0SJza_HoAwEI5dQRGw_Lg" // Segundo enlace de descarga

    },       
    {
        id: "YAKUZA 0 Companion app",
        imgSrc: "assets/img/yakuza0.jpg",
        altText: "YAKUZA 0 Companion app",
        title: "YAKUZA 0 Companion app (JPN) (PCSG00503).zip",
        downloadLink2: "https://nephobox.com/s/1ERVcMwOLzOoAXY_FR9LtwA" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
