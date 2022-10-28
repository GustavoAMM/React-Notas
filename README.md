# Notas del curso de React

> Martes 25 de Octubre del 2022
>
> Requerimientos:
> - HTML
> - CSS
> - JS => Sobre todo los conceptos básicos e intermedios (bucles, condicionales, métodos de objetos, ES6+, etc.)
> - Node
>
> By Gustavo Angel Montoya Martínez

## ¿Qué es? 

Es una biblioteca de javaScript que nos permite crear interfaces de usuarios, es muy utilizada lo que nos permite usar elementos que otras personas ya hicieron.
Tiene un buen rendimiento, es veloz ya que internamente utiliza *virtual dom*. 
Nos permite crear vistas declarativas, es decir. lo que queremos mostrar en pantalla podemos verlo en el código.
Con *virtual dom* podemos pintar al usuario sin refrescar toda la pantalla y podemos divir una aplicación grande en **componentes**.
React puede ser utiliza desde el servidor.

#### Componentes 

React puede divir una aplicación grande en pequeñas partes.Son denominadas componentes a pequeñas partes que pueden encapsular código HTML, CSS y javaScript que lucen como etiquetas html para poder ser reutilizadas incluso en otro proyectos.

## Crear proyecto de react

> Necesitamos instalar NodeJS y desde NodeJS ejecutamos el siguiente comando:

```
npx create-react-app *name_app*
```
#### Comandos 

Ejecutar servidor de desarrollo 

```
npm start
```

Preparar el código a producción
```
npm run build 
```

Hacer test de interfaces 
```
npm test
```

Sacar las configuraciones de create-react-app
```
npm run eject
```

## Componentes 

![Componentes](componentes.png)

En React siempre empieza con un componente *root*.Siempre debe haber un componente que contenga el resto.

## Hola mundo

Ejemplo de hola mundo en react

```
import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<h1>Hola Mundo</h1>);

```

## Ejemplo de un componente básico

```
import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function saludar() {
  return <h1>Este es componente</h1>;
}

root.render(saludar());

```
