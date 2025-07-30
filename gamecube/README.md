### Guía para Añadir Juegos

#### 1. **¿Qué es un Objeto de Juego?**

Cada juego en tu lista se representa como un objeto en un arreglo de JavaScript. Un objeto tiene propiedades que describen el juego. Aquí están las propiedades que necesitas:

- **`id`**: Un identificador único para el juego. Debe ser una cadena de texto que represente el nombre del juego. 
- **`imgSrc`**: La ruta al archivo de imagen que representa el juego. Debe ser una cadena de texto con la ruta de la imagen en tu proyecto.
- **`altText`**: Texto alternativo para la imagen. Esto es útil para la accesibilidad y para mostrar un texto si la imagen no se puede cargar.
- **`title`**: El título del juego. Este es el texto que se mostrará junto con la imagen del juego.
- **`downloadLink`**: El enlace donde los usuarios pueden descargar el juego. Debe ser una URL completa.

#### 2. **Añadir un Nuevo Juego**

Para añadir un nuevo juego, debes seguir estos pasos:

1. **Crear un Nuevo Objeto de Juego**: Usa el siguiente formato para crear un nuevo objeto:

    ```javascript
    {
        id: "Nombre del Juego",
        imgSrc: "assets/img/nombreimagen.jpg",
        altText: "Texto Alternativo",
        title: "Título del Juego",
        downloadLink: "https://enlace-de-descarga.com"
    },
    ```

2. **Añadir el Objeto a la Lista**: Inserta el nuevo objeto en el arreglo `juegos`, asegurándote de mantener el orden alfabético por `id`.

#### 3. **Ordenar Alfabéticamente**

Para mantener los juegos en orden alfabético por `id`, sigue estos pasos:

1. **Añadir el Nuevo Juego al Final de la Lista**:

    Añade el nuevo objeto al final del arreglo, por ejemplo: **Ojo** el último no deberia llevar la `,` coma.

    ```javascript
        
        {
            id: "Nuevo Juego",
            imgSrc: "assets/img/nuevojuego.jpg",
            altText: "Nuevo Juego",
            title: "Nuevo Juego (EU)",
            downloadLink: "https://www.ejemplo.com"
        }
    ```

2. **Ordenar la Lista**:

    Usa el método `sort` para ordenar los juegos alfabéticamente. Puedes hacerlo manualmente o agregar un script para automatizarlo. Aquí tienes un ejemplo de cómo ordenar el arreglo en JavaScript:

    ```javascript
    juegos.sort((a, b) => a.id.localeCompare(b.id));
    ```

    Este código ordena el arreglo `juegos` en orden alfabético por el campo `id`.

#### 4. **Ejemplo Completo**

Aquí tienes un ejemplo de cómo se vería el archivo JavaScript después de añadir un nuevo juego y ordenarlo:

```javascript
// Lista de juegos
const juegos = [
    {
        id: "Adventure Time Explore the Dungeon Because I Don't Know!",
        imgSrc: "assets/img/horadeaventura.jpg",
        altText: "Adventure Time Explore the Dungeon Because I Don't Know!",
        title: "Adventure Time Explore the Dungeon Because I Don't Know! (EU) (v16).wua",
        downloadLink: "https://ouo.io/p4yHLO"
    },
    // ...otros juegos...
    {
        id: "Zelda's Quest",
        imgSrc: "assets/img/zeldaquest.jpg",
        altText: "Zelda's Quest",
        title: "Zelda's Quest (USA).wua",
        downloadLink: "https://www.ejemplo.com"
    }
];

// Ordenar juegos alfabéticamente por id
juegos.sort((a, b) => a.id.localeCompare(b.id));

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
```

### Resumen

1. **Crea un objeto** para cada nuevo juego con las propiedades `id`, `imgSrc`, `altText`, `title` y `downloadLink`.
2. **Añade el objeto** al arreglo `juegos`.
3. **Ordena el arreglo** alfabéticamente por `id` usando el método `sort`.
4. **Actualiza el DOM** llamando a `addGameToGallery` para mostrar los juegos en la página.

Siguiendo estos pasos, podrás mantener tu lista de juegos organizada y actualizada de manera eficiente.
