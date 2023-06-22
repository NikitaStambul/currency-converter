import axios from "axios";

export interface Locale {
  status: string;
  country: string;
  city: string;
  currency: string;
}

interface LocaleResponse {
  data: Locale;
}

export function getLocaleData(): Promise<LocaleResponse> {
  return axios.get('http://ip-api.com/json/?fields=status,message,country,city,currency');
}
