import React from 'react';
import ClueCard from '../ClueCard/ClueCard';
import { CategoryClues } from '../../apiCalls';
import { CurrentQuestion } from '../../Models';
import './CategoryCard.css';

interface CategoryCard {
  categoryClues: CategoryClues[]
  displayQuestion: (question: string, answer: string, value: number) => void
  currentQuestion: CurrentQuestion
  questionDisplayed: boolean
  answerDisplayed: boolean
  setAnswerDisplayed: (boolean: boolean) => void
  playerScore: number
  currentValue: number
  modifyPlayerScore: (score: number) => void
}

const CategoryCard = ({ categoryClues, displayQuestion, currentQuestion, questionDisplayed, answerDisplayed, setAnswerDisplayed, playerScore, currentValue, modifyPlayerScore } : CategoryCard) : JSX.Element => {
  const categoryTitles = categoryClues.map(category =>
    category.title.toUpperCase()).map(title => {
    return <p className='category' key={Math.random()}>{title}</p>
  })

  const categoryValues = (value : number) => {
    //edge case to look into : get undefined back if no clues exist with the specified point value
    const targetValue = categoryClues.map(category => category.clues.filter(clue => clue.value === value))
    const randomClue = targetValue.map(category => Math.floor(Math.random() * (category.length)))
    console.log(targetValue)

    targetValue.forEach(value => {
      if(!value.length) {
        window.location.reload();
      }
    })
    console.log('random clue',randomClue)
    return targetValue.map((clues, index) => targetValue[index][randomClue[index]])
    // return individualClues;
  }
  //
  // console.log(categoryValues(600))
  console.log(categoryClues)

  return (
    <section className='game-board'>
      {playerScore}
      {(!questionDisplayed && !answerDisplayed) && <div className='category-cards'>{categoryTitles}</div>}
      <ClueCard
        categoryValues={categoryValues}
        displayQuestion={displayQuestion}
        currentQuestion={currentQuestion}
        questionDisplayed={questionDisplayed}
        answerDisplayed={answerDisplayed}
        setAnswerDisplayed={setAnswerDisplayed}
        playerScore={playerScore}
        currentValue={currentValue}
        modifyPlayerScore={modifyPlayerScore}
      />
    </section>
  )
}

export default CategoryCard;
