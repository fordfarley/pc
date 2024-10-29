import React from "react";
import styled from "styled-components";
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberCircleFiveBold,
  PiNumberCircleSixBold,
  PiNumberCircleSevenBold,
  PiNumberCircleEightBold,
} from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { BsPersonHearts } from "react-icons/bs";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";

const Gender = ({ gender }) => {
  if (gender === "female") return <IoMdFemale style={{ color: "#e448b4" }} />;
  if (gender === "male") return <IoMdMale style={{ color: "#00acff" }} />;
};

const CoupleIcon = ({ coupleNumber }) => {
  if (coupleNumber == 1)
    return <PiNumberCircleOneBold size={25} style={{ color: "#ff4e4e" }} />;
  if (coupleNumber == 2)
    return <PiNumberCircleTwoBold size={25} style={{ color: "#ffe000" }} />;
  if (coupleNumber == 3)
    return <PiNumberCircleThreeBold size={25} style={{ color: "#00ff00" }} />;
  if (coupleNumber == 4)
    return <PiNumberCircleFourBold size={25} style={{ color: "#00ffe7" }} />;
  if (coupleNumber == 5)
    return <PiNumberCircleFiveBold size={25} style={{ color: "#ac4cff" }} />;
  if (coupleNumber == 6)
    return <PiNumberCircleSixBold size={25} style={{ color: "#9d9d9d" }} />;
  if (coupleNumber == 7)
    return <PiNumberCircleSevenBold size={25} style={{ color: "#ffff00" }} />;
  if (coupleNumber == 8)
    return <PiNumberCircleEightBold size={25} style={{ color: "#11607c" }} />;
  return null;
};

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ selected }) =>
    selected ? "rgba(122,7,41,0.35)" : null};
  border-radius: 50px;
  padding: 5px;
  padding-right: 15px;
`;

const BasicWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 5px;
  color: white;
`;

const ToolsWrapper = styled(BasicWrapper)`
  color: #505050;
  gap: 18px;
`;

const Tool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:active {
    color: #e448b4;
  }
  cursor: pointer;
`;

// female "#e448b4"
// male "#00acff"

const PlayerRow = ({
  player,
  selected,
  handleDelete,
  handleCouple,
  minimal,
}) => {
  const { id, name, image, gender, isAdmin, chips, couple, coupleNumber } =
    player;
  return (
    <PlayerWrapper selected={selected}>
      <BasicWrapper>
        <Avatar avatar={image} mini inactive />
        <span style={{ marginLeft: "5px" }}>{name}</span>
        <Gender gender={gender} />
      </BasicWrapper>
      
      {!minimal && (
        <ToolsWrapper>
          <CoupleIcon coupleNumber={coupleNumber} />
          <Tool>
            <BsPersonHearts size={30} onClick={() => handleCouple(id)} />
          </Tool>
          <Tool>
            <MdDelete
              size={30}
              onClick={() => {
                handleDelete(id);
              }}
            />
          </Tool>
        </ToolsWrapper>
      )}
    </PlayerWrapper>
  );
};

export default PlayerRow;
