import { useTranslation } from 'react-i18next'
import i18n from '../../locales/i18next'
import { Outlet } from 'react-router-dom'
import "./Nav.css"
import first from "../../image/Logo 1.png"
import { t } from 'i18next'

const Nav = () => {

    const data = useTranslation();
  return (
    <>
    <nav className='navbar'>
      <div>
        <img src={first} alt="" />
      </div>

      <div className='second'>
        <select defaultValue={data.i18n.language} onChange={(e) => {
           i18n.changeLanguage(e.target.value)
        }}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>
        <ul>
          <li><a href="#">{t("n1")}</a></li>
          <li><a className='g' href="#">{t("n2")}</a></li>
          <li><a href="#">{t("n3")}</a></li>
          <li><a href="#">{t("n4")}</a></li>
          <li><a href="#">{t("n5")}</a></li>
          <li><a href="#">{t("n6")}</a></li>
          <li><a href="#">{t("n7")}</a></li>
        </ul>
    </div>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Nav