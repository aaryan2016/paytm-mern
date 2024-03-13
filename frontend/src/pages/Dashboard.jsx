import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios"

const Dashboard = () => {
  const [firstname, setFirstname] = useState("")
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const data = async () => {
      const abc = await axios.get("http://localhost:3000/api/v1/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      console.log(abc)
      setFirstname(abc.data.firstname)
      setBalance(abc.data.balance)
    }
    data()
  }, [])
  return (
    <div>
      <Appbar firstname={firstname} />
      <div className="m-8">
        <Balance value={balance} />
        <Users loggedInFirstname={firstname} />
      </div>
    </div>
  )
}

export default Dashboard
