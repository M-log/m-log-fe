/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const InputWrapper = styled.div`
  display: flex;
`;

function EmailVerification({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const validateEmailVerification = () => {
    if (!email.toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setIsError(true);
      return false;
    }
    setIsError(false);
    return true;
  };

  const handleButtonClicked = () => {
    if (!validateEmailVerification()) return;
    setIsSuccess(true);
  };

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setIsSuccess(false);
  };

  return (
    <InputWrapper>
      <Input
        placeholder='@ 이메일을 입력해주세요.'
        type='email'
        style={{
          width: '340px',
          height: '48px',
          fontSize: '15px',
          marginRight: '8px',
        }}
        onChange={(e) => handleInputChanged(e)}
        isError={isError}
        errorMessage='올바른 이메일을 입력해주세요.'
        isSuccess={isSuccess}
      />
      <Button
        style={{ marginBottom: 0, height: '48px', width: 'auto' }}
        onClick={() => handleButtonClicked()}
      >
        확인
      </Button>
    </InputWrapper>
  );
}

export default EmailVerification;
