import React from 'react'
import styled from 'styled-components';
import Avatar from '@/components/atoms/Avatar';
import { maleAvatars, femaleAvatars } from './avatarLists';

const Title = styled.h2`
    margin-bottom:20px;
`;

const ListWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 400px;
    gap:30px;
    overflow: scroll;
    max-height: 65vh;
    padding:40px 0;

    justify-content:center;
    @media (min-width:840px){
      padding:40px 0;
      width: 800px;
      max-height: 65vh;
      overflow: scroll;
  }
`;

const AvatarList = ({gender, imageId, handleClick}) => {
  const listElements = gender==="male" ? maleAvatars : femaleAvatars;

  return (
    <div>
    <Title>Choose your avatar:</Title>
    <ListWrapper>
        {listElements.map((elem,i)=>
            <Avatar key={`${gender}-${i}`} avatar={elem} active={i===imageId} handleClick={handleClick} id={i}/>
        )}
    </ListWrapper>
    </div>
  )
}

export default AvatarList;

