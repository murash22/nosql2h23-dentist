import Header from "../../Widgets/Header/Header.tsx";
import ProfileButton from "../../Components/ProfileButton/ProfileButton.tsx";
import SignOutButton from "../../Components/SignOutButton/SignOutButton.tsx";
import FormInput from "../../Components/FormInput/FormInput.tsx";
import {useState} from "react";
import FilterCard from "../../Widgets/FilterCard/FilterCard.tsx";
import RecordsStand from "../../Widgets/RecordsStand/RecordsStand.tsx";
import {timeRepresentationOptions} from "../../Config/timeRepresentationConfig.ts";


const person = {
  name: "Patient1",
  appointments: [
    {
      id: 1,
      date: "22.12.2023, 15:54",
      doctor: "Doctor Doolittle",
      procedure: "Procedure 1"
    },
    {
      id: 2,
      date: "20.12.2012, 11:00",
      doctor: "Doctor Aybolit",
      procedure: "Procedure 2"
    },
    {
      id: 3,
      date: "20.12.2022, 06:00",
      doctor: "Doctor A",
      procedure: "Procedure 2"
    }
  ]
}

function PatientPage() {
  const gridCol3 = "w-full grid grid-cols-3 justify-items-center"

  const [records, setRecords] = useState(person.appointments)

  const onChange = (event: any) => {
    const target = event.target
    const comparators: {[index: string]: any} = {
      'date': (x: any) => x.date.includes(new Date(target.value).toLocaleString('ru-RU', timeRepresentationOptions)),
      'procedure': (x: any) => x.procedure.includes(target.value),
      'doctor': (x: any) => x.doctor.includes(target.value)
    }
    setRecords(records.filter(comparators[target.name]))
  }

  const dropFilter = () => {
    setRecords(person.appointments)
  }

  return (
    <>
      <Header profileButton={<ProfileButton/>} signOutButton={<SignOutButton/>} />
      <div className="px-14 font-bold min-w-fit">
        <h3 className="text-2xl my-7">Hello, <span className="text-base1">{person.name}</span>!</h3>
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
            {records.map((currentValue, idx) =>
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