import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios"

const Dashboard = () => {
  const [firstname, setFirstname] = useState("")
  const [balance, setBalance] = useState(0)
  const [userId, setUserId] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setFirstname(response.data.firstname)
        setBalance(response.data.balance)
        setUserId(response.data.userId)
      })
      .finally(() => {
        userId && console.log(userId)
      })
  }, [userId])

  useEffect(() => {
    const timerId = setInterval(async () => {
      try {
        const bal = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            userId: userId,
          }
        )
        setBalance(bal.data.balance)
        console.log("2nd Console: " + userId + " & balance: " + balance)
      } catch (e) {
        console.log(e)
      }
    }, 2000)

    return () => {
      clearInterval(timerId)
    }
  }, [userId, balance])
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
