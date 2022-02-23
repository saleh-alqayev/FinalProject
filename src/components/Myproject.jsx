import React from 'react'
import Youtube from '../Components/img/youtube.jpeg'
import Google from '../Components/img/google.jpeg'
import Fb from '../Components/img/fb.jpeg'

function Myproject() {
  return (
    <div className="project-body">
          <h1>My Projects</h1>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Youtube} className="d-block w-100" alt="..."/>
        
      </div>
      <div className="carousel-item">
        <img src={Google}  className="d-block w-100" alt="..."/>
        
      </div>
      <div className="carousel-item">
        <img src={Fb} className="d-block w-100" alt="..."/>
        
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Myproject