const exchangeRate_USD = process.env.NEXT_PUBLIC_CURRENCY_USD;

export function currencyConverter(number) {
  const getNominal_IDR = number;
  const getExchangeRate_USD = exchangeRate_USD;

  const getCurrency = Number(getNominal_IDR) * Number(getExchangeRate_USD);

  if (getCurrency) {
    return `$${Number(getCurrency.toFixed(2))}`;
  }

  return `$${Number(0)}`;
}

export function converterTotalCart(number) {
  const getNominal_IDR = number;

  const setTax_Rate = 0.11; // @tax 11%
  const getExchangeRate_USD = exchangeRate_USD;

  const totalWithTaxIDR = getNominal_IDR + getNominal_IDR * setTax_Rate;

  if (totalWithTaxIDR) {
    const totalUSD = Number(totalWithTaxIDR) * Number(getExchangeRate_USD);

    return `$${Number(totalUSD.toFixed(2))}`;
  }

  return `$${Number(0)}`;
}
