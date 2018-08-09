import React, { Component } from 'react';
import './Vamos.css';


class Vamos extends Component{
    render() {
        return(
            <div className="vamos">
                <h1 className="title">Vamos lá?</h1>
                <p className="description">É só clicar no botão e se aventurar pelas tranformações digitais :)</p>
                <a href="https://m.me/aprenda-tecnomagia/" className="button">começar</a>
            </div>
        );
    }    
}

export default Vamos;