interface Props {
    name: string;
    buyPrice: number | null;
    salePrice: number;
}

export const PriceItem = ({ name, buyPrice, salePrice }: Props) => {
  return (
    <div className="price-item">
      <h2 className="text-dark-gray font-extrabold text-2xl mr-6">
        { name.toUpperCase() }
      </h2>
      <p className="text-dark-gray text-xs font-semibold mr-2">COMPRA</p>
      <span className="text-2xl font-semibold mr-3">${ buyPrice ?? 'X' }</span>
      <p className="text-dark-gray text-xs font-semibold mr-2">VENTA</p>
      <span className="text-2xl font-semibold">${ salePrice }</span>
    </div>
  );
};
