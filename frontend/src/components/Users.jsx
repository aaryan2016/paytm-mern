import { useState } from "react"
import { Button } from "./Button"

export default function Users() {
  //Replace with Backend Call
  const [users, Setusers] = useState([
    {
      firstname: "Abhay",
      lastname: "Goel",
      _id: 1,
    },
  ])
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border border-slate-200 rounded"
        />
      </div>
      <div>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  )
}

function User({ user }) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button label={"Send Money"} />
      </div>
    </div>
  )
}
