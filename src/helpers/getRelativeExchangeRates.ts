import { ExchangeRates } from "../api/exchange";

export function getRelativeExchangeRates(myCurrency: string | null, exchangeRates: ExchangeRates) {
  const multiplier = exchangeRates[myCurrency || 'USD'];
  const resultRates: ExchangeRates = {}

  for (const rate in exchangeRates) {
    resultRates[rate] = exchangeRates[rate]/multiplier
  }

  return resultRates;
}
