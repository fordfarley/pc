import React, { useState } from "react";
import styled from "styled-components";
import { usePlayers } from "@/context/playersContext";
import { MdDeleteForever } from "react-icons/md";
import PlayerRow from "@/components/molecules/Player";
import Button from "@/components/atoms/Button";

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ width }) => (width ? width : "100%")};
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : "300px")};
  gap: 100px;
  @media (min-width:840px){
    width: ${({ width }) => (width ? width : "400px")};
  }
`;

const PlayersList = ({ width, minimal }) => {
  const { players, deletePlayer, createCouple, deletePlayers } = usePlayers();
  const [clickedId, setClickedId] = useState(null);

  const handleCouple = (id) => {
    if (clickedId === null){ setClickedId(id) }
    else {
      if (id === clickedId) { setClickedId(null)}
      else {
        createCouple(clickedId, id);
        setClickedId(null);
      }
    }
  };

  return (
    <Wrapper>
      <ListWrapper width={width}>
        {players.map((elem, i) => (
          <PlayerRow
            player={elem}
            handleDelete={deletePlayer}
            handleCouple={handleCouple}
            selected={clickedId === elem.id}
            minimal={minimal}
          />
        ))}
      </ListWrapper>
      {!minimal && players.length > 0 && (
        <Button
          type='Secondary'
          onClick={() => {deletePlayers()}}
        ><MdDeleteForever size={25} /> Clear</Button>
      )}
    </Wrapper>
  );
};

export default PlayersList;
