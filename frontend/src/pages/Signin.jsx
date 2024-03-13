import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [session, setSession] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setSession(!!localStorage.getItem("token"))
  }, [])

  if (session) {
    navigate("/dashboard")
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 h-max text-center p-4">
        <Heading label={"Sign In"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          label={"Email"}
          placeholder={"johndoe@example.com"}
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
          type={"Password"}
        />
        <div className="pt-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username: username,
                  password: password,
                }
              )
              if (response) {
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
              }
            }}
            label={"Sign In"}
          />
        </div>
        <div>
          <ButtonWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  )
}

export default Signin
