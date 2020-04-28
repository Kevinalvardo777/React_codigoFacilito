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
  render(){
    console.log(this.props)
    return <p>Hola mundo</p>
  }
}

render(<App name={2}/>, document.getElementById("react-app"))