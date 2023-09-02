import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  questions,
  historic,
  expectations,
  election,
} from "@/questions/questions";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 50px;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 500px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.show ? "rotateY(180deg)" : null)};
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  background: linear-gradient(
    45deg,
    rgba(70, 11, 13, 1) 0%,
    rgba(190, 32, 40, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(108, 12, 12, 1) 0%,
    rgba(255, 73, 83, 1) 100%
  );

  position: absolute;
  backface-visibility: hidden;
`;

const CardTexture = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 470px;
  width: 270px;
  border-radius: 15px;
  background-image: url("/curveTexture.jpg");
  background-size: cover;
  mix-blend-mode: multiply;
`;

const CardColor = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 470px;
  width: 270px;
  border-radius: 15px;
  background: linear-gradient(
    45deg,
    rgba(9, 10, 10, 1) 5%,
    rgba(90, 45, 47, 1) 100%
  );
  img {
    z-index: 0;
  }
`;

const CardBack = styled(CardFront)`
  background-color: white;
  color: black;
  transform: rotateY(180deg);
  color: black;
`;

const BackWhite = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 15px;
  min-height: 470px;
  width: 270px;
  background-color: white;
`;

const BackTexture = styled(CardTexture)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: white;
  background-image: url("/whiteTexture.jpg");
  background-size: cover;
  mix-blend-mode: multiply;
`;

const BackContent = styled.div`
  color: black;
  z-index: 10;
  font-size: 24px;
  padding: 30px;
`;

const Button = styled.button`
  border-radius: 25px;
  min-height: 50px;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(129, 23, 25, 1) 0%,
    rgba(190, 32, 40, 1) 100%
  );
  font-size: 24px;
  min-width: 300px;
  border: 0px;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 80%;
`;

const Option = styled.div`
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

const optionsLabels = [
  "All",
  "Election",
  "Questions",
  "History",
  "Expectations",
];

const random = () => {
  const [question, setQuestion] = useState("Click next to get your question");
  const [show, setShow] = useState(null);
  const [option, setOption] = useState(0);

  const getQuestion = (questionOption) => {
    let allQuestions = questions
      .concat(historic)
      .concat(expectations)
      .concat(election);
    if (questionOption === 1) allQuestions = election;
    if (questionOption === 2) allQuestions = questions;
    if (questionOption === 3) allQuestions = historic;
    if (questionOption === 4) allQuestions = expectations;
    const randomIndex = Math.floor(allQuestions.length * Math.random());
    setQuestion(allQuestions[randomIndex]);
  };

  const randomQuestion = () => {
    if (show === null) {
      getQuestion(option);
      setShow(true);
    } else if (show) {
      setShow(false);
      setTimeout(() => {
        getQuestion(option);
      }, 1000);
    } else {
      setShow(true);
    }
  };

  return (
    <Layout>
      <Options>
        {optionsLabels.map((elem, index) => {
          return (
            <Option
              key={`option_${index}`}
              onClick={() => {
                setOption(index);
                setTimeout(() => {
                        getQuestion(index);
                    }, 1000);
                if(show){
                    setShow(false)
                    setTimeout(() => {
                        getQuestion(index);
                    }, 1000);
                }else if(!show){
                    getQuestion(index);
                }
              }}
              selected={index === option}
            >
              {elem}
            </Option>
          );
        })}
      </Options>
      <FlipCard>
        <FlipCardInner show={show}>
          <CardFront onClick={randomQuestion}>
            <CardColor>
              <CardTexture />
              <Image src="/logo.png" width={200} height={194} />
            </CardColor>
          </CardFront>
          <CardBack onClick={randomQuestion}>
            <BackWhite />
            <BackTexture />
            <BackContent>{question}</BackContent>
          </CardBack>
        </FlipCardInner>
      </FlipCard>
      {/* <Button onClick={randomQuestion}>Next</Button> */}
    </Layout>
  );
};

export default random;
