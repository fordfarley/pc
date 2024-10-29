import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePlayers } from "@/context/playersContext";
import Button from "@/components/atoms/Button";
import {
  questions,
  historic,
  expectations,
  election,
} from "@/questions/questions";
import {
  Layout,
  FlipCard,
  FlipCardInner,
  CardFront,
  CardColor,
  CardBack,
  BackWhite,
  BackTexture,
  BackContent,
  Options,
  Option,
} from "@/styles/random";
import PlayerRow from "@/components/molecules/Player";


const optionsLabels = [
  "All",
  "Election",
  "Questions",
  "History",
  "Expectations",
];

const random = () => {
  const { players, nextPlayer } = usePlayers();
  const [question, setQuestion] = useState("Click next to get your question");
  const [show, setShow] = useState(null);
  const [option, setOption] = useState(0);
  const [activePlayer, setActivePlayer] = useState(null);
  
  useEffect(() => {
    const next = nextPlayer()
    setActivePlayer(next);
    return () => {
    };
  }, []);

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
      setActivePlayer(nextPlayer());
      setTimeout(() => {
        getQuestion(option);
      }, 1000);
    } else {
      setShow(true);
    }
  };

  return (
    <Layout>
      {/* <Options>
        {optionsLabels.map((elem, index) => {
          return (
            <Option
              key={`option_${index}`}
              onClick={() => {
                setOption(index);
                setTimeout(() => {
                  getQuestion(index);
                }, 1000);
                if (show) {
                  setShow(false);
                  setTimeout(() => {
                    getQuestion(index);
                  }, 1000);
                } else if (!show) {
                  getQuestion(index);
                }
              }}
              selected={index === option}
            >
              {elem}
            </Option>
          );
        })}
      </Options> */}
      <FlipCard>
        <FlipCardInner show={show}>
          <CardFront onClick={randomQuestion}>
            <CardColor />
          </CardFront>
          <CardBack onClick={randomQuestion}>
          {/* <CardBack onClick={()=>{}}> */}
            <BackWhite />
            <BackTexture />
            <BackContent>{question}</BackContent>
          </CardBack>
        </FlipCardInner>
      </FlipCard>
      {activePlayer!==null && <PlayerRow minimal player={players[activePlayer]} />}
      {/* <Button onClick={randomQuestion}>Next</Button> */}
    </Layout>
  );
};

export default random;
