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
    'X-RapidAPI-Key': '40171cf2c0msh9659b9fbac0a11cp17298djsn0287579be5d7',
    'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};