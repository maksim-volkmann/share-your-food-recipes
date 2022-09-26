import './footer.scss'
import fbIcon from '../../images/icons/fb_icon_w.png'
import igIcon from '../../images/icons/ig_icon_w.png'
import tikIcon from '../../images/icons/tik_icon_w.png'
import twitIcon from '../../images/icons/twit_icon_w.png'
import youIcon from '../../images/icons/yt_icon_w.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contactInfo">
        <a href="">
          <img src={fbIcon} />
        </a>
        <a href="#">
          <img src={igIcon} />
        </a>
        <a href="#">
          <img src={youIcon} />
        </a>
        <a href="#">
          <img src={tikIcon} />
        </a>
        <a href="#">
          <img src={twitIcon} />
        </a>
      </div>
      <div className="footer__info"></div>
      <div className="footer__copyright">
        <span>&copy; Copyright 2011 - 2021</span>
      </div>
    </div>
  )
}

export default Footer
