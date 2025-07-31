// Lista de juegos
const juegos = [
    {
        id: "Ben 10 Omniverse",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/ben10.webp",
        altText: "Ben 10 - Omniverse",
        title: "Ben 10 - Omniverse (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1qpl85C-RKBape8WOj1HFLw" // Segundo enlace de descarga
    },       
    {
        id: "Bully Scholarship Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/bully.webp",
        altText: "Bully Scholarship Edition",
        title: "Bully Scholarship Edition (En,Fr,De,Es,It).wbfs",
        downloadLink2: "https://nephobox.com/s/1f3dqqVdkFsXhylc8sxF1Xw" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/cod3.webp",
        altText: "Call of Duty 3",
        title: "Call of Duty 3 (Europe) (Fr,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1xZ6Ckah1EIWOXwEMyq3BzA" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Black Ops",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/codblack.webp",
        altText: "Call of Duty - Black Ops (USA).rvz",
        title: "Call of Duty - Black Ops (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1P-zRPZDmWWCivwOcMKhUlQ" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Modern Warfare 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/codmw3.webp",
        altText: "Call of Duty - Modern Warfare 3",
        title: "Call of Duty - Modern Warfare 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1rNZJLuNxxOJB_dsYjRl8Rg" // Segundo enlace de descarga
        
    },       
    {
        id: "Call of Duty - World at War",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/codwar.webp",
        altText: "Call of Duty - World at War",
        title: "Call of Duty - World at War (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1Jd2HsF0zhMHdysPpvE0rSA" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/donkey.webp",
        altText: "Donkey Kong Country Returns",
        title: "Donkey Kong Country Returns (USA) (En,Fr,Es).rvz",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/dbzt3.webp",
        altText: "Dragon Ball Z - Budokai Tenkaichi 3",
        title: "Dragon Ball Z - Budokai Tenkaichi 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1yaW8A1GYGdkXyLhGbyB7TA" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby's Return to Dream Land",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/kirby.webp",
        altText: "Kirby's Return to Dream Land",
        title: "Kirby's Return to Dream Land (USA) (En,Fr,Es).wbfs",
        downloadLink2: "https://nephobox.com/s/1jrr6PWe7FGkgRuWqNcihyg" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Skyward Sword",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/zeldasword.webp",
        altText: "Legend of Zelda, The - Skyward Sword",
        title: "Legend of Zelda, The - Skyward Sword (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1Y32pFcc4lXJE2m-_eZ9JNA" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Twilight Princess",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/zeldatwi.webp",
        altText: "Legend of Zelda, The - Twilight Princess",
        title: "Legend of Zelda, The - Twilight Princess (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1MfJ3iAqDD43IoYYhRyhVlw" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 2 - DC Super Heroes",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/legobat2.webp",
        altText: "LEGO Batman 2 - DC Super Heroes",
        title: "LEGO Batman 2 - DC Super Heroes (USA) (En,Fr,Es,Pt).rvz",
        downloadLink2: "https://nephobox.com/s/1Ras4fHx8hZggquboXfRvpw" // Segundo enlace de descarga

    },       
    {
        id: "Mario kart wii Deluxe",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/mariodeluxe.webp",
        altText: "Mario kart wii Deluxe",
        title: "Mario kart wii Deluxe.wbfs",
        downloadLink2: "https://nephobox.com/s/1Z6Vq7Hq9pV6jELqugMAZvQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party 9",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/party9.webp",
        altText: "Mario Party 9",
        title: "Mario Party 9 (Europe) (En,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1MznAMpV3SGT4m42bvyhcBA" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario Sports Mix",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/mariomix.webp",
        altText: "Mario Sports Mix",
        title: "Mario Sports Mix (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1QbExcJgsHALWBWfaMi02qw" // Segundo enlace de descarga

    },       
    {
        id: "Metroid - Other M",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/metroidm.webp",
        altText: "Metroid - Other M",
        title: "Metroid - Other M (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1O_tC6ZbqCwyHKnqLkQ411A" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime 3 - Corruption",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/metroidprime3.webp",
        altText: "Metroid Prime 3 - Corruption",
        title: "Metroid Prime 3 - Corruption (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1PeHWDZnPV4uD9X8Ca1S37g" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed - Carbon",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/nfscarbon.webp",
        altText: "Need for Speed - Carbon",
        title: "Need for Speed - Carbon (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1lcIcSQDWJRNiJHN7c6Y_Qg" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - ProStreet",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/nfspro.webp",
        altText: "Need for Speed - ProStreet",
        title: "Need for Speed - ProStreet (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1YR5ueB4B2stGz51kjCpEIA" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. Wii",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/newmario.webp",
        altText: "New Super Mario Bros. Wii",
        title: "New Super Mario Bros. Wii (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/126uOdIVrcty3QsJPi1ahGA" // Segundo enlace de descarga
        
    },       
    {
        id: "Punch-Out!!",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/punch.webp",
        altText: "Punch-Out!!",
        title: "Punch-Out!! (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1am6SX-d-AtIDCGr0bQ2iuA" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/rayman.webp",
        altText: "Rayman Origins",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).rvz",
        downloadLink2: "https://nephobox.com/s/18-fAyoXp7PhvUP1r-k_PJg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4 - Wii Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/re4.webp",
        altText: "Resident Evil 4 - Wii Edition",
        title: "Resident Evil 4 - Wii Edition (Europe) (En,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1WNQrCRRx7A1mjAhUI-g_qg" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/sonicunle.webp",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (USA) (En,Ja,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1ujU9jqanSArSUQFVRu6fsA" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/spiderman3.webp",
        altText: "Spider-Man 3",
        title: "Spider-Man 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/19i03t3ZbSUYxIfG8jlExjw" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Galaxy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/smgalaxy.webp",
        altText: "Super Mario Galaxy",
        title: "Super Mario Galaxy (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1Rh-U6IjDl_UO-r6ufh1XRQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Super Mario Galaxy 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/smgalaxy2.webp",
        altText: "Super Mario Galaxy 2",
        title: "Super Mario Galaxy 2 (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1QezrO2UZbXk5UHZBGbt1Dg" // Segundo enlace de descarga

    },       
    {
        id: "Super Paper Mario",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/papermario.webp",
        altText: "Super Paper Mario",
        title: "Super Paper Mario (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1gkBwSaHvipab7G7jGXju6w" // Segundo enlace de descarga

    },       
    {
        id: "Super Smash Bros. Brawl",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/wii/smashbrawl.webp",
        altText: "Super Smash Bros. Brawl",
        title: "Super Smash Bros. Brawl (USA) (Rev 2).rvz",
        downloadLink2: "https://nephobox.com/s/1E1nQI_2WjBC9e112ff5r4Q" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
