import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Popular from './components/Popular'
import AboutText from './components/AboutText'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
        <AboutText
          name={"Devon Kiss Studios"}
          website={"https://devonkissstudios.com"}
          framework={"React"} />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)