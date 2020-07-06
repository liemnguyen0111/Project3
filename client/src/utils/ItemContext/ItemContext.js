import { createContext } from 'react'

export default createContext({
  category : 'All',
  items: [],
  setItems: () => {},
  setCategory: () => {}
})