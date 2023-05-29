interface Props {
  name: string;
  buyPrice: number | null;
  salePrice: number;
}

export const PriceItem = ({ name, buyPrice, salePrice }: Props) => {
  return (
    <div className="price-item">
      <div className="flex justify-start w-2/6">
        <h2 className="text-dark-gray font-extrabold text-xl mr-6">
          {name.toUpperCase()}
        </h2>
      </div>
      <div className="flex w-4/6">
        <div className="flex w-3/6 items-center flex-col flex-wrap">
          <p className="text-dark-gray text-xs font-bold mr-2">COMPRA</p>
          <span className="text-xl font-semibold mr-3">
            {buyPrice ? `$${buyPrice}` : 'S/D'}
          </span>
        </div>
        <div className="flex w-3/6 items-center flex-col flex-wrap">
          <p className="text-dark-gray text-xs font-bold mr-2">VENTA</p>
          <span className="text-xl font-semibold">${salePrice}</span>
        </div>
      </div>
    </div>
  );
};
