// Lista de juegos
const juegos = [
    {
        id: "007 Legends",
        imgSrc: "assets/img/007legends.jpg",
        altText: "007 Legends",
        title: "007™ Legends (EU).wua",
        downloadLink2: "https://nephobox.com/s/11INUuYn1-wUgGeGFUpMnbw" // Segundo enlace de descarga
    },       
    {
        id: "Adventure Time Explore the Dungeon Because I Don't Know!",
        imgSrc: "assets/img/horadeaventura.jpg",
        altText: "Adventure Time Explore the Dungeon Because I Don't Know!",
        title: "Adventure Time Explore the Dungeon Because I Don't Know! (EU) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1suv2MrNNZ2lkQdNKKc9vew" // Segundo enlace de descarga

    },
    {
        id: "Adventure Time Finn and Jake Investigations",
        imgSrc: "assets/img/horadeaventurainvestigations.jpg",
        altText: "Adventure Time Finn and Jake Investigations",
        title: "Adventure Time Finn and Jake Investigations (USA) (DLC) (v16).wua",
        downloadLink2: "https://nephobox.com/s/10NMthozehcLbpVvPWOtkzQ" // Segundo enlace de descarga

    },
    {
        id: "Animal Crossing - amiibo Festival",
        imgSrc: "assets/img/animal.jpg",
        altText: "Animal Crossing - amiibo Festival",
        title: "Animal Crossing - amiibo Festival (USA).wua",
        downloadLink2: "https://nephobox.com/s/1S3A1qget3h93cYJpIqGinA" // Segundo enlace de descarga

    },
    {
        id: "Assassin's Creed III",
        imgSrc: "assets/img/asscred3.jpg",
        altText: "Assassin's Creed III",
        title: "Assassin's Creed III (USA) (DLC) (v80).wua",
        downloadLink2: "https://nephobox.com/s/1YZkc_RBhCqDiG3PnPZZJOw" // Segundo enlace de descarga

    },
    {
        id: "Assassin's Creed IV Black Flag",
        imgSrc: "assets/img/asscreedbf.jpg",
        altText: "Assassin's Creed IV Black Flag",
        title: "Assassin's Creed IV Black Flag (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1T6zqUUqgNz9-Un3qZUWvow" // Segundo enlace de descarga

    },
    {
        id: "Batman Arkham City Armored Edition",
        imgSrc: "assets/img/batmancity.jpg",
        altText: "Batman Arkham City Armored Edition",
        title: "Batman Arkham City - Armored Edition (USA).wua",
        downloadLink2: "https://nephobox.com/s/1dlQtPSds15G65b0C8ifM8w" // Segundo enlace de descarga

    },
    {
        id: "Batman Arkham Origins",
        imgSrc: "assets/img/batmanorigins.jpg",
        altText: "Batman Arkham Origins",
        title: "Batman - Arkham Origins (USA) (DLC) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1u53fh0rJp_fL_FX_Xi_e1A" // Segundo enlace de descarga

    },       
    {
        id: "BAYONETTA",
        imgSrc: "assets/img/bayonetta.jpg",
        altText: "BAYONETTA",
        title: "BAYONETTA (USA).wua",
        downloadLink2: "https://terabox.com/s/1HyeiqDjOyQhw13KJgrLP9w" // Segundo enlace de descarga

    },
    {
        id: "BAYONETTA 2",
        imgSrc: "assets/img/bayonetta2.jpg",
        altText: "BAYONETTA 2",
        title: "BAYONETTA 2 (EU).wua",
        downloadLink2: "https://nephobox.com/s/1QhuYko6DFDih32C3OnAdAg" // Segundo enlace de descarga

    },       
    {
        id: "BEN 10 OMNIVERSE",
        imgSrc: "assets/img/ben10.jpg",
        altText: "BEN 10 OMNIVERSE",
        title: "BEN 10 OMNIVERSE (US).wua",
        downloadLink2: "https://terabox.com/s/112KFwn6T5-ywTmrDJZg0rQ" // Segundo enlace de descarga

    },
    {
        id: "BEN 10 OMNIVERSE 2",
        imgSrc: "assets/img/ben10omniverse2.jpg",
        altText: "BEN 10 OMNIVERSE 2",
        title: "BEN 10 OMNIVERSE 2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1GoFRKuVKZCRtIGOnxNR1kw" // Segundo enlace de descarga

    },
    {
        id: "Call of Duty Black Ops II",
        imgSrc: "assets/img/codblackops2.jpg",
        altText: "Call of Duty Black Ops II",
        title: "Call of Duty Black Ops II (EU).wua",
        downloadLink2: "https://nephobox.com/s/1k6i7s0u0WpGiLtIdGYWkpg" // Segundo enlace de descarga

    },
    {
        id: "Call of Duty Ghosts",
        imgSrc: "assets/img/codghost.jpg",
        altText: "Call of Duty Ghosts",
        title: "Call of Duty Ghosts (USA) (DLC) (v112).wua",
        downloadLink2: "https://nephobox.com/s/1jZPf-7xKVug_HdeVvHRLSQ" // Segundo enlace de descarga

    },
    {
        id: "Captain Toad Treasure Tracker",
        imgSrc: "assets/img/capitaintoad.jpg",
        altText: "Captain Toad Treasure Tracker",
        title: "Captain Toad Treasure Tracker (EE.UU.) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1gaQSFawgus2ICQfQbcpMRQ" // Segundo enlace de descarga

    },
    {
        id: "Cars 3 Driven to Win",
        imgSrc: "assets/img/cars3.jpg",
        altText: "Cars 3 Driven to Win",
        title: "Cars 3 Driven to Win (USA) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1sd-6JIleC9sHWurV02vHrA" // Segundo enlace de descarga

    },
    {
        id: "Darksiders",
        imgSrc: "assets/img/darksiders.jpg",
        altText: "Darksiders",
        title: "Darksiders (US).wua",
        downloadLink2: "https://nephobox.com/s/1_mCHsENzbZZnLfbi1fnEGw" // Segundo enlace de descarga

    },
    {
        id: "Darksiders II",
        imgSrc: "assets/img/darksiders2.jpg",
        altText: "Darksiders II",
        title: "Darksiders II (US).wua",
        downloadLink2: "https://nephobox.com/s/1gB615yHeaaOYqCfI1daDxQ" // Segundo enlace de descarga

    },
    {
        id: "DEUS EX HUMAN REV. DIRECTOR'S CUT",
        imgSrc: "assets/img/deusex.jpg",
        altText: "DEUS EX HUMAN REV. DIRECTOR'S CUT",
        title: "DEUS EX HUMAN REV. DIRECTOR'S CUT (USA).wua",
        downloadLink2: "https://nephobox.com/s/1g1we-ZOj8HW1rvnSjybqtg" // Segundo enlace de descarga

    },
    {
        id: "Disney Epic Mickey 2",
        imgSrc: "assets/img/disneyepicmickey2.jpg",
        altText: "Disney Epic Mickey 2",
        title: "Disney Epic Mickey 2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1AIymX6kewxKXB2wYI0wFBw" // Segundo enlace de descarga

    },       
    {
        id: "Disney Infinity 2.0",
        imgSrc: "assets/img/disney2.jpg",
        altText: "Disney Infinity 2.0",
        title: "Disney Infinity 2.0 (US).wua",
        downloadLink2: "https://terabox.com/s/1G7laAgRJRmJTZI9txT7phQ" // Segundo enlace de descarga

    },       
    {
        id: "Disney Infinity 3.0",
        imgSrc: "assets/img/disney3.jpg",
        altText: "Disney Infinity 3.0",
        title: "Disney Infinity 3.0 (US).wua",
        downloadLink2: "https://terabox.com/s/1OeuPKdhQ9_o-XsFVz-kNYQ" // Segundo enlace de descarga

    },
    {
        id: "Donkey kong tropical freeze",
        imgSrc: "assets/img/donkeykongtf.jpg",
        altText: "Donkey Kong Tropical Freeze",
        title: "DKC Tropical Freeze (US).wua",
        downloadLink2: "https://nephobox.com/s/1wRBdl-Iq5BKjk-g_pK7PFA" // Segundo enlace de descarga

    },
    {
        id: "Ducktales Remastered",
        imgSrc: "assets/img/ducktales.jpg",
        altText: "Ducktales Remastered",
        title: "DuckTales Remastered (US) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1iVq6BNAPilBeM9AvAUJ_Jw" // Segundo enlace de descarga

    },
    {
        id: "F1 race stars powered up edition",
        imgSrc: "assets/img/f1racestars.jpg",
        altText: "F1 RACE STARS - POWERED UP EDITION",
        title: "F1 RACE STARS - POWERED UP EDITION (USA).wua",
        downloadLink2: "https://nephobox.com/s/1K7WM0MQYgXZIXr_516RwWQ" // Segundo enlace de descarga

    },
    {
        id: "Fast racing neo",
        imgSrc: "assets/img/fastracing.jpg",
        altText: "Fast Racing Neo",
        title: "FAST Racing NEO (USA) (DLC) (v65).wua",
        downloadLink2: "https://nephobox.com/s/1nPp-FXg2wBoA-vbIm2YzmA" // Segundo enlace de descarga

    },
    {
        id: "Fast & Furious Showdown",
        imgSrc: "assets/img/fastyfurious.jpg",
        altText: "Fast & Furious Showdown",
        title: "Fast & Furious - Showdown (USA).wua",
        downloadLink2: "https://nephobox.com/s/1gY4nbNk1cVtWIYfjqxpYew" // Segundo enlace de descarga

    },
    {
        id: "FIFA Soccer 13",
        imgSrc: "assets/img/fifa13.jpg",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1-L0QS_Bk5bhSrtnFLlqFdw" // Segundo enlace de descarga

    },
    {
        id: "Hello Kitty Kruisers",
        imgSrc: "assets/img/hellokitty.jpg",
        altText: "Hello Kitty Kruisers",
        title: "Hello Kitty Kruisers (USA).wua",
        downloadLink2: "https://nephobox.com/s/14Ye2qVkWB6qRHO6fSag7SQ" // Segundo enlace de descarga

    },
    {
        id: "How to Train Your Dragons 2",
        imgSrc: "assets/img/dragon2.jpg",
        altText: "How to Train Your Dragons 2",
        title: "How to Train Your Dragons 2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1MnGuCLkdnhQVVzTlqX-NMw" // Segundo enlace de descarga

    },
    {
        id: "Hot Wheels World’s Best Driver",
        imgSrc: "assets/img/hotwheels.jpg",
        altText: "Hot Wheels World’s Best Driver",
        title: "Hot Wheels - World’s Best Driver (USA).wua",
        downloadLink2: "https://nephobox.com/s/1ZSM6tg2ybruApkTmj2SP8Q" // Segundo enlace de descarga

    },
    {
        id: "Injustice Gods Among Us",
        imgSrc: "assets/img/injustice.jpg",
        altText: "Injustice Gods Among Us",
        title: "Injustice Gods Among Us (EU) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1-yVPbIj6B2_MsmY3ViN3zA" // Segundo enlace de descarga

    },
    {
        id: "LEGO Batman 3 Beyond Gotham",
        imgSrc: "assets/img/legobatman3.jpg",
        altText: "LEGO Batman 3 Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (USA) (v48).wua",
        downloadLink2: "https://nephobox.com/s/1P2qW8aohz-KOowDx9oC4nw" // Segundo enlace de descarga

    },
    {
        id: "Lego Marvels Avengers",
        imgSrc: "assets/img/legoavengers.jpg",
        altText: "Lego Marvels Avengers",
        title: "LEGO MARVEL's Avengers (USA) (DLC) (v64).wua",
        downloadLink2: "https://nephobox.com/s/1HbZhYHJanax2b9P7wgDilw" // Segundo enlace de descarga

    },
    {
        id: "Lego Star Wars The Force Awakens",
        imgSrc: "assets/img/legostar.jpg",
        altText: "LEGO STAR WARS - The Force Awakens",
        title: "LEGO STAR WARS - The Force Awakens (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1ZWHlSFacyVnawUfFtJ0MgA" // Segundo enlace de descarga

    },
    {
        id: "Madden NFL 13",
        imgSrc: "assets/img/madden13.jpg",
        altText: "Madden NFL 13",
        title: "Madden NFL 13 (USA).wua",
        downloadLink2: "https://nephobox.com/s/11PWoabWQl0kI1X_Zq_zIxA" // Segundo enlace de descarg

    },
    {
        id: "Mario y Sonic at the Rio 2016 Olympic Games",
        imgSrc: "assets/img/marioysonic2016.jpg",
        altText: "Mario y Sonic at the Rio 2016 Olympic Games",
        title: "Mario & Sonic at the Rio 2016 - Olympic Games (USA) (v16).wua",
        downloadLink2: "https://nephobox.com/s/17o7Tt1cCsYo-EZGq5kekLg" // Segundo enlace de descarga

    },
    {
        id: "Mario y sonic sochi 2014",
        imgSrc: "assets/img/marioysonicsochi2014.jpg",
        altText: "Mario y sonic sochi 2014",
        title: "MARIO & SONIC SOCHI 2014 (EU) (v32).wua",
        downloadLink2: "https://nephobox.com/s/11tTnXk2-exwUuuldXTTTuA" // Segundo enlace de descarga

    },
    {
        id: "Mario Kart 8",
        imgSrc: "assets/img/mariokart8.jpg",
        altText: "Mario Kart 8",
        title: "MARIO KART 8 (US) (v64).wua",
        downloadLink2: "https://nephobox.com/s/1oIGlfumFeqWcA2sI8YoX3A" // Segundo enlace de descarga

    },
    {
        id: "Mario Party 10",
        imgSrc: "assets/img/marioparty10.jpg",
        altText: "Mario Party 10",
        title: "Mario Party 10 (USA) (v16).wua",
        downloadLink2: "https://nephobox.com/s/15XfsKveyVYp-mpnBHV-GoA" // Segundo enlace de descarga

    },
    {
        id: "Mario Tennis Ultra Smash",
        imgSrc: "assets/img/mariotennisultrasmash.jpg",
        altText: "Mario Tennis Ultra Smash",
        title: "Mario Tennis - Ultra Smash (USA) (En,Fr,Es).wux",
        downloadLink2: "https://nephobox.com/s/1yQNqqx8vZfWPp-e37T3g4w" // Segundo enlace de descarga

    },
    {
        id: "Mario vs. Donkey Kong Tipping Stars",
        imgSrc: "assets/img/mariovsdonkey.jpg",
        altText: "Mario vs. Donkey Kong Tipping Stars",
        title: "Mario vs. Donkey Kong Tipping Stars (USA).wua",
        downloadLink2: "https://nephobox.com/s/1jBhu0DFAszxB8u_f1Qzmhg" // Segundo enlace de descarga

    },       
    {
        id: "Mass Effect 3 Special Edition",
        imgSrc: "assets/img/mass3.jpg",
        altText: "Mass Effect 3 Special Edition",
        title: "Mass Effect 3 Special Edition (USA) (v16).wua",
        downloadLink2: "https://terabox.com/s/15VC_SSNkYOBibOg7_8kaRw" // Segundo enlace de descarga

    },
    {
        id: "Minecraft Wii U Edition",
        imgSrc: "assets/img/minecraft.jpg",
        altText: "Minecraft Wii U Edition (USA)",
        title: "Minecraft Wii U Edition (USA).wua",
        downloadLink2: "https://nephobox.com/s/17gHbOpZyfpe9JsoFCcKtfw" // Segundo enlace de descarga

    },
    {
        id: "MONSTER HUNTER 3 ULTIMATE",
        imgSrc: "assets/img/monsterhunter3.jpg",
        altText: "MONSTER HUNTER 3 ULTIMATE",
        title: "MONSTER HUNTER 3 ULTIMATE (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1czAhrwG-O9pv3zV9mFQaYg" // Segundo enlace de descarga

    },
    {
        id: "Need for Speed Most Wanted U",
        imgSrc: "assets/img/nfsmw2012.jpg",
        altText: "Need for Speed Most Wanted U",
        title: "Need for Speed Most Wanted U (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1HvvRiOPE4piHRO7zXzSPHA" // Segundo enlace de descarga

    },
    {
        id: "New Super Mario Bros U",
        imgSrc: "assets/img/nsmbu.jpg",
        altText: "New Super Mario Bros U",
        title: "New SUPER MARIO BROS. U (USA) (DLC) (v64).wua",
        downloadLink2: "https://nephobox.com/s/1Ulb7ck4m0vUXVedQySEQzg" // Segundo enlace de descarga

    },
    {
        id: "Ninja Gaiden 3",
        imgSrc: "assets/img/ninjagaiden3.jpg",
        altText: "Ninja Gaiden 3",
        title: "NINJA GAIDEN 3 Razor's Edge (US) (v80).wua",
        downloadLink2: "https://nephobox.com/s/1BPeLBMZQRpxQnrxKf8p-KA" // Segundo enlace de descarga

    },
    {
        id: "ONE PIECE Unlimited World Red",
        imgSrc: "assets/img/onepieceworldred.jpg",
        altText: "ONE PIECE Unlimited World Red",
        title: "ONE PIECE Unlimited World Red (US).wua",
        downloadLink2: "https://nephobox.com/s/1QIQ0zhi5ngtV-tzBqAXuPA" // Segundo enlace de descarga

    },
    {
        id: "PAPER MARIO Color Splash",
        imgSrc: "assets/img/papercolorsplash.jpg",
        altText: "PAPER MARIO Color Splash",
        title: "PAPER MARIO Color Splash (USA).wua",
        downloadLink2: "https://nephobox.com/s/17oeLqI8CTiMWYD1AUHknFw" // Segundo enlace de descarga

    },
    {
        id: "Penguins of Madagascar",
        imgSrc: "assets/img/pinguinosmadagascar.jpg",
        altText: "Penguins of Madagascar",
        title: "Penguins of Madagascar (USA).wua",
        downloadLink2: "https://nephobox.com/s/14tl7mP4pI2BvtIVflTieAw" // Segundo enlace de descarga

    },
    {
        id: "Phineas and Ferb Quest for Cool Stuff",
        imgSrc: "assets/img/Phiniasyferb.jpg",
        altText: "Phineas and Ferb Quest for Cool Stuff",
        title: "Phineas and Ferb - Quest for Cool Stuff (USA).wua",
        downloadLink2: "https://nephobox.com/s/1Nt5R5ebysKvTh1gdE7ecEA" // Segundo enlace de descarga

    },
    {
        id: "PIKMIN 3",
        imgSrc: "assets/img/pikmin3.jpg",
        altText: "PIKMIN 3",
        title: "PIKMIN 3 (USA) (DLC) (v96).wua",
        downloadLink2: "https://nephobox.com/s/1kzd4_1DBIBmuLpA0I4nXYg" // Segundo enlace de descarga

    },
    {
        id: "Pokémon Rumble U",
        imgSrc: "assets/img/pokemonrumbleu.jpg",
        altText: "Pokémon Rumble Ur",
        title: "Pokémon Rumble U (World).wua",
        downloadLink2: "https://nephobox.com/s/1m_4P4YoRoGxQHtHM9waT1g" // Segundo enlace de descarga

    },
    {
        id: "Pokemon Tournament",
        imgSrc: "assets/img/pokemontournament.jpg",
        altText: "Pokemon Tournament",
        title: "POKKÉN TOURNAMENT (USA) (v64).wua",
        downloadLink2: "https://nephobox.com/s/1vwQlvazZNWGwjvTMqkhYKA" // Segundo enlace de descarga

    },
    {
        id: "Rayman Legends",
        imgSrc: "assets/img/raymanlegends.jpg",
        altText: "Rayman Legends",
        title: "Rayman Legends (USA).wua",
        downloadLink2: "https://nephobox.com/s/1DMNp02JGiaTRPh-E11yGzQ" // Segundo enlace de descarga

    },
    {
        id: "Sniper Elite V2",
        imgSrc: "assets/img/sniper.jpg",
        altText: "Sniper Elite V2",
        title: "Sniper Elite V2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1ZMQgnFJelMtCXxQ6GTL60g" // Segundo enlace de descarga

    },
    {
        id: "SONIC LOST WORLD",
        imgSrc: "assets/img/soniclostworld.jpg",
        altText: "SONIC LOST WORLD",
        title: "SONIC LOST WORLD (USA) (DLC) (v48).wua",
        downloadLink2: "https://nephobox.com/s/1xxy6-7tcWibcd-p4Ko1QTg" // Segundo enlace de descarga

    },
    {
        id: "Splatoon",
        imgSrc: "assets/img/splatoon1.jpg",
        altText: "Splatoon",
        title: "Splatoon (USA) (v288).wua",
        downloadLink2: "https://nephobox.com/s/1zuocybyipYMMwQy88ptyOA" // Segundo enlace de descarga

    },
    {
        id: "SpongeBob SquarePants Plankton's Robotic Revenge",
        imgSrc: "assets/img/SBRR.jpg",
        altText: "SpongeBob SquarePants: Plankton's Robotic Revenge",
        title: "SB Robotic Revenge (EU).wua",
        downloadLink2: "https://nephobox.com/s/1SfwYUs7ZoS6X9M3cgFha4A" // Segundo enlace de descarga

    },
    {
        id: "Star Fox Guard",
        imgSrc: "assets/img/starfoxguard.jpg",
        altText: "Star Fox Guard",
        title: "Star Fox Guard (USA) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1J_74am-NYFYJ29umcgDgcg" // Segundo enlace de descarga

    },
    {
        id: "Star Fox Zero",
        imgSrc: "assets/img/starfoxzero.jpg",
        altText: "Star Fox Zero",
        title: "Star Fox Zero (USA) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1ZkZa91wo8L801UYXFqsgLA" // Segundo enlace de descarga

    },
    {
        id: "SUPER MARIO 3D WORLD",
        imgSrc: "assets/img/sm3dworld.jpg",
        altText: "SUPER MARIO 3D WORLD",
        title: "SUPER MARIO 3D WORLD (US).wua",
        downloadLink2: "https://nephobox.com/s/1HJZp-h8q4vdBdRXEVZlBMQ" // Segundo enlace de descarga

    },
    {
        id: "Super Mario Maker",
        imgSrc: "assets/img/supermariomaker.jpg",
        altText: "Super Mario Maker",
        title: "Super Mario Maker (US) (v272).wua",
        downloadLink2: "https://nephobox.com/s/198gNlRUo4EEvikPRfKXrJA" // Segundo enlace de descarga

    },
    {
        id: "Super Smash Bros. for Wii U",
        imgSrc: "assets/img/superbros.jpg",
        altText: "Super Smash Bros. for Wii U",
        title: "Super Smash Bros. for Wii U (USA) (DLC) (v304).wua",
        downloadLink2: "https://nephobox.com/s/10W5pBcL9lQpfv5hnVE_0Gg" // Segundo enlace de descarga

    },
    {
        id: "TEKKEN TAG 2 Wii U EDITION",
        imgSrc: "assets/img/tekkentag2.jpg",
        altText: "TEKKEN TAG 2 Wii U EDITION",
        title: "TEKKEN TAG 2 Wii U EDITION (US) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1lJOQSJ4noQUuytoLSulfaQ" // Segundo enlace de descarga

    },
    {
        id: "Terraria",
        imgSrc: "assets/img/terraria.jpg",
        altText: "Terraria",
        title: "Terraria (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1riJFxxjOtG7m3PiKJXOQWQ" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider-Man Ultimate Edition",
        imgSrc: "assets/img/Spiderman2.jpg",
        altText: "The Amazing Spider-Man Ultimate Edition",
        title: "The Amazing Spider-Man Ultimate Edition (USA).wua",
        downloadLink2: "https://terabox.com/s/14ybGee7xKCubbjF_ajuRJQ" // Segundo enlace de descarga

    },
    {
        id: "The Amazing Spider-Man 2",
        imgSrc: "assets/img/spiderman.jpg",
        altText: "The Amazing Spider-Man 2",
        title: "The Amazing Spider-Man 2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1SMKDgvftzkcP7_9BEqg-tA" // Segundo enlace de descarga

    },
    {
        id: "The Binding of Isaac Rebirth",
        imgSrc: "assets/img/theboisaac.jpg",
        altText: "The Binding of Isaac Rebirth",
        title: "The Binding of Isaac Rebirth (US).wua",
        downloadLink2: "https://nephobox.com/s/1GhFa2g9hTXrOzDIEKY87cg" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Breath of the Wild",
        imgSrc: "assets/img/thezeldabreathwild.jpg",
        altText: "The Legend of Zelda Breath of the Wild",
        title: "The Legend of Zelda - Breath of the Wild (US) (v208).wua",
        downloadLink2: "https://nephobox.com/s/1f2q8Ed4Ed5PtBcULmJsrAQ" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Hyrule Historia",
        imgSrc: "assets/img/thehyrulehistoria.jpg",
        altText: "The Legend of Zelda Hyrule Historia",
        title: "The Legend of Zelda - Hyrule Historia (USA).wua",
        downloadLink2: "https://nephobox.com/s/1TMF0Efc6bfu2jbCdNv-Rhw" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda The Wind Waker HD",
        imgSrc: "assets/img/thewindwaker.jpg",
        altText: "The Legend of Zelda The Wind Waker HD",
        title: "The Legend of Zelda - The Wind Waker HD (USA).wua",
        downloadLink2: "https://nephobox.com/s/1TCrXIxWtvLTAnG1aEtEczw" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Twilight Princess HD",
        imgSrc: "assets/img/Thezeldatwi.jpg",
        altText: "The Legend of Zelda Twilight Princess HD",
        title: "The Legend of Zelda - Twilight Princess HD (USA) (v81).wua",
        downloadLink2: "https://nephobox.com/s/1E6FAxfrNQBonFVkWhXw88Q" // Segundo enlace de descarga

    },       
    {
        id: "The Smurfs 2",
        imgSrc: "assets/img/pitufos.jpg",
        altText: "The Smurfs 2",
        title: "The Smurfs 2 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1rUQiMNlnjIkRZ9TWaCZ04g" // Segundo enlace de descarga

    },       
    {
        id: "TRANSFORMERS PRIME",
        imgSrc: "assets/img/transformers.jpg",
        altText: "TRANSFORMERS PRIME",
        title: "TRANSFORMERS PRIME (USA).wua",
        downloadLink2: "https://nephobox.com/s/1HZfZxnZwy_1CSAy_8K7pmA" // Segundo enlace de descarga

    },
    {
        id: "Turbo Super Stunt Squad",
        imgSrc: "assets/img/turbo.jpg",
        altText: "Turbo Super Stunt Squad",
        title: "Turbo Super Stunt Squad (USA).wua",
        downloadLink2: "https://nephobox.com/s/1brv8V9sXONFOF0ukiQuqDQ" // Segundo enlace de descarga

    },       
    {
        id: "WATCH DOGS",
        imgSrc: "assets/img/watch.jpg",
        altText: "WATCH DOGS",
        title: "WATCH DOGS (USA).wua",
        downloadLink2: "https://terabox.com/s/1uMHpXZqSMq_f5ClfH4dOCg" // Segundo enlace de descarga

    },
    {
        id: "Wipeout 3",
        imgSrc: "assets/img/wipeout3.jpg",
        altText: "Wipeout 3",
        title: "Wipeout 3 (USA).wua",
        downloadLink2: "https://nephobox.com/s/1ymRqvsl6NKG9fkP5x2_DkQ" // Segundo enlace de descarga

    },
    {
        id: "Xenoblade Chronicles X",
        imgSrc: "assets/img/xenoblade.jpg",
        altText: "Xenoblade Chronicles X",
        title: "Xenoblade Chronicles X (EU) (v16).wua",
        downloadLink2: "https://nephobox.com/s/1A-AgTrJTnN5jaUixk5zImg" // Segundo enlace de descarga

    },
    {
        id: "Yoshi's Woolly World",
        imgSrc: "assets/img/yoshi.jpg",
        altText: "Yoshi's Woolly World",
        title: "Yoshi's Woolly World (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/1debuPvF7V3NMVo_3h0VHrg" // Segundo enlace de descarga

    },
    {
        id: "ZombiU",
        imgSrc: "assets/img/zombiu.jpg",
        altText: "ZombiU",
        title: "ZombiU (USA) (v32).wua",
        downloadLink2: "https://nephobox.com/s/118jxmD79ePyY3ojXLScMVQ" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
