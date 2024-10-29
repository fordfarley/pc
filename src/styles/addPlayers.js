import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding:30px;
`;

export const ZonesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height:fit-content;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  gap:15px;

  @media (min-width:600px){
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 10%;
  height: 500px;
  background-image: url("/logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AddFormWrapper = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top:60px;
  gap: 30px;
  border: 3px solid #B22238;
  border-top: 0px;
  border-radius:10px;
  margin-bottom:50px;
  &:before{
    content:'';
    position:absolute;
    top:0;
    left:-3px;
    border: 3px solid #B22238;
    border-bottom:0px;
    border-right:0px;
    border-top-left-radius:10px;
    min-width:50px;
    min-height:40px;
  }
  &:after{
    content:'';
    position:absolute;
    top:0;
    right:-3px;
    border: 3px solid #B22238;
    border-bottom:0px;
    border-left:0px;
    border-top-right-radius:10px;
    min-width:50px;
    min-height:40px;
  }
`;

export const AddFormLabel = styled.div`
position:absolute;
top:-40px;
color: #B22238;
font-size:64px;
  font-family: "Birthstone", cursive;
`;

export const PlayersWrapper = styled(AddFormWrapper)`
  &:before{
    content:'';
    position:absolute;
    top:0;
    left:-3px;
    border: 3px solid #B22238;
    border-bottom:0px;
    border-right:0px;
    border-top-left-radius:10px;
    min-width:50px;
    min-height:40px;
  }
  &:after{
    content:'';
    position:absolute;
    top:0;
    right:-3px;
    border: 3px solid #B22238;
    border-bottom:0px;
    border-left:0px;
    border-top-right-radius:10px;
    min-width:50px;
    min-height:40px;
  }
`;


