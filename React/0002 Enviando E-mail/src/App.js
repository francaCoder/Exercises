import { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser"

function App() {
  // Temos 2 useStates, um para cada campo, cada um salva suas informações

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if(name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
      return
    }

    // 3º Parâmetro para o emailjs.send()
    const templateParamns = {
      // left - right
      // Variáveis configuradas na api - useStates
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_c57lre9", "template_v9bnc6e", templateParamns, "GwSDz73beMJt0p9u2").then((response) => {
      console.log("Email enviado", response.status, response.text)

      // Limpando os campos após o envio
      setName("")
      setEmail("")
      setMessage("")
    }).catch(error => console.error(error))

  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      {/* Como é um formulário e tem a função de enviar, podemos usar o método onSubmit dentro da tag <form> para executar a função */}
      <form className="form" onSubmit={sendEmail}>
        {/* 
          Cada input recebe um onChange={(e) => setState(e.target.value)} para salvar/atualizar o valor e passar para seu respectivo estado
        */}
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input 
          className="button" 
          type="submit" 
          value="Enviar" 
          />
      </form>

    </div>
  );
}

export default App;
