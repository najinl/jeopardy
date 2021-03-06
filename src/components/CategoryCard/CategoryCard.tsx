import React from 'react';
import { CategoryClues } from '../../apiCalls';

interface CategoryCard {
  categoryClues: CategoryClues[]
}

const CategoryCard = ({ categoryClues } : CategoryCard) : JSX.Element => {
  const categoryTitles = categoryClues.map(category => category.title.toUpperCase()).map(title => {
      return <p key={Math.random()}>{title}</p>
  })

  const categoryValues = (value : number) => {
    //edge case to look into : get undefined back if no clues exist with the specified point value
    const targetValue = categoryClues.map(category => category.clues.filter(clue => clue.value === value))
    const randomClue = targetValue.map(category => Math.floor(Math.random() * (category.length)))
    console.log(targetValue)
    console.log(randomClue)
    const individualClues = targetValue.map((clues, index) => targetValue[index][randomClue[index]])
    console.log(individualClues)
  }

  console.log(categoryValues(400))

  return (
    <div>{categoryTitles}</div>
  )
}

export default CategoryCard;
