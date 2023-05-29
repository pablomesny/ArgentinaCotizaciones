import { USD_ENDPOINT } from '../constants/constants';

export const usdPricesService = async (abortController: AbortController) => {
  const { signal } = abortController;

  try {
    const resp = await fetch(USD_ENDPOINT, { signal });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
