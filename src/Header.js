import React, { Component } from "react";
import embratel from "./imgs/embratel.png";
import borboleta from "./imgs/borboleta.png";
import logo_oc from "./imgs/logo_outra_coisa.png";
import './Header.css';

class Header extends Component{
    render() {
        return(
            <div className="header">
                <img src={embratel} alt="Embratel apresenta" className="embratel"/>
                <img src={borboleta} alt="borboleta simbolo do tecnomagia" className="borboleta"/>
                <img src={logo_oc} alt="Logo da Outra Coisa" className="logo_oc"/>
                <h1 className="title">Tecnomagia</h1>
                <p className="description">Um web bot para quem entende que o mundo está se transformando e que é preciso fazer parte dessa transformação.</p>
                <a className="button" href="https://m.me/aprendatecnomagia">começar</a>
            </div>
        )
    }
}

export default Header;
