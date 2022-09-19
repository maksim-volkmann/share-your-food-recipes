import './headerItem.scss'

const HeaderItem = ({ title, description, button }) => {
  return (
    <div className="headerItem">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{button}</button>
    </div>
  )
}

export default HeaderItem
