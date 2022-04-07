const actionCreator = (type) => (payload) => {
    return {
        type,
        payload
    }
}

export default actionCreator;