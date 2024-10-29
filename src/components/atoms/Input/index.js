import React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #B22238;
`;

const InputField = styled.input`
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #B22238;
  background-color: rgba(121, 121, 121, 0.3);
  color: #d5a7b0;
  padding: 0 10px;
`;

// border: 2px solid #811228;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ left }) => (left ? `flex-start` : `center`)};
  gap: 5px;
`;

const Input = ({ label = "", onChange, value, left }) => {
  return (
    <Wrapper left={left}>
      <Label>{label}</Label>
      <InputField type="text" onChange={onChange} value={value}/>
    </Wrapper>
  );
};

export default Input;
