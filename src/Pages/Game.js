import React, { useState } from 'react'; 
import '../Css/game.scss'; 
import { fortunes } from '../data/fortunes'; 

function Game() {

    //useState 
    const [pageState, setPageState] = useState("Name"); 

    const [name, setName] = useState(""); 
    const [age, setAge] = useState(""); 
    const [hobby, setHobby] = useState(""); 
    const [color, setColor] = useState(""); 
    
    const [randomNum, setRandomNum] = useState(0); 

    //functions 
    const handleNameSubmit = e => {
        e.preventDefault();
        console.log(`The name you entered was: ${name}`); 
        setPageState("Age"); 
    }

    const handleNameChange = e => {
        e.preventDefault(); 
        setName(e.target.value); 
    }

    const handleAgeSubmit = a => {
        console.log("age: " + a); 
        setAge(a); 
        console.log("You are " + age + " years old"); 
        setPageState("Hobby"); 
    }

    const handleHobbySubmit = a => {
        console.log("hobby: " + a); 
        setHobby(a); 
        console.log("Your preferred hobby is: " + hobby); 
        setPageState("Color"); 
    }

    const handleColorSubmit = a => {
        console.log("color: " + a); 
        setColor(a); 
        console.log("your favorite color is: " + color); 
        getRandomNumber(); 
        setPageState("Answer"); 
    }

    const getRandomNumber = () => {
        setRandomNum(Math.floor(Math.random() * (5 - 0 + 1)) + 0);
    }

  return (
    <div className="game-page">

        {
            pageState === "Name" ? 

            <div className="component-state-page">
                <h1>Question 1</h1>
                <h3>What is your name?</h3>
                <form className="input-container" onSubmit={handleNameSubmit} onChange={handleNameChange}>
                    <input placeholder="Type in name here" value={name} onChange={handleNameChange} /> 
                    <button type="submit">Next</button>
                </form>
            </div>

            : 

            pageState === "Age" ? 

            <div className="component-state-page">
                <h1>Question 2</h1>
                <h3>How old are you?</h3>
                <form className="input-container">
                    <div className="radio-container">
                        <div className="radio" onClick={() => handleAgeSubmit("5-7")}>
                            5-7
                        </div>
                        <div className="radio" onClick={() => handleAgeSubmit("8-10")}>
                            8-10
                        </div>
                        <div className="radio" onClick={() => handleAgeSubmit("11-13")}>
                            11-13
                        </div>
                        <div className="radio" onClick={() => handleAgeSubmit("14-16")}>
                            14-16
                        </div>
                    </div>
                </form>
            </div>

            : 

            pageState === "Hobby" ? 

            <div className="component-state-page">
                <h1>Question 3</h1>
                <h3>What is your preferred hobby?</h3>
                <form className="input-container">
                    <div className="radio-container">
                        <div className="radio" onClick={() => handleHobbySubmit("Sports")}>
                            Sports
                        </div>
                        <div className="radio" onClick={() => handleHobbySubmit("Reading")}>
                            Reading
                        </div>
                        <div className="radio" onClick={() => handleHobbySubmit("Video Games")}>
                            Video Games
                        </div>
                        <div className="radio" onClick={() => handleHobbySubmit("Tiktok")}>
                            Chess
                        </div>
                    </div>
                </form>
            </div>

            : 

            pageState === "Color" ? 

            <div className="component-state-page">
                <h1>Question 4</h1>
                <h3>What is your favorite color?</h3>
                <form className="input-container">
                    <div className="radio-container" style={{gridTemplateColumns: "repeat(auto-fit,minmax(275px,3fr))", width: "875px" }}>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Red")}>
                            <div id="red"></div>
                            Red
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Yellow")}>
                            <div id="yellow"></div>
                            Yellow
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Blue")}>
                            <div id="blue"></div>
                            Blue
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Orange")}>
                            <div id="orange"></div>
                            Orange
                        </div>
                        <div className="radio" id="color"onClick={() => handleColorSubmit("Green")}>
                            <div id="green"></div>
                            Green
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Purple")}>
                            <div id="purple"></div>
                            Purple
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Pink")}>
                            <div id="pink"></div>
                            Pink
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Brown")}>
                            <div id="brown"></div>
                            Brown
                        </div>
                        <div className="radio" id="color" onClick={() => handleColorSubmit("Gray")}>
                            <div id="gray"></div>
                            Gray
                        </div>
                    </div>
                </form>
            </div>

            : 

            pageState === "Answer" ? 

            <div className="component-state-page">
                <h1>Your Fortune</h1>
                {/* <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{hobby}</h1>
                <h1>{color}</h1>
                <h1>{randomNum}</h1> */}
                <h3 id="small-text">{fortunes[Math.floor(Math.random() * (9 - 0 + 1)) + 0]}</h3>
            </div>

            : 

            <div className="component-state-page">
                
            </div>
        }
        
    </div>
  )
}

export default Game