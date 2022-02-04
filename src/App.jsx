import './App.css'
import './plugings/sweetalert2.css'
import Navbar from './components/Navbar/jsx/Navbar'
import ItemListContainer from './components/Navbar/jsx/ItemListContainer'

function App() {
  const Subtitulo = 'Since @2019 - Todos los derechos reservados.'

  return (
    <div className="App">
      < Navbar />
      <header className="App-header">
        < ItemListContainer Greetings={Subtitulo} />
      </header >
    </div>
  )
}

export default App