import React, { Component } from "react";
import quimica from "./imgs/quimica.png";
import './Ingredients.css';


class Ingredients extends Component{
    render() {
        return(
            <div className="ingredients">
                <h1 className="title">Conheça os <span className="text-style">ingredientes</span> da Tecnomagia</h1>
                <img src={quimica} alt="alquimia" className="alchemy"/>
                <div className="sobre">
                    <h1 className="sobre-titulo">Sobre</h1>
                    <p className="sobre-descricao">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, qui
						nostrud exercitation ullamco laboris nisi ut aliquip e
						ea quis nostrud exercitatio.
                    </p>
                </div>
                <div className="metodo">
                    <h1 className="metodo-titulo">Metodologia</h1>
                    <p className="metodo-descricao">
                        Método de aprendizado conversacional que quebra a
                        informação em mini-porções; espaça o aprendizado
                        ao longo do tempo; cativa com uma linguagem
                        contemporânea; oferece um senso de progressão e
                        põe o usuário no centro da experiência.
                    </p>
                </div>
            </div>
        )
    }
}
export default Ingredients;
