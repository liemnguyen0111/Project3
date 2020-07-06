import { createContext } from 'react'

export default createContext({
  category : 'All',
  items: [],
  setItems: () => {},
  setCategory: () => {},
  pages : 0,
  setPages : () => {},
  newPages : 0,
  setNewPages : () => {}
})