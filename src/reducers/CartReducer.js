
const cartReducer = (state = 0, action) => {
    if(action.type === "addTocart") {
      return state + 1
    }
    else{
    return state
    }
  }
  

export default cartReducer  