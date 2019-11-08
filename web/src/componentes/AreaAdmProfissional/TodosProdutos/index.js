import React, {Component} from 'react';
import Header from '../Header';
import {ContainerAdm} from '../../../styles'
import AguardandoResposta from './Componentes/AguardandoResposta';
import Aprovados from './Componentes/Aprovados';
import Recusados from './Componentes/Recusados';
import Titulos from './Componentes/Titulos';


export class AreaTodosProdutos extends Component{


    render(){
        return(
            <ContainerAdm className="container conteudo">
                <Titulos titulo="Aguardando resposta"/>
                <AguardandoResposta/>
                <Titulos titulo="Aprovados"/>
                <Aprovados/>
                <Titulos titulo="Recusados"/>
                <Recusados/>
            </ContainerAdm>
        );
    }
}



export class BoxTodosProdutos extends Component{

    constructor(props){
        super(props)
        this.state={status:''}
    }

    render(){
        return(
            <div>
                <Header titulo="Seus Pedidos"></Header>
                <AreaTodosProdutos></AreaTodosProdutos>
            </div>
        );
    }
}