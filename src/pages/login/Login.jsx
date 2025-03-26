import { useContext } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
  const [credentials, setcreadentials] = usestate({
    username: undefined,
    password: undefined,
  })

  const { loading, error, dispatch } = useContext(AuthContext);

  return (
    <div>Login</div>
  )
}

export default Login