import React from "react";

import jacuzzi from '../assets/images/jacuzzi.jpg'
import simple from '../assets/images/simple.jpg'
import king from '../assets/images/king.jpg'
import mirror from '../assets/images/mirror.jpeg'
import building from '../assets/images/building.jpg'

import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div id="wrap" >
        <div className="main-page-content">
          <div className="container-large">
            <div className="text-content">
              <h1>Hospedarse en lima nunca fue tan barato</h1>
              <p>Para que gastes tu dinero donde realmente lo necesites</p>
            </div>
            <div className="shot-content">
              <div className="shot-image"></div>
              <a
                target="_blank"
                href="https://www.freepik.com/free-photos-vectors/business"
              >
                Business vector created by pch.vector - www.freepik.com
              </a>
            </div>
          </div>
        </div>
        <div className="container-rooms">
          <div className="sub-title">
            <h2>Habitaciones</h2>
          </div>
          <div className="inner-wrap">
            <div id="content">
              <div id='main' className='main-full'>
                <ol className="shots-grid dribbles container-fluid">
                  <li>
                    <div className="shot-thumbnail-base">
                      <picture>
                        <img src={`${jacuzzi}`} alt=""/>
                      </picture>
                    </div>
                    <div className='shot-details-container'></div>
                  </li>
                  <li>
                    <div className="shot-thumbnail-base">
                      <picture>
                        <img src={`${simple}`} alt=""/>
                      </picture>
                    </div>
                    <div className='shot-details-container'></div>
                  </li>
                  <li>
                    <div className="shot-thumbnail-base">
                      <picture>
                        <img src={`${king}`} alt=""/>
                      </picture>
                    </div>
                    <div className='shot-details-container'></div>
                  </li>
                  <li>
                    <div className="shot-thumbnail-base">
                      <picture>
                        <img src={`${mirror}`} alt=""/>
                      </picture>
                    </div>
                    <div className='shot-details-container'></div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="information-content">
          <div className="sub-title">
            <h2>Información del Hotel</h2>
          </div>
          <div className='inner-wrap'>
            <div id='content'>
              <div className="container-info">
                <div className='text-content'>
                  <p>
                    Cuenta con estacionamiento privado y habitaciones con amplio confort, preferidas por los clientes.

                    Tenemos a su disponibilidad 127 habitaciones, las cuales podrá disfrutar por 6 horas.

                    En la mayoría de habitaciones podrás encontrar: Tv, mini bar, música, pole dance, cámara seca, ducha española, jacuzzi, luces, sillones tántricos.
                    
                    Te ofrecemos la oportunidad de escaparte completamente. Ven y disfruta de lo que más te gusta.
                  </p>
                </div>
                <div className='shot-content'>
                  <img src={building} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
