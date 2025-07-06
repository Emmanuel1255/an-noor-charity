import { useState } from 'react';

// Simple global store hook (placeholder for real state management)
export function useStore<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  return [state, setState] as const;
}
