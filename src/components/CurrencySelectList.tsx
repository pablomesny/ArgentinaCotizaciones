import { ChangeEvent } from 'react';
import { UsdPrices } from '../interfaces/UsdPrices';

interface Props {
  currencies: UsdPrices[];
  typeOfPrice: 'buy' | 'sale';
  name: string;
  initialValue: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrencySelectList = ({ currencies, initialValue, typeOfPrice, name, onChange }: Props) => {
  return (
    <select
      name={ name }
      id={ name }
      value={ initialValue }
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
