import {useState} from "react";
import poke from './assets/pokeapi_256.png'

function App () {

  // var nome = "Giovana";

  const Formulario = (props) => {

    const [nome, setNome] = useState("Gigi")

  return (
    <div>

      <input 
        className="nome"
        name = "nome"
        onChange={(e)=>{setNome(e.target.value)}}
        placeholder={props.sombra != null ? props.sombra : "Texto padrão"}
        type="text" />

      <button 
        className="botão"
        onClick={()=>{alert(nome)}} >
        CLIQUE AQUI
      </button>

    </div>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <p>Texto do paragrafo</p>
      <img src={poke} style={{width:200, height:100}}/>
      <img src={poke} style={{width:200, height:100}}/>
      <Formulario sombra="Digite seu nome..." />
      <Formulario sombra="Digite seu email.."/>
      <Formulario sombra="(99)90000-0000"/>
      <Formulario />
      <Formulario />
      <Formulario />

    </div>
  )
}

export default App
