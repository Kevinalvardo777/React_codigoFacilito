import React, { useState } from 'react';
import {render} from 'react-dom';

//const App = () => <h1>Hola mundo todos</h1>

/*class App extends Component {
  render(){
    return <h1>Hola mundo</h1>
  }
}*/

/*const nombres = [
  'Uriel',
  'Fernando',
  'Marines',
  'Cany'
]

const Saludar = ({nombre, idioma}) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello'
  return <h1>{saludo} {nombre}</h1>
}

Saludar.defaultProps = {
  idioma: 'en'
}*/
const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Presionado : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  )
}

const App = () =>{
  return <div><Button/></div>
}
render (<App />, document.getElementById('react-app'));