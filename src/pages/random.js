import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePlayers } from "@/context/playersContext";
import { IoCaretBackOutline } from "react-icons/io5";
import Button from "@/components/atoms/Button";
import {
  questions,
  historic,
  expectations,
  election,
} from "@/questions/questions";
import { getQuestionText } from "@/utils/questions";
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
  BottomPanel,
  PlayerWrapper,
  PlayerContainer,
  MediumButton,
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
  const router = useRouter();
  const { players, cardIndex, nextPlayer, nextCardIndex, activePlayer } =
    usePlayers();
  const [question, setQuestion] = useState("Click next to get your question");
  const [show, setShow] = useState(null);
  const [option, setOption] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPlayer(true);
    }, 300);
    
    return () => {};
  }, []);

  // const getQuestion = (questionOption) => {
  //   let allQuestions = questions
  //     .concat(historic)
  //     .concat(expectations)
  //     .concat(election);
  //   if (questionOption === 1) allQuestions = election;
  //   if (questionOption === 2) allQuestions = questions;
  //   if (questionOption === 3) allQuestions = historic;
  //   if (questionOption === 4) allQuestions = expectations;
  //   const randomIndex = Math.floor(allQuestions.length * Math.random());
  //   setQuestion(allQuestions[randomIndex]);
  // };
  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  const randomQuestion = () => {
    if (show === null) {
      const questionText = getQuestionText(cardIndex, players[activePlayer]);
      setQuestion(questionText);
      nextCardIndex();
      setShow(true);
    } else if (show) {
      setShow(false);
      setShowPlayer(false)
      nextCardIndex();
      setTimeout(() => {
        const questionText = getQuestionText(cardIndex, players[activePlayer]);
        setQuestion(questionText);
        nextPlayer();
        setShowPlayer(true);
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
            <BackWhite />
            <BackTexture />
            <BackContent>{question}</BackContent>
          </CardBack>
        </FlipCardInner>
      </FlipCard>

      {activePlayer !== null && players?.length > 0 && (
        <PlayerWrapper>
          <MediumButton
            onClick={() => {
              router.push("/");
            }}
          >
            <IoCaretBackOutline size={30} />
          </MediumButton>
          <PlayerContainer showPlayer={showPlayer}>
            <PlayerRow minimal player={players[activePlayer]} />
          </PlayerContainer>
        </PlayerWrapper>
      )}
    </Layout>
  );
};

export default random;
