import {createStore} from "redux"


const defaultState = {
  id: "",
  role: "",
  data: {}
}

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "INIT_ROLE_ID":
      return {...state, role: action.role, id: action.id}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store