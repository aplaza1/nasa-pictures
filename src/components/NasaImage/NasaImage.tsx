import React, { useEffect, useState } from 'react';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

type NasaImageProps = {
    podMediaType: string,
    podUrl: string
}

const NasaImage = (props: NasaImageProps) => {
    const {podMediaType, podUrl} = props

    return (
        <div>   
            {podMediaType === "video" ? 
                <YoutubeEmbed url={podUrl}/> : 
                <img src={podUrl}/>
            }
        </div>
    )
}

export default NasaImage