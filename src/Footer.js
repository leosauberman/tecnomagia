import React, { Component } from 'react';
import './Footer.css';
import logo_oc from './imgs/logo_outra_coisa@2x.png';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <img src={logo_oc} alt="Logo OC" className="logo"/>
                <p className="copyright">Copyright © 2018 Outra Coisa Produções de Software. Todos os direitos reservados.</p>
            </div>
        );
    }
}

export default Footer;