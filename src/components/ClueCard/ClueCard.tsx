import React from 'react';
import { CategoryClues, Clues } from '../../apiCalls'

interface CategoryCard {
  // categoryClues: CategoryClues[]
  categoryValues: (value: number) => Clues[]
}

const ClueCard = ({ categoryValues } : CategoryCard) : JSX.Element => {
  const gameValues = [200, 400, 600, 800, 1000]

  // const categoryValues = (value : number) => {
  //   //edge case to look into : get undefined back if no clues exist with the specified point value
  //   const targetValue = categoryClues.map(category => category.clues.filter(clue => clue.value === value))
  //   const randomClue = targetValue.map(category => Math.floor(Math.random() * (category.length)))
  //   console.log(targetValue)
  //   console.log(randomClue)
  //   return targetValue.map((clues, index) => targetValue[index][randomClue[index]])
  //   // return individualClues;
  // }

   const categoryCards = (values: number[]) => {
     return gameValues.map(value => categoryValues(value).map(clue => {
       return (
         <div className={value.toString()} key={clue.id}>
          <p>{value}</p>
           <p>{`Clue: ${clue.question}`}</p>
           <p>{`Answer: ${clue.answer}`}</p>
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
