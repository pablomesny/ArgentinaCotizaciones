import { useEffect } from 'react';
import { useCurrencyCalculator } from '../hooks';
import { UsdPrices } from '../interfaces';
import { CurrencySelectList, SwapIcon } from './';

interface Props {
  usdPrices: UsdPrices[];
}


export const Converter = ({ usdPrices }: Props ) => {

  const { values, amount, calculationResult, onValuesChange, onSelectChange, onAmountChange } = useCurrencyCalculator();

  const { firstValue, secondValue } = values;

  useEffect(() => {
    if( usdPrices.length > 0 ) {
      onValuesChange({
        firstValue: {
          currency: usdPrices[1].name.toUpperCase(),
          value: usdPrices[1].buy
        },
        secondValue: {
          currency: 'PESOS ARGENTINOS',
          value: 1
        }
      });
    }
  }, [usdPrices]);

  return (
    <div className="neumorphism transition animate-from-back h-96 flex flex-col items-center justify-center">
      <div className="w-11/12 h-5/6 flex flex-col">
        <form className="flex flex-col items-center gap-2">
          
          <CurrencySelectList currencies={ usdPrices } initialValue={ firstValue.value } typeOfPrice="buy" onChange={ onSelectChange } name="firstValue" />

          <button className="h-6 w-6">
            <SwapIcon />
          </button>

          <CurrencySelectList currencies={ usdPrices } initialValue={ secondValue.value } typeOfPrice="sale" onChange={ onSelectChange } name="secondValue" />
          
        </form>

        <div className="flex flex-col ml-2 justify-center my-auto">
          <p className="text-white text-md">IMPORTE</p>

          <form>
            <input
              name="amount"
              type="text"
              className="bg-light-aqua-green h-10 px-1 rounded-md"
              value={ amount }
              onChange={ onAmountChange }
            />
          </form>
        </div>

        <div className="flex flex-col ml-2 mr-auto text-white mt-auto justify-end">
          <p className="text-lg">$ {`${amount} ${firstValue.currency}`}</p>

          <p className="text-lg">=</p>

          <p className="text-2xl font-semibold">$ {`${calculationResult} ${secondValue.currency}`}</p>
        </div>
      </div>
    </div>
  );
};
