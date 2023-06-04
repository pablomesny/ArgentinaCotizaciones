import { ChangeEvent, useEffect, useState } from 'react';
import { CurrenciesCalculation } from '../interfaces';

const initialValue: CurrenciesCalculation = {
  firstValue: {
    currency: '',
    value: 1
  },
  secondValue: {
    currency: 'PESOS ARGENTINOS',
    value: 1
  }
};

export const useCurrencyCalculator = () => {
  const [values, setValues] = useState<CurrenciesCalculation>(initialValue);
  const [amount, setAmount] = useState<number>(1); 
  const [calculationResult, setCalculationResult] = useState<number>();

  useEffect(() => {
    const { firstValue, secondValue } = values;

    setCalculationResult( parseFloat(((firstValue.value * amount) / secondValue.value).toFixed(3)) );
  }, [ amount, values ]);

  const onValuesChange = ( values: CurrenciesCalculation ) => {
    setValues( values );
  };

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

  const onAmountChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    const numberRegExp = /^\d*\.?\d*$/;
    
    if( target.value === '' || target.value.match( numberRegExp ) ) {
      setAmount( parseFloat(target.value) || Number(target.value) );
    }
  };

  return {
    amount,
    calculationResult,
    values,
    onValuesChange,
    onSelectChange,
    onAmountChange
  };
};
