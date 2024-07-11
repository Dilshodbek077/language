import { useContext } from "react";
import AppContext from "../../context/store";
import { useTranslation } from "react-i18next";
import "./Home.css"
import girl from "../../image/girl.png"
import k1 from "../../image/k1.png"
import k2 from "../../image/k2.png"


const Home = () => {
  const {t, i18n} = useTranslation();
  const [state, dispatch] = useContext(AppContext);
  return (
   <>
   <div className="box1">
    <div className="box2">
      <h1 className="blog">{t("blog")}</h1>
      <h2 className="think">{t("think")}</h2>
      <p className="design">{t("design")}</p>
      <div className="allbtn">
        <button className="btn1">TWITTER</button>
        <button className="btn2">LINKEDIN</button>
        <button className="btn3">MEDIUM</button>
      </div>
    </div>
    <div className="box3">
      <img className="foto" src={girl} alt="" />
    </div>
   </div>

   <div className="box5">
    <div className="box6">
    <ul>
      <li><a className="lilist m" href="#">{t("nn1")}</a></li>
      <li><a className="lilist" href="#">{t("nn2")}</a></li>
      <li><a className="lilist" href="#">{t("nn3")}</a></li>
      <li><a className="lilist" href="#">{t("nn4")}</a></li>
      <li><a className="lilist" href="#">{t("nn5")}</a></li>
      <li><a className="lilist" href="#">{t("nn6")}</a></li>
      <li><a className="lilist" href="#">{t("nn7")}</a></li>
    </ul>
    </div>
    <div className="box7">
      <div className="box8">
        <img className="k1" src={k1} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
      <div className="box8">
        <img className="k1" src={k2} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
      <div className="box8">
        <img className="k1" src={k1} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
      <div className="box8">
        <img className="k1" src={k2} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
      <div className="box8">
        <img className="k1" src={k1} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
      <div className="box8">
        <img className="k1" src={k2} alt="" />
        <p className="nov">NOV 23 2020</p>
        <h1 className="this">{t("this")}</h1>
        <p className="qu">{t("a")}</p>
        <a className="hee" href="#">{t("href")}</a>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home;