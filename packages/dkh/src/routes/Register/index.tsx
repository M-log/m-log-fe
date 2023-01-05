import styled from 'styled-components';
import Button from '../../components/Button';
import ButtonWrapper from '../../components/ButtonWrapper';
import { NormalHeader } from '../../components/Header';
import FormWrapper from './Items/FormWrapper';

const UnderScoreLink = styled.p`
  margin-top: 32px;
  text-decoration: underline;
  cursor: pointer;
`;

function Register() {
  return (
    <>
      <ButtonWrapper isHide='fadeOut' delay={0.5} duration={1}>
        <Button>로그인</Button>
        <Button>회원가입</Button>
        <UnderScoreLink>로그인없이 이용하기</UnderScoreLink>
      </ButtonWrapper>
      <ButtonWrapper
        isHide='fadeIn'
        delay={2.2}
        duration={1}
        style={{ justifyContent: 'flex-start' }}
      >
        <FormWrapper />
      </ButtonWrapper>
      <NormalHeader />
    </>
  );
}

export default Register;
