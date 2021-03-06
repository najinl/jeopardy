import { useEffect, useState } from 'react';
import { getCategories, getCategoryClues, Categories, CategoryClues } from '../../apiCalls';
import CategoryCard from '../CategoryCard/CategoryCard';
import './App.css';

function App() {
  const [allCategories, setCategories] = useState<number[]>([]);
  const [categoryClues, setCategoryClues] = useState<CategoryClues[]>([]);
  const [loadingClues, setLoadingClues] = useState<boolean>(true);

  //create an object with keys that match the elements within the allCategories array
  //value is default 200, 400, 600 , 800, 1000

  //grab the categry title for category title category
    //iterate through the categoryClues array and grab the elem.title


  useEffect(() : void => {
    getCategories()
      .then(data => {
        let randomCategoryIds = generateRandomCategories(data)
        setCategories(randomCategoryIds)
        getCategoryClues(randomCategoryIds)
          .then(categoryData => {
            setCategoryClues(categoryData)
            setLoadingClues(false)
          }
      )})
  },[])

  const generateRandomIndexes = (maxNumPlusOne: number) : number[] => {
    let randomIndexArray : number[] = [];
    for(let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * (maxNumPlusOne));
      if(!randomIndexArray.includes(randomIndex)) {
        randomIndexArray.push(randomIndex)
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

  // console.log('allCategories', allCategories)
  console.log('Clues', categoryClues)

  return (
    <div className="App">ß
      <header className="App-header">
        <CategoryCard categoryClues={categoryClues} />
      </header>
    </div>
  );
}

export default App;
