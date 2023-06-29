import { currencies } from "../constants/currencies";

export function getCurrencySymbol(abbreviation: string): string {
  return (currencies.find(currency => currency.abbreviation === abbreviation)?.symbol ?? abbreviation);
}
