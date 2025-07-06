import { fetchApi } from './api';
import { Donation } from '../types';

export function getDonations() {
  return fetchApi<Donation[]>('/donations');
}
