import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <input type="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  )
}

export default Login
