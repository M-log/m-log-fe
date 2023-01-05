import { CategoryProps } from './types/Header';
import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { onScroll } from '../util/onScroll';

const categories: CategoryProps[] = ['frontend', 'backend'];

const uppercaseCategory = (category: CategoryProps) => {
  switch (category) {
    case 'frontend':
      return 'FrontEnd';
    case 'backend':
      return 'BackEnd';
  }
};

export default function Header() {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const updateScroll = () => {
    if (window.scrollY > 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll(updateScroll), {
      passive: true,
    });
  }, []);

  return (
    <>
      <header
        className={`transition-all fixed top-0 w-full text-white bg-black ${
          isScrollDown ? 'h-50' : 'h-200'
        }`}
      >
        <div className="px-10 mx-auto w-700">
          <h1
            className={`leading-28 pt-30 ${isScrollDown ? 'hidden' : 'block'}`}
          >
            MIDAS
            <span className="block font-normal text-20">기술블로그</span>
          </h1>

          {/* 카테고리 */}
          <nav
            className={`mx-auto w-700 text-20 relative ${
              isScrollDown ? 'top-10' : 'top-70'
            }`}
          >
            <ul className="[&>*:nth-child(n+2)]:pl-30 flex flex-row">
              {categories.map((categoryItem, i) => (
                <li key={i}>
                  <NavLink
                    to={`/articlelist/${categoryItem}`}
                    className={({ isActive }) =>
                      isActive ? 'text-white font-bold' : 'text-darkgray'
                    }
                  >
                    {uppercaseCategory(categoryItem)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className={isScrollDown ? 'h-50' : 'h-200'}></div>
    </>
  );
}
