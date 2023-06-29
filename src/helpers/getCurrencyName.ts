import { currencies } from "../constants/currencies";

export function getCurrencyName(abbreviation: string): string {
  return (currencies.find(currency => currency.abbreviation === abbreviation)?.name ?? abbreviation);
}
