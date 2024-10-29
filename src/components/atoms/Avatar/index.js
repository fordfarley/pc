import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  height: ${({ size }) => (size ? `${size}px` : `150px`)};
  width: ${({ size }) => (size ? `${size}px` : `150px`)};
  border-radius: 50%;
  background-color: white;
  position: relative;
  z-index: 2;
  background: #b18897;
  background: linear-gradient(133deg, #b18897 25%, #ffffff 52%, #d0a5b6 80%);
  ${({ shine }) =>
    shine && "box-shadow: 0px 0px 20px 10px rgba(214,178,207,0.65);"}
  ${({ inactive }) => !inactive && "cursor:pointer;"}
  filter: ${({ dark }) => (dark ? "brightness(0.5)" : null)};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    margin: 6px;
    border-radius: 50%;
    background-image: ${({ avatar }) =>
      avatar ? `url("${avatar}")` : `url("/avatar/man7.webp")`};
    background-position: center;
    background-size: 115%;
    filter: ${({ dark }) => (dark ? "brightness(0.5)" : null)};
  }
`;

const AvatarMiniWrapper = styled.div`
  height: ${({ size }) => (size ? `${size}px` : `50px`)};
  width: ${({ size }) => (size ? `${size}px` : `50px`)};
  border-radius: 50%;
  background-color: white;
  position: relative;
  z-index: 2;
  background: #b18897;
  background: linear-gradient(133deg, #b18897 25%, #ffffff 52%, #d0a5b6 80%);
  ${({ shine }) =>
    shine && "box-shadow: 0px 0px 20px 10px rgba(214,178,207,0.65);"}
  ${({ inactive }) => !inactive && "cursor:pointer;"}
  filter: ${({ dark }) => (dark ? "brightness(0.5)" : null)};

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    margin: 3px;
    border-radius: 50%;
    background-image: ${({ avatar }) =>
      avatar ? `url("${avatar}")` : `url("/avatar/man7.webp")`};
    background-position: center;
    background-size: 115%;
    filter: ${({ dark }) => (dark ? "brightness(0.5)" : null)};
  }
`;

const Avatar = ({
  avatar,
  size,
  active = false,
  handleClick,
  id,
  inactive = false,
  dark,
  mini=false,
}) => {
  if (!mini)
    return (
      <AvatarWrapper
        avatar={avatar}
        size={size}
        shine={active}
        inactive={inactive}
        dark={dark}
        onClick={() => {
          if (handleClick) {
            handleClick(id);
          }
        }}
      />
    );
  else
    return (
      <AvatarMiniWrapper
        avatar={avatar}
        size={size}
        shine={active}
        inactive={inactive}
        dark={dark}
        onClick={() => {
          if (handleClick) {
            handleClick(id);
          }
        }}
      />
    );
};

export default Avatar;
