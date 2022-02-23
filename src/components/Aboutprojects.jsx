import React from 'react'
import Youtube from '../Components/img/youtube.jpeg'
import Todo from '../Components/img/todo.jpeg'
import Musicplayer from '../Components/img/musicplayer.jpeg'

function Aboutprojects() {
  return (
    <div className='projects'>
        <div className="flip-card1">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Youtube} alt="" className='img-youtube'/>
                </div>
                <div className="flip-card-back">
                    <h2>Youtube Clone</h2>
                    <p>This Is Youtube clone . I used to HTML and CSS . I spent 2 days on this project</p>
                </div>
            </div>
        </div>

        <div className="flip-card2">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Todo} alt="" className='img-todo'/>
                </div>
                <div className="flip-card-back">
                    <h2>To do App</h2>
                    <p>This Is To do App . I used to HTML , CSS and Javascript . You can record your behaviour that you must do in this project.</p>
                </div>
            </div>
        </div>

        <div className="flip-card3">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Musicplayer} alt="" className='img-musicplayer'/>
                </div>
                <div className="flip-card-back">
                    <h2>Music Player App</h2>
                    <p>This Is Music Player App . I used to HTML , Javascrpit and CSS . You can listen , reply and stop music in this app</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutprojects