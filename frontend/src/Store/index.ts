import {createStore} from "redux"


const defaultState = {
  id: "12",
  role: "21",
  data: {}
}

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "":
      return {...state, role: state.role, id: state.id}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store