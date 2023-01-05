import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { SplashHeader } from '../components/Header';
import ButtonWrapper from '../components/ButtonWrapper';

const UnderScoreLink = styled.p`
  margin-top: 32px;
  text-decoration: underline;
  cursor: pointer;
`;

function RootPage() {
  const navigate = useNavigate();

  const handlePagingButton = (location: string) => {
    navigate(location);
  };

  return (
    <>
      <SplashHeader />
      <section>
        <ButtonWrapper delay={1.25}>
          <Button onClick={() => handlePagingButton('login')}>로그인</Button>
          <Button onClick={() => handlePagingButton('register')}>
            회원가입
          </Button>
          <UnderScoreLink onClick={() => handlePagingButton('')}>
            로그인없이 이용하기
          </UnderScoreLink>
        </ButtonWrapper>
      </section>
    </>
  );
}

export default RootPage;
