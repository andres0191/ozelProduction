import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from "react-icons";

export default function Footer(){
    return(
        <div >
            <div className='footer'>
                <img src="https://ozelproducciones.com/app/themes/ozel/dist/images/iso-triangle-white.svg?id=1cb39a9af6741f0793b3" alt=""/>
                <p>Andres Garcia Porducitons, los mejores en eventos musicales</p>
                <div className='d-flex align-items-center'>
                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://facebook.com"  target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiFacebook /></p>
                            </a>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className='d-flex align-items-center'>
                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://twitter.com">
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiTwitter /></p>
                            </a>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className='d-flex align-items-center'>
                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://instagram.com">
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiInstagram /></p>
                            </a>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className='d-flex align-items-center'>
                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="mailto:felipe.garcia0191@gmail.com">
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <AiOutlineMail /></p>
                            </a>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}



























/* 
<footer class="hero is-dark is-medium radius-top">
                <div class="hero-body">
                    <div class="container">
                        <div class="column is-4 is-paddingless">
                            <img src="https://ozelproducciones.com/app/themes/ozel/dist/images/iso-triangle-white.svg?id=1cb39a9af6741f0793b3" alt=""/><br/>
                        </div>
                        <div class="columns">
                            <div class="column is-4 content is-small">
                                <p class="has-margin-top-20">Empresa de producción de eventos sociales y corporativos. Contamos con un talento humano de primera y con equipos de ultima generación dispuestos para cumplir con la experiencia Ozel producciones. Una empresa para salir de lo tradicional.</p>
                            </div>
                        <div class="column is-4">
                        <a href="tel:3013866322" class="button is-dark">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </span>
                            <span class="telefono">+57 (301) 386 63 22</span>
                        </a>
                        <a href="mailto:andres.bernal@ozelproducciones.com" class="button is-dark">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </span>
                            <span> andres.bernal@ozelproducciones.com</span>
                        </a>
                        <a target="_blank" href="https://maps.google.com/?q=Cra72No152B79Bogotá" class="button is-dark">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </span>
                            <span>Cra 72 # 152 B 79 Bogotá</span>
                        </a>
                        </div>
                        <div class="column is-4">
                            <ul id="menu-menu-2" class="">
                                <li class="menu-item menu-item-has-children menu-servicios"><a href="#">Servicios</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-servicios-para-eventos-virtuales">
                                            <a href="https://ozelproducciones.com/servicios-para-eventos-virtuales/">Servicios para Eventos Virtuales</a>
                                        </li>
                                        <li class="menu-item menu-eventos-presenciales">
                                            <a href="https://ozelproducciones.com/eventos-presenciales/">Eventos Presenciales</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children menu-sectores"><a href="#">Sectores</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-corporativo"><a href="https://ozelproducciones.com/corporativo/">Corporativo</a></li>
                                        <li class="menu-item menu-religioso"><a href="https://ozelproducciones.com/religioso/">Religioso</a></li>
                                        <li class="menu-item menu-cultural"><a href="https://ozelproducciones.com/cultural/">Cultural</a></li>
                                        <li class="menu-item menu-deportivo"><a href="https://ozelproducciones.com/deportivo/">Deportivo</a></li>
                                        <li class="menu-item menu-academico"><a href="https://ozelproducciones.com/academico/">Académico</a></li>
                                        <li class="menu-item menu-comunitario"><a href="https://ozelproducciones.com/comunitario/">Comunitario</a></li>
                                        <li class="menu-item menu-salud"><a href="https://ozelproducciones.com/salud/">Salud</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-ozel-tips"><a href="/tips">Ozel Tips</a></li>
                                <li class="modal-contacto menu-item menu-contacto"><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="has-margin-top-80 has-margin-bottom-90 is-opaque is-15"/>
                        <div class="level is-paddingless">
                            <div class="level-left">
                                <a href="#" class="button is-dark">
                                    <span class="icon is-large">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" class="button is-dark">
                                    <span class="icon is-large">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" class="button is-dark">
                                    <span class="icon is-large">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div class="level-right">
                                <div class="column">
                                    Copyright ® Ozel Producciones 20.
                                    Diseñado, Desarrolladoy y Mantenido por <a href="https://radikal.agency" class="link is-dark">Radikal
                                    Agency</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </footer> */