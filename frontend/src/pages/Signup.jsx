import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter your infromation to create an account"} />
        <InputBox label={"First Name"} placeholder={"John"} />
        <InputBox label={"Last Name"} placeholder={"Doe"} />
        <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
        <InputBox
          label={"Password"}
          type={"Password"}
          placeholder={"Abc@123"}
        />
        <div className="pt-4">
          <Button label={"Sign up"} />
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
