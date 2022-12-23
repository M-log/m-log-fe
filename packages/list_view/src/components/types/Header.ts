import { MouseEvent, MouseEventHandler } from 'react';

export interface HeaderProps {
  currentCategory: string;
  onChange: MouseEventHandler<HTMLButtonElement>;
}

export type CategoryProps = 'FrontEnd' | 'BackEnd';
