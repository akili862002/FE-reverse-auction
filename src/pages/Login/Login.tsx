import {
  Checkbox,
  Input,
  Typography
} from "@material-tailwind/react";
import { Button } from '@material-tailwind/react'
import { useState } from "react";
import { GoogleIcon } from "./icons";
import { motion } from "framer-motion"


interface ILoginPageProps { }

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="flex w-full h-screen bg-gray-200 ">
      <div className="w-full center-children">
        <motion.div className="w-full max-w-sm bg-white shadow-xl p-7 rounded-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h1" className="mb-6 text-3xl font-semibold">Sign in</Typography>
          <div className="w-full space-y-5">
            <Input label="Email" />
            <Input label="Password" type={isShowPassword ? "text" : "password"} />
            <div className="-translate-x-3">
              <Checkbox labelProps={{ className: "text-sm font-medium" }} label={"Show password"} onChange={() => setIsShowPassword(!isShowPassword)} />
            </div>
            <div className="flex justify-end w-full">
              <a className="text-sm font-medium">Forgot password?</a>
            </div>
            <Button type="submit" className="w-full">Continue</Button>
            <Button className="flex items-center justify-center w-full space-x-2 " variant="outlined">
              <GoogleIcon className="w-4 h-4" />
              <p>Sign in with Google</p>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginPage;


