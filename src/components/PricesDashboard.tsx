interface Props {
  cols: number;
}

export const PricesDashboard = ({ cols }: Props) => {
  return (
    <div className="neumorphism h-96 flex flex-col">

      <div className={ `container grid grid-cols-${ cols } place-items-center mb-2 w-11/12 h-5/6 flex-wrap gap-3 mx-auto mt-5` }>

        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>
        
        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>

        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>

        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>

        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>

        <div className="flex bg-light-aqua-green h-fit p-3 w-fit items-center justify-center">
          <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
            DOLAR OFICIAL
          </h2>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            COMPRA
          </p>
          <span className="text-2xl font-semibold mr-3">
            $480
          </span>
          <p className="text-dark-gray text-xs font-semibold mr-2">
            VENTA
          </p>
          <span className="text-2xl font-semibold">
            $500
          </span>
        </div>

      </div>

      <h4 className="relative left-4 text-xs text-white top-4">
        ULTIMA ACTUALIZACION HACE 3 MINUTOS
      </h4>
    </div>
  );
};
