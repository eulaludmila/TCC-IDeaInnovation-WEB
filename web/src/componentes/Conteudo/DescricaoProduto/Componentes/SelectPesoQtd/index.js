import React, { Component } from 'react';
import { ipAPI } from '../../../../../link_config';
import $ from 'jquery';

export default class SelectPesoQtd extends Component{

    constructor(props){
        super(props)

        this.state = {listaPesoQtd: [], multiplo: "", maximo: "", preco:"", precoAtualizado:''};
    }

    componentDidMount(){
        $.ajax({
            url: ipAPI + "produto/"+ this.props.codigo,
            dataType: "json",
            success: function(resposta){
                this.setState({multiplo: resposta.quantidade.multiplo});
                this.setState({maximo: resposta.quantidade.maximo});
                this.setState({preco: resposta.preco});
                
            }.bind(this)
        })

        this.pegarQuantidade()
    }

    precoProduto = (evento) =>{
        console.log(evento.target.value)
        if(evento.target.value !== "Escolha uma opção"){
            this.setState({precoAtualizado:evento.target.value});
        }
        

    }

    pegarQuantidade(){
        var min  = parseInt(this.state.multiplo);
        var max = parseInt(this.state.maximo);

        let qtde = [];
             
        if(this.props.label === "Kg:"){
            for(let i = min; i<= max; i++){
                qtde.push(i);
            }
        }else if(this.props.label === "Quantidade:"){
            for(let i = min; i<= max; i+= min){
                qtde.push(i);
            }
        }
        return qtde;
    }

    atualizarPreco = () => {

    }


    render(){
        return(
            <div className="form-group col-md-6">
                <label className="font_small">{this.props.label}</label>
                <select onChange={this.precoProduto} className="form-control">
                <option defaultValue>Escolha uma opção</option>          
                {
                    
                    
                    this.pegarQuantidade().map(qtde=> 
                        
                        <option key={qtde} value={(qtde/this.state.multiplo) * this.state.preco}>{qtde}</option>         
                    )
                       
                }
                </select>
                
                <div className="form-group col-md-12 mt-2">
                    <p style={{'fontSize':'25px'}}>Preço Total: R$ {this.state.precoAtualizado}</p>
                </div>
            </div>
        );
    }
}