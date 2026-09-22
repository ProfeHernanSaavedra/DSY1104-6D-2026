const nombre = "Hernán"
const edad = 49

function App(){
  return(
    <div>
      <h1>Hola {nombre}</h1>
      <p>Bienvenido a React</p>
      <p>Edad: {edad}</p>
      <p>El próximo año tendras {edad + 1}</p>
    </div>
  )
}

export default App
