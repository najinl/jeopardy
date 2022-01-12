import { useState } from 'react';
import { CategoryClues, Clues } from '../../apiCalls'
import { CurrentQuestion } from '../../Models';
import './ClueCard.css'

interface CategoryCard {
  // categoryClues: CategoryClues[]
  categoryValues: (value: number) => Clues[]
  displayQuestion: (question: string, answer: string) => void
  currentQuestion: CurrentQuestion
  questionDisplayed: boolean
  answerDisplayed: boolean
  setAnswerDisplayed: (boolean: boolean) => void
}

const ClueCard = ({ categoryValues, displayQuestion, currentQuestion, questionDisplayed, answerDisplayed, setAnswerDisplayed } : CategoryCard) : JSX.Element => {
  // const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const gameValues = [200, 400, 600, 800, 1000]

   const categoryCards = (values: number[]) => {
     return gameValues.map(value => categoryValues(value).map(clue => {
       const className = value.toString();
       return (
        <button onClick={() => displayQuestion(clue.question, clue.answer)} className={`clue-value ${className}`} key={clue.id}>
          <p>{value}</p>
          {/*<p>{`Clue: ${clue.question}`}</p>
          <p>{`Answer: ${clue.answer}`}</p>*/}
        </button>
       )
     }))
   }

   // const displayQuestion = (question: string, answer: string) => {
   //   // return <p>{question}</p>
   //   setCurrentQuestion(question)
   // }
  //
  // console.log(categoryValues(600))
  // console.log(categoryClues)
  console.log(questionDisplayed)

  return (
    <div className='clue-cards'>
      {(!questionDisplayed && !answerDisplayed) && categoryCards(gameValues)}
      {questionDisplayed && <p>{currentQuestion.question}</p>}
      {answerDisplayed &&
        <>
          <p>{currentQuestion.question}</p>
          <button onClick={() => setAnswerDisplayed(false)}>Back to Board!</button>
        </>
      }
    </div>
  )

}

export default ClueCard;
