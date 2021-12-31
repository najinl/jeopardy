import React from 'react';
import { CategoryClues } from '../../apiCalls';

interface CategoryCard {
  categoryClues: CategoryClues[]
}

const CategoryCard = ({ categoryClues } : CategoryCard) : JSX.Element => {
  const categoryTitles = categoryClues.map(category => category.title.toUpperCase()).map(title => {
      return <p key={Math.random()}>{title}</p>
  })

  return (
    <div>{categoryTitles}</div>
  )
}

export default CategoryCard;
