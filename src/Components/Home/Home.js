import React from 'react'
import photo from "../../Assets/krg.jpg"
import "./Home.css"
function Home() {
    return (
        <div className="container">
            <div className="grid-container">
                <div className="image">
                <img src={photo} />
                </div>
                 
                 <div className="content">
                    <h1>Welcome to my World!</h1>
                    <p>Welcome and thanks for visiting my website! I invite you to take a moment and look around.
                         To learn more about my background, experience, skills and how we could potentially work together, simply contact me.</p>
                 </div>

            </div>
            
        </div>
    )
}

export default Home
