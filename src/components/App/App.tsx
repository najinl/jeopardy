import { useEffect, useState } from 'react';
import { getCategories, getCategoryClues, Categories, CategoryClues } from '../../apiCalls';
import { CurrentQuestion } from '../../Models';
import CategoryCard from '../CategoryCard/CategoryCard';
import './App.css';

function App() {
  const [allCategories, setCategories] = useState<number[]>([]);
  const [categoryClues, setCategoryClues] = useState<CategoryClues[]>([]);
  const [loadingClues, setLoadingClues] = useState<boolean>(true);
  const [questionDisplayed, setQuestionDisplayed] = useState<boolean>(false);
  const [answerDisplayed, setAnswerDisplayed] = useState<boolean>(false);
  const [playerScore, modifyPlayerScore] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  //could probably make currentQuestion/currentAnswer a hash or object
  // const [currentQuestion, setCurrentQuestion] = useState<string>('');
  // const [currentAnswer, currentAnswer] = useState<string>('');
  const [currentQuestion, setCurrentQuestion]  = useState<CurrentQuestion>({question: '', answer: ''});

  //create an object with keys that match the elements within the allCategories array
  //value is default 200, 400, 600 , 800, 1000

  //grab the categry title for category title category
    //iterate through the categoryClues array and grab the elem.title


  useEffect(() : void => {
    getCategories()
      .then(data => {
        let randomCategoryIds = generateRandomCategories(data)
        setCategories(randomCategoryIds)
        console.log('randomCatIds', randomCategoryIds)
        getCategoryClues(randomCategoryIds)
          .then(categoryData => {
            console.log('CategoryData', categoryData)
            setCategoryClues(categoryData)
            setLoadingClues(false)
          }
      )})
  },[])

  const generateRandomIndexes = (maxNumPlusOne: number) : number[] => {
    let randomIndexArray : number[] = [];
    let i = 0;
    while(i < 5) {
      const randomIndex = Math.floor(Math.random() * (maxNumPlusOne));
      if(!randomIndexArray.includes(randomIndex)) {
        randomIndexArray.push(randomIndex)
        i++
      }
    }
    return randomIndexArray;
  }

  const generateRandomCategories = (allCategories : Categories[]) : number[] => {
    let randomCategoryIds : number[] = [];
      generateRandomIndexes(101).forEach(randomIndex => {
        randomCategoryIds = [...randomCategoryIds, allCategories[randomIndex].id]
      })
    return randomCategoryIds;
  }

  const displayQuestion = (question: string, answer: string, value: number) => {
    setCurrentValue(value)
    console.log(playerScore)
    setCurrentQuestion({question: question, answer: answer})
    setQuestionDisplayed(true)
    console.log(questionDisplayed)
    setTimeout(() => {
      setQuestionDisplayed(false)
      setAnswerDisplayed(true)
    }, 3000)
}
  // console.log('allCategories', allCategories)
  console.log('Clues', categoryClues)

  return (
    <div className="App">
      <CategoryCard
        categoryClues={categoryClues}
        displayQuestion={displayQuestion}
        currentQuestion={currentQuestion}
        questionDisplayed={questionDisplayed}
        answerDisplayed={answerDisplayed}
        setAnswerDisplayed={setAnswerDisplayed}
        playerScore={playerScore}
        currentValue={currentValue}
        modifyPlayerScore={modifyPlayerScore}
      />
    </div>
  );
}

export default App;
