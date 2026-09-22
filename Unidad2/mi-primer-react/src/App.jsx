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
      <Producto />
      <Producto />
      <Producto />

    </div>
  )
}

export default App
