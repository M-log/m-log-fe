import {
  CSSProperties,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
} from 'react';
import styled from 'styled-components';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Root = styled.input<{ isError?: boolean; isSuccess?: boolean }>`
  height: 36px;
  line-height: 34px;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 14px;
  width: 300px;
  color: #000;
  display: block;
  text-align: left;
  min-height: 36px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  border: ${(props) => (props.isError ? '2px solid #f1998e !important' : 'none')};
  border: ${(props) => (props.isSuccess ? '2px solid #38A169' : 'none')};
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: #f1998e;
`;

function Input({
  placeholder,
  type,
  style,
  onChange,
  isError,
  errorMessage,
  isSuccess,
}: {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
  errorMessage?: string;
  isSuccess?: boolean;
}) {
  return (
    <RootWrapper>
      <Root
        placeholder={placeholder}
        type={type}
        style={style}
        onChange={onChange}
        isError={isError}
        isSuccess={isSuccess}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </RootWrapper>
  );
}

export default Input;
