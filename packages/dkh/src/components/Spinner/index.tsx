import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 42px;
  height: 42px;
  animation: root 2.5s infinite linear both;
  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: spin 2.5s infinite ease-in-out both;
  }
  & > div:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #002e6b;
    border-radius: 100%;
    animation: dotInit 2.5s infinite ease-in-out both;
  }
  & > div:nth-child(1) {
    animation-delay: -1.1s;
  }
  & > div:nth-child(2) {
    animation-delay: -1s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.9s;
  }
  & > div:nth-child(4) {
    animation-delay: -0.8s;
  }
  & > div:nth-child(5) {
    animation-delay: -0.7s;
  }
  & > div:nth-child(6) {
    animation-delay: -0.6s;
  }
  & > div:nth-child(1):before {
    animation-delay: -1.1s;
  }
  & > div:nth-child(2):before {
    animation-delay: -1s;
  }
  & > div:nth-child(3):before {
    animation-delay: -0.9s;
  }
  & > div:nth-child(4):before {
    animation-delay: -0.8s;
  }
  & > div:nth-child(5):before {
    animation-delay: -0.7s;
  }
  & > div:nth-child(6):before {
    animation-delay: -0.6s;
  }
  @keyframes root {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    70%,
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dotInit {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1.1);
    }
  }
`;

export default function Spinner() {
  return (
    <Root>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Root>
  );
}
