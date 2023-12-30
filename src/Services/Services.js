import React from "react";
import "./Services.css";
import "./Services_resp.css";

function Services() {
  return (
    <section className="services">
      <div className="services-title">
        <div className="ser-title-line-con">
          <svg
            className="ser-title-line"
            ser-title-line
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
            <line
              x1="1"
              y1="9"
              x2="1"
              y2="1"
              stroke="#D6D6D6"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="ser-title-con">
          <p>Services</p>
          <div>
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
        </div>
      </div>

      <div className="services-info">
        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">01.</span>Analysis
            </p>
            <p className="ser-text">
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="227"
            viewBox="0 0 228 227"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_164)">
              <circle cx="110.34" cy="109.362" r="91.3616" fill="#9DDCFA" />
            </g>
            <path
              d="M86.5413 66.2644C90.735 63.2087 95.8546 61.5605 101.115 61.5727C102.591 61.5727 103.766 62.3122 104.448 62.821C105.211 63.4009 105.924 64.1404 106.564 64.8799C107.017 65.4098 107.265 66.075 107.265 66.7613L107.265 88.1963L100.593 88.1963C99.8673 86.2226 98.4401 84.5591 96.5633 83.4998C94.6864 82.4405 92.4808 82.0537 90.3363 82.4078C88.1917 82.7618 86.2463 83.8338 84.8438 85.4344C83.4413 87.0349 82.6721 89.061 82.6721 91.1545C82.6721 93.2479 83.4413 95.274 84.8438 96.8746C86.2463 98.4752 88.1917 99.5472 90.3363 99.9012C92.4808 100.255 94.6864 99.8684 96.5633 98.8092C98.4401 97.7499 99.8673 96.0864 100.593 94.1127L107.265 94.1127L107.265 149.815C107.265 150.253 107.164 150.686 106.969 151.082C106.775 151.478 106.491 151.827 106.139 152.105C103.298 154.341 99.498 156.234 94.9659 156.234C87.6728 156.234 82.2429 152.696 78.7316 148.466C76.2089 145.452 74.4811 141.896 73.6953 138.101C71.3062 137.488 69.091 136.366 67.2139 134.817C63.8195 132.019 61.1445 127.481 61.1445 120.736C61.1445 117.441 61.3721 114.465 61.8825 111.862L81.1299 111.862C85.0409 111.862 88.2631 114.672 88.7551 118.305C86.7101 119.017 84.9924 120.401 83.9052 122.213C82.818 124.025 82.4314 126.149 82.8134 128.209C83.1955 130.269 84.3218 132.132 85.9934 133.471C87.665 134.809 89.7744 135.536 91.9491 135.524C94.1238 135.511 96.2241 134.76 97.8789 133.402C99.5337 132.045 100.637 130.168 100.993 128.104C101.35 126.04 100.937 123.921 99.8271 122.122C98.7175 120.322 96.9827 118.958 94.929 118.269C94.6698 114.919 93.1035 111.787 90.5442 109.501C87.9848 107.215 84.6219 105.945 81.1299 105.945L63.8564 105.945C64.7972 104.182 66.0579 102.691 67.6997 101.632C68.115 101.368 68.5509 101.134 69.0034 100.934C67.257 96.0118 67.712 90.2493 69.3969 85.7233C70.4731 82.8124 72.1826 80.0613 74.5316 78.2272C76.0813 77.0144 77.9261 76.2157 79.9431 76.0619C80.8286 72.021 83.3191 68.6782 86.5475 66.2644L86.5413 66.2644ZM113.414 135.527L118.026 135.527C121.695 135.527 125.215 134.125 127.809 131.628C130.404 129.132 131.862 125.746 131.862 122.215L131.862 111.359C133.913 110.661 135.642 109.288 136.743 107.482C137.844 105.676 138.246 103.554 137.878 101.491C137.511 99.4278 136.396 97.5561 134.733 96.2067C133.069 94.8574 130.963 94.1173 128.787 94.1173C126.611 94.1173 124.506 94.8574 122.842 96.2067C121.178 97.5561 120.064 99.4278 119.696 101.491C119.328 103.554 119.73 105.676 120.831 107.482C121.932 109.288 123.661 110.661 125.713 111.359L125.713 122.215C125.713 126.298 122.269 129.611 118.026 129.611L113.414 129.611L113.414 66.7613C113.414 66.075 113.661 65.4098 114.115 64.8799C114.748 64.1404 115.468 63.4009 116.23 62.821C116.907 62.3122 118.081 61.5727 119.563 61.5727C124.824 61.5605 129.944 63.2087 134.137 66.2644C137.366 68.6782 139.856 72.021 140.735 76.0619C142.752 76.2098 144.597 77.0144 146.147 78.2272C148.496 80.0613 150.205 82.8124 151.282 85.7233C152.966 90.2493 153.422 96.0177 151.675 100.928C152.118 101.129 152.554 101.366 152.979 101.638C154.67 102.721 155.955 104.271 156.902 106.099C158.765 109.679 159.534 114.672 159.534 120.736C159.534 127.487 156.859 132.019 153.465 134.817C151.588 136.366 149.372 137.488 146.983 138.101C146.368 141.402 144.646 145.224 141.947 148.466C138.442 152.696 133.006 156.234 125.713 156.234C121.187 156.234 117.38 154.341 114.545 152.105C114.192 151.828 113.907 151.478 113.712 151.083C113.516 150.687 113.414 150.254 113.414 149.815L113.414 135.527ZM91.8912 88.1963C91.0758 88.1963 90.2937 88.508 89.7171 89.0627C89.1405 89.6175 88.8166 90.3699 88.8166 91.1545C88.8166 91.939 89.1405 92.6915 89.7171 93.2462C90.2937 93.801 91.0758 94.1127 91.8912 94.1127C92.7067 94.1127 93.4887 93.801 94.0654 93.2462C94.642 92.6915 94.9659 91.939 94.9659 91.1545C94.9659 90.3699 94.642 89.6175 94.0654 89.0627C93.4887 88.508 92.7067 88.1963 91.8912 88.1963ZM91.8912 123.694C91.0758 123.694 90.2937 124.006 89.7171 124.561C89.1405 125.116 88.8166 125.868 88.8166 126.653C88.8166 127.437 89.1405 128.19 89.7171 128.744C90.2937 129.299 91.0758 129.611 91.8912 129.611C92.7067 129.611 93.4887 129.299 94.0654 128.744C94.642 128.19 94.9659 127.437 94.9659 126.653C94.9659 125.868 94.642 125.116 94.0654 124.561C93.4887 124.006 92.7067 123.694 91.8912 123.694ZM128.787 105.945C129.603 105.945 130.385 105.634 130.961 105.079C131.538 104.524 131.862 103.772 131.862 102.987C131.862 102.203 131.538 101.45 130.961 100.895C130.385 100.341 129.603 100.029 128.787 100.029C127.972 100.029 127.19 100.341 126.613 100.895C126.037 101.45 125.713 102.203 125.713 102.987C125.713 103.772 126.037 104.524 126.613 105.079C127.19 105.634 127.972 105.945 128.787 105.945Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2897_164"
                x="0.978516"
                y="0"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_164"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_164"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_164"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
          <div className="square-1"></div>
        </div>

        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">02.</span>Wireframing
            </p>
            <p className="ser-text">
              Our experienced UI/UX designers will create wireframes to
              visualize the client’s concept and ideas that clearly define the
              user journey
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="227"
            viewBox="0 0 228 227"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_169)">
              <circle cx="109.66" cy="109.63" r="91.3616" fill="#1FB0F3" />
            </g>
            <path
              d="M157.977 151.598L143.529 137.717V84.3138L136.706 72.182C136.203 71.2571 135.448 70.4827 134.522 69.9424C133.597 69.4022 132.536 69.1166 131.455 69.1166C130.374 69.1166 129.314 69.4022 128.388 69.9424C127.463 70.4827 126.708 71.2571 126.205 72.182L119.797 84.3425V114.887L65.5378 62.6889C65.1228 62.2844 64.5927 62.0085 64.015 61.8965C63.4372 61.7844 62.8381 61.8413 62.2939 62.0597C61.7496 62.2781 61.2851 62.6483 60.9593 63.123C60.6336 63.5978 60.4615 64.1555 60.4649 64.7252V87.8989H66.9024V92.4877H60.4649V110.843H66.9024V115.432H60.4649V134.504H66.9024V139.093H60.4649V153.634C60.4649 154.395 60.7774 155.124 61.3338 155.662C61.8901 156.2 62.6447 156.502 63.4315 156.502H155.87C156.46 156.505 157.037 156.339 157.528 156.024C158.019 155.709 158.402 155.26 158.628 154.734C158.853 154.208 158.912 153.629 158.796 153.07C158.68 152.512 158.395 151.999 157.977 151.598ZM84.1976 133.787V107.803L111.105 133.787H84.1976ZM137.596 139.839H125.73V132.87H137.596V139.839ZM137.596 128.367H125.73V85.7478L131.485 74.9354L137.596 85.7765V128.367Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2897_169"
                x="0.298828"
                y="0.267944"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_169"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_169"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_169"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #1FB0F3 -0.4%, #9DDCFA 99.14%)",
            }}
            className="square-2 rotate"
          ></div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #1FB0F3 -0.4%, #7B5DFA 99.14%)",
            }}
            className="square-3"
          ></div>
        </div>

        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">03.</span>Prototyping
            </p>
            <p className="ser-text">
              We lead the industry with best in class prototype design
              techniques that give you an earlier heads up on the look and feel,
              during the development cycle
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="227"
            viewBox="0 0 228 227"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_173)">
              <circle cx="110.34" cy="109.353" r="91.3616" fill="#7B5DFA" />
            </g>
            <path
              d="M129.667 97.0618L90.3115 73.3962M89.0816 73.3962L68.1738 85.229V132.56L89.0816 144.393L109.989 156.226L130.897 144.393L151.805 132.56V85.229L130.897 73.3962L109.989 61.5635L89.0816 73.3962ZM151.805 85.229L109.989 108.895L151.805 85.229ZM68.1738 85.229L109.989 108.895L68.1738 85.229ZM109.989 156.226V108.895V156.226ZM129.667 97.0618V144.393V97.0618ZM151.805 108.895L109.989 132.56L151.805 108.895ZM109.989 132.56L68.1738 108.895L109.989 132.56ZM90.3115 144.393V97.0618V144.393ZM129.667 73.3962L90.3115 97.0618L129.667 73.3962Z"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_2897_173"
                x="0.978516"
                y="-0.0090332"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_173"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_173"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_173"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
        </div>

        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">04.</span>Design & code
            </p>
            <p className="ser-text">
              We use Human Interface Guidelines and follow industry best
              practices during our design and coding process. Our capabilities
              deliver sleek and responsive apps to give you a competitive edge.
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="228"
            viewBox="0 0 228 228"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_177)">
              <circle cx="109.66" cy="110.076" r="91.3616" fill="#F3CC1F" />
            </g>
            <path
              d="M119.649 110.826C118.688 111.75 117.131 111.75 116.17 110.826L114.431 109.153C113.47 108.229 113.47 106.73 114.431 105.806L119.922 100.524L114.433 95.2409C113.472 94.3165 113.472 92.8181 114.433 91.8937L116.171 90.2209C117.132 89.2964 118.69 89.2964 119.65 90.2209L128.619 98.8499C129.58 99.7743 129.58 101.273 128.619 102.197L119.649 110.826ZM104.889 109.155L103.15 110.827C102.189 111.752 100.632 111.752 99.6711 110.827L90.7023 102.199C89.7415 101.274 89.7415 99.7758 90.7023 98.8513L99.6711 90.2223C100.632 89.2979 102.189 89.2979 103.15 90.2223L104.889 91.8952C105.85 92.8196 105.85 94.3179 104.889 95.2424L99.399 100.524L104.889 105.807C105.85 106.732 105.85 108.23 104.889 109.155ZM62.9258 133.656H100.2C100.314 136.586 102.461 138.389 105.233 138.389H114.58C117.453 138.389 119.656 135.805 119.618 133.656H156.396C157.749 133.656 158.855 134.721 158.855 136.022V138.389C158.855 143.595 154.428 147.855 149.017 147.855H70.305C64.8935 147.855 60.466 143.595 60.466 138.389V136.022C60.466 134.721 61.5729 133.656 62.9258 133.656ZM70.305 79.2253C70.305 75.3206 73.6256 72.1257 77.6842 72.1257H141.637C145.696 72.1257 149.017 75.3206 149.017 79.2253V128.923H70.305V79.2253ZM80.1439 119.456H139.178V81.5919H80.1439V119.456Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2897_177"
                x="0.298828"
                y="0.714355"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_177"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_177"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_177"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F -0.4%, #7B5DFA 99.14%)",
            }}
            className="square-2 rotate"
          ></div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #F3CC1F 13.59%, #FB634F 99.14%)",
            }}
            className="square-3"
          ></div>
        </div>

        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">05.</span> Testing & QA
            </p>
            <p className="ser-text">
              We rigorously test the performance app performance to Industry
              standards to evaluate its scalability, responsiveness, and
              stability.
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="228"
            viewBox="0 0 228 228"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_181)">
              <circle cx="110.34" cy="109.799" r="91.3616" fill="#FB634F" />
            </g>
            <path
              d="M110.34 156.673C117.002 156.673 123.376 155.425 129.461 152.929C135.546 150.433 140.783 147.074 145.171 142.852C149.558 138.631 153.05 133.593 155.644 127.738C158.238 121.883 159.535 115.751 159.535 109.341C159.535 102.932 158.238 96.7999 155.644 90.9452C153.05 85.0904 149.558 80.0522 145.171 75.8306C140.783 71.609 135.546 68.2502 129.461 65.7542C123.376 63.2582 117.002 62.0103 110.34 62.0103C103.679 62.0103 97.3051 63.2582 91.2198 65.7542C85.1345 68.2502 79.898 71.609 75.5102 75.8306C71.1224 80.0522 67.6313 85.0904 65.0371 90.9452C62.4428 96.7999 61.1457 102.932 61.1457 109.341C61.1457 115.751 62.4428 121.883 65.0371 127.738C67.6313 133.593 71.1224 138.631 75.5102 142.852C79.898 147.074 85.1345 150.433 91.2198 152.929C97.3051 155.425 103.679 156.673 110.34 156.673ZM104.191 147.336C95.6076 146.042 88.2412 142.436 82.0919 136.52C75.9426 130.604 72.1953 123.516 70.8501 115.258H83.4371C84.5901 120.25 87.0562 124.548 90.8355 128.154C94.6148 131.759 99.0666 134.147 104.191 135.318V147.336ZM107.529 106.637L92.9493 103.425C93.9102 100.898 95.3674 98.695 97.3211 96.8153C99.2748 94.9357 101.565 93.5336 104.191 92.6092L107.529 106.637ZM92.9493 115.258L107.529 113.398L104.191 125.981C101.565 125.119 99.2748 123.732 97.3211 121.821C95.3674 119.911 93.9102 117.723 92.9493 115.258ZM113.854 113.398L127.732 115.258C126.771 117.723 125.313 119.911 123.36 121.821C121.406 123.732 119.116 125.119 116.49 125.981L113.854 113.398ZM116.49 147.336V135.318C121.678 134.147 126.146 131.759 129.893 128.154C133.641 124.548 136.091 120.25 137.244 115.258H149.831C148.486 123.516 144.738 130.604 138.589 136.52C132.44 142.436 125.073 146.042 116.49 147.336ZM116.49 71.3471C125.073 72.6413 132.44 76.2466 138.589 82.163C144.738 88.0794 148.486 95.1668 149.831 103.425H137.244C136.091 98.4331 133.641 94.1191 129.893 90.4829C126.146 86.8468 121.678 84.4741 116.49 83.3648V71.3471ZM127.732 103.425L113.854 106.637L116.49 92.6092C119.116 93.5336 121.406 94.9357 123.36 96.8153C125.313 98.695 126.771 100.898 127.732 103.425ZM104.191 71.3471V83.3648C99.0666 84.4741 94.6148 86.8468 90.8355 90.4829C87.0562 94.1191 84.5901 98.4331 83.4371 103.425H70.8501C72.1953 95.1668 75.9426 88.0794 82.0919 82.163C88.2412 76.2466 95.6076 72.6413 104.191 71.3471Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2897_181"
                x="0.978516"
                y="0.4375"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_181"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_181"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_181"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
        </div>

        <div className="serv-text-with-photos">
          <div className="serv-text-con">
            <p className="ser-text-title">
              <span className="purple">06.</span> Deployment
            </p>
            <p className="ser-text">
              Once the app fulfills our client’s requirements and expectations,
              we deploy the app according to the launch plan.
            </p>
          </div>
          {/* <div className="serv-img"> */}
          <svg
            className="serv-logos"
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="227"
            viewBox="0 0 228 227"
            fill="none"
          >
            <g filter="url(#filter0_d_2897_185)">
              <circle cx="109.66" cy="109.362" r="91.3616" fill="#F31F46" />
            </g>
            <path
              d="M134.257 135.785H128.108V141.736C128.108 145.021 126.907 147.825 124.504 150.149C122.102 152.474 119.204 153.636 115.809 153.636H109.66C106.265 153.636 103.366 152.474 100.964 150.149C98.5619 147.825 97.3609 145.021 97.3609 141.736V135.785H81.9875C76.0304 135.785 70.954 133.756 66.7583 129.696C62.5627 125.636 60.4648 120.724 60.4648 114.96C60.4648 111.427 61.3296 108.142 63.0591 105.105C64.7886 102.068 67.1266 99.5885 70.0732 97.6671C72.2511 101.944 75.3418 105.554 79.3452 108.498C83.3487 111.442 87.8166 113.379 92.7489 114.309C88.5212 111.954 85.1583 108.731 82.6601 104.64C80.162 100.549 78.9129 96.0556 78.9129 91.1591C78.9129 83.7833 81.6192 77.4768 87.0319 72.2394C92.4446 67.002 98.9623 64.3833 106.585 64.3833C112.222 64.3833 117.33 65.8708 121.91 68.8459C126.49 71.821 129.837 75.7258 131.951 80.5603C127.595 81.9239 123.816 84.2172 120.613 87.4402C117.41 90.6632 115.168 94.4131 113.887 98.6898C116.129 95.4668 119.044 92.91 122.631 91.0196C126.218 89.1292 130.093 88.184 134.257 88.184C141.047 88.184 146.844 90.5083 151.648 95.1569C156.452 99.8054 158.854 105.415 158.854 111.985C158.854 118.555 156.452 124.164 151.648 128.813C146.844 133.461 141.047 135.785 134.257 135.785ZM133.68 126.302L114.56 106.871C114.047 106.313 113.439 106.035 112.734 106.035C112.03 106.035 111.421 106.313 110.909 106.871L91.788 126.302C91.2756 126.86 91.1155 127.588 91.3076 128.487C91.4998 129.386 91.8521 129.835 92.3646 129.835H103.51V141.736C103.51 143.409 104.103 144.819 105.288 145.966C106.473 147.112 107.93 147.686 109.66 147.686H115.809C117.538 147.686 118.996 147.112 120.181 145.966C121.366 144.819 121.958 143.409 121.958 141.736V129.835H133.104C133.616 129.835 133.969 129.386 134.161 128.487C134.353 127.588 134.193 126.86 133.68 126.302Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2897_185"
                x="0.298828"
                y="0"
                width="226.723"
                height="226.723"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_2897_185"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2897_185"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2897_185"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* </div> */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #F31F46 -0.4%, #FB634F 99.14%)",
            }}
            className="square-2 rotate"
          ></div>
          <div className="square-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Services;
