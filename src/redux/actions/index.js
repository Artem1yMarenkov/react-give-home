const actionCreator = (typeAction) => (payload) => {
  return {
    type: typeAction,
    name: payload.name,
    description: payload.description,
    phone: payload.phone,
    email: payload.email,
  }
}

export default actionCreator
