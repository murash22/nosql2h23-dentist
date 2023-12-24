import FilterCard from "../../../Widgets/FilterCard/FilterCard.tsx";
import FormInput from "../../../Components/FormInput/FormInput.tsx";
import RecordsStand from "../../../Widgets/RecordsStand/RecordsStand.tsx";
import {useEffect, useState} from "react";
import {getAppointments} from "../../../api/requests.ts";

function Schedule() {
  const [appointments, setAppointments] =useState([])
  const [filteredAppointments, setFilteredAppointments] = useState([])
  useEffect(() => {
    getAppointments()
      .then(res => {
        setAppointments(res.data.appointments)
        setFilteredAppointments(res.data.appointments)
      })
      .catch(err => console.log(err))
  }, []);

  const [filter, setFilter] = useState('')
  const dropFilter = () => {
    setFilter('')
    setFilteredAppointments(appointments)
  }
  const onChange = (e: any) => {
    const value: any = e.target.value
    // @ts-ignore
    setFilter(value)
    const tmp = appointments.filter((x: any) => x.date.includes(value) || x.procedure.includes(value) || x.patient.includes(value) || x.doctor.includes(value))
    setFilteredAppointments(tmp)
  }

  const gridCol4 = "w-full grid grid-cols-4 justify-items-center"

  return (
    <>
      <div className="font-bold text-xl">
        <FilterCard onChange={onChange} dropFilter={dropFilter} theme="primary">
          <FormInput name={"filter_input"} type="text" value={filter}/>
        </FilterCard>
        <RecordsStand name={"Registered Schedules"} theme="primary">
          <div className={`${gridCol4} text-2xl my-4`}>
            <h4>Date</h4>
            <h4>Procedure</h4>
            <h4>Doctor</h4>
            <h4>Patient</h4>
          </div>
          <ul className="w-full">
            {filteredAppointments.map((currentValue: any, idx) =>
              <div key={idx}  className={`${gridCol4} text-lg font-medium mb-7`}>
                <li>{currentValue.date}</li>
                <li>{currentValue.procedure}</li>
                <li>{currentValue.doctor}</li>
                <li>{currentValue.patient}</li>
              </div>)}
          </ul>
        </RecordsStand>

      </div>
    </>
  )
}

export default Schedule