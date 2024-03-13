import { useNavigate } from "react-router-dom"

function Appbar({ firstname }) {
  const letter = firstname.toUpperCase()[0]
  const navigate = useNavigate()
  return (
    <div className="flex h-14 shadow justify-between ">
      <div className="flex flex-col justify-center h-full ml-4 ">PayTM App</div>
      <div className="flex items-center ">
        <div className="flex flex-col justify-center h-full mr-4 text-lg">
          Hello
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center ">
            <div className="flex flex-col justify-center text-xl">{letter}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <button
            className="h-max p-2 mx-3 text-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => {
              localStorage.removeItem("token")
              navigate("/signin")
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appbar
