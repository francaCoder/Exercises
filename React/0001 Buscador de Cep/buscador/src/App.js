import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import "./style.css"
import api from "./services/api"

// App.js é o componente 

// O app é uma função que deve ter um retorno obrigatório, que rotorna um HTML

// Se eu quiser usar algo dinâmico na minha aplicação eu tenho que usar um estado/hook useState

function App() {

  //dentro do useState vai ser o valor que vai começar
  // input é o nome do nosso estado
  // setInput é a função que vamos usar para trocar o valor do nosso estado, passar um valor novo 

  const [input, setInput] = useState("")

  // A gente pode criar mais um useState para armazenar o retorno da nossa chamda

  // Começa como vazio porque até a pessoa clicar em buscar ele não tem valor nenhum
  const [cep, setCep] = useState("")

  async function handleSearch() {
    // Como vamos fazer uma requisição e o resultado vai demorar a gente transforma essa função em uma função assíncrona

    // ao invés de mostrar o valor do input no alerta eu quero fazer uma requisição na API de cep usando o axios
    
    if(input === "") {
      alert("Preencha algum cep")
      return
    }

    try {
      // Dentro do get eu só preciso passar o cep e o /json , porque a URL base já está configurada dentre desse arquivo api que foi importada
      const response = await api.get(`${input}/json`)
      console.log(response)
      // Em vez de eu dar o console log eu fou usar meu novo useState para passar esse valor para o estado do cep
      setCep(response.data)
      // Limpa o campo do input novamente
      setInput("")

    } catch(error) {
      // Além de mostrar o erro nós limpamos o estado input usando a função setInput e passando o vazio nela
      alert("Erro ao buscar. Corrija o CEP e tente novamente")
      setInput("")
    }
     
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div className="containerInput">
        {/* Quando colocamos o input com o value de input (que é o nosso estado), inicialmente ele começa com esse valor */}

        {/* Através do e.target.value temos acesso ao que o usuário digitou no campo, e colocando isso dentro da função setInput estamos passando esse valor ao input */}

        <input type="text" placeholder="Digite seu Cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch">
          {/* Ícone de lupa puxado do import */}

          {/* O botão recebe um evento de click que mostra um alerta do valor do estado input */}
          <FiSearch 
            size={25} 
            color="#fff"
            onClick={handleSearch}
            />
        </button>
      </div>

      {/* Estou acessando o useState cep e estpu verificando se tem algo lá dentro, e só vou renderizar o main se o usuário já ter pesquisado o cep */}
      {Object.keys(cep).length > 0 && (
        <main className="main">
        {/* Essas informações do main nós pegamos dentro do estado cep */}
        <h2>Cep: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
    </div>
  );
}

export default App;
