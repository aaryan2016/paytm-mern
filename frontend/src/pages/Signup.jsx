import { useState } from "react"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [firstname, SetFirstname] = useState("")
  const [lastname, SetLastname] = useState("")
  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter your infromation to create an account"} />
        <InputBox
          onChange={(e) => {
            SetFirstname(e.target.value)
          }}
          label={"First Name"}
          placeholder={"John"}
        />
        <InputBox
          onChange={(e) => {
            SetLastname(e.target.value)
          }}
          label={"Last Name"}
          placeholder={"Doe"}
        />
        <InputBox
          onChange={(e) => {
            SetUsername(e.target.value)
          }}
          label={"Email"}
          placeholder={"johndoe@example.com"}
        />
        <InputBox
          onChange={(e) => {
            SetPassword(e.target.value)
          }}
          label={"Password"}
          type={"Password"}
          placeholder={"Abc@123"}
        />
        <div className="pt-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  firstname,
                  lastname,
                  username,
                  password,
                }
              )
              // console.log(response.data.token)
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }}
            label={"Sign up"}
          />
        </div>
        <div>
          <ButtonWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  )
}

export default Signup
