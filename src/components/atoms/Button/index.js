import React from "react";
import styled from "styled-components";

const MainButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  min-height: 50px;
  font-size: 32px;
  min-width: 300px;
  border: 0px;
  font-family: "Birthstone", cursive;
  text-decoration: none;
  cursor: pointer;
  gap:10px;
`;

const Primary = styled(MainButtonStyle)`
  color: ${({ disabled }) => (disabled ? "gray" : "white")};
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: ${({ disabled }) =>
    disabled
      ? "transparent"
      : "linear-gradient(180deg,#ff4564 0%, #7a0729 60%)"};
  border: 3px solid #590725;
  filter: ${({ disabled }) => (disabled ? "brightness(0.5)" : "brightness(1)")};

  &:hover {
    text-shadow: ${({ disabled }) =>
      disabled ? null : "0px 1px 10px rgba(227, 205, 216, 1)"};
    box-shadow: ${({ disabled }) =>
      disabled ? null : "0px 1px 10px -1px rgba(227, 205, 216, 1)"};
    filter: ${({ disabled }) => (disabled ? null : "brightness(1.25)")};
    transition: all 0.3s ease-in-out;
  }

  &:focus {
  }

  transition: all 0.3s ease-in-out;
`;

const Secondary = styled(Primary)`
  background:transparent;
  transition: all 0.3s ease-in-out;
  /* min-width:0px; */
  padding:0 40px;

  &:hover{
    background: rgba(122,7,41,0.5);
  }
`;

const Button = ({ children, type = "Primary", onClick, disabled }) => {
  if (type === "Primary")
    return (
      <Primary onClick={onClick} disabled={disabled}>
        {children}
      </Primary>
    );
    if (type === "Secondary")
      return (
        <Secondary onClick={onClick} disabled={disabled}>
          {children}
        </Secondary>
      );
  else return null;
};

export default Button;
