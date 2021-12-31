//iterate through jservice.io/api/categories?count=100 array and grab 5 random id's for categories
// let randomlySelectedCategoryIds = [1, 2, 3, 4, 5]

//iterate through the resultant array and interpolate into the below fetch call's url the category id
//jservice.io/api/clues?category=11504

//possible to not setCategories for id's and instead just interpolate them into the getCategoryClues function

export interface Categories {
  id: number
  title: string
  clues_count: number
}

export interface CategoryClues {
  id: number
  title: string
  clues_count: number
  clues: Clues[]
}

export interface Clues {
  id: number
  answer: string
  question: string
  value: number
  airdate: string
  category_id: number
  game_id: null | number
  invalid_count: null | number
}

interface Response {
  ok: boolean
  status: number
  json: any
}

export const getCategories = () : Promise<Categories[]> => {
  return (
    fetch('http://jservice.io/api/categories?count=100')
      .then(res => res.json())
  )
}

export const getCategoryClues = async (randomCategoryIds : number[]) : Promise<CategoryClues[]> => {
  const responses = await Promise.all(randomCategoryIds.map(category =>
    fetch(`http://jservice.io/api/category?id=${category}`)));
  const json = await Promise.all(responses.map(response => response.json()));
  return json;
}
