import React, { useState } from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = () => {
  const [dataNascimento, setDataNascimento]=useState("")
  const [telefone, setTelefone] =useState("")

const onChangeDataNascimento = (event) =>{
  setDataNascimento(event.target.value)
}

const onChangeDataTelefone = (event) =>{
  setTelefone(event.target.value)
}

const submit = (event)=>{
 if(dataNascimento!=("")&&telefone!=(""))
 setDataNascimento("")
 setTelefone("")
 alert("Inscrição Finalizada")
}

const enviarDados =()=>{ 
  alert("Dados enviados com sucesso! ")
}


  return (
    <Form>
      <h2>forms parte 2-exercicio 3</h2>
      
      <select>
      <label>
      Curso integral web fullstack
        <input  type="date"/>
      </label>
      


      <option selected value=""></option>
      <option value="Homem cisgênero">Homem cisgênero</option>
      <option value="Mulher cisgênero">Mulher cisgênero</option>      
      <option value="Homem trans">Homem trans</option>
      <option value="Mulher trans">Mulher trans</option>
      <option value="Pessoa não binária">Pessoa não binária</option>
      <option value="Prefiro não dizer">Prefiro não dizer</option>
       </select>
       <select>
      <option selected value="coconut">Raça</option>
        <option value="Raça Negra">Negro</option>
        <option value="Raça Amarela">Amarelo</option>
        <option value="Raça Branca">Branco</option>
        <option value="Raça Vermelha">Vermelho</option>
      </select>

      <label>
      Curso integral web fullstack
        <input type="radio"/>
      </label>

      <label>
      Curso noturno web fullstack
        <input type="radio" />   
      </label>

      <label for="vehicle1">Tem ensino médio completo
      <input type="checkbox"/><br></br>
      </label>

      <label for="vehicle1">Tem disponibilidade para participar das atividades
      <input type="checkbox"/><br></br>
      </label>

      

      <button onClick={enviarDados}>Enviar dados</button>
            
      </Form>
  )
}

export default ConfirmationForm