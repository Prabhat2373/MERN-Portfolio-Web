import React from 'react'

export default function About() {
    let date = new Date();
    
    function YourAge(birthYear, birthMon) {
      let curYear = date.getFullYear();
    
      const currentAge = curYear - 1 - birthYear;
      return currentAge;
    }
    
    
    let Age = `${YourAge(2004)} Years Old`;
  return (
    <>
        <section id="sectAbout">
        <div className="AboutCont">
            <div className="firstSecOfAbout">
            </div>
            <div className="AboutContainer">
                <h1 id="headAbout">About Me</h1>
                <div className="paraCont">
                    <p className="AboutPara">
                        I'm a <span className="highlight">Full Stack Web Developer</span> Having Great Knowladge and Experience in <span className="highlight">MERN Stack</span> I've some industrial Experience as well as Some Value Projects. Look at my <a className="skillstxt" href="#skillSect">SKILLS</a>
                    </p>
                </div>
                <div className="aboutinfo">
                    <span className="info" id="name"><strong>Name : </strong><span className="infoans">Prabhat
                            Tambe</span></span>
                    <span className="info" id="dob"><strong>Birth Day : </strong><span className="infoans">November 17,
                            2004</span></span>
                    <span className="info" id="email"><strong>Email : </strong><span
                            className="infoans">Prabhattambe10@gmail.com</span></span>
                    <span className="info" id="phone"><strong>Phone : </strong><span className="infoans">+91
                            8459052292</span></span>
                    <span className="info" id="zip"><strong>zip : </strong><span className="infoans">416112</span></span>
                    <span className="info" id="age"><strong>Age : </strong><span className="infoans" id="ageans"> {Age} </span>
                    </span>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}
