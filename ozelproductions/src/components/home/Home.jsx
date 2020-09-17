import React from 'react';
import imagen1 from '../images/evento/2019-7.jpg';
import imagen2 from '../images/evento/2019-2.jpg';
import imagen3 from '../images/evento/2019-3.jpg';
import imagen4 from '../images/evento/2019-4.jpg';
import imagen5 from '../images/evento/2019-5.jpg';
import imagen6 from '../images/evento/2019-6.jpg';
import imagen7 from '../images/evento/2019-7.jpg';
import './style.scss';


export default function Home(){
    return(
        <div>
        <p>TOMORROWLAND 2020</p>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-flex p-fixed imagenes justify-content-center" src={imagen1} alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-felx imagenes justify-content-center" src={imagen2} alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-flex imagenes justify-content-center" src={imagen3} alt="Third slide"/>
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
        <div>
            <div class="card" style={{width: '18%'}}>
                    <img class="card-img-top" src={imagen4} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: '18%'}}>
                    <img class="card-img-top" src={imagen5} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: '18%'}}>
                    <img class="card-img-top" src={imagen6} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: '18%'}}>
                    <img class="card-img-top" src={imagen7} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
      </div>
    )
}