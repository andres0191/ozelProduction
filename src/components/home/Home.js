import React from 'react';
import './style.scss';
import imagen1 from '../images/evento/2019-7.jpg';
import imagen2 from '../images/evento/2019-2.jpg';
import imagen3 from '../images/evento/2019-3.jpg';
import event1 from '../images/evento1/maxresdefault.jpg';
import event2 from '../images/evento1/andrerieu.jpg';
import event3 from '../images/evento1/filarmonicaBgta.jpg';
import Fondo from '../images/fondo/marshmellow.jpg';
import { IconContext } from "react-icons";
import { MdDateRange } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';
import { SiMixer } from 'react-icons/si';
import { TiTicket } from 'react-icons/ti';




export default function Home(){
    return(
        <div>
            <div className='titulo'>
                <strong><p>TOMORROWLAND</p></strong>
            </div>
            <div className='dataandCarouserl'>
                <div className='dataEventResponsive'>
                    <div>
                        <ul className='datosEvento1'>
                            <li>
                                <IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                                    <div>
                                        <a href="/Boleteria" target='_blank'>
                                           <strong><p className="float-right iconcenter" style={{margin: 10, color: 'rgb(231, 61, 209)'}}>
                                        <MdDateRange /> Nov. 20</p></strong>
                                        </a>
                                    </div>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                                    <div>
                                        <a href="/Boleteria" target='_blank'>
                                        <strong><p className="float-right iconcenter" style={{margin: 10, color: 'rgb(231, 61, 209)'}}>
                                            <BiMap /> Bélgica</p></strong>
                                        </a>
                                    </div>
                                </IconContext.Provider>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='datosEvento'>
                            <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                                    <div>
                                        <a href="/Boleteria" target='_blank'>
                                        <strong><p className="float-right iconcenter" style={{margin: 10, color: 'rgb(231, 61, 209)'}}>
                                            <SiMixer />DJ Mundiales!</p></strong>
                                        </a>
                                    </div>
                                </IconContext.Provider></li>
                            <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                                    <div>
                                        <a href="/Boleteria" target='_blank'>
                                        <strong><p className="float-right iconcenter" style={{margin: 10, color: 'rgb(231, 61, 209)'}}>
                                            <TiTicket />Entradas!!</p></strong>
                                        </a>
                                    </div>
                                </IconContext.Provider></li>
                        </ul>
                    </div>
                </div>
                <div className='carouselCenter slidesCarousel'>
                    <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner slidesCarousel">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src={imagen1} alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src={imagen2} alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src={imagen3} alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='titulo'>
                <strong><p>Proximos Eventos...</p></strong>
            </div>
            <div className='containerCards'>
                <ul className='proxEventos'>
                    <li className='event'>
                        <div class="card" className='cardStyleEvent' style={{display: 'flex', flexFlow: 'column'}}>
                                <img class="imgCard" style={{borderRadius: '10',}} src={event1} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">AC - DC</h5>
                                <p class="card-text pCards">AC/DC surgió en 1973 en Sydney. La banda fue fundada por los hermanos Malcolm y Angus Young procedentes de Escocia.
                                Su estilo ha sido siempre reconocido por la extravagancia del sonido de la guitarra de Angus Young, que suele ir vestido con uniforme de colegial.</p>
                                <a target='_blank' href="https://www.wegow.com/es-co/artistas/acdc" class="btn btn-primary" style={{backgroundColor: '#E973DB', borderColor: 'white', color: 'white'}}>Ver mas</a>
                            </div>
                        </div>
                    </li>
                    <li className='event'>
                        <div class="card" className='cardStyleEvent' style={{display: 'flex', flexFlow: 'column'}}>
                                <img class="imgCard" style={{borderRadius: '10'}} src={event2} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Andre Rieu</h5>
                                <p class="card-text pCards">Inició su carrera musical siendo niño y perteneció a diversas orquestas hasta que en 1987 fundó la propia, con el nombre neerlandés de "Johann Strauss Orkest" y a partir del año siguiente empezó su fulgurante carrera de éxitos por todo el mundo, comenzando por su propia patria.</p>
                                <a target='_blank' href="https://www.andrerieu.com/es/tour" class="btn btn-primary" style={{backgroundColor: '#E973DB', borderColor: 'white', color: 'white'}}>Ver mas</a>
                            </div>
                        </div>
                    </li>
                    <li className='event' style={{borderRadius: '10'}}>
                        <div class="card"  className='cardStyleEvent' style={{display: 'flex', flexFlow: 'column'}}>
                                <img class="imgCard" style={{borderRadius: '10'}} src={event3} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Filarmonica Bogotá</h5>
                                <p class="card-text pCards">La Orquesta Filarmónica de Bogotá, entidad adscrita a la Alcaldía Mayor desde el Sector Cultura, apoya y acoge a las medidas dictadas por la Alcaldía de Bogotá y el Gobierno Nacional, para mitigar la propagación de virus COVID-19 y garantizar el bienestar del público, de sus músicos y colaboradores</p>
                                <a target='_blank' href="https://filarmonicabogota.gov.co/" class="btn btn-primary" style={{backgroundColor: '#E973DB', borderColor: 'white', color: 'white'}}>Ver mas</a>
                            </div>
                        </div>
                    </li>
                </ul>                
            </div>
        </div>
    )
}
