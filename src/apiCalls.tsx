//iterate through jservice.io/api/categories?count=100 array and grab 5 random id's for categories
// let randomlySelectedCategoryIds = [1, 2, 3, 4, 5]

//iterate through the resultant array and interpolate into the below fetch call's url the category id
//jservice.io/api/clues?category=11504

export interface Categories {
  id: number
  title: string
  clues_count: number
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
