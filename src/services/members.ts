import { fetchApi } from './api';
import { Member } from '../types';

export function getMembers() {
  return fetchApi<Member[]>('/members');
}
