import Header from "../../Widgets/Header/Header.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import FormInput from "../../Components/FormInput/FormInput.tsx";
import {useEffect, useState} from "react";
import FilterCard from "../../Widgets/FilterCard/FilterCard.tsx";
import RecordsStand from "../../Widgets/RecordsStand/RecordsStand.tsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getPatientById} from "../../api/requests.ts";
import {timeRepresentationOptions} from "../../Config/timeRepresentationConfig.ts";

function PatientPage() {

  let tmp: any = {}
  const [info, setInfo] = useState(tmp)
  const navigate = useNavigate()
  const id = useSelector((state: any) => state.id)
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    if (!id) navigate("/")
    getPatientById(id)
      .then(res => {
        console.log(id, res)
        setInfo(res.data)
        setAppointments(res.data.appointments)
      })
      .catch(err => {
        console.log(err.message)
        navigate("/welcome")
      })
  }, []);

  const onChange = (event: any) => {
    const target = event.target
    const comparators: {[index: string]: any} = {
      'date': (x: any) => x.date == (new Date(target.value).toLocaleString('ru-RU', timeRepresentationOptions)),
      'procedure': (x: any) => x.procedure.includes(target.value),
      'doctor': (x: any) => x.doctor.includes(target.value)
    }
    setAppointments(appointments.filter(comparators[target.name]))
  }

  const dropFilter = () => {
    setAppointments(info.appointments)
  }

  const gridCol3 = "w-full grid grid-cols-3 justify-items-center"

  return (
    <>
      <Header signOutButton={<SignOutButton/>} />
      <div className="px-14 font-bold min-w-fit">
        <h3 className="text-2xl my-7">Hello, <span className="text-base1">{info.name}</span>!</h3>
        <FilterCard theme="primary" onChange={onChange} dropFilter={dropFilter}>
          <div>
            <label htmlFor="" className="block ml-3">Date</label>
            <FormInput name={"date"} type="datetime-local"/>
          </div>
          <div>
            <label htmlFor="" className="block ml-3">Procedure</label>
            <FormInput name={"procedure"} placeholder="Name"/>
          </div>
          <div>
            <label htmlFor="" className="block ml-3">Doctor</label>
            <FormInput name={"doctor"} placeholder="Name"/>
          </div>
        </FilterCard>
        <RecordsStand name={"Upcoming Appointments"} theme={"primary"}>
          <div className={`${gridCol3} text-2xl my-4`}>
            <h4 >Date</h4>
            <h4>Procedure</h4>
            <h4>Doctor</h4>
          </div>
          <ul className="w-full">
            {appointments.map((currentValue: any, idx) =>
              <div key={idx}  className={`${gridCol3} text-lg font-medium mb-7`}>
                <li>{currentValue.date}</li>
                <li>{currentValue.procedure}</li>
                <li>{currentValue.doctor}</li>
              </div>)}
          </ul>
        </RecordsStand>
      </div>

    </>
  )
}

export default PatientPage