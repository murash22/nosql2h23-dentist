import FilterCard from "../../../Widgets/FilterCard/FilterCard.tsx";
import FormInput from "../../../Components/FormInput/FormInput.tsx";
import PatientCard from "../../../Components/PatientCard/PatientCard.tsx";
import {useEffect, useState} from "react";
import {getPatientsList} from "../../../api/requests.ts";

function PatientRecords() {
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])

  useEffect(() => {
    getPatientsList()
      .then(res => {
        setFilteredPatients(res.data)
        setPatients(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const [filter, setFilter] = useState('')
  const dropFilter = () => {
    setFilter('')
    setFilteredPatients(patients)
  }
  const onChange = (e: any) => {
    const value: any = e.target.value
    // @ts-ignore
    setFilter(value)
    const tmp = patients.filter((x: any) => x.name.includes(value) || String(x.age).includes(value) || x.card.includes(value) || x.phone.includes(value))
    setFilteredPatients(tmp)
  }
  return (
    <>
      <div className="font-bold text-xl">
        <FilterCard onChange={onChange} dropFilter={dropFilter}
                    theme="primary">
          <FormInput name={"filter_input"} type="text" value={filter}/>
        </FilterCard>
        <div className="grid grid-cols-3 gap-x-4">
          {filteredPatients.map(
            (x: any, idx: number) => <PatientCard key={idx} name={x.name} cardNumber={x.card} age={x.age} phone={x.phone} />
          )}
        </div>
      </div>
    </>
  )
}

export default PatientRecords