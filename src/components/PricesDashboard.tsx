import { PriceList, Skeleton } from './';
import { useUsdPrices } from '../hooks/useUsdPrices';

export const PricesDashboard = () => {
  const { usdPrices } = useUsdPrices();

  return (
    <div className="neumorphism transition animate-from-back h-96 flex flex-col">
      <div className="container grid grid-cols-2 place-items-center mb-2 w-11/12 h-5/6 flex-wrap gap-3 mx-auto mt-5">
        {usdPrices.length === 0 ? (
          <>
            <Skeleton className={'price-skeleton'} />
            <Skeleton className={'price-skeleton'} />
            <Skeleton className={'price-skeleton'} />
            <Skeleton className={'price-skeleton'} />
            <Skeleton className={'price-skeleton'} />
            <Skeleton className={'price-skeleton'} />

            <Skeleton className={'update-skeleton'} />
          </>
        ) : (
          <PriceList usdPrices={ usdPrices } />
        )}
      </div>
    </div>
  );
};
