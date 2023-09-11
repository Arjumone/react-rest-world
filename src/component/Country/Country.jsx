import { useState } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";


const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    // console.log(country);
    // console.log(handleVisitedCountry);
    const {name,flags,population,area,cca3}=country
    // console.log(name);
    const [visited,setVisited]=useState(false)
     const handleVisited= () =>{
        setVisited(!visited)
     }

     

    return (
        <div className=" border-8 rounded-lg  m-3 lg:ps-20 gap-12">
            <img className="h-72 w-72" src={flags.png} alt="" />
            <h2 style={{color:visited?'purple':'skyblue'}} className="text-2xl  font-bold">{name.common}</h2>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)} className="btn my-2">Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)} className="btn my-2">Add flag</button>
            <br />
            <button onClick={handleVisited} className="btn border-2 items-center">{visited ?'visited':'going'}</button>
            {visited&& 'I have visited this country'}
            {visited?'I have visited this country':'I want to visit'}
            <hr />
            <CountryDetails>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlag={handleVisitedFlag}
            </CountryDetails>
        </div>
    );
};

export default Country;