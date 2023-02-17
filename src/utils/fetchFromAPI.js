import axios from "axios";

const BASE_URL = 'https://unofficial-shein.p.rapidapi.com';

const options = {
  params: {
    cat_id: '1980',
    adp: '10170797',
    language: 'en',
    country: 'US',
    currency: 'USD',
    sort: '7',
    limit: '20',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};