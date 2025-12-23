// Simple className merge utility similar to shadcn's cn helper
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

