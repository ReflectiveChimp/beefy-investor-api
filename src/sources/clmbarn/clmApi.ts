import axios from 'axios';
import { CLMAnalyticsUserTimelineResponse } from './types';

const BASE_URL = 'https://clm-api.beefy.finance/api/v1/investor/';

export const getClmApiTimeline = async (address: string) => {
  try {
    const response = await axios.get<CLMAnalyticsUserTimelineResponse>(
      `${BASE_URL}${address}/timeline`
    );
    return response.data;
  } catch (err: any) {
    console.log(err.message);
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 404) {
        return [];
      }
    }
    throw err;
  }
};
