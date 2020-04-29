import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

class App extends React.Component {

  static defaultProps = {
    name: "Cody Default"
  }

  static propTypes = {
    name: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state={
      contador : 0
    }

    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter=()=> {
    this.setState({contador: this.state.contador + 1})
  }

  render(){
    console.log(this.props)
    return( 
    <>
    <p>Contador : {this.state.contador}</p>
    <button onClick={ this.updateCounter}>Sumar</button>
    </>
    )
  }
}

render(<App name={2}/>, document.getElementById("react-app"))