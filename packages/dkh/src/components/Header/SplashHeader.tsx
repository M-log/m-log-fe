import styled, { keyframes } from 'styled-components';

const headerFade = keyframes`
  0% {
    min-height: 100%;
  }
  100% {
    min-height: calc(100vh - 85vh);
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100%;
  background-color: #1e1e1e;
  animation: 1s cubic-bezier(0.93, 0.035, 0.4, 1.1) 1s ${headerFade};
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
`;

const titleWrapperFade = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-31vw, -4vh);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: 1s cubic-bezier(0.93, 0.035, 0.58, 1) 0.9s ${titleWrapperFade};
  animation-fill-mode: forwards;
`;

const mainTitleFade = keyframes`
  0% {
    font-size: 50px;
  }
  100% {
    font-size: 28px;
  }
`;

const MainTitle = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: white;
  animation: 1.2s cubic-bezier(0.76, 0.19, 0.63, 1) 0.6s ${mainTitleFade};
  animation-fill-mode: forwards;
`;

const subTitleFade = keyframes`
  0% {
    font-size: 40px;
  }
  100% {
    font-size: 20px;
  }
`;

const Subtitle = styled.span`
  font-size: 40px;
  font-weight: 400;
  color: white;
  animation: 1.2s cubic-bezier(0.76, 0.19, 0.63, 1) 0.6s ${subTitleFade};
  animation-fill-mode: forwards;
`;

function SplashHeader() {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <MainTitle>MIDAS</MainTitle>
        <Subtitle>기술블로그</Subtitle>
      </TitleWrapper>
    </HeaderWrapper>
  );
}

export default SplashHeader;
