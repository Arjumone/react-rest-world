import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";



const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountry,setVisitedCountry]=useState([]);
    const [visitedFlag,setVisitedFlag]=useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry = country =>{
        console.log('hello');
        const newVisitedCountry=[...visitedCountry,country]
        setVisitedCountry(newVisitedCountry)
    }
    const handleVisitedFlag=(flag)=>{
        // console.log('flag adding');
        const newVisitedFlag=[...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
    }

    

    return (
        <div>
            <h2 className="text-4xl  ">Countries:{countries.length}</h2>
            <div>
                <h2 className="text-2xl">Visited Country:{visitedCountry.length}</h2>
                <ul>
                    {
                        visitedCountry.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="w-10 h-10">
                   {
                    visitedFlag.map((flag,index) => <img key={index} src={flag} />)
                   }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                countries.map(country=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
                
            }
            </div>
        </div>
    );
};

export default Countries;