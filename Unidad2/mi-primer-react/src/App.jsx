import Saludo from './components/Saludo'
import Producto from './components/Producto'

{/** comentarios */}

function App(){
  return(
    <div>
      <h1>Mi primera aplicación en React</h1>
      <Saludo />

      <h1>Comprando productos</h1>
      <h2>Tienda React</h2>
      <Producto 
        nombre = "Notebook Lenovo"
        precio = "629.990"
      />
      <Producto 
        nombre = "Monitor DELL"
        precio = "150.000"
      />
      <Producto 
        nombre = "Mouse Genius"
        precio = "2.990"
      />

    </div>
  )
}

export default App
