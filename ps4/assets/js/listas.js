// Lista de juegos
const juegos = [
    {
        id: "Alan Wake Remastered",
        imgSrc: "assets/img/alan.jpg",
        altText: "Alan Wake Remastered",
        title: "Alan Wake Remastered",
        downloadLink2: "https://terabox.com/s/1h8SLVzumLNkQBFU-yEyIgA" // Segundo enlace de descarga

    },       
    {
        id: "Bloodborne",
        imgSrc: "assets/img/blood.jpg",
        altText: "Bloodborne",
        title: "Bloodborne.pkg",
        downloadLink2: "https://terabox.com/s/1FSZm0g4pbnwIMamQOLy1Ig" // Segundo enlace de descarga

    },       
    {
        id: "Death Strandig",
        imgSrc: "assets/img/death.jpg",
        altText: "Death Strandig",
        title: "Death Strandig",
        downloadLink2: "https://terabox.com/s/1XMq3sknaUQi7ToEv338wow" // Segundo enlace de descarga

    },       
    {
        id: "Elden Ring Shadow of The Erdtree",
        imgSrc: "assets/img/elden.jpg",
        altText: "Elden Ring Shadow of The Erdtree",
        title: "Elden Ring Shadow of The Erdtree",
        downloadLink2: "https://terabox.com/s/1_gxpeI3NTZA2BAfej4HznQ" // Segundo enlace de descarga

    },       
    {
        id: "Ghost of Tsushina Director´s Cut",
        imgSrc: "assets/img/ghost.jpg",
        altText: "Ghost of Tsushina Director´s Cut",
        title: "Ghost of Tsushina Director´s Cut",
        downloadLink2: "https://terabox.com/s/1fg_7KxlJUa0o-nxB97wPww" // Segundo enlace de descarga

    },       
    {
        id: "God of War Deluxe Edition",
        imgSrc: "assets/img/gow.jpg",
        altText: "God of War Deluxe Edition",
        title: "God of War Deluxe Edition",
        downloadLink2: "https://terabox.com/s/1pzkFfr8pf4Fe0nm8HXUQVA" // Segundo enlace de descarga

    },       
    {
        id: "God of War Ragnarok + Valhalla",
        imgSrc: "assets/img/gowragnarok.jpg",
        altText: "God of War Ragnarok + Valhalla",
        title: "God of War Ragnarok + Valhalla",
        downloadLink2: "https://terabox.com/s/1RzKMYjRKOUZpIOk7Zom45A" // Segundo enlace de descarga

    },       
    {
        id: "Grand Theft Auto 5",
        imgSrc: "assets/img/gtav.jpg",
        altText: "Grand Theft Auto 5",
        title: "Grand Theft Auto 5",
        downloadLink2: "https://terabox.com/s/1lo1OiA6U5ymMVMYvA7VXGw" // Segundo enlace de descarga

    },       
    {
        id: "Maid of Sker",
        imgSrc: "assets/img/maid.jpg",
        altText: "Maid of Sker",
        title: "Maid of Sker",
        downloadLink2: "https://terabox.com/s/1YEWnJh0xysdVrH213lOWhQ" // Segundo enlace de descarga

    },       
    {
        id: "Metro Exodus Gold Edition",
        imgSrc: "assets/img/metro.jpg",
        altText: "Metro Exodus Gold Edition",
        title: "Metro Exodus Gold Edition",
        downloadLink2: "https://terabox.com/s/1vSj1FBBqIgK4qvlRvH_mVw" // Segundo enlace de descarga

    },       
    {
        id: "Rage 2",
        imgSrc: "assets/img/rage2.jpg",
        altText: "Rage 2",
        title: "Rage 2",
        downloadLink2: "https://terabox.com/s/1ELxzZi7Dy0z_t41crBEbbA" // Segundo enlace de descarga

    },       
    {
        id: "Ratchet Clank",
        imgSrc: "assets/img/ratchet.jpg",
        altText: "Ratchet Clank",
        title: "Ratchet Clank",
        downloadLink2: "https://terabox.com/s/1Cxar7YnuYN7_zyG6CQDjMA" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption 2",
        imgSrc: "assets/img/rd2.jpg",
        altText: "Red Dead Redemption 2",
        title: "Red Dead Redemption 2",
        downloadLink2: "https://terabox.com/s/1kQzcYDyMk2AyCOiU5ezyKw" // Segundo enlace de descarga

    },       
    {
        id: "Red Dead Redemption",
        imgSrc: "assets/img/rd.jpg",
        altText: "Red Dead Redemption",
        title: "Red Dead Redemption",
        downloadLink2: "https://terabox.com/s/1277oEyayCj9ocnwtMr4HZQ" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 2 Deluxe Edition",
        imgSrc: "assets/img/re2.jpg",
        altText: "Resident Evil 2 Deluxe Edition",
        title: "Resident Evil 2 Deluxe Edition",
        downloadLink2: "https://terabox.com/s/1UjhgBiTXNKBWdEfs5jMjVg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil 3",
        imgSrc: "assets/img/re3.jpg",
        altText: "Resident Evil 3",
        title: "Resident Evil 3",
        downloadLink2: "https://terabox.com/s/18tkkL5THb0THk6aA30RoEg" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Village",
        imgSrc: "assets/img/revillage.jpg",
        altText: "Resident Evil Village",
        title: "Resident Evil Village",
        downloadLink2: "https://terabox.com/s/1VSkYkiOnmcrhgAft33jmdQ" // Segundo enlace de descarga

    },       
    {
        id: "Sifu",
        imgSrc: "assets/img/sifu.jpg",
        altText: "Sifu",
        title: "Sifu",
        downloadLink2: "https://terabox.com/s/1nm1novEZhz2cU9jfDjDYBg" // Segundo enlace de descarga

    },
    {
        id: "Spiderman Miles Morales",
        imgSrc: "assets/img/spidermanmiles.jpg",
        altText: "Spiderman Miles Morales",
        title: "Spiderman Miles Morales",
        downloadLink2: "https://terabox.com/s/1zaP_wkRbaj7Plzu51f4rwA" // Segundo enlace de descarga

    },       
    {
        id: "The Last Of Us Remastered",
        imgSrc: "assets/img/thelast.jpg",
        altText: "The Last Of Us Remastered",
        title: "The Last Of Us Remastered",
        downloadLink2: "https://terabox.com/s/1w7CoYpCbEZ2eAiPz1sHBkw" // Segundo enlace de descarga

    },       
    {
        id: "The Last Of Us Part II",
        imgSrc: "assets/img/thelast2.jpg",
        altText: "The Last Of Us Part II",
        title: "The Last Of Us Part II",
        downloadLink2: "https://terabox.com/s/13NYw8vs3x_Ocuzdr9eESTQ" // Segundo enlace de descarga
    },
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
