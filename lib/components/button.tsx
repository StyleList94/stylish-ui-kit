import type { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => (
  <button>{children}</button>
);

export default Button;
