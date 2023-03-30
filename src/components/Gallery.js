import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtItem from "./ArtItem";
const Gallery = (props) => {
    const [artArray, setArtArray]=useState([])
    const [noArt, setNoArt] = useState(false);

    useEffect(() => {
        // make an AJAX Call to the reiksmusuem API
        const apiKey = "MWXSYrhN";

        axios({
            url: "https://www.rijksmuseum.nl/api/en/collection",
            method: "GET",
            dataResponse: "JSON",
            params: {
                key: apiKey,
                imgonly: true,
                involvedMaker: props.userChoice,
                toppieces: true,
            },
        }).then((response) => {
            console.log(response.data.artObjects);
            setArtArray(response.data.artObjects);
            console.log(artArray.length)
            if(artArray.length === 0){
                setNoArt(true)
            }else{
                setNoArt(false)
            }
        });
    }, [props.userChoice])
    return (
        <>
            {noArt ? 
            <>
                <p>no art, how sad</p>
            </>
            :
            <>
                <ul>
                
                {
                    artArray.map((artObject)=>{
                        return <ArtItem artObject={artObject} key={artObject.id} length={artArray.length}/>
                    })
                }
            </ul>
            </>
            }
        </>
        
            
        

    )
    
};

export default Gallery;
