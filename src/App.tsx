import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import DatePicker from './components/DatePicker/DatePicker';
import NasaImage from './components/NasaImage/NasaImage';


const API_KEY = 'a1bbeWI006WxvNpY7Oi6idM2s9gt70iRv2lzj5Rp'

function App() {
  const [podUrl, setpodUrl] = useState("")
  const [podMediatype, setPodMediaType] = useState("")
  const [podExplanation, setPodExplanation] = useState("")
  const [date, setDate] = useState(new Date())

  const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`
  }

  useEffect(() => {
    const fetchData = async () => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formatDate(date)}`
        const response = await fetch(url)
        const data = await response.json()
        setpodUrl(data.url)
        setPodMediaType(data.media_type)
        setPodExplanation(data.explanation)
    }
    
    fetchData()
  }, [date])

  return (
    <Stack spacing={2}>
      <Typography variant='h2'> Astronomy Picture of the Day </Typography>
      <DatePicker setDate={setDate} date={date}/>
      <Typography variant='body1'> {podExplanation} </Typography>
      <NasaImage podMediaType={podMediatype} podUrl={podUrl}/>
    </Stack>
  );
}

export default App;
