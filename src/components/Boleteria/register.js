import React from 'react';
import { useEffect, useRef } from 'react'

export default function Boleteria(){
    const openModal = useRef(null);

    useEffect(() => {
        
        openModal.current.click()
    })
    return(
        <div>
            <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="text" id="form34" class="form-control validate"/>
                                <label data-error="wrong" data-success="right" for="form34">Nombre</label>
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-tag prefix grey-text"></i>
                                <input type="number" id="form32" class="form-control validate"/>
                                <label data-error="wrong" data-success="right" for="form32">Telefono</label>
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="number" id="form34" class="form-control validate"/>
                                <label data-error="wrong" data-success="right" for="form34">Cedula</label>
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <input type="email" id="form29" class="form-control validate"/>
                                <label data-error="wrong" data-success="right" for="form29">Correo</label>
                            </div>
                            <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="password" id="form34" class="form-control validate"/>
                                <label data-error="wrong" data-success="right" for="form34">Contrasena</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1"><a href='https://www.jordandesajonia.edu.co/SAJONIA2018/images/2019/Documentos/FORMATO%20DE%20AUTORIZACIO%CC%81N%20PARA%20EL%20TRATAMIENTO%20DE%20DATOS%20PERSONALES.pdf' >Autorizacion de datos personales</a></label>
                            </div>

                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-unique">Enviar<i class="fas fa-paper-plane-o ml-1"></i></button>
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