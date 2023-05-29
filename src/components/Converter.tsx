import { useState } from 'react';
import { UsdPrices } from '../interfaces/UsdPrices';
import { CurrencySelectList, SwapIcon } from './';

interface Props {
  usdPrices: UsdPrices[];
}

export const Converter = ({ usdPrices }: Props ) => {
  return (
    <div className="neumorphism transition animate-from-back h-96 flex flex-col items-center justify-center">
      <div className="w-11/12 h-5/6 flex flex-col">
        <form className="flex flex-col items-center gap-2">
          
          <CurrencySelectList currencies={ usdPrices } typeOfPrice="sale" />

          <button className="h-6 w-6">
            <SwapIcon />
          </button>

          <CurrencySelectList currencies={ usdPrices } typeOfPrice="buy" />
          
        </form>

        <div className="flex flex-col ml-2 justify-center my-auto">
          <p className="text-white text-md">IMPORTE</p>

          <form className="">
            <input
              type="number"
              className="bg-light-aqua-green h-10 px-1 rounded-md"
            />
          </form>
        </div>

        <div className="flex flex-col ml-2 mr-auto text-white mt-auto justify-end">
          <p className="text-lg">xxx PESOS ARG</p>

          <p className="text-lg">=</p>

          <p className="text-2xl font-semibold">XXX USD OFICIAL</p>
        </div>
      </div>
    </div>
  );
};
