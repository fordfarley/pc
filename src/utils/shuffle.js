import objBasic from "@/questions/questions_categorized";

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffleQuestions = (length) =>{
    const numbers = Array.from({ length: length }, (_, i) => i);
    const shuffledNumbers = shuffle(numbers);
    return shuffledNumbers;
}

export const getShuffleBasic = () =>{
    const length = objBasic.length;
    const shuffledNumbers = shuffleQuestions(length);
    localStorage.setItem('shuffleDeck', JSON.stringify(shuffledNumbers));
}
