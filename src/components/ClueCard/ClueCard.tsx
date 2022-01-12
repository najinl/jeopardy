import { useState } from 'react';
import { CategoryClues, Clues } from '../../apiCalls'
import { CurrentQuestion } from '../../Models';
import './ClueCard.css'

interface CategoryCard {
  // categoryClues: CategoryClues[]
  categoryValues: (value: number) => Clues[]
  displayQuestion: (question: string, answer: string, value: number) => void
  currentQuestion: CurrentQuestion
  questionDisplayed: boolean
  answerDisplayed: boolean
  setAnswerDisplayed: (boolean: boolean) => void
  playerScore: number
  currentValue: number
  modifyPlayerScore: (score: number) => void
}

const ClueCard = ({ categoryValues, displayQuestion, currentQuestion, questionDisplayed, answerDisplayed, setAnswerDisplayed, playerScore, currentValue, modifyPlayerScore } : CategoryCard) : JSX.Element => {
  const gameValues = [200, 400, 600, 800, 1000]

   const categoryCards = (values: number[]) => {
     return gameValues.map(value => categoryValues(value).map(clue => {
       const className = value.toString();
       return (
        <button onClick={() => displayQuestion(clue.question, clue.answer, clue.value)} className={`clue-value ${className}`} key={clue.id}>
          <p>{value}</p>
        </button>
       )
     }))
   }

  const tallyPoints = (guessedCorrect : boolean) => {
    let newScore;
    if(guessedCorrect) {
      newScore = playerScore + currentValue
      modifyPlayerScore(newScore)
    } else {
      newScore = playerScore - currentValue
      modifyPlayerScore(newScore)
    }
    setAnswerDisplayed(false)
  }


  return (
    <div className='clue-cards'>
      {(!questionDisplayed && !answerDisplayed) && categoryCards(gameValues)}
      {questionDisplayed && <p>{currentQuestion.question}</p>}
      {answerDisplayed &&
        <>
          <p>{currentQuestion.answer}</p>
          <button onClick={() => tallyPoints(true)}>Got It Right!</button>
          <button onClick={() => tallyPoints(false)}>Missed It.</button>
        </>
      }
    </div>
  )

}

export default ClueCard;
