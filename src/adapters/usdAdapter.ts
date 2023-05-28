export interface UsdPricesFetch {
  compra: number | null;
  venta: number;
  casa: string;
  nombre: string;
  fechaActualizacion: string;
}

export const createUsdAdapter = (usd: UsdPricesFetch[]) => {
  const usdPrices = usd.map(price => {

    if (price.casa === 'contadoconliqui') {
      price.casa = 'contadoConLiquidacion';
    }

    return {
      name: price.casa,
      sale: price.venta,
      buy: price?.compra,
      updatedAt: price.fechaActualizacion
    };
  });

  return usdPrices;
};
