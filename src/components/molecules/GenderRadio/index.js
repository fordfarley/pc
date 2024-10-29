import React from "react";
import styled from "styled-components";
import { IoMdMale, IoMdFemale } from "react-icons/io";

const Label = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #B22238;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 5px;
  
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 20px;
`;

const GenderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 100px;
  padding: 2px;
  gap: 25px;
`;
// background-color: #391c24;

const GenderButton = styled.button`
  &:hover,
  &:active {
    outline: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background: #444;
  border: none;
  border-radius: 80px;
  box-shadow: inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
    inset 0 0 2px 4px hsla(0, 0%, 0%, 0.2),
    inset 0 0 2px 6px hsla(0, 0%, 0%, 0.2),
    inset 0 0 1px 8px hsla(0, 0%, 0%, 0.5),
    inset 0 -4px 2px 4px hsla(0, 0%, 0%, 0.5),
    inset 0 1px 1px 8px hsla(0, 0%, 100%, 0.25),
    inset 0 -30px 30px hsla(0, 0%, 0%, 0.2), 0 -4px 8px 4px hsla(0, 0%, 0%, 0.5),
    0 10px 10px hsla(0, 0%, 0%, 0.25), 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
    0 0 2px 4px hsla(0, 0%, 0%, 0.2), 0 0 2px 6px hsla(0, 0%, 0%, 0.2),
    0 0 2px 8px hsla(0, 0%, 0%, 0.5), 0 1px 2px 8px hsla(0, 0%, 100%, 0.25),
    0 -1px 2px 8px hsla(0, 0%, 0%, 0.5);
  color: #303030;
  color: ${({ color }) => (color ? color : "#303030")};
  cursor: pointer;
  font: bold 40px/85px sans-serif;
  height: 80px;
  padding: 0;
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.25),
    0 -1px 1px hsla(0, 0%, 0%, 0.75);
  width: 80px;
  &:hover,
  &:focus {
    color: ${({ hovercolor }) => (hovercolor ? hovercolor : "#0ab")};
    text-shadow: 0 0 20px hsla(240, 75%, 75%, 0.5),
      0 1px 1px hsla(0, 0%, 100%, 0.25), 0 -1px 1px hsla(0, 0%, 0%, 0.75);
  }
  &:active {
    color: #0ab;
    box-shadow: inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
      inset 0 0 2px 4px hsla(0, 0%, 0%, 0.2),
      inset 0 0 2px 6px hsla(0, 0%, 0%, 0.2),
      inset 0 0 1px 7px hsla(0, 0%, 0%, 0.5),
      inset 0 5px 15px 7px hsla(0, 0%, 0%, 0.15),
      inset 0 -4px 2px 3px hsla(0, 0%, 0%, 0.5),
      inset 0 1px 1px 7px hsla(0, 0%, 100%, 0.25),
      inset 0 -30px 30px hsla(0, 0%, 0%, 0.1),
      inset 0 30px 30px hsla(0, 0%, 0%, 0.2),
      0 -4px 8px 4px hsla(0, 0%, 0%, 0.5), 0 5px 10px hsla(0, 0%, 0%, 0.25),
      0 0 2px 2px hsla(0, 0%, 0%, 0.2), 0 0 2px 4px hsla(0, 0%, 0%, 0.2),
      0 0 2px 6px hsla(0, 0%, 0%, 0.2), 0 0 2px 8px hsla(0, 0%, 0%, 0.5),
      0 1px 2px 8px hsla(0, 0%, 100%, 0.25), 0 -1px 2px 8px hsla(0, 0%, 0%, 0.5);
    line-height: 86px;
  }
`;

const GenderRadio = ({ handleChange, selected }) => {
  return (
    <Wrapper>
    {/* <Label>Gender</Label> */}
    <ButtonsWrapper>
      
      <GenderWrapper>
        <GenderButton
          onClick={() => {
            if (selected !== "female") handleChange("female");
          }}
          color={selected === "female" ? "#e448b4" : "#303030"}
          hovercolor={"#e448b4"}
          female
        >
          <IoMdFemale size={40} />
        </GenderButton>
        <GenderButton
          onClick={() => {
            if (selected !== "male") handleChange("male");
          }}
          color={selected === "male" ? "#00acff" : "#303030"}
          hovercolor={"#00acff"}
          male
        >
          <IoMdMale size={40} />
        </GenderButton>
      </GenderWrapper>
    </ButtonsWrapper>
    </Wrapper>
  );
};

export default GenderRadio;
