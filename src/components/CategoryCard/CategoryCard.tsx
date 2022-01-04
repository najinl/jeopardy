import React from 'react';
import ClueCard from '../ClueCard/ClueCard';
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
    return targetValue.map((clues, index) => targetValue[index][randomClue[index]])
    // return individualClues;
  }
  //
  // console.log(categoryValues(600))
  // console.log(categoryClues)

  return (
    <section className='game-board'>
      <div className='category-cards'>{categoryTitles}</div>
      <ClueCard categoryValues={categoryValues}/>
    </section>
  )
}

export default CategoryCard;
