import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { podApiProvider } from './api/PodApi';
import './App.css';
import DatePicker from './components/DatePicker/DatePicker';
import NasaImage from './components/NasaImage/NasaImage';

function App() {
  const [podUrl, setpodUrl] = useState("")
  const [podMediatype, setPodMediaType] = useState("")
  const [podExplanation, setPodExplanation] = useState("")
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
        const podData = await podApiProvider.fetchPodData(date)
        setpodUrl(podData.url)
        setPodMediaType(podData.media_type)
        setPodExplanation(podData.explanation)
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
