import styled from "styled-components";

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;

  svg {
    width: 20px;
    height: 20px;
    outline: none;
  }
`;

export const BackScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0px;
  left: 0;
  align-items: center;
  @media (min-width:640px){
    top: 0px;
    height: 100vh;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 80vh;
  max-height: 80vh;
  margin: 0px;
  padding: 25px;
  
  color: #dabbc9;
  @media (min-width:840px){
    min-width: 300px;
    min-height: 300px;
    margin: 20px;
    padding: 25px;
  }
 
  box-shadow: 0px 0px 10px 1px rgba(214,178,207,0.85);
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    margin:3px;
  border-radius:23px;
  background: #270711;
background: linear-gradient(133deg,#270711 25%, #3c081d 80%);
  }

 border-radius: 24px; 
  background: #86465d;
background: linear-gradient(133deg,#86465d 25%, #c399ac 52%, #a26d81 80%);




`;

    
    // .Devils-Advocate-1-hex { color: #5E0000; }
    // .Devils-Advocate-2-hex { color: #4F0000; }
    // .Devils-Advocate-3-hex { color: #390100; }
    // .Devils-Advocate-4-hex { color: #440000; }
    // .Devils-Advocate-5-hex { color: #630000; }
    
    
    // .Devils-Advocate-1-rgba { color: rgba(93, 0, 0, 1); }
    // .Devils-Advocate-2-rgba { color: rgba(79, 0, 0, 1); }
    // .Devils-Advocate-3-rgba { color: rgba(56, 1, 0, 1); }
    // .Devils-Advocate-4-rgba { color: rgba(68, 0, 0, 1); }
    // .Devils-Advocate-5-rgba { color: rgba(98, 0, 0, 1); }
    
    
    // .Devils-Advocate-1-hsla { color: hsla(0, 100, 18, 1); }
    // .Devils-Advocate-2-hsla { color: hsla(0, 100, 15, 1); }
    // .Devils-Advocate-3-hsla { color: hsla(1, 100, 11, 1); }
    // .Devils-Advocate-4-hsla { color: hsla(0, 100, 13, 1); }
    // .Devils-Advocate-5-hsla { color: hsla(0, 100, 19, 1); }