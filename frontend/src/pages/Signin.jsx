import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Subheading from "../components/Subheading"

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 h-max text-center p-4">
        <Heading label={"Sign In"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
        <InputBox label={"Password"} type={"Password"} />
        <div className="pt-4">
          <Button label={"Sign In"} />
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
