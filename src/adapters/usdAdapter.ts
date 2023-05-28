export interface UsdPricesFetch {
  compra: number | null;
  venta: number;
  casa: string;
  nombre: string;
  fechaActualizacion: string;
}

export const createUsdAdapter = (usd: UsdPricesFetch[]) => {
  const usdPrices = usd.map(price => {

    switch (price.casa) {
    case 'oficial':
      price.casa = 'dolar oficial';
      break;
      
    case 'blue':
      price.casa = 'dolar blue';
      break;
      
    case 'bolsa':
      price.casa = 'dolar bolsa';
      break;
      
    case 'contadoconliqui':
      price.casa = 'dolar ccl';
      break;
      
    case 'solidario':
      price.casa = 'dolar solidario';
      break;
      
    case 'mayorista':
      price.casa = 'dolar mayorista';
      break;
      
    default:
      break;
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
