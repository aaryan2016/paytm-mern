import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Users() {
  //Replace with Backend Call
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user)
      })
  }, [filter])

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value)
          }}
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
  const navigate = useNavigate()

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
        <Button
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstname}`)
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  )
}
