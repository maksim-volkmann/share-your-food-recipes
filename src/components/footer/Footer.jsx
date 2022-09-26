import './footer.scss'
import fbIcon from '../../images/icons/fb_icon_w.png'
import igIcon from '../../images/icons/ig_icon_w.png'
import tikIcon from '../../images/icons/tik_icon_w.png'
import twitIcon from '../../images/icons/twit_icon_w.png'
import youIcon from '../../images/icons/yt_icon_w.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social">
        <a href="https://www.facebook.com/simplyrecipes/" target="_blank">
          <img src={fbIcon} />
        </a>
        <a href="https://www.instagram.com/love_food/" target="_blank">
          <img src={igIcon} />
        </a>
        <a href="https://www.youtube.com/watch?v=7MRoEFl7z6Q" target="_blank">
          <img src={youIcon} />
        </a>
        <a href="https://www.tiktok.com/@5.minute.recipes" target="_blank">
          <img src={tikIcon} />
        </a>
        <a href="https://twitter.com/twitterfood?lang=en" target="_blank">
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
