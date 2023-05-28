import { USD_ENDPOINT } from '../constants/constants';

export const getUsdPrices = async() => {
  try {
    const resp = await fetch(USD_ENDPOINT);
    const data = await resp.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
