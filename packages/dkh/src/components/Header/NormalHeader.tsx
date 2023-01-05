import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: calc(100vh - 85vh);
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-31vw, -4vh);
`;

const MainTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const Subtitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

function NormalHeader() {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <MainTitle>MIDAS</MainTitle>
        <Subtitle>기술블로그</Subtitle>
      </TitleWrapper>
    </HeaderWrapper>
  );
}

export default NormalHeader;
