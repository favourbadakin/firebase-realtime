import React, { useState, useEffect } from 'react';
import { ref, onValue} from "firebase/database";
import { db } from '../lib/init-firebase';

export default function Parameters(){
    const [books, setBooks] = useState([]);


    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val();
            if( data !== null){
                // eslint-disable-next-line
                setBooks(data)
                // return(
                //     [...books]
                // )
            }
        }) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    const smokeDetector = books.smokeDetector;
    //console.log(smokeDetector)
    const temperature = books.temperature;
    const humidity = books.humidity;
    const lightIntensity = books.lightIntensity;
    const oxygenLevel = books.oxygenLevel;

//smokeDetector ? console.log('It is true'):console.log('It is false');

    // if( smokeDetector === false){
    //     console.log('It is false')
    // }else{
    //     console.log('It is true')
    // }

    return(
        <section>
            <p>Temperature: {temperature}</p>
            <p>Humidity: {humidity}</p>
            <p>Light Intensity: {lightIntensity}</p>
            <p>Oxygen level: {oxygenLevel}</p>
            <p>Smoke Detector: {smokeDetector ? <span>Smoke Detected</span> : <span>No smoke Detected</span>}</p> 
        </section>
    )}
    