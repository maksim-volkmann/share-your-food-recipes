import './logo.scss'
import LogoImage from '../../images/logo.png'

const Logo = () => {
  return (
    <div className="logo">
      <a href="#">
        <img src={LogoImage} alt="logo" />
      </a>
    </div>
  )
}

export default Logo
