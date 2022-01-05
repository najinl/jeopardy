import React from 'react';
import { CategoryClues, Clues } from '../../apiCalls'
import './ClueCard.css'

interface CategoryCard {
  // categoryClues: CategoryClues[]
  categoryValues: (value: number) => Clues[]
}

const ClueCard = ({ categoryValues } : CategoryCard) : JSX.Element => {
  const gameValues = [200, 400, 600, 800, 1000]

   const categoryCards = (values: number[]) => {
     return gameValues.map(value => categoryValues(value).map(clue => {
       const className = value.toString();
       return (
        <div className={`clue-value ${className}`} key={clue.id}>
          <p>{value}</p>
          {/*<p>{`Clue: ${clue.question}`}</p>
          <p>{`Answer: ${clue.answer}`}</p>*/}
        </div>
       )
     }))
   }
  //
  // console.log(categoryValues(600))
  // console.log(categoryClues)

  return (
    <div className='clue-cards'>
      {categoryCards(gameValues)}
    </div>
  )

}

export default ClueCard;
