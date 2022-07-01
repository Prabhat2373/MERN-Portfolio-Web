import React from "react";
import "./../Navbar.css";

export default function Navbar() {
    setTimeout(() => {
        const li = document.querySelectorAll(".links");
        const sect = document.querySelectorAll("section");
      
        function activeMenu() {
          let len = sect.length;
          // console.log(--len )
      
          // console.log(icons)
      
          while (--len && window.scrollY + 97 < sect[len].offsetTop) {}
          li.forEach((el) => el.classList.remove("active"));
          // li[len].classList.add('active');
          li[len].classList.add("active");
        }
      
        activeMenu();
        window.addEventListener("scroll", activeMenu);
    }, 2000);
  return (
    <>
      <header className="navHeader" id="navHeader">
        <nav className="navbar" id="navbar">
          <div className="navMenu" id="navmen">
            <ul className="navSect">
              <li className="links active">
                <a href="#sectHome">
                  <box-icon name="home-circle"></box-icon>
                </a>
              </li>
              <li className="links">
                <a href="#sectAbout">
                  <box-icon name="user"></box-icon>
                </a>
              </li>
              <li className="links">
                <a href="#skillSect">
                  <box-icon name="pie-chart-alt-2"></box-icon>
                </a>
              </li>
              <li className="links">
                <a href="#ProjectSect">
                  <box-icon type="solid" name="component"></box-icon>
                </a>
              </li>
              <li className="links">
                <a href="#contactSect">
                  <box-icon name="chat"></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
