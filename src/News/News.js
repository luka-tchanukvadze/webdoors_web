import React from "react";
import "./News.css";
import "./News_resp.css";
import buildings from "./images/buildings.png";
import hand from "./images/hand.png";

function News() {
  return (
    <section className="news">
      <div className="news-head">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="10"
          viewBox="0 0 62 10"
          fill="none"
        >
          <line
            x1="2"
            y1="5.00146"
            x2="51.4771"
            y2="5.00148"
            stroke="white"
            stroke-width="2"
          />
          <circle
            cx="56.4766"
            cy="5.00098"
            r="4"
            transform="rotate(-90 56.4766 5.00098)"
            stroke="white"
            stroke-width="2"
          />
          <line
            x1="1"
            y1="9.00244"
            x2="1"
            y2="1.00244"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <p>Read News about web</p>
        <svg
          className="news-vector"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11.5 8.5L19 1M14 1H19V6M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8"
            stroke="#8F8CEF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="news-bottom">
        <div className="news-img-con">
          <div className="news-img-with-shadow">
            <img src={buildings} />
            <div className="news-shadow"></div>
          </div>

          <div className="news-info">
            <p className="news-info-title">Lorem ipsum dolor amet</p>
            <p className="news-info-date">11 November 2021</p>
            <p className="news-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              condimentum scelerisque viverra magna sollicitudin vestibulum.
              Augue augue elementum massa vestibulum, vitae cras tempor,
              vulputate risus. Facilisis tristique lorem cras porttitor ultrices
              cursus tristique. Ipsum lectus pretium rhoncus id.
            </p>
            <div className="news-info-button-con">
              <p className="news-info-button">Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  cx="8.23633"
                  cy="7.93457"
                  r="6.5"
                  transform="rotate(90 8.23633 7.93457)"
                  stroke="#6561EA"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="news-img-con">
          <div className="news-img-with-shadow">
            <img src={buildings} />
            <div className="news-shadow"></div>
          </div>

          <div className="news-info">
            <p className="news-info-title">Lorem ipsum dolor amet</p>
            <p className="news-info-date">11 November 2021</p>
            <p className="news-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              condimentum scelerisque viverra magna sollicitudin vestibulum.
              Augue augue elementum massa vestibulum, vitae cras tempor,
              vulputate risus. Facilisis tristique lorem cras porttitor ultrices
              cursus tristique. Ipsum lectus pretium rhoncus id.
            </p>
            <div className="news-info-button-con">
              <p className="news-info-button">Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  cx="8.23633"
                  cy="7.93457"
                  r="6.5"
                  transform="rotate(90 8.23633 7.93457)"
                  stroke="#6561EA"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
