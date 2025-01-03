// const exchangeRate_USD = 0.0000637929;
const exchangeRate_USD = 0.0000615385;

export function currencyConverter(number) {
  const getNominal_IDR = Number(number);
  const getExchangeRate_USD = Number(exchangeRate_USD);

  const getCurrency = getNominal_IDR * getExchangeRate_USD;

  const formattedTotalUSD = getCurrency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedTotalUSD;
}

export function converterTotalCart(number) {
  const getNominal_IDR = Number(number);

  const setTax_Rate = 0.11; // @tax 11%
  const getExchangeRate_USD = Number(exchangeRate_USD);

  const totalWithTaxIDR = getNominal_IDR + getNominal_IDR * setTax_Rate;
  const totalUSD = totalWithTaxIDR * getExchangeRate_USD;

  const formattedTotalUSD = totalUSD.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedTotalUSD;
}

export function converterTotal(number) {
  const getNominal_IDR = Number(number);
  const getExchangeRate_USD = Number(exchangeRate_USD);

  const setTax_Rate = 0.11; // @tax 11%

  const totalWithTaxIDR = getNominal_IDR + getNominal_IDR * setTax_Rate;
  const totalUSD = totalWithTaxIDR * getExchangeRate_USD;

  const formattedTotalUSD = totalUSD.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedTotalUSD;
}
