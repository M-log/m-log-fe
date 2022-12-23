import React from 'react';
import { CategoryProps, HeaderProps } from './types/Header';
import cn from 'classnames';
import tw from 'twin.macro';

const category: CategoryProps[] = ['FrontEnd', 'BackEnd'];

export default function Header({ currentCategory, onChange }: HeaderProps) {
  return (
    <header className="relative text-white bg-black h-200 px-50 lg:px-250 py-30">
      <h1 className="leading-28">
        MIDAS
        <span className="block font-normal text-20">기술블로그</span>
      </h1>

      {/* 카테고리 */}
      <nav className="absolute bottom-0 lg:px-120 pb-15 text-20">
        <ul className="[&>*:nth-child(n+2)]:pl-30 flex flex-row">
          {category.map((item) => (
            <li>
              <button
                type="button"
                className={
                  item === currentCategory
                    ? 'text-white font-bold'
                    : 'text-darkgray'
                }
                onClick={onChange}
                value={item}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
