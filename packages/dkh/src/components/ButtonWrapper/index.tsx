import styled, { css, keyframes } from 'styled-components';
import { CSSProperties, ReactNode } from 'react';

const buttonWrapperFadeUp = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: 15vh;
  }
`;

const buttonWrapperFadeDown = keyframes`
  0% {
    top: 15vh;
  }
  100% {
    top: 100%;
  }
`;

const buttonWrapperFadeOut = keyframes`
  0% {
    display: none;
  }
  50% {
    transform: scale(1, 0.002);
    display: none;
  }
  100% {
    transform: scale(0.2, 0.002);
    display: none;
  }
`;

const buttonWrapperFadeIn = keyframes`
  0% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const Wrapper = styled.div<{
  isHide?: 'fadeDown' | 'fadeOut' | 'fadeIn';
  duration?: number;
  delay?: number;
}>`
  animation: ${(props) => props.duration ?? 1}s
    ${(props) => props.delay && `${props.delay}s`}
    ${(props) => {
      switch (props.isHide) {
        case undefined:
          return css`cubic-bezier(0.93, 0.035, 0.4, 1.1) ${buttonWrapperFadeUp}`;
        case 'fadeDown':
          return css`cubic-bezier(0.93, 0.035, 0.4, 1.1) ${buttonWrapperFadeDown}`;
        case 'fadeOut':
          return css`ease ${buttonWrapperFadeOut}`;
        case 'fadeIn':
          return css`ease ${buttonWrapperFadeIn}`;
        default:
          return css`cubic-bezier(0.93, 0.035, 0.4, 1.1) ${buttonWrapperFadeUp}`;
      }
    }};
  width: 100%;
  height: 85vh;
  top: ${(props) => (props.isHide ? '15vh' : '100%')};
  position: absolute;
  background-color: #6a6a6a;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => props.isHide === 'fadeIn' && 'opacity: 0'}
`;

function ButtonWrapper({
  isHide,
  delay,
  duration,
  style,
  children,
}: {
  isHide?: 'fadeDown' | 'fadeOut' | 'fadeIn';
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Wrapper isHide={isHide} delay={delay} duration={duration} style={style}>
      {children}
    </Wrapper>
  );
}

export default ButtonWrapper;
