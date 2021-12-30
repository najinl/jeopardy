import { useEffect, useState }from 'react';
import { getCategories, getCategoryClues, Categories, CategoryClues } from '../../apiCalls';
import logo from '../../logo.svg';
import './App.css';

function App() {
  // const [allCategories, setCategories] = useState<number[]>([]);
  const [categoryClues, setCategoryClues] = useState<CategoryClues[]>([]);
  const [loadingClues, setLoadingClues] = useState<boolean>(true);

  useEffect(() : void => {
    getCategories()
      .then(data => {
        let randomCategoryIds = generateRandomCategories(data)
        // setCategories(randomCategoryIds)
        getCategoryClues(randomCategoryIds)
          .then(categoryData => {
            setCategoryClues(categoryData.flat())
            setLoadingClues(false)
          }
      )})
  },[])

  const generateRandomIndexes = () : number[] => {
    let randomIndexArray : number[] = [];
    for(let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * (101));
      if(!randomIndexArray.includes(randomIndex)) {
        randomIndexArray.push(randomIndex)
      }
    }
    return randomIndexArray;
  }

  const generateRandomCategories = (allCategories : Categories[]) : number[] => {
    let randomCategoryIds : number[] = [];
      generateRandomIndexes().forEach(randomIndex => {
        randomCategoryIds = [...randomCategoryIds, allCategories[randomIndex].id]
      })
    return randomCategoryIds;
  }

  // console.log('allCategories', allCategories)
  console.log('Clues', categoryClues)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {loadingClues ? <p>loading...</p> : <p>{categoryClues[0].id}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
