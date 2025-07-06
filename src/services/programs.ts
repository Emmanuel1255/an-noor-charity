import { fetchApi } from './api';

export function getPrograms() {
  return fetchApi<any[]>('/programs');
}
