import { UsdPrices } from '../interfaces/UsdPrices';
import { PriceItem } from './PriceItem';

interface Props {
  usdPrices: UsdPrices[];
}

export const PriceList = ({ usdPrices }: Props): JSX.Element[] => {
  return usdPrices.map(price => {
    switch (price.name) {
    case 'oficial':
      price.name = 'DOLAR OFICIAL';
      break;

    case 'blue':
      price.name = 'DOLAR BLUE';
      break;

    case 'bolsa':
      price.name = 'DOLAR BOLSA';
      break;

    case 'contadoConLiquidacion':
      price.name = 'DOLAR CCL';
      break;

    case 'solidario':
      price.name = 'DOLAR SOLIDARIO';
      break;

    case 'mayorista':
      price.name = 'DOLAR MAYORISTA';
      break;

    default:
      break;
    }

    return (
      <PriceItem
        key={price.name}
        name={price.name}
        buyPrice={price.buy}
        salePrice={price.sale}
      />
    );
  });
};
