// Lista de juegos
const juegos = [
    {
        id: "Asura's Wrath",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/asura.webp",
        altText: "Asura's Wrath (USA)",
        title: "Asura's Wrath (USA) (En,Ja,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1N1tp__JzlqpNagyrKAS0iw" // Segundo enlace de descarga

    },       
    {
        id: "Batman - Arkham Asylum - Game of the Year Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/batmanarkam.webp",
        altText: "Batman - Arkham Asylum - Game of the Year Edition",
        title: "Batman - Arkham Asylum - Game of the Year Edition (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1EkaeiB2RyddqwDqot9fBOg" // Segundo enlace de descarga

    },       
    {
        id: "Bleach - Soul Resurreccion",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/bleach.webp",
        altText: "Bleach - Soul Resurreccion (USA)",
        title: "Bleach - Soul Resurreccion (USA).iso",
        downloadLink2: "https://terabox.com/s/1Qf-AVrli1PLsptstif1L8A" // Segundo enlace de descarga

    },       
    {
        id: "Blur",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/blur.webp",
        altText: "Blur (Europe) (En,Fr,De,Es,It)",
        title: "Blur (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1VF3KXA5gi9sv39vjFPDgxw" // Segundo enlace de descarga

    },       
    {
        id: "Burnout Paradise",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/burnout.webp",
        altText: "Burnout Paradise (USA)",
        title: "Burnout Paradise (USA).iso",
        downloadLink2: "https://terabox.com/s/1acAfI6keVGphon5Hso0PhQ" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty - Modern Warfare 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/codmw2.webp",
        altText: "Call of Duty - Modern Warfare 2 (Spain)",
        title: "Call of Duty - Modern Warfare 2 (Spain).iso",
        downloadLink2: "https://terabox.com/s/1Q8jsJZPzd9bRZ5aPmjNjXg" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty 4 - Modern Warfare (USA)",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/codmw4.webp",
        altText: "Call of Duty 4 - Modern Warfare (USA)",
        title: "Call of Duty 4 - Modern Warfare (USA).iso",
        downloadLink2: "https://terabox.com/s/1-JlOBH-TUKxEqQOLiIZdEQ" // Segundo enlace de descarga

    },       
    {
        id: "Castlevania - Lords of Shadow 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/castle.webp",
        altText: "Castlevania - Lords of Shadow 2",
        title: "Castlevania - Lords of Shadow 2 (USA) (En,Fr,De,Es,It,Pt).iso",
        downloadLink2: "https://terabox.com/s/1GpPiw8ZrOJOPqj6JVhmi6w" // Segundo enlace de descarga

    },       
    {
        id: "Chavo Kart, El",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chavo.webp",
        altText: "Chavo Kart, El (Latin America)",
        title: "Chavo Kart, El (Latin America) (En,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1AGYf1rQbbJCai7QzDq7dLg" // Segundo enlace de descarga

    },       
    {
        id: "Clow Tower 3 - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/clowtower3.webp",
        altText: "Clow Tower 3 - PS2",
        title: "Clow Tower 3 - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1ibuWZt5L48S3hVcV_6nlsA" // Segundo enlace de descarga

    },       
    {
        id: "Crash Bandicoot 4 The Wrath of Cortex - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chashwrath.webp",
        altText: "Crash Bandicoot 4 The Wrath of Cortex - PS2",
        title: "Crash Bandicoot 4 The Wrath of Cortex - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1ktjS17YDpO-MrQjAxI9U2w" // Segundo enlace de descarga

    },       
    {
        id: "Crash Guerra al Coco Maniaco! - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/crashcoco.webp",
        altText: "Chash Guerra al Coco Maniaco! - PS2",
        title: "Chash Guerra al Coco Maniaco! - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1vD0RhY-xmmwcY_8BJtCahg" // Segundo enlace de descarga

    },       
    {
        id: "Crash Nitro Kart - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chashkart.webp",
        altText: "Crash Nitro Kart - PS2",
        title: "Crash Nitro Kart - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1jhsVwqM3bMft_RW9ntSBUQ" // Segundo enlace de descarga

    },       
    {
        id: "Crash Twinsanity - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chashtwi.webp",
        altText: "Crash Twinsanity - PS2",
        title: "Crash Twinsanity - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1-5IAFxaAF84usRc5xrR9QQ" // Segundo enlace de descarga

    },       
    {
        id: "Crash Tag Team Racing - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chashracing.webp",
        altText: "Crash Tag Team Racing - PS2",
        title: "Crash Tag Team Racing - PS2.pkg",
        downloadLink2: "https://terabox.com/s/15uX0Qe_oWRCpC3l6A-Ynng" // Segundo enlace de descarga

    },       
    {
        id: "Crash of the Titans - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/chashtitans.webp",
        altText: "Crash of the Titans - PS2",
        title: "Crash of the Titans - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1EeMBM-KXyt6bFShJjkG-iA" // Segundo enlace de descarga

    },       
    {
        id: "Dante's Inferno",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dante.webp",
        altText: "Dante's Inferno (USA)",
        title: "Dante's Inferno (USA) (En,Fr,Es).iso",
        downloadLink2: "https://terabox.com/s/1IKzU-3m2zGqcicAxDbEOXg" // Segundo enlace de descarga

    },       
    {
        id: "DEMO Infamous",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/infademo.webp",
        altText: "DEMO Infamous",
        title: "DEMO Infamous.pkg",
        downloadLink2: "https://terabox.com/s/1D97qZcD34Q7aMAult22cdQ" // Segundo enlace de descarga

    },       
    {
        id: "DEMO Sonic Unleashead",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/sonicdemo.webp",
        altText: "DEMO Sonic Unleashead.pkg",
        title: "DEMO Sonic Unleashead.pkg",
        downloadLink2: "https://terabox.com/s/10kLpoWZL_dyLyi4R7_ZSAQ" // Segundo enlace de descarga

    },       
    {
        id: "Def Jam Fight for NY - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/defjam.webp",
        altText: "Def Jam Fight for NY - PS2",
        title: "Def Jam Fight for NY - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1C-M_ozeApw-i5CL4A92xuA" // Segundo enlace de descarga
        
    },       
    {
        id: "Demon's Souls",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/demonsouls.webp",
        altText: "Demon's Souls (USA)",
        title: "Demon's Souls (USA).iso",
        downloadLink2: "https://terabox.com/s/1gQcTUXRFEAvcDHjSXkvm3Q" // Segundo enlace de descarga

    },       
    {
        id: "Devil May Cry - DMC",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dmc.webp",
        altText: "Devil May Cry - DMC.iso",
        title: "Devil May Cry - DMC.iso",
        downloadLink2: "https://terabox.com/s/19wlBfs_UWClK2DzsDOP_VA" // Segundo enlace de descarga

    },       
    {
        id: "Digimon All-Star Rumble",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/digimonall.webp",
        altText: "Digimon All-Star Rumble (USA) (En,Fr,Es,Pt)",
        title: "Digimon All-Star Rumble (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1tZNysrH_jaHSj-w6_1Plnw" // Segundo enlace de descarga

    },       
    {
        id: "Disney Castle of Illusion Starring Mickey Mouse",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/disneymyckey.webp",
        altText: "Disney Castle of Illusion Starring Mickey Mouse (Europe)",
        title: "Disney Castle of Illusion Starring Mickey Mouse (Europe).pkg (Pronto)",
        downloadLink2: "FleuoQ" // Segundo enlace de descarga

    },       
    {
        id: "Disney-Pixar Toy Story 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/toystory3.webp",
        altText: "Disney-Pixar Toy Story 3 (Europe) (En,Fr,De,Es,It,Nl)",
        title: "Disney-Pixar Toy Story 3 (Europe) (En,Fr,De,Es,It,Nl).iso",
        downloadLink2: "https://terabox.com/s/1D7NUQ3eSnLmBGydtDr6FxA" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Battle of Z",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbbatlez.webp",
        altText: "Dragon Ball Z - Battle of Z",
        title: "Dragon Ball Z - Battle of Z (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1nMkpvQKpZgEN6GrXGT46Zw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Budokai HD Collection",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbbudokaihd.webp",
        altText: "Dragon Ball Z Budokai HD Collection",
        title: "Dragon Ball Z Budokai HD Collection.iso",
        downloadLink2: "https://terabox.com/s/174eNrSCa5yrqZ5Z0p1zn3g" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Burst Limit",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbbur.webp",
        altText: "Dragon Ball Z - Burst Limit (USA)",
        title: "Dragon Ball Z - Burst Limit (USA).iso",
        downloadLink2: "https://terabox.com/s/1oa5fieVM9ZCrqPWOubE28g" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball - Raging Blast",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbragintblas.webp",
        altText: "Dragon Ball - Raging Blast (Europe) (En,Fr,De,Es,It)",
        title: "Dragon Ball - Raging Blast (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1v4Zt5KPZ_0HsoW_XWTQPWg" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball - Raging Blast 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbragintblas2.webp",
        altText: "Dragon Ball - Raging Blast 2 (USA) (En,Fr,Es) (v02.00)",
        title: "Dragon Ball - Raging Blast 2 (USA) (En,Fr,Es) (v02.00).iso",
        downloadLink2: "https://terabox.com/s/1ZPnDOUCy7l12eBkOmaxcgw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z - Ultimate Tenkaichi",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbbudokaitenk.webp",
        altText: "Dragon Ball Z - Ultimate Tenkaichi (USA) (En,Fr,Es)",
        title: "Dragon Ball Z - Ultimate Tenkaichi (USA) (En,Fr,Es).iso",
        downloadLink2: "https://terabox.com/s/1mflladvIGToQ7o6g9s795A" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Xenoverse",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/dbxeno.webp",
        altText: "Dragon Ball Xenoverse (USA)",
        title: "Dragon Ball Xenoverse (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1weNRZi13gR7fAv6PIdi3Lg" // Segundo enlace de descarga

    },       
    {
        id: "Drakengard 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/draken.webp",
        altText: "Drakengard 3 (USA) (En,Fr)",
        title: "Drakengard 3 (USA) (En,Fr).iso",
        downloadLink2: "https://terabox.com/s/1JrwxDX_podUvu17LWVw8dg" // Segundo enlace de descarga

    },       
    {
        id: "DuckTales Remastered",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/duckstales.webp",
        altText: "DuckTales Remastered",
        title: "DuckTales Remastered.pkg",
        downloadLink2: "https://terabox.com/s/1nmiImzUSpME_zt9TXZT_uA" // Segundo enlace de descarga

    },       
    {
        id: "Far Cry 4",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/farcry4.webp",
        altText: "Far Cry 4 (USA)",
        title: "Far Cry 4 (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1u5GN8-lOt0QUHzHGbuA4QA" // Segundo enlace de descarga

    },       
    {
        id: "God of War Collection",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/gowcole.webp",
        altText: "God of War Collection (Europe) (En,Fr,De,Es,It,Ru)",
        title: "God of War Collection (Europe) (En,Fr,De,Es,It,Ru).iso",
        downloadLink2: "https://terabox.com/s/1pEuSt6925y9lpSLk_lFYlg" // Segundo enlace de descarga

    },       
    {
        id: "God of War III E3 2009 Demo",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/gow3demo.webp",
        altText: "God of War III E3 2009 Demo",
        title: "God of War III E3 2009 Demo.pkg",
        downloadLink2: "https://terabox.com/s/1tXp5-ao0Xpg05wDsgmqoag" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto - San Andreas",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/gtasa.webp",
        altText: "Grand Theft Auto - San Andreas (Europe) (En,Fr,De,Es,It,Ru)",
        title: "Grand Theft Auto - San Andreas (Europe) (En,Fr,De,Es,It,Ru).iso",
        downloadLink2: "https://terabox.com/s/1khDfpTyrPg7fyr9FSwXDhw" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto IV",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/gtaiv.webp",
        altText: "Grand Theft Auto IV (USA) (En,Fr,De,Es,It)",
        title: "Grand Theft Auto IV (USA) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1lavlWvoKPG3V8LD2PzhX4A" // Segundo enlace de descarga

    },
    {
        id: "Grand Theft Auto V",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/gtav.webp",
        altText: "Grand Theft Auto V (USA, Asia) (En,Fr,Es,Pt,Zh,Ko)",
        title: "Grand Theft Auto V (USA, Asia) (En,Fr,Es,Pt,Zh,Ko).iso",
        downloadLink2: "https://terabox.com/s/1X-sJIvBX0j4qZCQ-DTb_Dg" // Segundo enlace de descarga

    },       
    {
        id: "Green Lantern - Rise of the Manhunters",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/green.webp",
        altText: "Green Lantern - Rise of the Manhunters (USA) (En,Fr,Es,Pt)",
        title: "Green Lantern - Rise of the Manhunters (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1DXG3ooOF6tsR_1GzQqk7lA" // Segundo enlace de descarga

    },       
    {
        id: "Ico & Shadow of the Colossus Collection, The",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/shadow.webp",
        altText: "Ico & Shadow of the Colossus Collection, The",
        title: "Ico & Shadow of the Colossus Collection, The (USA, Brazil) (En,Fr,Es).iso (Pronto)",
        downloadLink2: "F56x5KEWQ" // Segundo enlace de descarga

    },       
    {
        id: "inFamous",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/infamous.webp",
        altText: "inFamous (USA) (En,Fr,Es) (v02.00)",
        title: "inFamous (USA) (En,Fr,Es) (v02.00).iso",
        downloadLink2: "https://terabox.com/s/1fQaf-xm7VbFTfXC2HOxl9w" // Segundo enlace de descarga

    },       
    {
        id: "J-Stars Victory Vs+",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/jstars.webp",
        altText: "J-Stars Victory Vs+",
        title: "J-Stars Victory Vs+ (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1CMlbalnbr7bumLuwmCRKfg" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Marvel Super Heroes",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/legosuperheroes.webp",
        altText: "LEGO Marvel Super Heroes",
        title: "LEGO Marvel Super Heroes (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1PWI_oU6nhtLYnK0GUaHVYg" // Segundo enlace de descarga

    },       
    {
        id: "Life Is Strange - Episode 1 - Chrysalis",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/lifeof.webp",
        altText: "Life Is Strange - Episode 1 - Chrysalis (USA) (Trial)",
        title: "Life Is Strange - Episode 1 - Chrysalis (USA) (Trial).pkg",
        downloadLink2: "https://terabox.com/s/1RfbONL3fKQhv0KOkQ9JwXA" // Segundo enlace de descarga

    },       
    {
        id: "Limbo",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/limbo.webp",
        altText: "Limbo (USA) (Trial)",
        title: "Limbo (USA) (Trial).pkg",
        downloadLink2: "https://terabox.com/s/12F5vL0Eu_lUtOYRPgaZ7oQ" // Segundo enlace de descarga

    },       
    {
        id: "Lollipop Chainsaw",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/lollipop.webp",
        altText: "Lollipop Chainsaw",
        title: "Lollipop Chainsaw (USA) (En,Fr,De,Es,It,Ru).iso",
        downloadLink2: "https://terabox.com/s/1feVJKrFGc082EshpY7OvsQ" // Segundo enlace de descarga

    },       
    {
        id: "Midnight Club - Los Angeles",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/midnight.webp",
        altText: "Midnight Club - Los Angeles (USA) (En,Fr,De,Es,It)",
        title: "Midnight Club - Los Angeles (USA) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1hY9foGD0q7iIiO1WwZELOA" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft - PlayStation 3 Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/minecraft.webp",
        altText: "Minecraft - PlayStation 3 Edition",
        title: "Minecraft - PlayStation 3 Edition (USA) (En,Ja,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi,Ko,Pl,Ru,Tr).iso",
        downloadLink2: "https://terabox.com/s/1bPBnGURxfqPVXy311KdhEw" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/mortalkombat.webp",
        altText: "Mortal Kombat",
        title: "Mortal Kombat (USA) (En,Fr,De,Es,It,Pt).iso",
        downloadLink2: "https://terabox.com/s/1LTdysfc4gCCfZRFPHxIqbA" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden - Ultimate Ninja Storm Generations",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/narutostorm.webp",
        altText: "Naruto Shippuden - Ultimate Ninja Storm Generations (USA) (Demo)",
        title: "Naruto Shippuden - Ultimate Ninja Storm Generations (USA) (Demo).pkg",
        downloadLink2: "https://terabox.com/s/12JGDXJ7dCAEJEMVraBIe_w" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Most Wanted - A Criterion Game",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/nfs2012.webp",
        altText: "Need for Speed - Most Wanted - A Criterion Game",
        title: "Need for Speed - Most Wanted - A Criterion Game (USA) (En,Fr,Es).iso",
        downloadLink2: "https://terabox.com/s/1MY58RHzsOaU_N3aeudx9hg" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - Shift",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/nfsshift.webp",
        altText: "Need for Speed - Shift",
        title: "Need for Speed - Shift (Europe) (En,Fr,De,Es,Nl,It).iso",
        downloadLink2: "https://terabox.com/s/13jAanUIPZFXAoXNEFcYshg" // Segundo enlace de descarga

    },       
    {
        id: "Need For Speed Underground 2 - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/nfsunder2.webp",
        altText: "Need For Speed Underground 2 - PS2",
        title: "Need For Speed Underground 2 - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1GbPX1FtznyNGTP3f_bewsw" // Segundo enlace de descarga
        
    },       
    {
        id: "Ninja Gaiden Sigma 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/ninjagaiden2.webp",
        altText: "Ninja Gaiden Sigma 2 (Europe) (En,Fr,De,Es,It)",
        title: "Ninja Gaiden Sigma 2 (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1PUoQ6JZlqWIxz5P8dn52ng" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man Championship Edition DX",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/pacmandx.webp",
        altText: "Pac-Man Championship Edition DX (USA) (Trial)",
        title: "Pac-Man Championship Edition DX (USA) (Trial).pkg",
        downloadLink2: "https://terabox.com/s/1pp7-McYBP08pvidjaJkN4A" // Segundo enlace de descarga

    },       
    {
        id: "Plants vs. Zombies - Garden Warfare",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/pvszgarden.webp",
        altText: "Plants vs. Zombies - Garden Warfare (USA)",
        title: "Plants vs. Zombies - Garden Warfare (USA).pkg (Pronto)",
        downloadLink2: "18zxucvzNq6_jSw" // Segundo enlace de descarga

    },       
    {
        id: "PlayStation All-Stars Battle Royale",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/playstation.webp",
        altText: "PlayStation All-Stars Battle Royale (USA) (En,Fr,Es,Pt)",
        title: "PlayStation All-Stars Battle Royale (USA) (En,Fr,Es,Pt).iso",
        downloadLink2: "https://terabox.com/s/1XyTWczX3KW33Lfze9nAzRA" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/rayman.webp",
        altText: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl)",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).iso",
        downloadLink2: "https://terabox.com/s/146iLv7OrnZRcqxuh9tob-A" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet - Deadlocked HD",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/ratchetdead.webp",
        altText: "Ratchet - Deadlocked HD (USA)",
        title: "Ratchet - Deadlocked HD (USA).pkg",
        downloadLink2: "https://terabox.com/s/1OU8SVRcsEr0lmg_mlB6bfw" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/reddead.webp",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption (USA) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1yPpb4EkCXWXHfGsFo3NQKQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 4 HD",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/RE4HD.webp",
        altText: "Resident Evil 4 HD",
        title: "Resident Evil 4 HD.pkg (Pronto)",
        downloadLink2: "ZRsgPPa6w" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/residente5.webp",
        altText: "Resident Evil 5",
        title: "Resident Evil 5 (USA) (En,Ja,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1gvEjPgsqMcUdTjIcN3SlKw" // Segundo enlace de descarga

    },
    {
        id: "Resident Evil 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/re5demo.webp",
        altText: "Resident Evil 5 (DEMO)",
        title: "Resident Evil 5 (DEMO).pkg",
        downloadLink2: "https://terabox.com/s/1RHPsbSoR_-hUjWsr7xp7ZQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 6",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/re6.webp",
        altText: "Resident Evil 6",
        title: "Resident Evil 6 (Europe) (En,Fr,De,Es,It,Pt,Pl,Ru).iso",
        downloadLink2: "https://terabox.com/s/1IYzN_3bFGVhWim0PmDP9BA" // Segundo enlace de descarga

    },       
    {
        id: "Saint Seiya - Soldiers' Soul - Knights of the Zodiac",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/saintseiya.webp",
        altText: "Saint Seiya - Soldiers' Soul - Knights of the Zodiac (Europe) (En,Fr,Es,It)",
        title: "Saint Seiya - Soldiers' Soul - Knights of the Zodiac (Europe) (En,Fr,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1vCsbqxEHWpSTHUNjnBc1rQ" // Segundo enlace de descarga

    },
    {
        id: "Simpsons Game, The",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/simpson.webp",
        altText: "Simpsons Game, The (USA)",
        title: "Simpsons Game, The (USA).iso",
        downloadLink2: "https://terabox.com/s/14LtIztxRHlj3obE6hAHOkQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Generations",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/sonicgen.webp",
        altText: "Sonic Generations",
        title: "Sonic Generations (Europe) (En,Ja,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/15m4A0z_KFci6CnTsxKt8lQ" // Segundo enlace de descarga

    },       
    {
        id: "Sonic The Hedgehog 4 - Episode II",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/sonic4episade2.webp",
        altText: "Sonic The Hedgehog 4 - Episode II (USA) (Trial)",
        title: "Sonic The Hedgehog 4 - Episode II (USA) (Trial).pkg",
        downloadLink2: "https://terabox.com/s/1-3eHQBgWgYlurtS9tHyVYg" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Unleashed",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/sonicun.webp",
        altText: "Sonic Unleashed",
        title: "Sonic Unleashed (Europe) (En,Ja,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1IKZE2mCzVd6oHrLeUG8UoA" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man 3 - Collector's Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/spiderman3.webp",
        altText: "Spider-Man 3 - Collector's Edition",
        title: "Spider-Man 3 - Collector's Edition (Europe) (Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1V0WmprM6OhHSfndKwVNEMg" // Segundo enlace de descarga

    },       
    {
        id: "Spider-Man Edge of Time",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/spidermanedge.webp",
        altText: "Spider-Man Edge of Time",
        title: "Spider-Man Edge of Time.iso",
        downloadLink2: "https://terabox.com/s/1tLAl_oak64UhR0Wn9U0pvw" // Segundo enlace de descarga

    },       
    {
        id: "Street Fighter IV",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/streetiv.webp",
        altText: "Street Fighter IV",
        title: "Street Fighter IV (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/13wyxgpcsJfqWb1tBtGG_VA" // Segundo enlace de descarga

    },       
    {
        id: "Tekken 5 - Dark Resurrection",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/tekken5.webp",
        altText: "Tekken 5 - Dark Resurrection",
        title: "Tekken 5 - Dark Resurrection (USA).pkg",
        downloadLink2: "https://terabox.com/s/1Jpr4CLzVmcPCEoZs5W3UQA" // Segundo enlace de descarga

    },       
    {
        id: "Tekken 6",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/tekken6.webp",
        altText: "Tekken 6",
        title: "Tekken 6 (USA) (En,Ja,Fr,De,Es,It,Ko,Ru).iso",
        downloadLink2: "https://terabox.com/s/1sZ7edkV3GU1lBrTWYhf8NA" // Segundo enlace de descarga

    },       
    {
        id: "Tekken Tag Tournament 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/tekkentourta2.webp",
        altText: "Tekken Tag Tournament 2 (USA) (En,Ja,Fr,De,Es,It,Ko,Ru)",
        title: "Tekken Tag Tournament 2 (USA) (En,Ja,Fr,De,Es,It,Ko,Ru).iso",
        downloadLink2: "https://terabox.com/s/1X5JVxg7AyU1yi1uyTilULg" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider-Man 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/theaspiderman2.webp",
        altText: "The Amazing Spider-Man 2",
        title: "The Amazing Spider-Man 2 (Europe) (En,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1qsbwlyXNSB2_ox04kGfnyw" // Segundo enlace de descarga

    },       
    {
        id: "The Last of Us",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/thelastofus.webp",
        altText: "The Last of Us",
        title: "The Last of Us.iso (Pronto)",
        downloadLink2: "s20NBxnmg" // Segundo enlace de descarga

    },       
    {
        id: "TMNT - Turtles in Time Re-Shelled",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/turtle.webp",
        altText: "TMNT - Turtles in Time Re-Shelled",
        title: "TMNT - Turtles in Time Re-Shelled.iso",
        downloadLink2: "https://terabox.com/s/1kyswTHO2d7J42gi0d4YHSw" // Segundo enlace de descarga

    },       
    {
        id: "Uncharted 2 - Among Thieves",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/uncharted2.webp",
        altText: "Uncharted 2 - Among Thieves",
        title: "Uncharted 2 - Among Thieves (USA) (En,Fr,Es).iso",
        downloadLink2: "https://terabox.com/s/1bpsMZT_08ddk78VmFHXyxg" // Segundo enlace de descarga

    },
    {
        id: "Virtua Fighter 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/virtua5.webp",
        altText: "Virtua Fighter 5 (USA) (En,Ja,Fr,De,Es,It)",
        title: "Virtua Fighter 5 (USA) (En,Ja,Fr,De,Es,It).iso",
        downloadLink2: "https://terabox.com/s/1PbYUPDtba3vpy-9M20Qmuw" // Segundo enlace de descarga

    },       
    {
        id: "Wipeout HD",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/WIPEOUT.webp",
        altText: "Wipeout HD",
        title: "Wipeout HD.pkg (Pronto)",
        downloadLink2: "hhwIlHsg" // Segundo enlace de descarga

    },       
    {
        id: "WRC 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/wrc5.webp",
        altText: "WRC 5",
        title: "WRC 5 (USA) (En,Fr,De,Es,It).iso (Pronto)",
        downloadLink2: "hhwIlHsg" // Segundo enlace de descarga

    },       
    {
        id: "X-Men Origins Wolverine Uncaged Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/xmen.webp",
        altText: "X-Men Origins Wolverine Uncaged Edition",
        title: "X-Men Origins Wolverine Uncaged Edition.iso",
        downloadLink2: "https://terabox.com/s/1qords7mH1ex5Tt23lQ2KxA" // Segundo enlace de descarga

    },       
    {
        id: "Yakuza 2 - PS2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/ps3/yakuza2.webp",
        altText: "Yakuza 2 - PS2",
        title: "Yakuza 2 - PS2.pkg",
        downloadLink2: "https://terabox.com/s/1mm2hMwlQY6F0_k9LiJ3hZA" // Segundo enlace de descarga
    },
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
