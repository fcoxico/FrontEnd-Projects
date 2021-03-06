import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/fcojc/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/fcoxico/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/fcoxico/">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello, I'm <span className="highlighted-text">Francisco</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Desenvolvedor WEB ๐",
                      1000,
                      "Analista de Marketing ๐ค",
                      1000,
                      "Social Media ๐ฑ",
                      1000,
                      "React / React Native Dev ๐ป",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Plus ultra!!ใใซในใปใฆใซใใฉ
                </span>
              </span>
            </div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me {""}
            </button>
            <a href="fcojosecv.pdf" download="Fco Jose fcojosecv.pdf">
              <button className="btn highlighted-btn"> Baixar Currรญculo</button>{" "}
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
