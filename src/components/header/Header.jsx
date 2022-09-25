import './header.scss'

const HeaderItem = ({ title, description, button }) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerItem">
          <h1>{title}</h1>
          <p>{description}</p>
          <button>{button}</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderItem
