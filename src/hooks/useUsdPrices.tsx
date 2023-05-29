import { useEffect, useState } from 'react';
import { UsdPrices } from '../interfaces/UsdPrices';
import { usdPricesService } from '../services/usdPricesService';
import { createUsdAdapter } from '../adapters/usdAdapter';

export const useUsdPrices = () => {
  const [usdPrices, setUsdPrices] = useState<UsdPrices[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const usdPricesServiceData = async () => {
      try {
        const usdPrices = await usdPricesService(abortController);
        const data = createUsdAdapter(usdPrices);

        setUsdPrices(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    usdPricesServiceData();

    return () => abortController.abort();
  }, []);

  return {
    usdPrices
  };
};
