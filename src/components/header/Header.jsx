import HeaderItem from '../../componentHelpers/headerItem/HeaderItem'
import './header.scss'
// import HeaderImage from '../../images/main_header.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <HeaderItem
          title="New Recipes Every Day"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
          button="Browse Recipes"
        />
      </div>
    </div>
  )
}

export default Header
