import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonWrapper from '../../components/ButtonWrapper';
import { NormalHeader } from '../../components/Header';
import LoaderPortal from '../../loader';
import Input from '../../components/Input';

const UnderScoreLink = styled.p`
  margin-top: 32px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        setIsOn(false);
      }, 3000);
    }
  }, [isOn]);

  const handleLoginButton = () => {
    setIsOn(true);
  };
  return (
    <>
      <LoaderPortal isOn={isOn} />
      <NormalHeader />
      <ButtonWrapper isHide='fadeDown' delay={0.5}>
        <Button>로그인</Button>
        <Button>회원가입</Button>
        <UnderScoreLink>로그인없이 이용하기</UnderScoreLink>
      </ButtonWrapper>
      <ButtonWrapper delay={1.7}>
        <Input placeholder='@ 이메일' type='email' />
        <div style={{ marginTop: '20px' }} />
        <Input placeholder='🔓︎ 비밀번호' type='password' />
        <div style={{ marginTop: '30px' }} />
        <Button style={{ width: '300px' }} onClick={handleLoginButton}>
          로그인
        </Button>
      </ButtonWrapper>
    </>
  );
}

export default Login;
