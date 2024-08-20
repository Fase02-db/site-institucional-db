import './App.css'
import  DepoimentoComponent  from './components/Depoimento'

function App() {

  return (
    <>
      <DepoimentoComponent
        autor='Saulo Henrique'
        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti quibusdam provident quis doloribus rem corporis, molestiae nihil. Incidunt ut molestiae pariatur explicabo nihil quia voluptate sint officiis omnis assumenda.'
        titulo='Depoimento'
        img='/src/assets/fotoExemplo.jpg'
      />

    </>
  )
}

export default App
