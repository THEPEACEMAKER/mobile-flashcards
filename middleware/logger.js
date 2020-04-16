const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    // Assigning a defined function to a variable, invokes the function and stores the value it returns in the variable
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
