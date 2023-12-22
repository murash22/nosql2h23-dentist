import Header from "../../Widgets/Header/Header.tsx";
import LoginButton from "../../Components/LoginButton/LoginButton.tsx";
import FormCard from "../../Components/FormCard/FormCard.tsx";
import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";


function WelcomePage() {
  const navigate = useNavigate()
  const onClick = (e: FormEvent) => {
    e.preventDefault()
    navigate('/login')
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
          <h2 className="leading-relaxed text-4xl">
            <span className="text-darkPurple">Welcome</span> to
            <span className="text-base1"> DENTAL</span> CLINIC
          </h2>
          <p className="my-10 text-white text-2xl">
            Discover a brighter, healthier smile with us. Our experienced team is dedicated to providing top-quality dental care in a comfortable environment. We offer a range of services tailored to your unique needs. Schedule your appointment today and let us take care of your smile.
          </p>
          <form className="flex flex-col justify-evenly h-32 items-center">
            <LoginButton theme="primary" children="Log in" onClick={onClick}/>
            {/*<LoginButton theme="secondary" children="Sign Up"></LoginButton>*/}
          </form>
        </FormCard>
        <div className="">
          <img className="bg-base1 rounded-full " src="src/assets/doctor-img1.png" alt=""/>
        </div>
      </div>
    </>
  )
}


export default WelcomePage;