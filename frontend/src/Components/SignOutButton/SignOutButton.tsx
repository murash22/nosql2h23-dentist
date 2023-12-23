import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function SignOutButton() {
  const dispatch: Dispatch<UnknownAction> = useDispatch()
  const navigate = useNavigate()
  const onClick = () => {
    dispatch({type: ""})
    navigate("/")
  }
  return (
    <button className="col-start-3 justify-self-end" onClick={onClick}>
      <img className="h-14 m-1" src="src/assets/sign-out-icon.png"/>
    </button>
  )
}


export default SignOutButton;
