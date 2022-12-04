import React, { Component } from "react"
import "./Conversor.css"

export default class Conversor extends Component {

    constructor(props) {
        super(props)
        // Para converter o valor da moeda A para a B eu preciso ter esse valor armazenado em algum lugar, nós armazenamos esse valor no estado do componente

        this.state = {
            // O valor da moeda A vem do campo do input
            // Como colocar o que eu digitar dentro do valor de moedaA
            moedaA_valor: "",

            // O valor da moeda B vai ser o valor calculado depois que a gente converter o valor inserido de acordo com o câmbio do dia
            moedaB_valor: 0
        }

        // Para que dentro do "converter" consigamos acessar o this e usar o console.log()
        this.converter = this.converter.bind(this)
    }

    // Agora que a moeda A já está recebendo o valor dela através do método onChange dentro do input, precisamos criar uma função que vai converter esse valor
    
    converter() {

        // Vamos requisitar uma API para fazer a conversão
        // https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=y

        let from_to = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${from_to}&compact=y`

        fetch(url).then(response => {
            return response.json()
        }).then(json => {
            let quote = json[from_to].val
            let moedaB_valor = parseFloat((this.state.moedaA_valor) * quote).toFixed(2)
            this.setState({moedaB_valor})
        })
        .catch(error => console.error(error))
    }


    render() {
        return(
            <div className="conversor">
                {/* Componente */}
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                {/* O onChange vai disparar um evento, o target é o nosso elemento e vai pegar o valor dentro desse elemento e atualizar o nosso setState */}
                <input 
                    type="text" 
                    onChange={(event) => {
                        this.setState({moedaA_valor:event.target.value})
                    }}>
                </input>

                <input 
                    type="button" 
                    value="converter"
                    onClick={this.converter}>
                </input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}