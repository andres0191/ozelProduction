import './style.scss';
import React, { useState, useEffect, useRef } from 'react';

export default function Boleteria(){
    const openModal = useRef(null);
    const myModal = useRef(null);
    const [validation, setValidation] = useState({
        userName: '',
        isName: false,
        userNumber: '',
        isNumber: false,
        userDni: '',
        isDni: false,
        userEmail: '',
        isEmail: false,
        userPassword: '',
        isPassword: false,
    });
    const userValidation = (event) =>{
            setValidation({
            userName: event.target.value
        });
        const regexForName = /^[A-Za-z]+$/.test(event.target.value);
        if(regexForName){
            setValidation({
                ...validation,
                'isName': true
            })
        }else {
            setValidation({
                ...validation,
                'isName': false
            })
        } 
        
    }
    const numberValidation = (event) =>{
        setValidation({
            ...validation,
            userNumber: event.target.value
        });
        const regexForNumber = /^\d*$/.test(event.target.value);
        if(regexForNumber){
            setValidation({
                ...validation,
                'isNumber': true
            })
        }else {
            setValidation({
                ...validation,
                'isNumber': false
            })
        }
    }
    const dniValidation = (event) =>{
        event.preventDefault();
        setValidation({
            ...validation,
            userDni: event.target.value
        });
        const regexForNumber = /^\d*$/.test(event.target.value);
        if(regexForNumber){
            setValidation({
                ...validation,
                'isDni': true
            })
        }else {
            setValidation({
                ...validation,
                'isDni': false
            })
        }
    }
    const emailValidation = (event) =>{
        event.preventDefault();
        setValidation({
            ...validation,
            userEmail: event.target.value
        });
        const regexForNumber = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(event.target.value);
        if(regexForNumber){
            setValidation({
                ...validation,
                'isEmail': true
            })
        }else {
            setValidation({
                ...validation,
                'isEmail': false
            })
        }
    }
    const passValidation = (event) =>{
        event.preventDefault();
        setValidation({
            ...validation,
            userName: event.target.value
        });
        const regexForName = /^\d*$/.test(event.target.value);
        if(regexForName){
            setValidation({
                ...validation,
                'isPassword': true
            })
        }else {
            setValidation({
                ...validation,
                'isPassword': false
            })
        }
    }
/* event.target.checked */
    const enviar = (event) =>{
        console.log(validation.isName, validation.isNumber, validation.isDni, validation.isEmail, validation.isPassword)
        if(validation.isName && validation.isNumber && validation.isDni && validation.isEmail && validation.isPassword ){
            myModal.current.removeAttribute('data-backdrop');
            openModal.current.click();
        }
    }
    useEffect(() => {
        openModal.current.click();

    },[])
    return(
        <div>
            <div class="modal fade" ref={myModal} data-backdrop="static" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" >
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Registrate!</h4>
                        </div>
                        <div class='modal-backgrop fade show'></div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="text" id="form34" class="form-control validate" onChange={userValidation} placeholder='Nombre' />
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-tag prefix grey-text"></i>
                                <input type="number" id="form32" class="form-control validate" onChange={ event => numberValidation(event)} placeholder='Telefono' />
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="number" id="form34" class="form-control validate" onChange={ event => dniValidation(event)} placeholder='Cedula' />
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <input type="email" id="form29" class="form-control validate" onChange={ event => emailValidation(event)} placeholder='Correo' />
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="password" id="form34" class="form-control validate" onChange={ event => passValidation(event)} placeholder='Contrasena' />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1"><a href='https://www.jordandesajonia.edu.co/SAJONIA2018/images/2019/Documentos/FORMATO%20DE%20AUTORIZACIO%CC%81N%20PARA%20EL%20TRATAMIENTO%20DE%20DATOS%20PERSONALES.pdf' >Autorizacion de datos personales</a></label>
                            </div>

                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-unique" onClick={event => enviar(event)}>Enviar<i class="fas fa-paper-plane-o ml-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <a ref={openModal} href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm" />
            </div>
            
        </div>
    )
}