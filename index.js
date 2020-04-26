import React, {useState} from 'react'
import {render} from 'react-dom'

const Saludo =() => {
  const [name, setName] = useState("");
  return(
    /* SyntheticEvent */
    <div>
      <input type="text" onChange = { (ev) => console.log(ev)}/>
      <p>Hola {name}</p>
      <a href="#" onClick ={(ev) => ev.preventDefault()}></a>
    </div>
  );
}

const App =() => {
  return <div><Saludo /></div>
}

render(<App/>, document.getElementById("react-app"))