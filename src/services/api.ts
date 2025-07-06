// Generic API client
export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, options);
  if (!res.ok) throw new Error('API error');
  return res.json();
}
