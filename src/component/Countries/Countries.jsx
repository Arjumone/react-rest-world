import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountry,setVisitedCountry]=useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry=country=>{
        console.log('hello');
        console.log(country);
    }
    return (
        <div>
            <h2 className="text-4xl  ">Countries:{countries.length}</h2>
            <div>
                <h2 className="text-2xl">Visited Country:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                countries.map(country=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;