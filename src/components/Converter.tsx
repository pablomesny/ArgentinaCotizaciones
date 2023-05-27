import { SwapIcon } from './SwapIcon';

export const Converter = () => {
  return (
    <div className="neumorphism h-96 flex flex-col items-center justify-center">
      <div className="w-11/12 h-5/6 flex flex-col">
        <form className="flex flex-col items-center gap-2">
          <select
            name="from"
            id="from"
            className="bg-light-aqua-green h-10 px-1 rounded-md"
          >
            <option value="Pesos argentinos">AR$</option>
            <option value="Pesos argentinos">USD OFICIAL</option>
            <option value="Pesos argentinos">USD BLUE</option>
            <option value="Pesos argentinos">USD CON LIQUI</option>
            <option value="Pesos argentinos">USD SOLIDARIO</option>
            <option value="Pesos argentinos">USD MAYORISTA</option>
          </select>

          <button className="h-6 w-6">
            <SwapIcon />
          </button>

          <select
            name="from"
            id="from"
            className="bg-light-aqua-green h-10 px-1 rounded-md"
          >
            <option value="Pesos argentinos">AR$</option>
            <option value="Pesos argentinos">USD OFICIAL</option>
            <option value="Pesos argentinos">USD BLUE</option>
            <option value="Pesos argentinos">USD CON LIQUI</option>
            <option value="Pesos argentinos">USD SOLIDARIO</option>
            <option value="Pesos argentinos">USD MAYORISTA</option>
          </select>
        </form>

        <div className="flex flex-col justify-center my-auto">
          <p className="text-white text-md">IMPORTE</p>

          <form className="">
            <input
              type="number"
              className="bg-light-aqua-green h-10 px-1 rounded-md"
            />
          </form>
        </div>

        <div className="flex flex-col mr-auto text-white mt-auto justify-end">
          <p className="text-lg">xxx PESOS ARG</p>

          <p className="text-lg">=</p>

          <p className="text-2xl font-semibold">XXX USD OFICIAL</p>
        </div>
      </div>
    </div>
  );
};
