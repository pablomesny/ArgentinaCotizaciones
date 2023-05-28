import { useEffect, useState } from 'react';
import { UsdPrices } from '../interfaces/UsdPrices';
import { getUsdPrices } from '../services/getUsdPrices';
import { createUsdAdapter } from '../adapters/usdAdapter';

export const useUsdPrices = () => {
  const [usdPrices, setUsdPrices] = useState<UsdPrices[]>([]);

  useEffect(() => {
    const getUsdPricesData = async () => {
      const usdPrices = await getUsdPrices();
      const data = createUsdAdapter(usdPrices);

      setUsdPrices(data);
    };

    getUsdPricesData();
  }, []);

  return {
    usdPrices
  };
};
