<p align="center">
  <h1 align="center"><b>::Prueba de Desarrollo Front-end - Mercado Libre::</b></h1>
</p>

## Tabla de contenido

- [Comenzando](#comenzando)
- [Requerimientos del sistema](#requerimientos-del-sistema)
- [Configuración](#configuración)
- [Como Ejecutar](#como-ejecutar)
- [Colaboradores](#colaboradores)
- [Organización](#organizacion)

## Comenzando

Este documento le permitirá ejecutar este proyecto de desarrollo.

## Requerimientos del sistema

- [Node.js v17.2.0](https://nodejs.org/en/) 
- [npm v8.3.0](https://docs.npmjs.com/cli/v6/commands/npm-install) 

## Configuración

Para confirmar si los paquetes necesarios se encuentran instalados puede ejecutar estos comandos

    node -v
    npm -v

Cuando clone o descargue el proyecto abra una terminal e ingrese a la carpeta raíz del proyecto *front-end-challenge*.

    cd  /front-end-challenge

Corra el siguiente comando para instalar los paquetes necesarios:

    npm install

Si ya ejecuto previamente esta instalación no es necesario volver a ejecutarla, se puede revisar que paquetes se tienen instalados localmente.

    npm list --depth=0

## Como Ejecutar

Dentro de la carpeta raíz del proyecto *front-end-challenge* ejecute la siguiente tarea:  

    npm run dev

Con esta tarea el servidor se iniciará en el puerto [localhost:3001](http://localhost:3001/).

Mientras que el front-end en React estará disponible en [localhost:3000](http://localhost:3000/).

Para detener el anterior proceso solo se debe ejecutar **Ctrl + c**

### Organización

- **server:** En esta carpeta encontrará todos archivos correspondientes al servidor y consumo de apis externas.
- **src:** En esta carpeta encontrará todos archivos correspondientes al front-end de la aplicación y el consumo de apis locales.

## Colaboradores

- Duvan Alexis Valencia Munca <d.alexis.valencia@gmail.com>
