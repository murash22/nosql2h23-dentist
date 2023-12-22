import { ReactElement, FormEventHandler, MouseEventHandler } from "react";

interface FilterCardProps {
  onChange: FormEventHandler<HTMLDivElement> | undefined,
  dropFilter: MouseEventHandler<HTMLButtonElement> | undefined,
  children: Array<ReactElement>,
  theme: "primary" | "secondary",
}

function FilterCard({onChange, children, dropFilter, theme}: FilterCardProps) {
  const bgStyle = {
    "primary": "bg-base2",
    "secondary": "bg-base3"
  }
  return (
    <>
      <div className={`${bgStyle[theme]} rounded-3xl py-4 px-10 my-4`}>
        <h2 className="text-2xl">Filter by</h2>
        <div className="flex justify-between mt-6 mb-3 text-xl" onChange={onChange}>
          {children}
        </div>
        <button onClick={dropFilter}
                className="bg-black bg-opacity-30 p-3 rounded-3xl
                  text-darkPurple text-opacity-80 mt-3">
          Drop filter
        </button>
      </div>
    </>
  )
}


export default FilterCard