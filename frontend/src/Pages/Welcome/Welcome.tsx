import Header from "../../Widgets/Header/Header.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import ProfileButton from "../../Components/ProfileButton/ProfileButton.tsx";
import LoginButton from "../../Components/LoginButton/LoginButton.tsx";
import FormCard from "../../Components/FormCard/FormCard.tsx";


function Welcome() {

  return (
    <>
      <Header signOutButton={SignOutButton()} profileButton={ProfileButton()}></Header>
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
          <div className="flex flex-col justify-evenly h-32">
            <LoginButton theme="primary" children="Login"></LoginButton>
            {/*<LoginButton theme="secondary" children="Sign Up"></LoginButton>*/}
          </div>
        </FormCard>
        <div className="">
          <img className="bg-base1 rounded-full " src="src/assets/doctor-img1.png" alt=""/>
        </div>
      </div>
    </>
  )
}


export default Welcome;