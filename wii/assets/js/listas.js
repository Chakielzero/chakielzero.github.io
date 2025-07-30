// Lista de juegos
const juegos = [
    {
        id: "Ben 10 Omniverse",
        imgSrc: "assets/img/ben10.jpg",
        altText: "Ben 10 - Omniverse",
        title: "Ben 10 - Omniverse (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1qpl85C-RKBape8WOj1HFLw" // Segundo enlace de descarga
    },       
    {
        id: "Bully Scholarship Edition",
        imgSrc: "assets/img/bully.jpg",
        altText: "Bully Scholarship Edition",
        title: "Bully Scholarship Edition (En,Fr,De,Es,It).wbfs",
        downloadLink2: "https://nephobox.com/s/1f3dqqVdkFsXhylc8sxF1Xw" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 3",
        imgSrc: "assets/img/cod3.jpg",
        altText: "Call of Duty 3",
        title: "Call of Duty 3 (Europe) (Fr,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1xZ6Ckah1EIWOXwEMyq3BzA" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Black Ops",
        imgSrc: "assets/img/codblack.jpg",
        altText: "Call of Duty - Black Ops (USA).rvz",
        title: "Call of Duty - Black Ops (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1P-zRPZDmWWCivwOcMKhUlQ" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Modern Warfare 3",
        imgSrc: "assets/img/codmw3.jpg",
        altText: "Call of Duty - Modern Warfare 3",
        title: "Call of Duty - Modern Warfare 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1rNZJLuNxxOJB_dsYjRl8Rg" // Segundo enlace de descarga
        
    },       
    {
        id: "Call of Duty - World at War",
        imgSrc: "assets/img/codwar.jpg",
        altText: "Call of Duty - World at War",
        title: "Call of Duty - World at War (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1Jd2HsF0zhMHdysPpvE0rSA" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns",
        imgSrc: "assets/img/donkey.jpg",
        altText: "Donkey Kong Country Returns",
        title: "Donkey Kong Country Returns (USA) (En,Fr,Es).rvz",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 3",
        imgSrc: "assets/img/dbzt3.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi 3",
        title: "Dragon Ball Z - Budokai Tenkaichi 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1yaW8A1GYGdkXyLhGbyB7TA" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby's Return to Dream Land",
        imgSrc: "assets/img/kirby.jpg",
        altText: "Kirby's Return to Dream Land",
        title: "Kirby's Return to Dream Land (USA) (En,Fr,Es).wbfs",
        downloadLink2: "https://nephobox.com/s/1jrr6PWe7FGkgRuWqNcihyg" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Skyward Sword",
        imgSrc: "assets/img/zeldasword.jpg",
        altText: "Legend of Zelda, The - Skyward Sword",
        title: "Legend of Zelda, The - Skyward Sword (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1Y32pFcc4lXJE2m-_eZ9JNA" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Twilight Princess",
        imgSrc: "assets/img/zeldatwi.jpg",
        altText: "Legend of Zelda, The - Twilight Princess",
        title: "Legend of Zelda, The - Twilight Princess (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1MfJ3iAqDD43IoYYhRyhVlw" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 2 - DC Super Heroes",
        imgSrc: "assets/img/legobat2.jpg",
        altText: "LEGO Batman 2 - DC Super Heroes",
        title: "LEGO Batman 2 - DC Super Heroes (USA) (En,Fr,Es,Pt).rvz",
        downloadLink2: "https://nephobox.com/s/1Ras4fHx8hZggquboXfRvpw" // Segundo enlace de descarga

    },       
    {
        id: "Mario kart wii Deluxe",
        imgSrc: "assets/img/mariodeluxe.jpg",
        altText: "Mario kart wii Deluxe",
        title: "Mario kart wii Deluxe.wbfs",
        downloadLink2: "https://nephobox.com/s/1Z6Vq7Hq9pV6jELqugMAZvQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party 9",
        imgSrc: "assets/img/party9.jpg",
        altText: "Mario Party 9",
        title: "Mario Party 9 (Europe) (En,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1MznAMpV3SGT4m42bvyhcBA" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario Sports Mix",
        imgSrc: "assets/img/mariomix.jpg",
        altText: "Mario Sports Mix",
        title: "Mario Sports Mix (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1QbExcJgsHALWBWfaMi02qw" // Segundo enlace de descarga

    },       
    {
        id: "Metroid - Other M",
        imgSrc: "assets/img/metroidm.jpg",
        altText: "Metroid - Other M",
        title: "Metroid - Other M (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1O_tC6ZbqCwyHKnqLkQ411A" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime 3 - Corruption",
        imgSrc: "assets/img/metroidprime3.jpg",
        altText: "Metroid Prime 3 - Corruption",
        title: "Metroid Prime 3 - Corruption (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1PeHWDZnPV4uD9X8Ca1S37g" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed - Carbon",
        imgSrc: "assets/img/nfscarbon.jpg",
        altText: "Need for Speed - Carbon",
        title: "Need for Speed - Carbon (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1lcIcSQDWJRNiJHN7c6Y_Qg" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - ProStreet",
        imgSrc: "assets/img/nfspro.jpg",
        altText: "Need for Speed - ProStreet",
        title: "Need for Speed - ProStreet (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1YR5ueB4B2stGz51kjCpEIA" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. Wii",
        imgSrc: "assets/img/newmario.jpg",
        altText: "New Super Mario Bros. Wii",
        title: "New Super Mario Bros. Wii (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/126uOdIVrcty3QsJPi1ahGA" // Segundo enlace de descarga
        
    },       
    {
        id: "Punch-Out!!",
        imgSrc: "assets/img/punch.jpg",
        altText: "Punch-Out!!",
        title: "Punch-Out!! (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1am6SX-d-AtIDCGr0bQ2iuA" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "assets/img/rayman.jpg",
        altText: "Rayman Origins",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).rvz",
        downloadLink2: "https://nephobox.com/s/18-fAyoXp7PhvUP1r-k_PJg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4 - Wii Edition",
        imgSrc: "assets/img/re4.jpg",
        altText: "Resident Evil 4 - Wii Edition",
        title: "Resident Evil 4 - Wii Edition (Europe) (En,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1WNQrCRRx7A1mjAhUI-g_qg" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "assets/img/sonicunle.jpg",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (USA) (En,Ja,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1ujU9jqanSArSUQFVRu6fsA" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3",
        imgSrc: "assets/img/spiderman3.jpg",
        altText: "Spider-Man 3",
        title: "Spider-Man 3 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/19i03t3ZbSUYxIfG8jlExjw" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Galaxy",
        imgSrc: "assets/img/smgalaxy.jpg",
        altText: "Super Mario Galaxy",
        title: "Super Mario Galaxy (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1Rh-U6IjDl_UO-r6ufh1XRQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Super Mario Galaxy 2",
        imgSrc: "assets/img/smgalaxy2.jpg",
        altText: "Super Mario Galaxy 2",
        title: "Super Mario Galaxy 2 (USA) (En,Fr,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1QezrO2UZbXk5UHZBGbt1Dg" // Segundo enlace de descarga

    },       
    {
        id: "Super Paper Mario",
        imgSrc: "assets/img/papermario.jpg",
        altText: "Super Paper Mario",
        title: "Super Paper Mario (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1gkBwSaHvipab7G7jGXju6w" // Segundo enlace de descarga

    },       
    {
        id: "Super Smash Bros. Brawl",
        imgSrc: "assets/img/smashbrawl.jpg",
        altText: "Super Smash Bros. Brawl",
        title: "Super Smash Bros. Brawl (USA) (Rev 2).rvz",
        downloadLink2: "https://nephobox.com/s/1E1nQI_2WjBC9e112ff5r4Q" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
