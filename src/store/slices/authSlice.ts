// Placeholder for authentication state slice
export interface AuthState {
  user: string | null;
  token: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
};
