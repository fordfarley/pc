import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
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
