import { ADD_ANIMAL } from '../actions/AddAnimal'

const initialState = {
  title: '',
  description: '',
  phone: '',
  address: '',
}

export default function addNewReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        title: action.title,
        description: action.description,
        phone: action.phone,
        address: action.address,
      }
    default:
      return {
        ...state,
      }
  }
}
