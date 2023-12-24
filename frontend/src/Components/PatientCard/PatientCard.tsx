

function PatientCard({name, age, cardNumber, phone}: any) {
  return (
    <>
      <div className="bg-base2 rounded-3xl p-3 leading-loose px-8">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Card number: {cardNumber}</p>
        <p>Phone: {phone}</p>
      </div>
    </>
  )
}

export default PatientCard