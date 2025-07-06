// Validation helpers
export function isEmail(email: string): boolean {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}
