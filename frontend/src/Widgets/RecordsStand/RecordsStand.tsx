import {ReactElement} from "react";

interface RecordsStandProps {
  name: string,
  theme: "primary" | "secondary",
  children: Array<ReactElement> | ReactElement
}

function RecordsStand({name, theme, children}: RecordsStandProps) {

  const bgStyle = {
    "primary": "bg-base2",
    "secondary": "bg-base3"
  }

  return (
    <>
      <div className={`${bgStyle[theme]} rounded-3xl flex flex-col items-center pt-4`}>
        <h2 className="text-2xl mb-4">{name}</h2>
        <hr className="w-11/12 opacity-50"/>
        {children}
      </div>
    </>
  )
}

export default RecordsStand