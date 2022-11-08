import React, { useState,useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import i18n from "../../assest/js/i18n";

// import '../../assest/css/landing-page/bootstrap.min.css';
import "../../assest/css/landing-page/style1.css";
// import "../assest/icon/font/style.css";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import  fcoin from "../../assest/images/landing-page/F-coin.png";
import  sfe from "../../assest/images/landing-page/FE.png";
import  ad from "../../assest/images/landing-page/AD.png";
import  ff from "../../assest/images/landing-page/FF.png";

import  sep from "../../assest/images/landing-page/s-ep.png";
import landingheaderlogo from "../../assest/images/landing-page/evento packege.png";
import right from "../../assest/images/landing-page/right.png";
import dj from "../../assest/images/landing-page/dj.png";
import Speaker from "../../assest/images/landing-page/Speaker.png";
import Wishlist from "../../assest/images/landing-page/Wishlist.png";
import Share from "../../assest/images/landing-page/Share.png";
import noiseporn from "../../assest/images/landing-page/noiseporn.jpg";
import upcoming1 from "../../assest/images/landing-page/upcoming-1.png";
import upcoming2 from "../../assest/images/landing-page/upcoming-2.png";
import upcoming3 from "../../assest/images/landing-page/upcoming-3.png";
// import Showcasebg from "../assets/img/Showcase-bg.png";
import Showcasebg from "../../assest/images/landing-page/Showcase-bg.png";
import ShowBACK from "../../assest/images/landing-page/BACK.jpg";
import giftboxl from "../../assest/images/landing-page/gift-box-l.png";
import giftboxl2 from "../../assest/images/landing-page/gift-box-l2.png";
import giftboxl3 from "../../assest/images/landing-page/gift-box-l3.png";
import aboutg from "../../assest/images/landing-page/about-g.png";
import MobileStoreOffer from "../../assest/images/landing-page/Mobile Store Offer.png";
import GrocerystoreOffer from "../../assest/images/landing-page/Grocery store Offer.png";
import friutmarket from "../../assest/images/landing-page/friut-market.jpg";
import fashionstore from "../../assest/images/landing-page/fashion-store.png";
import ourcompany from "../../assest/images/landing-page/our-company.png";
// import lbanner from "../assets/img/l-banner.png";
// import logo from "../assets/img/evento packege.png";
import footerlogo from "../../assest/images/landing-page/evento packege.png";
import googleplay from "../../assest/images/landing-page/google-play.png";
import appstore from "../../assest/images/landing-page/app-store.png";
import owner from "../../assest/images/landing-page/owner.png";
import user from "../../assest/images/landing-page/user.png";
import whatsupfooter from "../../assest/images/landing-page/whatsup-footer.png";
import facebookfooter from "../../assest/images/landing-page/facebook-footer.png";
import telegramfooter from "../../assest/images/landing-page/telegram-footer.png";
import instagramfooter from "../../assest/images/landing-page/instagram-footer.png";
import twitterfooter from "../../assest/images/landing-page/twitter-footer.png";
import linkedinfooter from "../../assest/images/landing-page/linkedin-footer.png";
import youtubefooter from "../../assest/images/landing-page/you-tube-footer.png";
import usa from "../../assest/images/landing-page/usa.png";
import france from "../../assest/images/landing-page/france.png";
import india from "../../assest/images/landing-page/india.png";
import germany from "../../assest/images/landing-page/germany.png";
import china from "../../assest/images/landing-page/china.png";
import thailand from "../../assest/images/landing-page/thailand.png";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
    console.log(`lanuage changed to ${ln}`);
  };
};

const options = {
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const options2 = {
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function save() {
    console.log({ name, email, contact, message });
    let data = { name, email, contact, message };
    fetch("http://143.244.137.15:8000/getintouch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      alert("You have successfully submited your query");
      setName("");
      setEmail("");
      setContact("");
      setMessage("");
    });
  }

  useEffect(() => {

    $(document).ready(function () {
      $(".u-tabs ul li").click(function () {
        var tab_id = $(this).attr("data-tab");
    
        $(".u-tabs ul li").removeClass("current");
        $(".tabs-call").removeClass("current");
    
        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
      });
      $(".video-img").click(function () {
        $("iframe", this)[0].src += "&amp;autoplay=1";
        $(this).addClass("open");
      });
    });
    
    $(document).ready(function () {
      $(function () {
        // Dropdown toggle
        $(".language-toggle").click(function () {
          $(".notification-holder").slideDown();
        });
        $(".radio-btn-icon input").click(function () {
          $(".notification-holder").slideUp();
        });
      });
    });
    
    $(document).ready(function () {
      $(document).ready(function () {
        $(".toggle-icon").click(function () {
          if ($(".toggle-icon").hasClass("active")) {
            $(".toggle-icon").removeClass("active");
            $(".toggle-icon").next().slideUp();
          } else {
            $(".toggle-icon").addClass("active");
            $(".toggle-icon").next().slideDown();
          }
        });
      });
    });
  
 
  }, [])
  

  const { t, i18n } = useTranslation();

  return (
    <div className="landing-wrapper">
      <div className="lmain">
        <div className="landing-content" id="Home">
          <div className="landing-main">
            <div className="landing-header">
              <div className="header-logo">
                <img src={landingheaderlogo} className="img-fluid" alt="" />
              </div>
              <div className="toggle-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="header-menu">
                <ul className="align-items-center">
                  <li>
                    <a href="#Home">{t("home")}</a>
                  </li>
                  <li>
                    <a href="#about">{t("About")}</a>
                  </li>
                  <li>
                    <a href="#feature">{t("Feature")}</a>
                  </li>
                  <li>
                    <a href="#upcoming">{t("Upcoming")}</a>
                  </li>
                  <li>
                    <a href="#showcase">{t("Showcase")}</a>
                  </li>
                  <li>
                    <a href="#plans">{t("Price")}</a>
                  </li>
                  <li>
                    <a href="#about-us">{t("About Us")}</a>
                  </li>
                </ul>
              </div>
              <div className="header-btn">
                <div className="language-selector">
                  <a
                    href="javascript:void(0)"
                    id="language-toggle"
                    className="language-toggle"
                  >
                    <i className="icon-language" aria-hidden="true"></i>
                  </a>
                  <div className="notification-holder">
                    <div className="notif-title">
                      <h2>{t("Language")}</h2>
                      {/* <a href="javascript:void(0)">
                                <i className="icon-close"></i>
                            </a> */}
                    </div>
                    <div className="notification-box notif-lag">
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={usa} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("United States - English")}</h3>
                            <span>{t("Dollar")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="United-States"
                            onChange={changeLanguage("en")}
                            name="state"
                            value="en"
                          />
                        </div>
                      </label>
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={france} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("Europe - French")}</h3>
                            <span>{t("Euro")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="Europe-French"
                            onChange={changeLanguage("fr")}
                            name="state"
                            value="French"
                          />
                        </div>
                      </label>
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={india} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("India - Hindi")}</h3>
                            <span>{t("Indian Rupee")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="India-Hindi"
                            onChange={changeLanguage("hi")}
                            name="state"
                            value="Hindi"
                          />
                        </div>
                      </label>
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={germany} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("Germany - German")}</h3>
                            <span>{t("German Mark (DEM)")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="Germany-German"
                            onChange={changeLanguage("de")}
                            name="state"
                            value="German"
                          />
                        </div>
                      </label>
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={china} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("China - Mandarin")}</h3>
                            <span>{t("Renminbi")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="China-Mandarin"
                            onChange={changeLanguage("zh")}
                            name="state"
                            value="Mandarin"
                          />
                        </div>
                      </label>
                      <label className="notif-holder">
                        <div className="notif-data">
                          <div className="notifiction-i">
                            <img src={thailand} alt="" />
                          </div>
                          <div className="contry-state">
                            <h3>{t("Thailand - Thai")}</h3>
                            <span>{t("Thai Baht")}</span>
                          </div>
                        </div>
                        <div className="radio-btn-icon">
                          <input
                            type="radio"
                            id="Thailand-Thai"
                            onChange={changeLanguage("tha")}
                            name="state"
                            value="Thai"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <a >{t("Contact us")}</a>
               <Link to="auth/login" style={{marginLeft:10}} > <a >{t("Dashboard")}</a></Link>
              </div>
            </div>
            <div className="home-page-titel">
              <div className="landing-bg-img">
                <p>{t("Explore Us")}</p>
                <h2>
                  {t("Get Ready")} <br />{" "}
                  {t("For Mindblowing Public and Private Events  ")}
                </h2>
              </div>
            </div>
          </div>
          <div className="intro" id="feature">
            {/* <h1>{t("Who are we?")}</h1> */}
            <h1>{t(" ")}</h1>
            <div className="intro-holder">
              <div className="intro-text">
                <div className="owner-icon">
                  <img src={owner} className="img-fluid" alt="" />
                </div>
                <div className="owner-text-main">
                  <h2>
                    {t("Are you a Creator, Event planner, or Artist?")}
                  </h2>
                  <p>
                    {t(
                      "If you wish you join as an event planner and try your career in this field if you are an artist and want to support us with your creativity to make the event stunning, and if you think this is the right field for you, Join us and learn about event management."
                    )}
                  </p>
                  {/* <span>{t("Click for Orgenaizer app download")}</span> */}
                  {/* <div className="app-down-btn">
                    <a href="javascript:void(0)">
                      <img src={googleplay} className="img-fluid" alt="" />
                    </a>
                    <a href="javascript:void(0)">
                      <img src={appstore} className="img-fluid" alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="intro-text">
                <div className="owner-icon">
                  <img src={user} className="img-fluid" alt="" />
                </div>
                <div className="owner-text-main">
                  <h2>{t("What do users get?")}</h2>
                  <p>
                    {t(
                      "Evento Package is not only the best platform for the artists and event managers, but users also get the best solutions in this event management company. Users use this platform to book events without any hassle. Here users can easily select the event as per their requirements. The steps mentioned in the event booking management app are extremely easy and simple to follow.Users can easily book the package via mobile applications. All package details are included with photos, and videos along with the event list."
                    )}
                  </p>
                  <span>{t("Click for User app download")}</span>
                  <div className="app-down-btn d-flex">
                    <a href="javascript:void(0)">
                      <img src={googleplay} className="img-fluid" alt="" />
                    </a>
                    <a href="javascript:void(0)">
                      <img src={appstore} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="festum-app-detils">
        <div className="landing-content">
          <div className="f-detils-holder">
            <div className="f-points">
              <ul>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Festum Evento App")}</h2>
                    <p>
                      {t(
                        "lets you Know the Best places to be, in and Around the Country."
                      )}
                    </p>
                  </div>
                </li>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Grab Interest")}</h2>
                    <p>{t("Register your Event Now! to get Houseful Bash.")}</p>
                  </div>
                </li>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Get Best Offer")}</h2>
                    <p>
                      {t(
                        "established fact that a reader will be distracted by the readable"
                      )}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="f-points">
              <ul>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Festum Evento App")}</h2>
                    <p>
                      {t(
                        "lets you Know the Best places to be, in and Around the Country."
                      )}
                    </p>
                  </div>
                </li>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Grab Interest")}</h2>
                    <p>{t("Register your Event Now! to get Houseful Bash.")}</p>
                  </div>
                </li>
                <li>
                  <img src={right} className="img-fluid" alt="" />
                  <div className="points-text">
                    <h2>{t("Get Best Offer")}</h2>
                    <p>
                      {t(
                        "established fact that a reader will be distracted by the readable"
                      )}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Upcoming-event-main">
        <div className="Upcoming-event-holder landing-content" id="upcoming">
          <div className="upcoming-titel-tabs ">
            <div className="u-titels">
              <span>{t("Upcoming")}</span>
            </div>
            <div className="u-tabs">
              <ul>
                <li data-tab="tab-1" className="current">
                  {t("Creater")}
                </li>
                <li data-tab="tab-2">{t("Artist")}</li>
                <li data-tab="tab-3">{t("Field")}</li>
              </ul>
            </div>
          </div>

          <div className="tabs-call current" id="tab-1">
            {/* ############################################ */}
            <div className="utabs-holder  owl-carousel ">
              <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                nav
                dots
                {...options}
              >
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={dj} className="img-fluid" alt="" />
                    <div className="img-under-icon">
                      <span>DJ</span>
                      <div className="ws-icon-hodr">
                        <a href="javascript:void(0)">
                          <img src={Wishlist} alt="" />
                        </a>
                        <a href="javascript:void(0)">
                          <img src={Share} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Availabel</span>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>DJ Lemon</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils vl-ic">
                        <p>250 INR</p>
                        <a href="javascript:void(0)">
                          Vesu, Surat<i className="icon-location1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={Speaker} className="img-fluid" alt="" />
                    <div className="img-under-icon">
                      <span>Speaker / Anchor</span>
                      <div className="ws-icon-hodr">
                        <a href="javascript:void(0)">
                          <img src={Wishlist} alt="" />
                        </a>
                        <a href="javascript:void(0)">
                          <img src={Share} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Availabel</span>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Kimberly Maldonado</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils vl-ic">
                        <p>150 INR</p>
                        <a href="javascript:void(0)">
                          Vesu, Surat<i className="icon-location1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={noiseporn} className="img-fluid" alt="" />
                    <div className="img-under-icon">
                      <span>Motivational speakers</span>
                      <div className="ws-icon-hodr">
                        <a href="javascript:void(0)">
                          <img src={Wishlist} alt="" />
                        </a>
                        <a href="javascript:void(0)">
                          <img src={Share} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Not Availabel</span>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Tony Robbins</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils vl-ic">
                        <p>150 INR</p>
                        <a href="javascript:void(0)">
                          Vesu, Surat<i className="icon-location1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>

          <div className="tabs-call" id="tab-2">
            <div className="utabs-holder owl-carousel">
              <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                nav
                dots
                {...options}
              >
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming1} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming2} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming3} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>

          <div className="tabs-call" id="tab-3">
            <div className="utabs-holder owl-carousel">
              <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                nav
                dots
                {...options}
              >
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming1} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming2} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-event-card item">
                  <div className="u-event-img">
                    <img src={upcoming3} className="img-fluid" alt="" />
                    <span>July 23, 2021 - July 30, 2021</span>
                  </div>
                  <div className="uevent-card-text">
                    <div className="rating-ariya">
                      <div className="rating-star">
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-Star"></i>
                        <i className="icon-silver-Star"></i>
                        <i className="icon-silver-Star"></i>
                      </div>
                      <div className="event-loction">
                        <span>Vesu, Surat</span>
                        <i className="icon-share"></i>
                      </div>
                    </div>
                    <div className="event-name">
                      <h2>Boom Beats Party</h2>
                    </div>
                    <div className="festival-sold">
                      <div className="sold-detils">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Music</a>
                          </li>
                          <li className="f-name">Festival</li>
                          <li>
                            <div className="procss-bar"></div>
                          </li>
                          <li className="sold-t">150 sold</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            {/* ############################################ */}
          </div>
        </div>
      </div>
      <div className="showcase-main" id="showcase">
        <div className="position-relative pt-14 pt-sm-5 pb-5">
          <img src={ShowBACK} className="img-fluid showBack" alt="" />
          <div className="showcase-titel position-relative">
            <h2>{t("What exactly is Evento Package?")}</h2>
            <p className="mb-0">
              {t(
                "Evento Package is a complete website for event creation and management. The website makes creating and organizing various events extremely simple and hassle-free. The creators can create an event on Evento Package easily and they can choose their time slot and preferred place for the event. Overall, this website is a complete solution for effortless and quick event creation for all the creators out there."
              )}
            </p>
          </div>
        </div>
        <img src={Showcasebg} className="img-fluid" alt="" />
      </div>
      <div className="pricing-plan-main" id="plans">
        <div className="landing-content">
          <div className="showcase-titel">
            <h2>{t("Here are our pricing plans")}</h2>
            <p>
              {t(
                "Our pricing is affordable and comes in different plans. You can choose the plan that suits your budget the best. Please have a look at our pricing plans and choose your preferred plan now."
              )}
            </p>
          </div>
          <div className="plans-holder">
            <div className="plans-item">
              <div className="d-block">
                <div className="plan-logo">
                  <img src={giftboxl} className="img-fuid" alt="" />
                </div>
                <div className="plan-titel">
                  <span>{t("Local Offer Monthly")}</span>
                </div>
                <div className="condition-holder">
                  <ul>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Long established fact that")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("it look like readable English.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span> {t("simply dummy text of the printing.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Lorem Ipsum is therefore always")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button>{t("Subscribe Now")}</button>
            </div>
            <div className="plans-item plan-2">
              <div className="d-block">
                <div className="plan-logo">
                  <img src={giftboxl2} className="img-fuid" alt="" />
                </div>
                <div className="plan-titel">
                  <span>{t("Event Subscription")}</span>
                </div>
                <div className="condition-holder ">
                  <ul>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Long established fact that")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("it look like readable English.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span> {t("simply dummy text of the printing.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Lorem Ipsum is therefore always")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button>{t("Subscribe Now")}</button>
            </div>
            <div className="plans-item plan-3">
              <div className="d-block">
                <div className="plan-logo">
                  <img src={giftboxl3} className="img-fuid" alt="" />
                </div>
                <div className="plan-titel">
                  <span>{t("Live Stream Subscription")}</span>
                </div>
                <div className="condition-holder ">
                  <ul>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Long established fact that")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("it look like readable English.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span> {t("simply dummy text of the printing.")}</span>
                    </li>
                    <li>
                      <i className="icon-right"></i>
                      <span>{t("Lorem Ipsum is therefore always")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button>{t("Subscribe Now")}</button>
            </div>
          </div>
          <div className="Feature-holder">
            <div className="Feature-text">
              <h1>{t("02+")}</h1>
              <span>{t("Year of Experience")}</span>
            </div>
            <div className="Feature-text">
              <h1>{t("21+")}</h1>
              <span>{t("Team Member")}</span>
            </div>
            <div className="Feature-text">
              <h1>{t("5000+")}</h1>
              <span>{t("Download")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-video-g" id="about">
        <div className="about-holder-g">
          <img src={aboutg} className="img-fluid" alt="" />
          <div className="about-text">
            <h2>{t("Who we are?")}</h2>
            <p>
              {t(
                "Evento Package emerges as a great solution for the artists, creators, and event managers. Do you want to work as an event manager and want to organize an event on an advanced package? We confirm the best solution for you. "
              )}
            </p>
            <p>
              {t(
                "The package is simple and designed with an updated version that helps artists and creators to get the best solution."
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="video-gallry-main">
        <div className="video-content">
          <div className="vg-holder">
            <h2>{t("Ads Video Gallery")}</h2>
            <div className="v-cards">
              <div className="vg-card">
                <div className="video-img vi-main">
                  <div className="brick">
                    <img src={MobileStoreOffer} />
                    <div className="bt-play"></div>
                  </div>
                  <div className="video-container">
                    <iframe
                      width="590"
                      height="332"
                      src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0"
                      frameBorder="0"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </div>
                </div>
                <div className="vg-content">
                  <span className="card-title">{t("Mobile Store Offer")}</span>
                  <p>{t("250 Offer")}</p>
                </div>
              </div>
              <div className="vg-card">
                <div className="video-img vi-main">
                  <div className="brick">
                    <img src={GrocerystoreOffer} />
                    <div className="bt-play"></div>
                  </div>
                  <div className="video-container">
                    <iframe
                      width="590"
                      height="332"
                      src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0"
                      frameBorder="0"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </div>
                </div>
                <div className="vg-content">
                  <span className="card-title">{t("Mobile Store Offer")}</span>
                  <p>{t("250 Offer")}</p>
                </div>
              </div>
              <div className="vg-card">
                <div className="video-img vi-main">
                  <div className="brick">
                    <img src={friutmarket} />
                    <div className="bt-play"></div>
                  </div>
                  <div className="video-container">
                    <iframe
                      width="590"
                      height="332"
                      src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0"
                      frameBorder="0"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </div>
                </div>
                <div className="vg-content">
                  <span className="card-title">{t("Mobile Store Offer")}</span>
                  <p>{t("250 Offer")}</p>
                </div>
              </div>
              <div className="vg-card">
                <div className="video-img vi-main">
                  <div className="brick">
                    <img src={fashionstore} />
                    <div className="bt-play"></div>
                  </div>
                  <div className="video-container">
                    <iframe
                      width="590"
                      height="332"
                      src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0"
                      frameBorder="0"
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </div>
                </div>
                <div className="vg-content">
                  <span className="card-title">{t("Mobile Store Offer")}</span>
                  <p>{t("250 Offer")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="our-company-main" id="about-us">
            <div className="company-img">
              <img src={ourcompany} className="img-fluid" alt="" />
            </div>
            <div className="our-content">
              <h2>{t("Our website")}</h2>
              <p>
                {t(
                  "Our website is developed with the core idea of simplifying the tedious process of organizing and creating an event traditionally. With our website, the events can be created easily and with tons of smooth and easy-to-use features. We made sure to develop a website that is easy to navigate and function. Our website is user-friendly and highly responsive, and therefore, creating and booking an event on our website is very simple and quick."
                )}
              </p>
              <p>
                {t(
                  "With Evento Package, we aim to encourage the creators to create events through our website and gain more and more customers to visit their events."
                )}
              </p>
            </div>
          </div>
          <div className="Advertisement-text">
            <div className="Advertisement-titel">
              <h2>{t("How does advertising on our website work?")}</h2>
            </div>
            <div className="Advertisement-para">
              <p>
                {t(
                  "Those who want to advertise their business and are looking for a platform to advertise their business can advertise their business on the Evento Package website and mobile app. This will help the businesses to reach more customers and increase their sales. We have space for advertising banners on our website, which is beneficial for startups and small businesses looking to grow their business online. Let us know if you also want to advertise your brand or business on a profitable platform, and we will make it happen."
                )}
              </p>
              <a href="#ContactUs">{t("Contact us")}</a>
            </div>
          </div>
          <div className="other-products-main">
            <h2>{t("Other Products")}</h2>
            <div className="other-products-holder owl-carousel ">
              <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                nav
                dots
                {...options2}
              >
                <div className="other-product-card text-center item">
                  <div className="product-img">
                    <img src={sep} className="img-fluid" alt="" />
                  </div>
                  <div className="product-titel-link">
                    <p>Evento Package</p>
                    <a href="javascript:void(0)">https://eventopackage.com/</a>
                  </div>
                </div>
                <div className="other-product-card text-center item">
                  <div className="product-img">
                    <img src={fcoin} className="img-fluid" alt="" />
                  </div>
                  <div className="product-titel-link">
                    <p>Evento Package</p>
                    <a href="javascript:void(0)">https://eventopackage.com/</a>
                  </div>
                </div>
                <div className="other-product-card text-center item">
                  <div className="product-img">
                    <img src={sfe} className="img-fluid" alt="" />
                  </div>
                  <div className="product-titel-link">
                    <p>Evento Package</p>
                    <a href="https://www.festumevento.com/">https://www.festumevento.com/</a>
                  </div>
                </div>
                <div className="other-product-card text-center item">
                  <div className="product-img">
                    <img src={ad} className="img-fluid" alt="" />
                  </div>
                  <div className="product-titel-link">
                    <p>Evento Package</p>
                    <a href="javascript:void(0)">https://eventopackage.com/</a>
                  </div>
                </div>
                <div className="other-product-card text-center item">
                  <div className="product-img">
                    <img src={ff} className="img-fluid" alt="" />
                  </div>
                  <div className="product-titel-link">
                    <p>Evento Package</p>
                    <a href="https://friendsfield.in/">https://friendsfield.in/</a>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="ubout-us-main">
        <div className="ubout-continer" id="ContactUs">
          <div className="get-content">
            <h2>{t("Get in touch with Us")}</h2>
            <p>
              {t(
                "If you are looking forward to creating events to showcase your talent and reach to more customers online, you can get in touch with us to learn more about our expertise."
              )}
            </p>
          </div>
          <div className="submit-form-holder">
            <form action="post">
              <div className="f-name">
                <label>{t("Your Name")}</label>
                <input
                  type="text"
                  name=""
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id=""
                />
              </div>
              <div className="e-c-name">
                <div className="e-name">
                  <label>{t("Email")}</label>
                  <input
                    type="text"
                    name=""
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id=""
                  />
                </div>
                <div className="c-name">
                  <label>{t("Contact No")}</label>
                  <input
                    type="text"
                    name=""
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    id=""
                  />
                </div>
              </div>
              <div className="text-ariya-holder">
                <label>{t("Message")}</label>
                <textarea
                  name=""
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  id=""
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <button type="button" onClick={save}>
                {t("Submit your query")}
              </button>
            </form>
          </div>
          <div className="get-brochure-text">
            <h2>{t("Get Our Brochure")}</h2>
            <div className="get-brochure-btn">
              <p>
                {t(
                  "Ready to get Our Brochure & Enjoy your Life Through Our Festum Evento App."
                )}
              </p>
              <button>{t("Download Brochure")}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="l-footer">
        <div className="co-ev-holder landing-content">
          <div className="event-lp">
            <div className="footer-logo">
              <img src={footerlogo} className="img-fluid" alt="" />
            </div>
            <p>
              {t(
                "Festum Evento is a newly developed application, availabel on Google play store, based on the idea to let people find the best place to be in and around the world."
              )}
            </p>
          </div>
          <div className="f-event-info">
            <div className="event-link">
              <span>{t("Usefull Link")}</span>
              <div className="event-all-detail">
                <a href="javascript:void(0)">{t("Home")}</a>
                <a href="javascript:void(0)">{t("About")}</a>
                <a href="javascript:void(0)">{t("Feture")}</a>
                <a href="javascript:void(0)">{t("Upcoming")}</a>
                <a href="javascript:void(0)">{t("Showcase")}</a>
                <a href="javascript:void(0)">{t("Price")}</a>
                <a href="javascript:void(0)">{t("About Us")}</a>
              </div>
            </div>
            <div className="content-information">
              <span>{t("Contact info")}</span>
              <div className="conte-pr-info">
                <div className="conte-acm">
                  <p>{t("593 South Marshall Drive Amarillo, TX 79106")}</p>
                </div>
                <div className="conte-acm">
                  <p>{t("+91 123 456 8790")}</p>
                  <p>{t("+91 525 856 2580")}</p>
                </div>
                <div className="conte-acm">
                  <p>{t("help@eventopackage.com")}</p>
                  {/* <p>{t("help@eventopackage.com")}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social_media_content landing-content">
          <div className="user_holder l_f_us">
            <p className="fus">{t("FOR USER")}</p>
            <a href="javascript:void(0)">
              <img src={googleplay} alt="" />
            </a>
            <a href="javascript:void(0)">
              <img src={appstore} alt="" />
            </a>
          </div>
          <div className="social_icon_holder">
            <a href="javascript:void(0)">
              <img src={whatsupfooter} alt="" />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/Evento-Package-281623730303445"
            >
              <img src={facebookfooter} alt="" />
            </a>
            <a target="blank" href="javascript:void(0)">
              <img src={telegramfooter} alt="" />
            </a>
            <a target="blank" href="https://www.instagram.com/EventoPackage/">
              <img src={instagramfooter} alt="" />
            </a>
            <a target="blank" href="https://twitter.com/EventoPackage">
              <img src={twitterfooter} alt="" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQErRdNnm1-r9AAAAXzKln7ouu8mpq2wQGS9Blcg-ex_T69la6pJ-JlkDxvCGDpgmbcJOZDTw_umEH3mQVUiJY5QF-oDZwnG1MrOh61LGKIFyxJDgz9NnHgVGOqh8NIPFkOoHoM=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Feventopackage"
            >
              <img src={linkedinfooter} alt="" />
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCmtm1FLrLLtecvKhvu2KdHA"
            >
              <img src={youtubefooter} alt="" />
            </a>
          </div>
          <div className="shopper_holder l_f_us">
            <p>{t("FOR SHOPPER")}</p>
            <a href="javascript:void(0)">
              <img src={googleplay} alt="" />
            </a>
            <a href="javascript:void(0)">
              <img src={appstore} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="pptc landing-content justify-content-center">
        <div className="c-r-holder">
          <p className="c-s">
            {t("© 2020 Festum Evento- Devepoled By Company")}
          </p>
        </div>
        <div className="c-r-holder">
          <p>{t("privacy policy | terms and conditions")}</p>
        </div>
      </div>
    </div>
  );
}


export default LandingPage;
