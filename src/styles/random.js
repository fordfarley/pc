import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 50px;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 336px;
  height: 444px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.show ? "rotateY(180deg)" : null)};
  
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background: linear-gradient(
    45deg,
    rgba(70, 11, 13, 1) 0%,
    rgba(190, 32, 40, 1) 100%
  );
  background: linear-gradient(180deg, #926f34 0%, #DFBD69 50%, #926f34 100%);
  /* border:solid 2px #585236; */

  position: absolute;
  backface-visibility: hidden;
`;

export const CardTexture = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 300px;
  width: 200px;
  border-radius: 15px;
  background-image: url("/curveTexture.jpg");
  background-size: cover;
  mix-blend-mode: multiply;
`;

export const CardColor = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 418px;
  width: 310px;
  
  border-radius: 8px;
  background: linear-gradient(
    45deg,
    rgba(9, 10, 10, 1) 5%,
    rgba(90, 45, 47, 1) 100%
  );
  img {
    z-index: 0;
  }
  background-image: url("/backCardPoker.png");
  background-size:cover;
  background-position:center;
`;

export const CardBack = styled(CardFront)`
  background-color: white;
  color: black;
  transform: rotateY(180deg);
  color: black;
  /* border:none; */
  
`;

export const BackWhite = styled.div`
  position: absolute;
  top: 16px;
  left: 15px;
  border-radius: 0px;
  min-height: 411px;
  width: 302px;
  background-color: white;
`;

export const BackTexture = styled(CardTexture)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: white;
  /* background-image: url("/whiteTexture.jpg"); */
  background-image: url("/frontCardPoker.png");
  background-size: contain;
  mix-blend-mode: multiply;
`;

export const BackContent = styled.div`
  color: black;
  z-index: 10;
  font-family: "Birthstone", cursive;
  font-size:32px;
  line-height:30px;
  padding: 30px;
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 80%;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: 0 10px;
  height: 30px;
  border-radius: 15px;
  font-size: 12px;
  background-color: ${(props) => (props.selected ? "darkred" : "gray")};
  font-family: sans-serif;
  color: white;
  font-weight: ${(props) => (props.selected ? "bold" : null)};
`;

export const BottomPanel = styled.div`
  width:102%;
  height:100vh;
  position:fixed;
  /* background: url("/metalBrushed.jpg"), radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
  radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  background-blend-mode: multiply; */
  /* background-image: url('/goldTexture2.jpg'); */
  background-size: cover;
  background: url('/goldTexture2.jpg'), #00000065;
  background-blend-mode:multiply;
  box-shadow: 1px 4px 5px 4px rgba(255,255,255,0.55) inset;
  /* border: 2px solid #926f34; */
  /* top:calc(100vh - 100px); */
  top:${({showPanel}) => (showPanel ? '50px' : 'calc(100vh - 80px)')};
  border-radius: 25px;

  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  transition:all 0.5s ease-in-out;


`;

export const PlayerWrapper = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 50px;
  min-height: 50px;
  font-size: 32px;
  min-width: 300px;
  overflow: hidden;
  z-index: 1;
  background: "transparent";
  border: 3px solid #590725;
`;

export const PlayerContainer = styled.div` 
  width:200px;
  opacity:${({showPlayer}) => (showPlayer ? '1' : '0')};
  transition: all 0.5s ease-in-out;
`;

export const MediumButton = styled.div`
  position:absolute;
  left:-3px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  min-height: 70px;
  width:60px;
  font-size: 32px;
  border: 3px solid #590725;
  background: linear-gradient(180deg,#ff4564 0%, #7a0729 60%);
`;

