import React from "react";
import "./Projects.css";
import "./Projects_resp.css";
import phone from "./images/phone.png";
import culture from "./images/culture.png";
import city from "./images/city.png";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-head">
        <div className="projects-head-title-con">
          <p>Our life’s work</p>
          <svg
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
        <svg
          className="projects-line"
          xmlns="http://www.w3.org/2000/svg"
          width="219"
          height="10"
          viewBox="0 0 219 10"
          fill="none"
        >
          <line
            x1="-8.74228e-08"
            y1="5"
            x2="211"
            y2="4.99998"
            stroke="#D6D6D6"
            stroke-width="2"
          />
          <circle
            cx="214"
            cy="5"
            r="4"
            transform="rotate(-90 214 5)"
            stroke="#D6D6D6"
            stroke-width="2"
          />
          <line x1="1" y1="9" x2="1" y2="1" stroke="#D6D6D6" stroke-width="2" />
        </svg>
        <p className="projects-head-text">
          <span>Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit.
          Nisi, condimentum scelerisque viverra magna sollicitudin vestibulum.
          Augue augue elementum massa vestibulum, vitae cras tempor, vulputate
          risus. Facilisis tristique lorem cras porttitor ultrices cursus
          tristique. Ipsum lectus pretium rhoncus id. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nisi, condimentum scelerisque
          viverra magna sollicitudin vestibulum. Augue augue elementum massa
          vestibulum, vitae cras tempor, vulputate risus. Facilisis tristique
          lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium
          rhoncus id.{" "}
        </p>
      </div>

      <div className="projects-bottom">
        <div className="projects-bottom-title-con">
          <p className="projects-alone">Projects</p>
          <svg
            className="projects-alone-line"
            xmlns="http://www.w3.org/2000/svg"
            width="1432"
            height="2"
            viewBox="0 0 1432 2"
            fill="none"
          >
            <path
              d="M1 0.999756L1431 0.999631"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="projects-flex-con">
          <div className="projects-flex-con-texts">
            <p className="projects-name">WeBsite Name</p>
            <p className="projects-text">
              Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae
              cras tempor,
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="24"
              viewBox="0 0 81 24"
              fill="none"
            >
              <path
                d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                fill="#D0E0EF"
              />
            </svg>
          </div>
          <div className="projects-flex-con-img-con">
            <img src={phone} />
          </div>
        </div>

        <svg
          className="projects-flex-line"
          xmlns="http://www.w3.org/2000/svg"
          width="1442"
          height="2"
          viewBox="0 0 1442 2"
          fill="none"
        >
          <path
            d="M1 1L1441 0.999874"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="projects-flex-con">
          <div className="projects-flex-con-texts">
            <p className="projects-name">WeBsite Name</p>
            <p className="projects-text">
              vulputate risus. Facilisis tristique lorem cras porttitor ultrices
              cursus tristique. Ipsum lectus pretium rhoncu
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="24"
              viewBox="0 0 81 24"
              fill="none"
            >
              <path
                d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                fill="#D0E0EF"
              />
            </svg>
          </div>
          <div className="projects-flex-con-img-con">
            <img src={culture} />
          </div>
        </div>

        <svg
          className="projects-flex-line"
          xmlns="http://www.w3.org/2000/svg"
          width="1442"
          height="2"
          viewBox="0 0 1442 2"
          fill="none"
        >
          <path
            d="M1 1L1441 0.999874"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="projects-flex-con">
          <div className="projects-flex-con-texts">
            <p className="projects-name">WeBsite Name</p>
            <p className="projects-text">
              Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae
              cras tempor, vulputate risus.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="24"
              viewBox="0 0 81 24"
              fill="none"
            >
              <path
                d="M2 10.5007C1.17157 10.5007 0.5 11.1723 0.5 12.0007C0.5 12.8292 1.17157 13.5007 2 13.5007L2 10.5007ZM79.6599 13.0614C80.2456 12.4756 80.2456 11.5259 79.6599 10.9401L70.1139 1.39413C69.5281 0.808344 68.5784 0.808344 67.9926 1.39413C67.4068 1.97992 67.4068 2.92966 67.9926 3.51545L76.4779 12.0007L67.9926 20.486C67.4068 21.0718 67.4068 22.0215 67.9926 22.6073C68.5784 23.1931 69.5281 23.1931 70.1139 22.6073L79.6599 13.0614ZM2 13.5007L78.5992 13.5007V10.5007L2 10.5007L2 13.5007Z"
                fill="#D0E0EF"
              />
            </svg>
          </div>
          <div className="projects-flex-con-img-con">
            <img src={city} />
          </div>
        </div>

        <svg
          className="projects-flex-line"
          xmlns="http://www.w3.org/2000/svg"
          width="1442"
          height="2"
          viewBox="0 0 1442 2"
          fill="none"
        >
          <path
            d="M1 1L1441 0.999874"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </section>
  );
}

export default Projects;
