import React from 'react'; 
import '../Css/main.scss'; 
import { Link } from "react-router-dom"; 

function Main() {
  return (
    <div className="main-page">

        <div className="title-container">
            <h1>Magic 8 Ball</h1>
            <h3>What's your fortune?</h3>
        </div>

        <div className="sub-container">
            <Link to="/Game">
                <button>Shake</button>
            </Link>
        </div>

    </div>
  )
}

export default Main
