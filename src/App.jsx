import './App.css'
import './components/Cart/css/CartWidget.css'
import './plugings/sweetalert2.css'
import Navbar from './components/Navbar/jsx/Navbar'
import ItemListContainer from './components/Navbar/jsx/ItemListContainer'
import CartWidget from './components/Cart/jsx/CartWidget'

function App() {

  const Subtitulo = 'Since @2019 - Todos los derechos reservados.'
  const Icono = 
    <div>
      <i className="fa fa-cog fa-spin" /> 
    </div>  

  return (
    <div className="App">
      < Navbar />
      < CartWidget Icono={Icono} />

      <header className="App-header">
        < ItemListContainer Greetings={Subtitulo} />
      </header >
    </div>
  )
}

export default App