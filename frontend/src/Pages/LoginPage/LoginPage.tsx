import Header from "../../Widgets/Header/Header.tsx";
import LoginButton from "../../Components/LoginButton/LoginButton.tsx";
import FormCard from "../../Components/FormCard/FormCard.tsx";
import FormInput from "../../Components/FormInput/FormInput.tsx";
import { FormEvent } from "react";


function LoginPage() {

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const target: any = event.target
    console.log(target.username.value)
    console.log(target.password.value)
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
          <form action="/welcome" onSubmit={onSubmit} className="flex h-64 flex-col justify-between mt-16">
            <FormInput name={"username"}
                       placeholder={"Username"}
                       required={true}
                       autoComplete={"off"} />
            <FormInput name={"password"}
                       placeholder={"Password"}
                       required={true}
                       autoComplete={"off"} />
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