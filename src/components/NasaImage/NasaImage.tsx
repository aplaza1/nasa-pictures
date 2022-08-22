import React, { useEffect, useState } from 'react';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

const API_KEY = 'a1bbeWI006WxvNpY7Oi6idM2s9gt70iRv2lzj5Rp'
const DATE = new Date(Date.now()).toISOString().split('T')[0]
 
const NasaImage = () => {

    const [podUrl, setpodUrl] = useState("")
    const [podMediatype, setPodMediaType] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`
            const response = await fetch(url)
            const data = await response.json()
            setpodUrl(data.url)
            setPodMediaType(data.media_type)
        }
        
        fetchData()
      }, [])

    return (
        <div>   
            {podMediatype === "video" ? 
                <YoutubeEmbed url={podUrl}/> : 
                <img src={podUrl}/>
            }
        </div>
    )
}

export default NasaImage