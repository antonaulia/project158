import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './komponent/Main'
import Header from './komponent/Header'
import Footer from './komponent/Footer'

class App extends React.Component{

  render(){
    return(
      <div>
      <Header/>
      <div style={{marginTop:'100px'}}>
        <Main/>
      </div>
      <Footer/>
    </div>
    )
  }
}

export default App