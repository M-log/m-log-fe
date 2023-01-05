/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import EmailVerification from './EmailVerification';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const RootWrapper = styled.section`
  padding: 45px 60px;
  width: fit-content;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 45px;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
`;

function FormWrapper() {
  const [email, setEmail] = useState('');

  return (
    <RootWrapper>
      <Form>
        <EmailVerification email={email} setEmail={setEmail} />
      </Form>
      <div style={{ marginTop: '20px' }} />
    </RootWrapper>
  );
}

export default FormWrapper;
