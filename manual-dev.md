# MANUAL PARA AGREGAR JUEGOS A CHAKIELROMS.COM

---

## INDICE

1. [Como funciona la pagina (dibujito mental)](#1-como-funciona-la-pagina-dibujito-mental)
2. [Que necesitas tener antes de empezar](#2-que-necesitas-tener-antes-de-empezar)
3. [PASO 1: Agregar el juego al archivo de datos](#3-paso-1-agregar-el-juego-al-archivo-de-datos)
4. [PASO 2: Subir la imagen de portada](#4-paso-2-subir-la-imagen-de-portada)
5. [PASO 3: Verificar que funciona](#5-paso-3-verificar-que-funciona)
6. [EJEMPLO COMPLETO: Agregar "Pou" a Android](#6-ejemplo-completo-agregar-pou-a-android)
7. [Resumen RAPIDO (chuleta/cheatsheet)](#7-resumen-rapido-chuletacheatsheet)
8. [Preguntas frecuentes](#8-preguntas-frecuentes)

---

## 1. COMO FUNCIONA LA PAGINA (dibujito mental)

Imagina que la pagina web es como un **restaurante**:

| Concepto | Que es en la vida real | Donde esta en la compu |
|----------|----------------------|----------------------|
| **El MENU (lista de juegos)** | Un archivo gigante que dice todos los juegos que hay | `Chakielzero/data` → `games.json` |
| **Las FOTOS de los juegos** | Las imagenes de portada que se ven bonitas | `Chakielzero/imagenes` → carpeta de cada consola |
| **El MESERO (game.js)** | El que lee el menu y muestra los juegos en pantalla | `assets/js/game.js` (en este repo) |
| **Las MESAS (paginas HTML)** | Cada pagina de consola (Android, PS2, WiiU...) | `android/index.html`, `ps2/index.html`, etc. |

```
  [games.json]          [imagenes/]           [game.js]
  (la lista de          (las fotos            (el mesero
   TODOS los             de portada            que lee la
   juegos)               .webp)                lista y la
       |                      |                 muestra)
       |                      |                    |
       v                      v                    v
  https://cdn.jsdelivr.net/gh/Chakielzero/data@main/games.json
  https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/...
                                    |
                                    v
                          [android/index.html]
                          data-platform="android"
                                    |
                                    v
                          El usuario ve los juegos
                          en chakielroms.com/android/
```

**LO MAS IMPORTANTE**: Los datos de los juegos NO estan en este repositorio. Estan en OTRO repositorio llamado `Chakielzero/data`. Si quieres agregar un juego, tienes que ir a ese otro repositorio y editar el archivo `games.json`.

---

## 2. QUE NECESITAS TENER ANTES DE EMPEZAR

Necesitas 3 cosas:

1. **El archivo APK del juego** subido a algun servidor de descarga (Nephobox, Terabox, APKFY, etc.)
   - Tienes que tener el **link de descarga** listo
   - Ejemplo: `https://nephobox.com/s/1WHY7l0Niha8_y2zlZsRxQQ`

2. **Una imagen de portada** del juego (formato `.webp` o `.png` o `.jpg`)
   - Que se vea bonita, tamaño recomendado: 300x400 pixeles aproximadamente
   - El nombre del archivo debe ser en minusculas, sin espacios, sin caracteres raros
   - Ejemplo: `pou.webp`

3. **Acceso a GitHub** para editar los 2 repositorios:
   - `Chakielzero/data` (aqui editas el archivo `games.json`)
   - `Chakielzero/imagenes` (aqui subes la foto del juego)

---

## 3. PASO 1: AGREGAR EL JUEGO AL ARCHIVO DE DATOS

### 3.1 El archivo magico: `games.json`

El archivo `games.json` esta en el repositorio `Chakielzero/data`. Lo puedes ver aqui:

```
https://github.com/Chakielzero/data/blob/main/games.json
```

Dentro de ese archivo hay una lista ENORME de todos los juegos. Cada juego se ve asi:

```json
{
  "id": "android_pou",
  "title": "Pou",
  "description": "Pou.apk",
  "coverImageUrl": "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pou.webp",
  "platforms": ["android"],
  "downloadUrl": "https://nephobox.com/s/TU_LINK_DE_DESCARGA",
  "fileSize": "",
  "addedDate": "2026-07-06T00:00:00Z",
  "tags": ["android"],
  "newTag": "NEW"
}
```

### 3.2 Explicacion de cada campo (que significa cada cosita)

| Campo | Que poner | Ejemplo |
|-------|-----------|---------|
| `id` | Un nombre UNICO para identificar el juego. Usa: `plataforma_nombre` todo en minusculas con guiones bajos `_` | `"android_pou"` |
| `title` | El nombre del juego como quieres que se vea en la pagina | `"Pou"` |
| `description` | Una descripcion corta, normalmente el nombre del archivo | `"Pou.apk"` |
| `coverImageUrl` | El link a la imagen de portada (la subes en el PASO 2) | `"https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pou.webp"` |
| `platforms` | La plataforma o consola. IMPORTANTE: va entre corchetes `[]` | `["android"]` |
| `downloadUrl` | El link para descargar el APK | `"https://nephobox.com/s/..."` |
| `fileSize` | Dejalo vacio `""` o pon el tamaño | `""` |
| `addedDate` | La fecha en que lo agregas (formato especial) | `"2026-07-06T00:00:00Z"` |
| `tags` | Las etiquetas, normalmente igual que la plataforma | `["android"]` |
| `newTag` | Pon `"NEW"` si quieres que salga una etiqueta de "NUEVO" en la portada. Dejalo `""` si no | `"NEW"` o `""` |

### 3.3 Lista de plataformas validas

Estos son los nombres que DEBES usar en el campo `platforms`:

| Plataforma | Valor para `platforms` | Carpeta de imagenes |
|------------|----------------------|---------------------|
| Android (APK) | `"android"` | `android/` |
| PC | `"pc"` | `pc/` |
| PS2 | `"ps2"` | `ps2/` |
| PS3 | `"ps3"` | `ps3/` |
| PS4 | `"ps4"` | `ps4/` |
| PS Vita | `"psvita"` | `psvita/` |
| Wii | `"wii"` | `wii/` |
| Wii U | `"wiiu"` | `wiiu/` |
| GameCube | `"gamecube"` | `gamecube/` |
| 3DS | `"3ds"` | `3ds/` |
| Xbox | `"xbox"` | `xbox/` |

### 3.4 Donde pegar el nuevo juego en games.json

El archivo `games.json` empieza asi:
```json
{
  "games": [
    ...aqui van todos los juegos...
  ]
}
```

Agrega tu nuevo juego **al final de la lista**, justo ANTES del ultimo `]`. ASEGURATE de poner una coma `,` despues del juego anterior.

Ejemplo de como se ve el final del archivo antes y despues:

**ANTES (ultimo juego):**
```json
    {
      "id": "android_youtube_vanced",
      "title": "YouTube Vanced",
      ...etc...
      "newTag": ""
    }
  ]
}
```

**DESPUES (agregamos Pou):**
```json
    {
      "id": "android_youtube_vanced",
      "title": "YouTube Vanced",
      ...etc...
      "newTag": ""
    },
    {
      "id": "android_pou",
      "title": "Pou",
      "description": "Pou.apk",
      "coverImageUrl": "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pou.webp",
      "platforms": ["android"],
      "downloadUrl": "https://nephobox.com/s/TU_LINK_DE_DESCARGA",
      "fileSize": "",
      "addedDate": "2026-07-06T00:00:00Z",
      "tags": ["android"],
      "newTag": "NEW"
    }
  ]
}
```

**CUIDADO CON LAS COMAS `,`**:
- Cada juego (cada `{ ... }`) debe estar separado por una coma `,`
- El ULTIMO juego NO lleva coma al final
- Si te equivocas con las comas, el JSON se rompe y NADA funciona

---

## 4. PASO 2: SUBIR LA IMAGEN DE PORTADA

### 4.1 Preparar la imagen

- Formato recomendado: `.webp` (pesa menos y carga rapido)
- Tambien funciona: `.png`, `.jpg`
- Nombre del archivo: todo en **minusculas**, sin espacios, usa guiones si necesitas
  - BIEN: `pou.webp`, `angry-birds-2.webp`, `call_of_duty_mobile.webp`
  - MAL: `Pou.webp`, `Angry Birds 2.webp`, `Call of DUTY.webp`

### 4.2 Subir la imagen a GitHub

Ve al repositorio `Chakielzero/imagenes`:

```
https://github.com/Chakielzero/imagenes
```

Busca la carpeta que corresponde a tu plataforma (ej: `android/`) y sube ahi la imagen.

Puedes hacerlo de 2 formas:

**Forma facil (por la pagina web de GitHub):**
1. Entra a `https://github.com/Chakielzero/imagenes`
2. Navega a la carpeta de tu plataforma, ej: `android/`
3. Haz clic en "Add file" → "Upload files"
4. Arrastra tu imagen
5. Escribe un mensaje tipo "Agrego portada de Pou"
6. Haz clic en "Commit changes"

**Forma de programador (por comandos):**
```bash
# Clonar el repo de imagenes (solo la primera vez)
git clone https://github.com/Chakielzero/imagenes.git

# Copiar tu imagen a la carpeta correcta
cp pou.webp imagenes/android/

# Subir los cambios
cd imagenes
git add android/pou.webp
git commit -m "Portada de Pou"
git push origin main
```

### 4.3 Verificar que la imagen funciona

Despues de subir, espera 1-2 minutos y prueba esta URL en tu navegador:

```
https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pou.webp
```

(Cambia `android/pou.webp` por la ruta de tu imagen)

Si ves la imagen, FELICIDADES, ya funciona.

---

## 5. PASO 3: VERIFICAR QUE FUNCIONA

Una vez que editaste `games.json` (PASO 1) y subiste la imagen (PASO 2), espera unos **2-5 minutos** a que el CDN (jsDelivr) se actualice.

Luego entra a la pagina de tu plataforma:
- Android: `https://chakielroms.com/android/`
- PS2: `https://chakielroms.com/ps2/`
- etc.

Tu nuevo juego deberia aparecer al final de la lista.

### Si NO aparece, revisa esto:

1. **El JSON esta roto**: Ve a `https://cdn.jsdelivr.net/gh/Chakielzero/data@main/games.json` y copia todo el texto. Pegalo en `https://jsonlint.com/` y dale a "Validate JSON". Si hay errores, te dira exactamente en que linea esta el problema.

2. **El nombre de plataforma no coincide**: En `platforms` pusiste `"android"` (todo en minusculas). La pagina de Android busca juegos que tengan `"android"` en `platforms`. Si pusiste `"Android"` con mayuscula, NO va a funcionar.

3. **El CDN no se actualizo**: jsDelivr tarda unos minutos en refrescar. Tambien puedes forzar el refresco abriendo: `https://purge.jsdelivr.net/gh/Chakielzero/data@main/games.json`

4. **La imagen no carga**: Asegurate de que la URL de `coverImageUrl` es EXACTAMENTE igual a la ruta donde subiste la imagen.

---

## 6. EJEMPLO COMPLETO: Agregar "Pou" a Android

Vamos a agregar el juego **Pou** para Android. Sigue estos pasos AL PIE DE LA LETRA:

### Lo que necesitas:
- Link de descarga del APK (ej: `https://nephobox.com/s/abc123def456`)
- Imagen de portada guardada como `pou.webp`

### PASO 1: Ir al repositorio de datos

Entra a: `https://github.com/Chakielzero/data/blob/main/games.json`

Haz clic en el lapiz (✏️ "Edit this file") para editar.

### PASO 2: Agregar el juego al final

Busca el final del archivo. Veras algo como:

```json
    {
      "id": "android_algun_ultimo_juego",
      "title": "Ultimo Juego",
      ...
      "newTag": ""
    }
  ]
}
```

AGREGA UNA COMA `,` despues de la `}` del ultimo juego, y luego pega el nuevo:

```json
    {
      "id": "android_algun_ultimo_juego",
      "title": "Ultimo Juego",
      ...
      "newTag": ""
    },
    {
      "id": "android_pou",
      "title": "Pou",
      "description": "Pou.apk",
      "coverImageUrl": "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/android/pou.webp",
      "platforms": ["android"],
      "downloadUrl": "https://nephobox.com/s/abc123def456",
      "fileSize": "",
      "addedDate": "2026-07-06T00:00:00Z",
      "tags": ["android"],
      "newTag": "NEW"
    }
  ]
}
```

### PASO 3: Guardar (commit)

- En "Commit message" escribe: `Agrego Pou para Android`
- Asegurate de que dice "Commit directly to the main branch"
- Haz clic en "Commit changes"

### PASO 4: Subir la imagen

Entra a: `https://github.com/Chakielzero/imagenes`

Navega a la carpeta `android/`:
```
https://github.com/Chakielzero/imagenes/tree/main/android
```

Haz clic en "Add file" → "Upload files", arrastra `pou.webp`, escribe un mensaje y haz commit.

### PASO 5: Esperar y verificar

Espera 2-5 minutos. Entra a `https://chakielroms.com/android/` y busca "Pou". Debe aparecer con su imagen y un boton de "Descargar".

---

## 7. RESUMEN RAPIDO (chuleta/cheatsheet)

```
┌─────────────────────────────────────────────────────────────┐
│  PARA AGREGAR UN JUEGO NUEVO NECESITAS HACER 2 COSAS:       │
│                                                             │
│  1. Editar games.json en Chakielzero/data                  │
│     → Agregar un nuevo bloque { ... } al final de la lista │
│     → CUIDADO con las comas ,                               │
│                                                             │
│  2. Subir la imagen a Chakielzero/imagenes                 │
│     → En la carpeta de la plataforma (android/, ps2/, etc) │
│     → Formato .webp, nombre en minusculas                  │
│                                                             │
│  3. Esperar 2-5 min y revisar chakielroms.com              │
└─────────────────────────────────────────────────────────────┘
```

### Plantilla para copiar y pegar:

```json
{
  "id": "PLATAFORMA_nombre_del_juego",
  "title": "Nombre del Juego",
  "description": "Nombre del Juego.apk",
  "coverImageUrl": "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/PLATAFORMA/imagen.webp",
  "platforms": ["PLATAFORMA"],
  "downloadUrl": "AQUI_PONES_EL_LINK_DE_DESCARGA",
  "fileSize": "",
  "addedDate": "2026-07-06T00:00:00Z",
  "tags": ["PLATAFORMA"],
  "newTag": "NEW"
}
```

**Cambia:**
- `PLATAFORMA` → `android`, `ps2`, `ps3`, `wiiu`, etc.
- `nombre_del_juego` → algo unico como `pou`, `gta_san_andreas`
- `Nombre del Juego` → como se muestra en la pagina
- `imagen.webp` → el nombre de tu archivo de imagen
- `AQUI_PONES_EL_LINK_DE_DESCARGA` → el link de Nephobox/Terabox/etc.
- `newTag` → `"NEW"` si es nuevo, `""` si no

---

## 8. PREGUNTAS FRECUENTES

### P: No entiendo nada de GitHub, ¿hay forma mas facil?
R: La forma mas facil es usar la pagina web de GitHub (github.com). Solo necesitas:
1. Tener una cuenta de GitHub
2. Tener permisos en los repositorios `Chakielzero/data` y `Chakielzero/imagenes`
3. Editar los archivos directamente desde el navegador

### P: ¿Donde estan los archivos en mi computadora?
R: En Termux, el sitio web esta en:
```
/data/data/com.termux/files/home/chakielzero.github.io/
```
Pero los datos de los juegos estan en OTRO repositorio que NO esta en esta carpeta.

### P: Quiero agregar una categoria nueva (ej: Nintendo Switch), ¿como se hace?
R: Necesitas hacer 3 cosas:
1. Crear una carpeta nueva en este repo (ej: `switch/`)
2. Copiar el `index.html` de otra plataforma (ej: `android/index.html`) y cambiar `data-platform="switch"`
3. Agregar juegos con `"platforms": ["switch"]` en `games.json`
4. Agregar la categoria en la pagina principal (`index.html` en la raiz) copiando uno de los bloques `<div class="game">`

### P: ¿Como actualizo la pagina principal para que salga algo nuevo?
R: La pagina principal (`index.html` en la raiz) es HTML puro. Para agregar una nueva categoria tienes que editar ese archivo y agregar un nuevo bloque `<div class="game">...</div>`. Luego haces `bash subir` para publicar los cambios.

### P: Rompi el games.json y la pagina no carga NADA
R: Ve a `https://jsonlint.com/`, pega todo el contenido de games.json y te dira exactamente que linea esta mal. Corrige y vuelve a hacer commit.

### P: ¿Como publico cambios en el sitio web (este repositorio)?
R: Desde la terminal:
```bash
cd /data/data/com.termux/files/home/chakielzero.github.io
bash subir
```
Escribe el mensaje del commit y listo. GitHub Pages publica los cambios automaticamente.

---

## CREDITOS

- **Creador**: ChakielZero (Gerardo Briceño Vázquez)
- **Sitio web**: https://chakielroms.com
- **YouTube**: https://youtube.com/@ChakielZero

---

*Manual escrito con amor para que hasta un niño de 5 años pueda agregar juegos.*
