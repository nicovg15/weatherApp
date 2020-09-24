import React from 'react'
import '../css files/home.css'
import { FaSun } from 'react-icons/fa';
import { WiDayCloudy } from 'react-icons/wi';
import { WiRainMix } from 'react-icons/wi';

function Home(){

    return(
        <div className="title-box">
            <h1 className="title">Select a city or country</h1>
            <div className="icon-box">
                <FaSun className="sun"/>
                <WiDayCloudy className="cloud"/>
                <WiRainMix className="rain"/>
            </div>
        </div>
    )
}

export default Home