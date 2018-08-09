import React, { Component } from 'react';
import linha from './imgs/linha_sobre.png';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import icone_iot from './imgs/icone_iot.png';
import icone_trabalho_remoto from './imgs/icone_trabalho_remoto.png';
import icone_inteligencia_artificial from './imgs/icone_inteligencia_artificial.png';
import icone_ARVR from './imgs/icone_ARVR.png';
import icone_futuro_do_dinheiro from './imgs/icone_futuro_do_dinheiro.png';
import icone_industria from './imgs/icone_industria.png';
import icone_saude from './imgs/icone_saude.png';
import icone_seguranca from './imgs/icone_seguranca.png';
import icone_carros from './imgs/icone_carros.png';
import celular from './imgs/celular.png';
import triangulos from './imgs/fundos.png';
import fernando from './imgs/fernando_paiva_certa.png';
import './Help.css';

class Help extends Component {
  render() {
    
    return(
      <div className="help">
        <h1 className="title">O que o <span className="text-style-1">Tecnomago</span> fala com você</h1>
        <img src={linha} alt="linha" className="linha"/>
        <AwesomeSlider>
            <div className="slide">
                <div className="item">
                    <img src={icone_inteligencia_artificial} alt="IoT" className="icone"/>
                    <h4 className="item-title">Inteligência Artificial</h4>
                    <p className="item-description">Um passeio pelas redes neurais, machine learning, chatbots e muito mais.</p>
                </div>
                <div className="item">
                    <img src={icone_trabalho_remoto} alt="Trabalho Remoto" className="icone"/>
                    <h4 className="item-title">Trabalho Remoto</h4>
                    <p className="item-description">Uma viagem pelo novo mundo, onde o trabalho presencial é só uma das modalidades</p>
                </div>
                <div className="item">
                    <img src={icone_iot} alt="IoT" className="icone"/> 
                    <h4 className="item-title">IoT: Internet das Coisas</h4>
                    <p className="item-description">Uma volta pela tecnologia que transborda das telas para os objetos e espaços.</p>
                </div>
            </div>
            <div className="slide">
                <div className="item">
                    <img src={icone_ARVR} alt="ARVR" className="icone"/> 
                    <h4 className="item-title">AR VR</h4>
                    <p className="item-description">Um rolê pelas novas possibilidades criativas que se abrem com AR e VR</p>
                </div>
                <div className="item">
                    <img src={icone_futuro_do_dinheiro} alt="Futuro do Dinheiro" className="icone"/>
                    <h4 className="item-title">Futuro do dinheiro</h4>
                    <p className="item-description">Um rali pelas transformações que nossa relação com o dinheiro vem sofrendo.</p>
                </div>
                <div className="item">
                    <img src={icone_seguranca} alt="Segurança e Privacidade" className="icone"/>
                    <h4 className="item-title">Segurança e Privacidade</h4>
                    <p className="item-description">Uma olhada nas grandes tendências de segurança e privacidade da informação.</p>
                </div>
            </div>
            <div className="slide">
                <div className="item">
                    <img src={icone_saude} alt="Inovação na Saúde" className="icone"/>
                    <h4 className="item-title">Inovação na Saúde</h4>
                    <p className="item-description">Uma jornada pelos acessórios, equipamentos e estudos que levam a saúde à frente</p>
                </div>
                <div className="item">
                    <img src={icone_industria} alt="Indústria 4.0" className="icone"/> 
                    <h4 className="item-title">Indústria 4.0</h4>
                    <p className="item-description">Um panorama das mudanças que estão revolucionando a produção industrial</p>
                </div>
                <div className="item">
                    <img src={icone_carros} alt="Carros autônomos" className="icone"/>
                    <h4 className="item-title">Carros autônomos</h4>
                    <p className="item-description">Teste drive com a nova tendência que promete transformar nossa relação com o transporte.</p>
                </div>
            </div>
            {/* <div data-src={icone_trabalho_remoto} /> */}
        </AwesomeSlider>
        <div className="aprendizado">
            <h2 className="aprendizado-title">Aprendizado fluido</h2>
            <p className="aprendizado-description">Experiência humanizada no contexto de conversa que facilita o aprendizado e o torna mais fluido e simples :)</p>
        </div>
        <img className="celular" src={celular} alt="celular"/>
        <img className="triangulos" src={triangulos} alt="fundo"/>
        <div className="famoso">
            <img className="foto" src={fernando} alt="Fernando Paiva"/>
            <p className="aspas">“</p>
            <p className="quote">"É um formato contemporâneo que transforma o tempo ocioso em aprendizado”</p>
            <p className="autor">Fernando Paiva</p>
        </div>
      </div>
    );
  }
}

export default Help;
