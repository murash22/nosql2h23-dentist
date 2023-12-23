import Header from "../../Widgets/Header/Header.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import FilterCard from "../../Widgets/FilterCard/FilterCard.tsx";
import FormInput from "../../Components/FormInput/FormInput.tsx";
import RecordsStand from "../../Widgets/RecordsStand/RecordsStand.tsx";
import {useEffect, useState} from "react";
import {timeRepresentationOptions} from "../../Config/timeRepresentationConfig.ts";
import {useSelector} from "react-redux";
import {getDoctorById} from "../../api/requests.ts";
import {useNavigate} from "react-router-dom";


function DoctorPage() {
  let tmp: any = {}
  const [info, setInfo] = useState(tmp)
  const navigate = useNavigate()
  const id = useSelector((state: any) => state.id)
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    getDoctorById(id)
      .then(res => {
        setInfo(res.data)
        setAppointments(res.data.appointments)
      })
      .catch(err => {
        console.log(err)
        navigate("/welcome")
      })
  }, []);


  const onChange = (event: any) => {
    const target = event.target
    const comparators: {[index: string]: any} = {
      'date': (x: any) => x.date == (new Date(target.value).toLocaleString('ru-RU', timeRepresentationOptions)),
      'procedure': (x: any) => x.procedure.includes(target.value),
      'patient': (x: any) => x.patient.includes(target.value)
    }
    console.log(target.value)
    setAppointments(appointments.filter(comparators[target.name]))
  }

  const dropFilter = () => {
    setAppointments(info.appointments)
  }

  const gridCol3 = "w-full grid grid-cols-3 justify-items-center"

  return (
    <>
      <Header signOutButton={<SignOutButton />} />
      <div className="px-14 font-bold min-w-fit">
        <h3 className="text-2xl my-7">Hello, <span className="text-base1">{info.name}</span>!</h3>
        <FilterCard theme="primary" dropFilter={dropFilter} onChange={onChange}>
          <div>
            <label htmlFor="" className="block ml-3">Date</label>
            <FormInput name={"date"} type="datetime-local"/>
          </div>
          <div>
            <label htmlFor="" className="block ml-3">Procedure</label>
            <FormInput name={"procedure"} placeholder="Name"/>
          </div>
          <div>
            <label htmlFor="" className="block ml-3">Patient</label>
            <FormInput name={"patient"} placeholder="Name"/>
          </div>
        </FilterCard>
        <RecordsStand name={"Upcoming Appointments"} theme={"primary"}>
          <div className={`${gridCol3} text-2xl my-4`}>
            <h4 >Date</h4>
            <h4>Procedure</h4>
            <h4>Patient</h4>
          </div>
          <ul className="w-full">
            {appointments.map((currentValue: any, idx) =>
              <div key={idx}  className={`${gridCol3} text-lg font-medium mb-7`}>
                <li>{currentValue.date}</li>
                <li>{currentValue.procedure}</li>
                <li>{currentValue.patient}</li>
              </div>)}
          </ul>
        </RecordsStand>
      </div>
    </>
  )
}


export default DoctorPage