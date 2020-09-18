import React from 'react';
import imagen1 from '../images/evento/2019-7.jpg';
import imagen2 from '../images/evento/2019-2.jpg';
import imagen3 from '../images/evento/2019-3.jpg';
import imagen4 from '../images/evento/2019-4.jpg';
import imagen5 from '../images/evento/2019-5.jpg';
import imagen6 from '../images/evento/2019-6.jpg';
import imagen7 from '../images/evento/2019-7.jpg';
import event1 from '../images/evento1/acdc.jpeg';
import event2 from '../images/evento1/andrerieu.jpg';
import event3 from '../images/evento1/filarmonicaBgta.jpg';
import event4 from '../images/evento1/teatro.jpg'
import './style.scss';


export default function Home(){
    return(
        <div className='father'>
        <h1 className='title'>TOMORROWLAND 2020</h1>
        <div className='carouselCenter'>
            <div id="carouselExampleIndicators" class="carousel slide imagenes" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner ">
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
        <div className='containerCards'>
            <div class="card etiquetas" 
            className='cardStyleEvent'>
                    <img class="card-img-top" src={event1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">AC - DC</h5>
                    <p class="card-text">AC/DC surgió en 1973 en Sydney. La banda fue fundada por los hermanos Malcolm y Angus Young procedentes de Escocia.
                    Su estilo ha sido siempre reconocido por la extravagancia del sonido de la guitarra de Angus Young, que suele ir vestido con uniforme de colegial.</p>
                    <a target='_blank' href="https://www.wegow.com/es-co/artistas/acdc" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card etiquetas" className='cardStyleEvent'>
                    <img class="card-img-top" src={event2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Andre Rieu</h5>
                    <p class="card-text">Inició su carrera musical siendo niño y perteneció a diversas orquestas hasta que en 1987 fundó la propia, con el nombre neerlandés de "Johann Strauss Orkest" y a partir del año siguiente empezó su fulgurante carrera de éxitos por todo el mundo, comenzando por su propia patria.</p>
                    <a target='_blank' href="https://www.andrerieu.com/es/tour" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card etiquetas"  className='cardStyleEvent'>
                    <img class="card-img-top" src={event3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Filarmonica Bgta</h5>
                    <p class="card-text">La Orquesta Filarmónica de Bogotá, entidad adscrita a la Alcaldía Mayor desde el Sector Cultura, apoya y acoge a las medidas dictadas por la Alcaldía de Bogotá y el Gobierno Nacional, para mitigar la propagación de virus COVID-19 y garantizar el bienestar del público, de sus músicos y colaboradores</p>
                    <a target='_blank' href="https://filarmonicabogota.gov.co/" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card etiquetas"  className='cardStyleEvent'>
                    <img class="card-img-top" src={event4} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Teagro en Casa</h5>
                    <p class="card-text">El teatro es importante para el ser humano ya que le permite expresar a través de la interpretación de historias reales o ficticias emociones, miedos, sensaciones, dudas, inquietudes y a través de ellas apelar a un público que se siente más o menos cercano a esas realidades e identificarse con ellas.</p>
                    <a target='_blank' href="https://www.salallena.com/eventos/g%C3%A9nero/Teatro/4" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
      </div>
    )
}