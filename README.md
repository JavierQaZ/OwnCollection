# OwnCollection
Proyecto para Taller de Aplicaciones Móviles - 2024

## Introducción

El presente proyecto tiene como objetivo desarrollar una aplicación móvil en React Native que permita a los usuarios gestionar una colección personalizada de cartas. La aplicación ofrecerá funcionalidades clave como agregar, editar y eliminar cartas, todo a través de una interfaz amigable que permitirá la interacción con la cámara del dispositivo o la galería para añadir nuevas cartas.

La aplicación estará dirigida a coleccionistas, tanto aficionados como entusiastas, que deseen llevar un control digital y visual de sus cartas de una manera organizada y accesible. Estos usuarios podrán capturar imágenes de sus cartas, asignarles nombres y posteriormente gestionarlas directamente desde la aplicación.

En términos técnicos, el desarrollo de la aplicación se realizará utilizando React Native como framework principal, lo que permitirá la compatibilidad con dispositivos Android e iOS, siendo multiplataforma. Para gestionar el almacenamiento local, se utilizará SQLite.


## Objetivos
### Objetivo General

Desarrollar una aplicación móvil multiplataforma que permita a los usuarios capturar, organizar y gestionar colecciones de cartas de manera eficiente, utilizando imágenes obtenidas a través de la cámara o galería del dispositivo, con almacenamiento local.

### Objetivos Específicos

- Implementar la capacidad de capturar imágenes de cartas utilizando la cámara del dispositivo o seleccionarlas desde la galería.

- Crear una interfaz amigable que permita a los usuarios añadir, editar y visualizar los detalles de cada carta en su colección, como su nombre, estado de adquisición e imagen.

- Desarrollar un sistema de almacenamiento local para guardar y recuperar los datos de las cartas, asegurando que la colección esté disponible aun sin conexión a internet.

- Diseñar un sistema que permita a los usuarios visualizar sus cartas en cuadrículas y que ofrezca opciones para filtrar y clasificar las cartas según sus características.

## Wireframes

Para diseñar este proyecto se utilizó Figma, con un total de 14 vistas. El estado actual representa las 6 vistas inferiores _(destacadas en un recuadro azul)_

> https://www.figma.com/design/pGZLbCkmuvSJ1WMA92LEhp/OwnCollection?node-id=2-4&t=es7NkLvux0x9hWQ3-1

## Notas

Este proyecto está desarrollado en base a SDK 51, y tiene integrado:
- expo-sqlite
- expo-image-picker

En este estado, la aplicación puede:

- Crear Colecciones
    - Ingreso de Título de la Colección
    - Ingreso de Portada de la Colección (por Cámara o Almacenamiento)

- Agregar Cartas a las Colecciones
    - Ingreso de Nombre de la Carta
    - Ingreso de Imagen de la Carta (por Cámara o Almacenamiento)

- Mostrar la carta
    - Muestra la carta en una pantalla individual
    - **Muestra y guarda su estado de adquisición.**

 - **Edita Colecciones**
    - **Edita el título de la colección y la imagen de portada**

 - **Edita Cartas**
    - **Edita el título de la carta y su imagen**

 - **Elimina Colecciones**
 - **Elimina Cartas**
