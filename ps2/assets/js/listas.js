// Lista de juegos
const juegos = [
    {
        id: "7 Sins",
        imgSrc: "assets/img/7sins.jpg",
        altText: "7 Sins",
        title: "7 Sins.chd",
        downloadLink2: "https://nephobox.com/s/1Siq1BDOHc-9be2wAyoSh0A" // Segundo enlace de descarga
    },       
    {
        id: "Bakugan - Battle Brawlers",
        imgSrc: "assets/img/bakugan.jpg",
        altText: "Bakugan - Battle Brawlers",
        title: "Bakugan - Battle Brawlers.chd",
        downloadLink2: "https://nephobox.com/s/1INCifZ6DVscHYKvFkG245A" // Segundo enlace de descarga
        
    },       
    {
        id: "Batman Begins",
        imgSrc: "assets/img/batmanbegins.jpg",
        altText: "Batman Begins",
        title: "Batman Begins.chd",
        downloadLink2: "https://nephobox.com/s/1Hn2d2Fu0uPTZbSKncNZCog" // Segundo enlace de descarga

    },       
    {
        id: "Ben 10 Protector Of Earth",
        imgSrc: "assets/img/ben10.jpg",
        altText: "Ben 10 Protector Of Earth",
        title: "Ben 10 Protector Of Earth.chd",
        downloadLink2: "https://nephobox.com/s/1fsuyY1iCMo9AON59FJE10Q" // Segundo enlace de descarga

    },       
    {
        id: "Black",
        imgSrc: "assets/img/black.jpg",
        altText: "Black",
        title: "Black (Europe) (EnFrDeEsIt).chd",
        downloadLink2: "https://nephobox.com/s/1xmDWK_gqx_RgPgv1IeYqog" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 3",
        imgSrc: "assets/img/bloo3.jpg",
        altText: "Bloody Roar 3",
        title: "Bloody Roar 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1YkeoN2jc8DtFod-swmfnMw" // Segundo enlace de descarga

    },       
    {
        id: "Bloody Roar 4",
        imgSrc: "assets/img/bloo4.jpg",
        altText: "Bloody Roar 4",
        title: "Bloody Roar 4 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1cINzGhgpsmIzig-8JlI_zQ" // Segundo enlace de descarga

    },       
    {
        id: "Burnout 3 Takedown",
        imgSrc: "assets/img/burnout3.jpg",
        altText: "Burnout 3 Takedown",
        title: "Burnout 3 Takedown.chd",
        downloadLink2: "https://nephobox.com/s/1Y_dK7d5f5MSV6eshxEqS6Q" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Finest Hour",
        imgSrc: "assets/img/cod.jpg",
        altText: "Call of Duty - Finest Hour",
        title: "Call of Duty - Finest Hour (USA).chd",
        downloadLink2: "https://nephobox.com/s/1S9wlZVPJPYEEbLbBGHdr-w" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 2 - Big Red One",
        imgSrc: "assets/img/cod2.jpg",
        altText: "Call of Duty 2 - Big Red One",
        title: "Call of Duty 2 - Big Red One (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Ac6ya7D_zRoSenbXJUybwg" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 3",
        imgSrc: "assets/img/cod3.jpg",
        altText: "Call of Duty 3",
        title: "Call of Duty 3 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1yOEmZw-V4VVrX4PZR4PAGw" // Segundo enlace de descarga

    },       
    {
        id: "Chash Twinsanity",
        imgSrc: "assets/img/chashtwi.jpg",
        altText: "Chash Twinsanity",
        title: "Chash Twinsanity.chd",
        downloadLink2: "https://nephobox.com/s/1anZ6L3XaX9SOwUGYgfG6hA" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Bandicoot - The Wrath of Cortex",
        imgSrc: "assets/img/chashwrath.jpg",
        altText: "Crash Bandicoot - The Wrath of Cortex",
        title: "Crash Bandicoot - The Wrath of Cortex.chd",
        downloadLink2: "https://nephobox.com/s/12KYfNfU7nB2yEkwb5T2EiA" // Segundo enlace de descarga

    },       
    {
        id: "Crash Nitro Kart",
        imgSrc: "assets/img/chashkart.jpg",
        altText: "Crash Nitro Kart",
        title: "Crash Nitro Kart.chd",
        downloadLink2: "https://nephobox.com/s/1joPVSefIVuP6RykNlwG7Ww" // Segundo enlace de descarga

    },       
    {
        id: "Crash of the Titans",
        imgSrc: "assets/img/chashtitans.jpg",
        altText: "Crash of the Titans",
        title: "Crash of the Titans.chd",
        downloadLink2: "https://nephobox.com/s/1M9Zq3s9geRP4LiWjGvtjAg" // Segundo enlace de descarga
        
    },       
    {
        id: "Crash Tag Team Racing",
        imgSrc: "assets/img/chashracing.jpg",
        altText: "Crash Tag Team Racing",
        title: "Crash Tag Team Racing.chd",
        downloadLink2: "https://nephobox.com/s/1qA4Nb3DhBoIWc95_3APCIQ" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry 3 - Dante's Awakening",
        imgSrc: "assets/img/devil3.jpg",
        altText: "Devil May Cry 3 - Dante's Awakening",
        title: "Devil May Cry 3 - Dante's Awakening (Special Edition).chd",
        downloadLink2: "https://nephobox.com/s/1K0tnp030rNHZb9QFsYtm7A" // Segundo enlace de descarga

    },       
    {
        id: "Disney-Pixar Cars",
        imgSrc: "assets/img/cars.jpg",
        altText: "Disney-Pixar Cars",
        title: "Disney-Pixar Cars (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ZRALXss4E35C6P_9xNEEOg" // Segundo enlace de descarga

    },       
    {
        id: "Downhill Domination",
        imgSrc: "assets/img/downhill.jpg",
        altText: "Downhill Domination",
        title: "Downhill Domination.chd",
        downloadLink2: "https://nephobox.com/s/1oN8V8kj8nVDnGV9aA-DtcQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai",
        imgSrc: "assets/img/budokai.jpg",
        altText: "Dragon Ball Z - Budokai.chd",
        title: "Dragon Ball Z - Budokai.chd",
        downloadLink2: "https://nephobox.com/s/1_Izr6wdT5IkA_OGqy-hxOA" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai 2",
        imgSrc: "assets/img/budokai2.jpg",
        altText: "Dragon Ball Z - Budokai 2",
        title: "Dragon Ball Z - Budokai 2.chd",
        downloadLink2: "https://nephobox.com/s/1NoDUp8Hdyoj87Vp68yAuBg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai 3",
        imgSrc: "assets/img/budokai3.jpg",
        altText: "Dragon Ball Z - Budokai 3",
        title: "Dragon Ball Z - Budokai 3.chd",
        downloadLink2: "https://nephobox.com/s/1dJYGo82QKYbbfNK2YqnfFg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi",
        imgSrc: "assets/img/tenkaichi.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi",
        title: "Dragon Ball Z - Budokai Tenkaichi (USA).chd",
        downloadLink2: "https://nephobox.com/s/1UftdkP4Ecd3zS2wuw2PG_Q" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 2",
        imgSrc: "assets/img/tenkaichi2.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi 2",
        title: "Dragon Ball Z - Budokai Tenkaichi 2.chd",
        downloadLink2: "https://nephobox.com/s/1LeMIfkf_NR0_2CuChEsTmg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        imgSrc: "assets/img/tenkaichi3canonv7.jpg",
        altText: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7",
        title: "Dragon Ball Z - Budokai Tenkaichi 3 Canon V7.chd",
        downloadLink2: "https://nephobox.com/s/1LVLT9GwQ1NOPM7_9XG5GlQ" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Infinite World",
        imgSrc: "assets/img/dbinfinite.jpg",
        altText: "Dragon Ball Z - Infinite World",
        title: "Dragon Ball Z - Infinite World.chd",
        downloadLink2: "https://nephobox.com/s/1GzzPJ0lJfFMsGJLro9qVsg" // Segundo enlace de descarga

    },       
    {
        id: "Driv3r",
        imgSrc: "assets/img/driv3r.jpg",
        altText: "Driv3r",
        title: "Driv3r.chd",
        downloadLink2: "https://nephobox.com/s/1kGGN-LGIZrLBL5DFnv6gXA" // Segundo enlace de descarga

    },       
    {
        id: "eFootball 2025",
        imgSrc: "assets/img/football25.jpg",
        altText: "eFootball 2025",
        title: "eFootball 2025 (MOD).chd",
        downloadLink2: "https://nephobox.com/s/1ILM1CrYbILLTb6oj_ix2yg" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14",
        imgSrc: "assets/img/fifa14.jpg",
        altText: "FIFA 14",
        title: "FIFA 14 (Europe) (EnEsPtPl).chd",
        downloadLink2: "https://nephobox.com/s/14ggqoK6U5P3bVvhnZcgCAg" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X",
        imgSrc: "assets/img/ffx.jpg",
        altText: "Final Fantasy X",
        title: "Final Fantasy X .chd",
        downloadLink2: "https://nephobox.com/s/1idjbu9JVX8LOfqI58gXl7w" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X-2",
        imgSrc: "assets/img/ffx2.jpg",
        altText: "Final Fantasy X",
        title: "Final Fantasy X-2.chd",
        downloadLink2: "https://nephobox.com/s/1l67fImTJ8GEcz907oFf2ig" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy XII",
        imgSrc: "assets/img/ffxii.jpg",
        altText: "Final Fantasy XII",
        title: "Final Fantasy XII (USA).chd",
        downloadLink2: "https://nephobox.com/s/1g3fC1S6rQWzJViMehl4-_g" // Segundo enlace de descarga

    },       
    {
        id: "Fatal Frame III - The Tormented",
        imgSrc: "assets/img/fatal3.jpg",
        altText: "Fatal Frame III - The Tormented",
        title: "Fatal Frame III - The Tormented (USA).chd",
        downloadLink2: "https://nephobox.com/s/1zyt4CTBRxBfG1myhWaOS1w" // Segundo enlace de descarga

    },       
    {
        id: "Ghost Rider",
        imgSrc: "assets/img/ghostrider.jpg",
        altText: "Ghost Rider",
        title: "Ghost Rider.chd",
        downloadLink2: "https://nephobox.com/s/1YA8ScdP7-3p1E6JOw3s0eQ" // Segundo enlace de descarga

    },       
    {
        id: "God of War II",
        imgSrc: "assets/img/gow2.jpg",
        altText: "God of War II",
        title: "God of War II .chd",
        downloadLink2: "https://nephobox.com/s/1WyJeI1O7CVthJhyfiVjP4Q" // Segundo enlace de descarga

    },       
    {
        id: "God of War",
        imgSrc: "assets/img/gow.jpg",
        altText: "God of War",
        title: "God of War.chd",
        downloadLink2: "https://nephobox.com/s/1mbBFTi3slfhUdvpxkGR_6w" // Segundo enlace de descarga
        
    },       
    {
        id: "Grand Theft Auto - Liberty City Stories",
        imgSrc: "assets/img/gtastories.jpg",
        altText: "Grand Theft Auto - Liberty City Stories",
        title: "Grand Theft Auto - Liberty City Stories .chd",
        downloadLink2: "https://nephobox.com/s/1U33QImkIY0dViQC-vMrsXg" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto V",
        imgSrc: "assets/img/gtav.jpg",
        altText: "Grand Theft Auto V",
        title: "Grand Theft Auto V (MOD).chd",
        downloadLink2: "https://nephobox.com/s/183Glfn3IIGyicWZX2gBi5Q" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto III",
        imgSrc: "assets/img/gta3.jpg",
        altText: "Grand Theft Auto III",
        title: "Grand Theft Auto III (USA).chd",
        downloadLink2: "https://nephobox.com/s/1LJLF99cf_LqhX_Q44x-dpg" // Segundo enlace de descarga
        
    },       
    {
        id: "Grand Theft Auto San Andreas",
        imgSrc: "assets/img/gtasa.jpg",
        altText: "Grand Theft Auto San Andreas",
        title: "Grand Theft Auto San Andreas.chd",
        downloadLink2: "https://nephobox.com/s/1zSyif_gRdkqzrGxTSdfv_w" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto Vice City",
        imgSrc: "assets/img/gtavc.jpg",
        altText: "Grand Theft Auto Vice City",
        title: "Grand Theft Auto Vice City.chd",
        downloadLink2: "https://nephobox.com/s/1UObxjmPyG1VZCwol13xj4A" // Segundo enlace de descarga

    },       
    {
        id: "Gran Turismo 3",
        imgSrc: "assets/img/gran3.jpg",
        altText: "Gran Turismo 3",
        title: "Gran Turismo 3.chd",
        downloadLink2: "https://nephobox.com/s/1Dm1kwiBFWO6TZmGUrrAj_g" // Segundo enlace de descarga

    },       
    {
        id: "Gran Turismo 4",
        imgSrc: "assets/img/gran4.jpg",
        altText: "Gran Turismo 4",
        title: "Gran Turismo 4.chd",
        downloadLink2: "https://nephobox.com/s/1H-WnhKK0Ztp1p8UMMhgHKA" // Segundo enlace de descarga

    },       
    {
        id: "Hitman - Blood Money",
        imgSrc: "assets/img/hitmanblood.jpg",
        altText: "Hitman - Blood Money",
        title: "Hitman - Blood Money.chd",
        downloadLink2: "https://nephobox.com/s/1SsyDKTdphiU-K_hFRFjfvQ" // Segundo enlace de descarga

    },       
    {
        id: "Hitman - Contracts",
        imgSrc: "assets/img/hitmancontracts.jpg",
        altText: "Hitman - Contracts",
        title: "Hitman - Contracts.chd",
        downloadLink2: "https://nephobox.com/s/1k3Tevl2G4PNcP4oaIUKJPA" // Segundo enlace de descarga

    },       
    {
        id: "Hitman 2 Silent Assasin",
        imgSrc: "assets/img/hitman2.jpg",
        altText: "Hitman 2 Silent Assasin",
        title: "Hitman 2 Silent Assasin.chd",
        downloadLink2: "https://nephobox.com/s/1PX6rduCymnx3_8ai6k9aLw" // Segundo enlace de descarga

    },       
    {
        id: "Jak and Daxter - The Precursor Legacy",
        imgSrc: "assets/img/jax.jpg",
        altText: "Jak and Daxter - The Precursor Legacy",
        title: "Jak and Daxter - The Precursor Legacy (USA) (EnFrDeEsIt).chd",
        downloadLink2: "https://nephobox.com/s/15JU_CL30AUagvSStFspXSg" // Segundo enlace de descarga

    },       
    {
        id: "Jak and Daxter Complete Trilogy",
        imgSrc: "assets/img/jaxtrilogy.jpg",
        altText: "Jak and Daxter Complete Trilogy",
        title: "Jak and Daxter Complete Trilogy.chd",
        downloadLink2: "https://nephobox.com/s/1wsUTnPBk05Ei63BlSdhOEw" // Segundo enlace de descarga

    },       
    {
        id: "Los Increibles",
        imgSrc: "assets/img/increibles.jpg",
        altText: "Los Increibles",
        title: "Los Increibles.chd",
        downloadLink2: "https://nephobox.com/s/1_3szyb8n4slawXW58B6BLQ" // Segundo enlace de descarga

    },       
    {
        id: "Manhunt",
        imgSrc: "assets/img/manhunt.jpg",
        altText: "Manhunt",
        title: "Manhunt.chd",
        downloadLink2: "https://nephobox.com/s/1U-RDf5fOh5uP09jKWKHhIA" // Segundo enlace de descarga

    },       
    {
        id: "Manhunt 2",
        imgSrc: "assets/img/manhunt2.jpg",
        altText: "Manhunt 2",
        title: "Manhunt 2.chd",
        downloadLink2: "https://nephobox.com/s/1HqByNXnnvc05rjubQ8OMnQ" // Segundo enlace de descarga

    },       
    {
        id: "Marvel - Ultimate Alliance 2",
        imgSrc: "assets/img/spidermanalliance2.jpg",
        altText: "Marvel - Ultimate Alliance 2",
        title: "Marvel - Ultimate Alliance 2.chd",
        downloadLink2: "https://nephobox.com/s/1zOP50VxruRX_m1xwNvHZvQ" // Segundo enlace de descarga

    },       
    {
        id: "Marvel - Ultimate Alliance",
        imgSrc: "assets/img/spidermanalliance.jpg",
        altText: "Marvel - Ultimate Alliance",
        title: "Marvel - Ultimate Alliance.chd",
        downloadLink2: "https://nephobox.com/s/17025amVz2GK73mrE-ep2rQ" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne",
        imgSrc: "assets/img/max.jpg",
        altText: "Max Payne",
        title: "Max Payne.chd",
        downloadLink2: "https://nephobox.com/s/1qXf7mnnqA7M4h5OZ3TuTxQ" // Segundo enlace de descarga

    },       
    {
        id: "Max Payne 2 - The Fall of Max Payne",
        imgSrc: "assets/img/max2.jpg",
        altText: "Max Payne 2 - The Fall of Max Payne",
        title: "Max Payne 2 - The Fall of Max Payne (USA).chd",
        downloadLink2: "https://nephobox.com/s/1sz1kKtwtEm1JOkrs9bgx-w" // Segundo enlace de descarga

    },       
    {
        id: "Medal of Honor - European Assault",
        imgSrc: "assets/img/medaleuro.jpg",
        altText: "Medal of Honor - European Assault",
        title: "Medal of Honor - European Assault.chd",
        downloadLink2: "https://nephobox.com/s/1p_1uwMT6meEN1M1x7Iv2WA" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man X8",
        imgSrc: "assets/img/megamanx8.jpg",
        altText: "Mega Man X8",
        title: "Mega Man X8 (U)(Undub).chd",
        downloadLink2: "https://nephobox.com/s/1JaMd2dS-podkUflDXpWjXQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Gear Solid 2 - Sons of Liberty",
        imgSrc: "assets/img/mg2.jpg",
        altText: "Metal Gear Solid 2 - Sons of Liberty",
        title: "Metal Gear Solid 2 - Sons of Liberty (USA).chd",
        downloadLink2: "https://nephobox.com/s/1ziF93iyOT1ouiPYQnfKIng" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3 SE",
        imgSrc: "assets/img/mg3.jpg",
        altText: "Metal Gear Solid 3 SE",
        title: "Metal Gear Solid 3 Snake Eater.chd",
        downloadLink2: "https://nephobox.com/s/1wTPNSJU1NqaXUM8rmgFGlQ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metal Slug 3",
        imgSrc: "assets/img/metalslug3.jpg",
        altText: "Metal Slug 3",
        title: "Metal Slug 3 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1LrZQo3z0Sajr_yQKp3QH8A" // Segundo enlace de descarga

    },       
    {
        id: "Midnight Club 3 - DUB Edition",
        imgSrc: "assets/img/mc3.jpg",
        altText: "Midnight Club 3 - DUB Edition",
        title: "Midnight Club 3 - DUB Edition.chd",
        downloadLink2: "https://nephobox.com/s/16QJQnHPeVySEwj9_ET-VBA" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat Armageddon",
        imgSrc: "assets/img/mk.jpg",
        altText: "Mortal Kombat Armageddon",
        title: "Mortal Kombat Armageddon.chd",
        downloadLink2: "https://nephobox.com/s/1IiEOcnDgJaq6jw-ID6gONg" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden - Ultimate Ninja 5",
        imgSrc: "assets/img/naruto5.jpg",
        altText: "Naruto Shippuden - Ultimate Ninja 5",
        title: "Naruto Shippuden - Ultimate Ninja 5 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/1zH-dlkH-jgz6O534cqSfeg" // Segundo enlace de descarga
        
    },       
    {
        id: "Need for Speed - Hot Pursuit 2",
        imgSrc: "assets/img/nfshot2.jpg",
        altText: "Need for Speed - Hot Pursuit 2",
        title: "Need for Speed - Hot Pursuit 2 (USA).chd",
        downloadLink2: "https://nephobox.com/s/1KZ_IzsbyVtCmWefNxWczzQ" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed Most Wanted",
        imgSrc: "assets/img/nfsmost.jpg",
        altText: "Need for Speed Most Wanted",
        title: "Need for Speed Most Wanted.chd",
        downloadLink2: "https://nephobox.com/s/1JTdOyUShlmRUqskZxrQk5g" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - ProStreet",
        imgSrc: "assets/img/nfspro.jpg",
        altText: "Need for Speed - ProStreet",
        title: "Need for Speed - ProStreet (USA).chd",
        downloadLink2: "https://nephobox.com/s/1Xo6m7wa-HuxwBiviUhSF0Q" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 3",
        imgSrc: "assets/img/pes3.jpg",
        altText: "Pro Evolution Soccer 3",
        title: "Pro Evolution Soccer 3 (Europe) (En,Fr,De,Es).chd",
        downloadLink2: "https://nephobox.com/s/1V6YFd3czz7JnbNuIei4z8A" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 6",
        imgSrc: "assets/img/pes6.jpg",
        altText: "Pro Evolution Soccer 6",
        title: "Pro Evolution Soccer 6 (Spain).chd",
        downloadLink2: "https://nephobox.com/s/1d8z9tuMneLdOiNtEfHbCfw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank",
        imgSrc: "assets/img/ratchet.jpg",
        altText: "Ratchet & Clank",
        title: "Ratchet & Clank.chd",
        downloadLink2: "https://nephobox.com/s/1_R1cPPPlOx3MnAlPAv3UpA" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 2",
        imgSrc: "assets/img/ratchet2.jpg",
        altText: "Ratchet & Clank 2",
        title: "Ratchet & Clank 2.chd",
        downloadLink2: "https://nephobox.com/s/1Qk7DrvIz1nwUlbUi3ur7Gw" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet & Clank 3 Up YA",
        imgSrc: "assets/img/ratchet3.jpg",
        altText: "Ratchet & Clank 3 Up YA",
        title: "Ratchet & Clank 3 Up YA.chd",
        downloadLink2: "https://nephobox.com/s/1ckPwNxc_mT13TiR1F_VMoA" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4",
        imgSrc: "assets/img/re4.jpg",
        altText: "Resident Evil 4",
        title: "Resident Evil 4 (Europe).chd",
        downloadLink2: "https://nephobox.com/s/12edXojbHcOzXmEUVVK9eFA" // Segundo enlace de descarga
        
    },       
    {
        id: "Shadow of the Colossus",
        imgSrc: "assets/img/shadowcolussus.jpg",
        altText: "Shadow of the Colossus",
        title: "Shadow of the Colossus.chd",
        downloadLink2: "https://nephobox.com/s/1yLwNQhDgv-hhhsZlafS8KQ" // Segundo enlace de descarga

    },       
    {
        id: "Shadow The Hedgehog",
        imgSrc: "assets/img/shadow.jpg",
        altText: "Shadow The Hedgehog",
        title: "Shadow The Hedgehog.chd",
        downloadLink2: "https://nephobox.com/s/1jgIM--hxBmaIExLk4RMDmg" // Segundo enlace de descarga

    },       
    {
        id: "Sly Cooper and the Thievius Raccoonus",
        imgSrc: "assets/img/sly.jpg",
        altText: "Sly Cooper and the Thievius Raccoonus",
        title: "Sly Cooper and the Thievius Raccoonus (USA).chd",
        downloadLink2: "https://nephobox.com/s/1rI6wfNQcVJTQZ5bc_jLCAA" // Segundo enlace de descarga

    },       
    {
        id: "Sly 2 - Band of Thieves",
        imgSrc: "assets/img/sly2.jpg",
        altText: "Sly 2 - Band of Thieves",
        title: "Sly 2 - Band of Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/1GpEMh_Kq616WITOjeTS_kg" // Segundo enlace de descarga

    },       
    {
        id: "Sly 3 - Honor Among Thieves",
        imgSrc: "assets/img/sly3.jpg",
        altText: "Sly 3 - Honor Among Thieves",
        title: "Sly 3 - Honor Among Thieves (USA).chd",
        downloadLink2: "https://nephobox.com/s/121OYNowr56SOj7M9mB-JhA" // Segundo enlace de descarga

    },       
    {
        id: "Silent Hill 2",
        imgSrc: "assets/img/silenthill2.jpg",
        altText: "Silent Hill 2",
        title: "Silent Hill 2.chd",
        downloadLink2: "https://nephobox.com/s/12a0zvEgUD1gA2RjUFL2H4A" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Heroes",
        imgSrc: "assets/img/sonicheroes.jpg",
        altText: "Sonic Heroes",
        title: "Sonic Heroes.chd",
        downloadLink2: "https://nephobox.com/s/1k5192QlyfUPWYfhWXEjvVQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "assets/img/sonicunleashed.jpg",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (USA).chd",
        downloadLink2: "https://nephobox.com/s/1FRFVJ0YIZPn__nTcdPe9MA" // Segundo enlace de descarga

    },       
    {
        id: "Simpsons Hit Run",
        imgSrc: "assets/img/simpsons.jpg",
        altText: "Simpsons Hit Run",
        title: "Simpsons Hit Run.chd",
        downloadLink2: "JJJ" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3",
        imgSrc: "assets/img/spiderman3.jpg",
        altText: "Spider-Man 3",
        title: "Spider-Man 3.chd",
        downloadLink2: "https://nephobox.com/s/1O0tAkWS9jtTv3rDwLfqmmw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 2",
        imgSrc: "assets/img/spiderman2.jpg",
        altText: "Spider-Man 2",
        title: "Spider-Man 2.chd",
        downloadLink2: "https://nephobox.com/s/1ljjxQQYeP5TxiRy8pFo_gw" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man",
        imgSrc: "assets/img/spiderman.jpg",
        altText: "Spider-Man",
        title: "Spider-Man.chd",
        downloadLink2: "https://nephobox.com/s/1LaD-zrets1HVMrQTB2HZ8g" // Segundo enlace de descarga
        
    },       
    {
        id: "Super Dragon Ball Z",
        imgSrc: "assets/img/superdb.jpg",
        altText: "Super Dragon Ball Z",
        title: "Super Dragon Ball Z (USA).chd",
        downloadLink2: "https://nephobox.com/s/17yGeaI2ZovmQHGYdyNa9vg" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 64",
        imgSrc: "assets/img/sm64.jpg",
        altText: "Super Mario 64",
        title: "Super Mario 64.iso",
        downloadLink2: "https://nephobox.com/s/1LzU4OJbjj2dPUcDy6JaIEw" // Segundo enlace de descarga

    },       
    {
        id: "Tekken 5",
        imgSrc: "assets/img/tekken5.jpg",
        altText: "Tekken 5",
        title: "Tekken 5.chd",
        downloadLink2: "https://nephobox.com/s/1rfgl8bxo6v7gzMxzqBwXxg" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 3",
        imgSrc: "assets/img/proskater3.jpg",
        altText: "Tony Hawks Pro Skater 4",
        title: "Tony Hawks Pro Skater 3.chd",
        downloadLink2: "https://nephobox.com/s/1d6KqvXpdMkfEQQ7_szmzYQ" // Segundo enlace de descarga

    },       
    {
        id: "Tony Hawks Pro Skater 4",
        imgSrc: "assets/img/proskater4.jpg",
        altText: "Tony Hawks Pro Skater 4",
        title: "Tony Hawks Pro Skater 4.chd",
        downloadLink2: "https://nephobox.com/s/1d6KqvXpdMkfEQQ7_szmzYQ" // Segundo enlace de descarga

    },       
    {
        id: "X-Men Legends",
        imgSrc: "assets/img/xmen.jpg",
        altText: "X-Men Legends",
        title: "X-Men Legends.chd",
        downloadLink2: "https://nephobox.com/s/1RaeV9qk0hWMfHO1OuFXuCg" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
