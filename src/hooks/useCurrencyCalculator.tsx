import { ChangeEvent, useEffect, useState } from 'react';
import { CurrenciesCalculation } from '../interfaces';

export const useCurrencyCalculator = (initialValue: CurrenciesCalculation) => {
  const [values, setValues] = useState<CurrenciesCalculation>(initialValue);
  const [amount, setAmount] = useState<number>( 0 ); 
  const [calculationResult, setCalculationResult] = useState<number>();

  useEffect(() => {
    const { firstValue, secondValue } = values;

    setCalculationResult( parseFloat(((firstValue.value * amount) / secondValue.value).toFixed(3)) );
  }, [ amount, values ]);

  const onSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const { name, value, selectedOptions } = target;

    setValues(prev => ({
      ...prev,
      [name]: {
        currency: selectedOptions[0].outerText,
        value
      }
    }));
  };

  const onAmountChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAmount( parseFloat(target.value) );
  };

  return {
    amount,
    calculationResult,
    values,
    onSelectChange,
    onAmountChange
  };
};
