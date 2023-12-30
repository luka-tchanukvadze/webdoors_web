import React from "react";
import "./Navigation.css";
import "./Navigation_resp.css";
import wb_1 from "./images/wb 1.png";
import webdoors_logo_1 from "./images/webdoors logo 1.png";

function Navigation() {
  return (
    <section className="navigation">
      <nav className="nav-cont">
        <div className="nav-text-cont">
          <p className="nav-text">Servicies</p>
          <p className="nav-text">Projects</p>
          <p className="nav-text">About</p>
          <div className="nav-person-2-con">
            <svg
              className="person-2"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M16.5 0C7.55535 0 0 7.55535 0 16.5C0 25.4447 7.55535 33 16.5 33C25.4447 33 33 25.4447 33 16.5C33 7.55535 25.4447 0 16.5 0ZM16.5 8.25C19.3496 8.25 21.45 10.3488 21.45 13.2C21.45 16.0512 19.3496 18.15 16.5 18.15C13.6521 18.15 11.55 16.0512 11.55 13.2C11.55 10.3488 13.6521 8.25 16.5 8.25ZM8.0751 24.3738C9.55515 22.1958 12.0236 20.7438 14.85 20.7438H18.15C20.9781 20.7438 23.4449 22.1958 24.9249 24.3738C22.8162 26.631 19.8248 28.05 16.5 28.05C13.1753 28.05 10.1838 26.631 8.0751 24.3738Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="nav-logo">
          <img src={wb_1} />
        </div>

        <div className="nav-button-con">
          <div className="nav-person-con">
            <svg
              className="nav-person-1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 13.8438L9.13609 13.8439L9.43769 13.8447C11.9993 13.858 18 14.0845 18 17.935C18 21.5049 13.0716 21.982 9.23812 22L8.56231 21.9997C6.00075 21.9864 0 21.76 0 17.9105C0 14.2651 5.13584 13.8438 9 13.8438ZM9 15.511C4.1658 15.511 1.71385 16.319 1.71385 17.9105C1.71385 19.5176 4.1658 20.3334 9 20.3334C13.8342 20.3334 16.2861 19.5254 16.2861 17.935C16.2861 16.3256 13.8342 15.511 9 15.511ZM9 0C12.3511 0 15.0762 2.65185 15.0762 5.91053C15.0762 9.16921 12.3511 11.8211 9 11.8211H8.96458C7.34328 11.8155 5.82366 11.1964 4.68452 10.0806C3.54424 8.9636 2.91926 7.48097 2.92493 5.9072C2.92493 2.65185 5.64999 0 9 0ZM9 1.66713C6.59604 1.66713 4.63879 3.57099 4.63879 5.91053C4.63425 7.04307 5.08214 8.10447 5.89907 8.9058C6.71715 9.70603 7.80716 10.1495 8.96801 10.1539L9 10.9775V10.1539C11.4051 10.1539 13.3623 8.25007 13.3623 5.91053C13.3623 3.57099 11.4051 1.66713 9 1.66713Z"
                fill="white"
                fill-opacity="0.9"
              />
            </svg>
          </div>
          <div className="nav-menu-con">
            <svg
              className="menu"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="29"
              viewBox="0 0 50 29"
              fill="none"
            >
              <path
                d="M2 2H48H2ZM2 14.5H48H2ZM27.875 27H48H27.875Z"
                fill="white"
              />
              <path
                d="M27.875 27H48M2 2H48H2ZM2 14.5H48H2Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>

      <div className="nav-info-con">
        <div className="nav-info-text-con">
          <p className="nav-text-1">
            INTRODUCING <span className="violet-1">Webdoors</span>
          </p>
          <p className="nav-text-2">
            DIGITAL <span className="violet-2">EXPERIENCE,</span> RE-IMAGINED
          </p>
          <p className="nav-text-3">
            A full-service digital agency with capabilities across web design
            and development
          </p>
          <div className="nav-text-4-con">
            <p className="nav-text-4">Need a Website?</p>
            <div className="nav-arrow-con">
              <svg
                className="nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="24"
                viewBox="0 0 91 24"
                fill="none"
              >
                <path
                  d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8285 1.17157 13.5 2 13.5L2 10.5ZM90.0607 13.0607C90.6464 12.4749 90.6464 11.5252 90.0607 10.9394L80.5147 1.39343C79.9289 0.807642 78.9792 0.807642 78.3934 1.39343C77.8076 1.97922 77.8076 2.92896 78.3934 3.51475L86.8787 12L78.3934 20.4853C77.8076 21.0711 77.8076 22.0208 78.3934 22.6066C78.9792 23.1924 79.9289 23.1924 80.5147 22.6066L90.0607 13.0607ZM2 13.5L89 13.5V10.5L2 10.5L2 13.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="cube">
          <img src={webdoors_logo_1} />
        </div>
      </div>
    </section>
  );
}

export default Navigation;
