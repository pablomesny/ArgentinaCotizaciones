import { UsdPrices } from '../interfaces/UsdPrices';

interface Props {
  currencies: UsdPrices[];
  typeOfPrice: 'buy' | 'sale';
}

export const CurrencySelectList = ({ currencies, typeOfPrice }: Props) => {
  return (
    <select
      name="from"
      id="from"
      className="bg-light-aqua-green h-10 px-1 rounded-md"
    >
      <option value={1}>AR$</option>

      {currencies.map(currency => (
        <option
          key={currency.name}
          value={currency[typeOfPrice] ?? currency.sale}
        >
          {currency.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
