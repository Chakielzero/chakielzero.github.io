// Lista de juegos
const juegos = [
    {
        id: "ATV - Quad Power Racing 2",
        imgSrc: "assets/img/atv2.jpg",
        altText: "ATV - Quad Power Racing 2",
        title: "ATV - Quad Power Racing 2 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1XGx8Y_cHh7LDpemnrZZe-w" // Segundo enlace de descarga
    },       
    {
        id: "Bloody Roar - Primal Fury",
        imgSrc: "assets/img/broar.jpg",
        altText: "Bloody Roar - Primal Fury",
        title: "Bloody Roar - Primal Fury.rvz",
        downloadLink2: "https://nephobox.com/s/1bGNfcvU5R7LmzNhHTuTGAg" // Segundo enlace de descarga

    },       
    {
        id: "Burnout 2 - Point of Impact",
        imgSrc: "assets/img/burnout2.jpg",
        altText: "Burnout 2 - Point of Impact",
        title: "Burnout 2 - Point of Impact (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1UhqSvy-KIS_6GyTdP5xsgA" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Finest Hour",
        imgSrc: "assets/img/cod.jpg",
        altText: "Call of Duty - Finest Hour",
        title: "Call of Duty - Finest Hour (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1LxKBltXJPCsnkuIT0TsGLQ" // Segundo enlace de descarga

    },       
    {
        id: "Crash Bandicoot - The Wrath of Cortex",
        imgSrc: "assets/img/crash.jpg",
        altText: "Crash Bandicoot - The Wrath of Cortex",
        title: "Crash Bandicoot - The Wrath of Cortex (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/12S07YBTSW2o1MDJ0-xbD9g" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Konga",
        imgSrc: "assets/img/konga.jpg",
        altText: "Donkey Konga",
        title: "Donkey Konga (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1rDldcXfy4CxJcOsgv3w21Q" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Konga 2",
        imgSrc: "assets/img/konga2.jpg",
        altText: "Donkey Konga 2",
        title: "Donkey Konga 2 (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1_l3bDMwXJA2-wYfvQ0gItg" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Jungle Beat",
        imgSrc: "assets/img/donkey.jpg",
        altText: "Donkey Kong Jungle Beat",
        title: "Donkey Kong Jungle Beat (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1fnedoS8JjDdP6VGz-fRZBw" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem - Path of Radiance",
        imgSrc: "assets/img/fire.jpg",
        altText: "Fire Emblem - Path of Radiance",
        title: "Fire Emblem - Path of Radiance.rvz",
        downloadLink2: "https://nephobox.com/s/1hBhksZ6acSvO9ksXOSPgMQ" // Segundo enlace de descarga

    },       
    {
        id: "F-Zero GX",
        imgSrc: "assets/img/fzero.jpg",
        altText: "F-Zero GX",
        title: "F-Zero GX [PAL - NTSC].rvz",
        downloadLink2: "https://nephobox.com/s/1AhfyTfkY6D-nFU5UprFfdw" // Segundo enlace de descarga
        
    },       
    {
        id: "Hot Wheels - World Race",
        imgSrc: "assets/img/hotw.jpg",
        altText: "Hot Wheels - World Race",
        title: "Hot Wheels - World Race (USA) (Rev 1).rvz",
        downloadLink2: "https://nephobox.com/s/1N_RRxaA5Gd7ZiVLQUVerdw" // Segundo enlace de descarga

    },       
    {
        id: "Incredible Hulk, The - Ultimate Destruction",
        imgSrc: "assets/img/hulk.jpg",
        altText: "Incredible Hulk, The - Ultimate Destruction",
        title: "Incredible Hulk, The - Ultimate Destruction.rvz",
        downloadLink2: "https://nephobox.com/s/1bpXr_2ljJiG84ADciXK7og" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Twilight Princess",
        imgSrc: "assets/img/zeldatw.jpg",
        altText: "Legend of Zelda, The - Twilight Princess",
        title: "Legend of Zelda, The - Twilight Princess.rvz",
        downloadLink2: "https://nephobox.com/s/1WUraxuto0_h71zX0MGmyaw" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Wind Waker",
        imgSrc: "assets/img/zeldaww.jpg",
        altText: "Legend of Zelda, The - Wind Waker",
        title: "Legend of Zelda, The - Wind Waker.rvz",
        downloadLink2: "https://nephobox.com/s/1j7VRAfNztidSJVuNJLZRaQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Luigi's Mansion",
        imgSrc: "assets/img/luigis.jpg",
        altText: "Luigi's Mansion",
        title: "Luigi's Mansion.rvz",
        downloadLink2: "https://nephobox.com/s/14KfhyMCJDj6RMfQi8Gj8hQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Golf - Toadstool Tour",
        imgSrc: "assets/img/mariogolf.jpg",
        altText: "Mario Golf - Toadstool Tour",
        title: "Mario Golf - Toadstool Tour.rvz",
        downloadLink2: "https://nephobox.com/s/1PGSIAdA-jEpDxFJXPFpbrQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Kart - Double Dash!!",
        imgSrc: "assets/img/mariokart.jpg",
        altText: "Mario Kart - Double Dash!!",
        title: "Mario Kart - Double Dash!! (USA) (Bonus Disc).rvz",
        downloadLink2: "https://nephobox.com/s/1JdQn7hTqEXfl36CbASsxrA" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party 4",
        imgSrc: "assets/img/mario4.jpg",
        altText: "Mario Party 4",
        title: "Mario Party 4.rvz",
        downloadLink2: "https://nephobox.com/s/1ovS2c9QuT_-npc5Xy6iCrA" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party 7",
        imgSrc: "assets/img/mario7.jpg",
        altText: "Mario Party 7",
        title: "Mario Party 7.rvz",
        downloadLink2: "https://nephobox.com/s/1rO7PzxnBv4zjeGXH3Av9Zg" // Segundo enlace de descarga

    },       
    {
        id: "Mario Power Tennis",
        imgSrc: "assets/img/mariotennis.jpg",
        altText: "Mario Power Tennis",
        title: "Mario Power Tennis.rvz",
        downloadLink2: "https://nephobox.com/s/15TFvHZmmRJ2SzbArWM9hjg" // Segundo enlace de descarga

    },       
    {
        id: "Mario Smash Football",
        imgSrc: "assets/img/mariofootball.jpg",
        altText: "Mario Smash Football",
        title: "Mario Smash Football.rvz",
        downloadLink2: "https://nephobox.com/s/1tax5OKtz-EC64IvGHKOt8w" // Segundo enlace de descarga

    },       
    {
        id: "Mario Superstar Baseball",
        imgSrc: "assets/img/mariobaseball.jpg",
        altText: "Mario Superstar Baseball",
        title: "Mario Superstar Baseball.rvz",
        downloadLink2: "https://nephobox.com/s/1tyw67NYfhDdHKrJfY749XQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Gear Solid - The Twin Snakes",
        imgSrc: "assets/img/mgs.jpg",
        altText: "Metal Gear Solid - The Twin Snakes",
        title: "Metal Gear Solid - The Twin Snakes (USA) (Disc 1).rvz",
        downloadLink2: "https://nephobox.com/s/1Vnl6eMN63wVvI1lCUyHAeA" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime",
        imgSrc: "assets/img/metroidprime.jpg",
        altText: "Metroid Prime",
        title: "Metroid Prime (USA) (Rev 2).ciso",
        downloadLink2: "https://nephobox.com/s/1K2KTL6HH9Sw2zWNIZSl5KQ" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime 2 - Echoes",
        imgSrc: "assets/img/metroid2.jpg",
        altText: "Metroid Prime 2 - Echoes",
        title: "Metroid Prime 2 - Echoes (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1xPjfVp6z0Xvoh3UluOy_zw" // Segundo enlace de descarga
        
    },       
    {
        id: "Monster Jam - Maximum Destruction",
        imgSrc: "assets/img/monsterjam.jpg",
        altText: "Monster Jam - Maximum Destruction",
        title: "Monster Jam - Maximum Destruction (USA).ciso",
        downloadLink2: "https://nephobox.com/s/15GgkUZSLyqhpjbZGNfI4mg" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Carbon",
        imgSrc: "assets/img/nfscar.jpg",
        altText: "Need for Speed - Carbon",
        title: "Need for Speed - Carbon (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1PE_CFzoBDjrFyQQhTgQbOQ" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Hot Pursuit 2",
        imgSrc: "assets/img/nfshot2.jpg",
        altText: "Need for Speed - Hot Pursuit 2",
        title: "Need for Speed - Hot Pursuit 2 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1BFMdMXACgjzFAFt2c9ty8w" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Most Wanted",
        imgSrc: "assets/img/nfsmost.jpg",
        altText: "Need for Speed - Most Wanted",
        title: "Need for Speed - Most Wanted (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1t6vadzteg7F7jKzg0692nA" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Underground 2",
        imgSrc: "assets/img/nfsun2.jpg",
        altText: "Need for Speed - Underground 2",
        title: "Need for Speed - Underground 2.rvz",
        downloadLink2: "https://nephobox.com/s/1rSFsBFXSAk4UL7qQ98lsWA" // Segundo enlace de descarga
        
    },       
    {
        id: "Nickelodeon SpongeBob SquarePants - The Movie",
        imgSrc: "assets/img/bobesponja.jpg",
        altText: "Nickelodeon SpongeBob SquarePants - The Movie",
        title: "Nickelodeon SpongeBob SquarePants - The Movie (USA) (Rev 1).rvz",
        downloadLink2: "https://nephobox.com/s/1NEp-f0WwY3G6gg-WP-mOCw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 3 - Nemesis",
        imgSrc: "assets/img/re3.jpg",
        altText: "Resident Evil 3 - Nemesis",
        title: "Resident Evil 3 - Nemesis (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1X8f9yc0xait4ud9h5KwXqw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - Code - Veronica X",
        imgSrc: "assets/img/residentcode.jpg",
        altText: "Resident Evil",
        title: "Resident Evil - Code - Veronica X (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1q_Qf9cupVH5wZ2HohzyLwA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Zero",
        imgSrc: "assets/img/re0.jpg",
        altText: "Resident Evil Zero",
        title: "Resident Evil Zero (Disc 1) (Disc 2).rvz",
        downloadLink2: "https://nephobox.com/s/1uyOIEiyPBUghVVqeOoI-Fw" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil",
        imgSrc: "assets/img/resident.jpg",
        altText: "Resident Evil",
        title: "Resident Evil (USA) (Disc 1).rvz",
        downloadLink2: "https://nephobox.com/s/1kC2CVk5sPg6JaPz8oZYWDA" // Segundo enlace de descarga

    },       
    {
        id: "Shadow the Hedgehog",
        imgSrc: "assets/img/shadow.jpg",
        altText: "Shadow the Hedgehog",
        title: "Shadow the Hedgehog.rvz",
        downloadLink2: "https://nephobox.com/s/1TWYOqZB2_2Qpn_rJp7KIdg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Adventure DX - Director´s Cut",
        imgSrc: "assets/img/sonicdx.jpg",
        altText: "Sonic Adventure DX - Director´s Cut",
        title: "Sonic Adventure DX - Director´s Cut.rvz",
        downloadLink2: "https://nephobox.com/s/1V0nM9T7wDwNns2piYZ-khw" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Adventure 2 - Battle",
        imgSrc: "assets/img/sonic2.jpg",
        altText: "Sonic Adventure 2 - Battle",
        title: "Sonic Adventure 2 - Battle (Europe) (En,Ja,Fr,De,Es).rvz",
        downloadLink2: "https://nephobox.com/s/1lbC8ra-fAYjwu9vet_TrhA" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Heroes",
        imgSrc: "assets/img/sonicher.jpg",
        altText: "Sonic Heroes",
        title: "Sonic Heroes.rvz",
        downloadLink2: "https://nephobox.com/s/1PlWjSJ4lRIXpJAEdCDirxA" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Riders",
        imgSrc: "assets/img/sonicr.jpg",
        altText: "Sonic Riders",
        title: "Sonic Riders (Europe).rvz",
        downloadLink2: "https://nephobox.com/s/1DL7a1_whjXfmhwqWGYsSTg" // Segundo enlace de descarga

    },       
    {
        id: "Soulcalibur II",
        imgSrc: "assets/img/soul2.jpg",
        altText: "Soulcalibur II",
        title: "Soulcalibur II (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1yoHnxZzeTUj8Z4X4Z9zf2A" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Sunshine",
        imgSrc: "assets/img/mariosun.jpg",
        altText: "Super Mario Sunshine",
        title: "Super Mario Sunshine (Europe) (En,Fr,De,Es,It).rvz",
        downloadLink2: "https://nephobox.com/s/1huNgntJLdCNtNrzWohxuwA" // Segundo enlace de descarga

    },       
    {
        id: "Super Smash Bros. Melee",
        imgSrc: "assets/img/ssbmelee.jpg",
        altText: "Super Smash Bros. Melee",
        title: "Super Smash Bros. Melee (USA) (En,Ja) (Rev 2).ciso",
        downloadLink2: "https://nephobox.com/s/1D3JPM88iEPAoDxiIAQkxRg" // Segundo enlace de descarga

    },       
    {
        id: "The Simpsons Hit and Run Versión Latino",
        imgSrc: "assets/img/simpsons.jpg",
        altText: "The Simpsons Hit and Run Versión Latino",
        title: "The Simpsons Hit and Run Versión Latino v0.1.6 [GC-NTSC] by Manuel.rvz",
        downloadLink2: "https://nephobox.com/s/1NSBfcDq7JPsznTmRerqI1g" // Segundo enlace de descarga
        
    },       
    {
        id: "Tony Hawk's Pro Skater 4",
        imgSrc: "assets/img/tony4.jpg",
        altText: "Tony Hawk's Pro Skater 4",
        title: "Tony Hawk's Pro Skater 4 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/1UH9X0j5AEec_th7H4NFgCA" // Segundo enlace de descarga

    },       
    {
        id: "Wario World",
        imgSrc: "assets/img/wario.jpg",
        altText: "Tony Hawk's Pro Skater 4",
        title: "Tony Hawk's Pro Skater 4 (USA).rvz",
        downloadLink2: "https://nephobox.com/s/12lJvuJudU_ILEFsrvXxYbQ" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
