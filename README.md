# DSY1104-6D-2026 🚀

Repositorio de apoyo para la asignatura **DSY1104 – Desarrollo Fullstack II**, sección **6D**, año **2026**.

Aquí se almacenarán los ejemplos, ejercicios y proyectos desarrollados durante las clases, permitiendo a los estudiantes revisar el código y continuar practicando fuera del aula.

---

## 👨‍🏫 Profesor

**Hernán Saavedra**

---

## 📚 Contenido del repositorio

El repositorio se irá actualizando durante el semestre a medida que avancemos en los contenidos de la asignatura.

### 📁 MiPrimerSitio

Contiene los primeros ejemplos realizados durante el curso relacionados con desarrollo web.

En esta etapa se trabajaron conceptos como:

* HTML
* CSS
* JavaScript
* Bootstrap
* Estructura básica de una página web
* Formularios
* Interacción con JavaScript

---

### 📁 Unidad2

Material correspondiente a la **Unidad 2**, donde comenzamos a trabajar con **React**.

## ⚛️ Introducción a React

En esta unidad comenzaremos a construir aplicaciones web utilizando React.

React permite crear interfaces mediante **componentes reutilizables**, lo que facilita organizar una aplicación en pequeñas partes que pueden desarrollarse y mantenerse de manera independiente.

Durante las clases iremos incorporando progresivamente nuevos conceptos.

### Primera clase de React

En la primera clase revisamos:

* ¿Qué es React?
* ¿Qué es Node.js?
* ¿Qué es npm?
* Creación de un proyecto React.
* Uso de Vite.
* Estructura básica de un proyecto.
* Componentes.
* JSX.
* Importación y exportación de componentes.
* Uso básico de `useState`.
* Primer ejemplo interactivo: **Contador**.

---

## 🛠️ Tecnologías utilizadas

Durante el curso utilizaremos principalmente:

* HTML5
* CSS3
* JavaScript
* Bootstrap
* React
* Vite
* Node.js
* npm
* Visual Studio Code
* Git
* GitHub

---

# ⚛️ Crear un proyecto React

Para crear un nuevo proyecto utilizaremos **Vite**.

Desde una terminal ejecutar:

```bash
npm create vite@latest
```

Luego seleccionar:

```text
Framework: React
Variant: JavaScript
```

Entramos a la carpeta del proyecto:

```bash
cd nombre-proyecto
```

Instalamos las dependencias:

```bash
npm install
```

Finalmente iniciamos el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local similar a:

```text
http://localhost:5173/
```

Abrimos esa dirección en el navegador para visualizar nuestra aplicación.

---

## 📂 Estructura básica de React

Un proyecto puede tener una estructura similar a:

```text
mi-proyecto/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Contador.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

### Archivos importantes

**`main.jsx`**

Es el punto de entrada de nuestra aplicación React.

**`App.jsx`**

Es el componente principal desde donde podemos organizar nuestra aplicación.

**`components/`**

Carpeta donde iremos creando nuestros propios componentes.

Por ejemplo:

```text
components/
└── Contador.jsx
```

---

## 🧩 ¿Qué es un componente?

Un componente es una parte reutilizable de una aplicación.

Por ejemplo, una aplicación podría estar formada por:

```text
App
├── Header
├── Menu
├── Contador
├── Formulario
└── Footer
```

Cada elemento puede ser desarrollado como un componente independiente.

---

## 🔢 Ejemplo: Contador

Uno de los primeros ejemplos realizados en React utiliza el Hook `useState` para almacenar y modificar información dentro de un componente.

```jsx
import { useState } from 'react'

function Contador() {

  const [contador, setContador] = useState(0)

  return (
    <div>
      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )
}

export default Contador
```

Este pequeño ejemplo permite comprender varios conceptos importantes:

* Componentes.
* JSX.
* Variables de estado.
* `useState`.
* Eventos.
* Actualización de la interfaz.

---

## 🎯 Objetivo del repositorio

Este repositorio busca complementar las clases presenciales.

Los estudiantes podrán utilizarlo para:

* Revisar ejemplos vistos en clases.
* Descargar el código desarrollado por el profesor.
* Comparar sus ejercicios con los ejemplos.
* Practicar los contenidos.
* Repasar antes de evaluaciones.
* Continuar ejercicios iniciados durante la clase.

---

## 💻 Clonar el repositorio

Para descargar el repositorio completo:

```bash
git clone https://github.com/ProfeHernanSaavedra/DSY1104-6D-2026.git
```

Luego:

```bash
cd DSY1104-6D-2026
```

Para obtener posteriormente las últimas actualizaciones:

```bash
git pull
```

---

## 📌 Importante

Este repositorio se actualizará durante el semestre.

Después de cada clase podrán aparecer nuevos:

* ejemplos,
* ejercicios,
* componentes,
* proyectos,
* recursos de apoyo.

Por esta razón, se recomienda realizar periódicamente:

```bash
git pull
```

para mantener una copia actualizada del material.

---

## 👨‍💻 DSY1104 – Desarrollo Fullstack II

**Sección:** 6D
**Año:** 2026
**Profesor:** Hernán Saavedra
