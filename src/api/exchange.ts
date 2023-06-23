import axios from 'axios';
export interface ExchangeRates {
  [currencyCode: string]: number;
}

interface ExchangeResponse {
  data: {
    rates: ExchangeRates;
  };
}

const EXCHANGE_API_KEY = 'b24fe051fd4c449fa5d0146df8e2d5f1';

export function getExchangeData(): Promise<ExchangeResponse> {
  return axios.get(
    'https://openexchangerates.org/api/latest.json?app_id=' + EXCHANGE_API_KEY,
  );
}
