import Header from "../../Widgets/Header/Header.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import {useEffect, useState} from "react";
import PatientRecords from "./PatientRecords/PatientRecords.tsx";
import Schedule from "./Schedule/Schedule.tsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function AdminPage(){
  const role = useSelector((state: any) => state.role)
  const navigate = useNavigate()
  const [curSubPage, setCurSubPage] = useState("patientRecords")
  const [curStyle, setCurStyle] = useState(["bg-base1", "bg-base2"])
  useEffect(() => {
    if (role != "admin") {
      navigate("/")
    }
  }, []);
  console.log("role", role)
  const subPages = {
    'patientRecords': <PatientRecords />,
    'schedule': <Schedule />
  }
  function onClick(e: any) {
    const name = e.target.name
    setCurSubPage(name)
    if (name == 'patientRecords') {
      setCurStyle(["bg-base1", "bg-base2"])
    } else if (name == "schedule") {
      setCurStyle(["bg-base2", "bg-base1"])
    }
  }

   return (
    <>
      <Header signOutButton={<SignOutButton />} />
      <div className=" mx-10">
        <header className="text-2xl font-bold">
          <h3 className="my-7 ">
            Administrator Dashboard
          </h3>
          <nav className="flex justify-around text-center w-5/12 min-w-fit">
            <a onClick={onClick} name="patientRecords" className={`${curStyle[0]} rounded-2xl p-4 w-56 mr-2 cursor-pointer`}>
              Patient records
            </a>
            <a onClick={onClick} name="schedule" className={`${curStyle[1]} rounded-2xl p-4 w-56 cursor-pointer`}>
              Schedule
            </a>
          </nav>
          <hr className="mt-3 opacity-30"/>
        </header>
        {subPages[curSubPage]}
      </div>

    </>
   )
}

export default AdminPage