import { ExchangeRates } from "../api/exchange";

export function getRelativeExchangeRates(myCurrency: string = 'USD', exchangeRates: ExchangeRates) {
  const multiplier = exchangeRates[myCurrency];
  const resultRates: ExchangeRates = {}

  for (const rate in exchangeRates) {
    resultRates[rate] = exchangeRates[rate]/multiplier
  }

  return resultRates;
}
