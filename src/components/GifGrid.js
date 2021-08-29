import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs();
    }, [])

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=F4tMfSzlQYzZFM4iS4kQl2O4NxDipcDn';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages( gifs );
    }

    return (
        <>
            <h3> { category }</h3>
            <ol>
                {
                    images.map((imagen) => {
                        return <li key= { imagen.id }><h1>{ imagen.title }</h1><img src={ imagen.url } alt="Rick and Morty image"/></li>
                    })
                }
            </ol>
        </>
    )
}
