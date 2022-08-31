const API_KEY = 'a1bbeWI006WxvNpY7Oi6idM2s9gt70iRv2lzj5Rp'

const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`
  }

const fetchPodData = async (date: Date) => {
    // const url = `http://35.203.189.118/v1/apod/?date=${formatDate(date)}`
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formatDate(date)}`
    const response = await fetch(url)
    return response.json()
}

export const podApiProvider = {
    fetchPodData
}