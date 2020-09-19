import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { GoLocation } from 'react-icons/go';
import { BiPhone } from 'react-icons/bi';
import { FiYoutube } from 'react-icons/fi';


export default function Footer(){
    return(
        <div className='footer'>
            <div className="logo">
                <img src="https://ozelproducciones.com/app/themes/ozel/dist/images/iso-triangle-white.svg?id=1cb39a9af6741f0793b3" alt=""/>
            </div>
            <div className='text' style={{ width:'auto'}}>
                <p>Contamos con un talento humano de primera y con equipos de ultima generación dispuestos para cumplir con la experiencia Ozel producciones.</p>
            </div>
            <div>
                <ul className='socialNetworks'>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://instagram.com" target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiInstagram /></p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://facebook.com" target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiFacebook /></p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://twitter.com" target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10}}>
                                <FiTwitter /></p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://youtube.com"  target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10, color: 'white'}}>
                                <FiYoutube /></p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                </ul>
            </div>
            <div>
                <ul className='contact'>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://www.google.com/maps/?hl=es"  target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10, width:'auto', color: 'white'}}>
                                <GoLocation />Cra 72 # 152 B 79 Bogotá</p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="https://wa.link/7o1kcm"  target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10, width:'auto', color: 'white'}}>
                                <BiPhone />+57 (301) 386 63 22</p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                    <li><IconContext.Provider value={{ color:"#EEB1DE", className: "global-class-name", size:'1em', size:'1.5em'}} >
                        <div>
                            <a href="mailto: andres.bernal@ozelproducciones.com" target='_blank'>
                                <p className="float-right iconcenter" style={{margin: 10, width:'auto', color: 'white'}}>
                                <AiOutlineMail />Ponte en contacot con nostros</p>
                            </a>
                        </div>
                    </IconContext.Provider></li>
                </ul>
            </div>
        </div>
    )
}
