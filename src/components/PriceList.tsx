import { UsdPrices } from '../interfaces/UsdPrices';
import { PriceItem } from './PriceItem';

interface Props {
  usdPrices: UsdPrices[];
}

export const PriceList = ({ usdPrices }: Props) => {
  return (
    <>
      {usdPrices.map(price => (
        <PriceItem
          key={price.name}
          name={price.name}
          buyPrice={price.buy}
          salePrice={price.sale}
        />
      ))}
    </>
  );
};
