import objBasic from "@/questions/questions_categorized";

export const getQuestionText = (index, player) => {
  const shuffleDeck = JSON.parse(localStorage.getItem('shuffleDeck'));
  
  if (player) {
    const { gender } = player;
    const question = objBasic[shuffleDeck[index]];
    if (question.text.female) return question.text[gender.toLowerCase()]["es"];
    else return question.text["es"];
  } else {
    const question = objBasic[shuffleDeck[index]];
    if (question.text.female) return question.text["male"]["es"];
    else return question.text["es"];
  }
};
