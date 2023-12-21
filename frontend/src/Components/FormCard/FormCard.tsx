import {PropsWithChildren} from "react";

function FormCard({children}: PropsWithChildren) {

  return (
    <>
      <div className="w-5/12 h-max bg-base2 px-20 py-16 rounded-3xl">
        {children}
      </div>
    </>
  )
}

export default FormCard