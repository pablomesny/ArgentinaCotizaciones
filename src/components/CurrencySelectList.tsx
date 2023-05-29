import { ChangeEvent } from 'react';
import { UsdPrices } from '../interfaces/UsdPrices';

interface Props {
  currencies: UsdPrices[];
  typeOfPrice: 'buy' | 'sale';
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrencySelectList = ({ currencies, typeOfPrice, name, onChange }: Props) => {
  return (
    <select
      name={ name }
      id={ name }
      className="bg-light-aqua-green h-10 px-1 rounded-md"
      onChange={ onChange }
    >
      <option value={1}>PESOS ARGENTINOS</option>

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
