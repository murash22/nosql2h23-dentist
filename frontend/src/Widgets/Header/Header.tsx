import {ReactNode} from "react";

interface HeaderProps {
  profileButton?: ReactNode | null;
  signOutButton?: ReactNode | null;
}

function Header({profileButton=null, signOutButton=null} : HeaderProps) {

  return (
    <>
      <div className="h-16 w-full bg-darkBlue grid grid-cols-3">
        {profileButton}
        <h1 className="font-poppins font-bold text-2xl justify-self-center col-start-2 self-center ">
          <span className="text-base2">DENTAL</span> CLINIC
        </h1>
        {signOutButton}
      </div>
    </>
  )
}


export default Header;