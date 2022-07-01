import React from 'react';

export default function Footer() {
  return (
    <>
      <section className="footSect">
        <div className="footInside">
          <div className="footCont1">
            <h1 className="footh1">Services</h1>
            <div className="serviceUl">
              <ol>
                <li> - Web Developement</li>
                <li> - Web Application</li>
                <li> - FrontEnd Developement</li>
                <li> - Backend Developement</li>
                <li> - E-commerce Websites</li>
              </ol>
            </div>
          </div>
          <div className="footCont2">
            <h1 className="footh1">Links </h1>
            <div className="footLinks">
              <ul id="footul">
                <li>
                  <a href="/" className="active">
                    {' '}
                    - Home
                  </a>
                </li>
                <li>
                  <a href="#sectAbout"> - About</a>
                </li>
                <li>
                  <a href="#skillSect"> - Skills</a>
                </li>
                <li>
                  <a href="#ProjectSect"> - Projects</a>
                </li>
                <li>
                  <a href="#contactSect"> - Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footCont3">
            <h1 className="footh1">Social </h1>
            <div className="social-logos-foot">
              <div className="logoContfoot">
                <a
                  href="https://github.com/Prabhat2373"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/img/github-color.png"
                    alt="social Icons"
                    className="logosFoot"
                  />
                </a>
                <a
                  href="https://www.reddit.com/user/Prabhat2373/posts/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/img/reddit-color.png"
                    alt="social Icons"
                    className="logosFoot"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/prabhat-tambe-a4125421b/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/img/link-color.png"
                    alt="social Icons"
                    className="logosFoot"
                  />
                </a>
                <a
                  href="https://twitter.com/Prabhat300002"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/img/twit-color.png"
                    alt="social Icons"
                    className="logosFoot"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
        <div className="footmain">
          <div className="footerContainer">
            <footer id="footer">
              Copyright ©2021 All rights reserved | by Dev.Prabhat Tambe
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
