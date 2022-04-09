import { ADD_ANIMAL } from '../actions/AddAnimal'

const initialState = {
  name: '',
  description: '',
  phone: '',
  email: '',
}

export default function addNewReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        name: action.name,
        description: action.description,
        phone: action.phone,
        email: action.email,
      }
    default:
      return {
        ...state,
      }
  }
}
