// F5F5F5

import { CSSProperties } from 'react';
import styled from 'styled-components';

const CommonButton = styled.button`
  padding: 0px 22px;
  appearance: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  height: 42px;
  display: inline-block;
  width: 190px;
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  line-height: 1;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: #002e6b;
  color: #ffffff;
  margin-bottom: 12px;
`;

function Button({
  onClick,
  children,
  style,
}: {
  onClick?: () => void;
  children: string | JSX.Element;
  style?: CSSProperties;
}) {
  return (
    <CommonButton type='button' onClick={onClick} style={style}>
      {children}
    </CommonButton>
  );
}

export default Button;
