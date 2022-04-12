const actionCreator = (typeAction) => (payload) => {
  return {
    type: typeAction,
    title: payload.title,
    description: payload.description,
    phone: payload.phone,
    address: payload.address,
  }
}

export default actionCreator
