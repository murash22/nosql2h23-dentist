import Header from "../../Widgets/Header/Header.tsx";
import LoginButton from "../../Components/LoginButton/LoginButton.tsx";
import FormCard from "../../Components/FormCard/FormCard.tsx";
import FormInput from "../../Components/FormInput/FormInput.tsx";
import {FormEvent, useState} from "react";
import { loginRequest } from "../../api/requests.ts";
import {useNavigate} from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState("hidden")

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const target: any = event.target
    const username = target.username.value
    const password = target.password.value
    loginRequest(username, password)
      .then(res => {
        const role = res.data
        navigate("/" + role)
      })
      .catch((err) => {
        console.log(err.message)
        setErrorText("")
      })
  }

  return (
    <>
      <Header />
      <div className="
         w-full h-auto py-28
         font-poppins text-center font-bold
         flex justify-evenly items-center
       "
      >
        <FormCard>
          <h2 className="leading-relaxed text-6xl text-base1 font-semibold">
            LOG IN
          </h2>
          <form onSubmit={onSubmit} className="flex h-64 flex-col justify-between mt-16">
            <FormInput name={"username"}
                       placeholder={"Username"}
                       required={true}
                       autoComplete={"off"} />
            <FormInput name={"password"}
                       placeholder={"Password"}
                       required={true}
                       autoComplete={"off"} />
            <div className={`${errorText} text-red text-opacity-70 italic self-start`}>
              Invalid username or password!
            </div>
            <div>
              <LoginButton theme="primary" children="Log in" type="submit"></LoginButton>
            </div>
          </form>
        </FormCard>
        <img className="bg-base1 rounded-full " src="src/assets/doctor-img1.png" alt=""/>
      </div>
    </>
  )
}


export default LoginPage;