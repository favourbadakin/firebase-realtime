import React, { useState, useEffect } from 'react';
import { ref, onValue} from "firebase/database";
import { db } from '../lib/init-firebase';

export default function Parameters(){

    const[books, setBooks] = useState({});


    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val();
            //console.log(data);
            if( data !== null){
                setBooks(data)
                return(
                    books.temperature
                )
            }
        }) 
    }, []);

const smokeDetector = books.smokeDetector

    function handleSmoke(){
    if(smokeDetector===true){
        return 'yes'
    }else{
        return 'no'
    }
}
    
    const temperature = books.temperature;
    const humidity = books.humidity;
    const lightIntensity = books.lightIntensity;
    const oxygenLevel = books.oxygenLevel;


    return(
        <section>
            <p>Temperature: {temperature}</p>
            <p>Humidity: {humidity}</p>
            <p>Light Intensity:{lightIntensity}</p>
            <p>Oxygen level: {oxygenLevel}</p>
            <p>Smoke Detector: {smokeDetector}</p> 
        </section>
    )}
    