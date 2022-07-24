import React from 'react'
import "./../style.css"
export default function Hero(props) {
  return (
    <>
        <section id="sectHome">
        <div className="overlay"></div>
        <div className="top-bar">
            <div className="navLogo">
                <a href="/" className="logo">PRABHAT</a>
            </div>
            <div className="dark-light-toggle" onClick={props.toggleMode}>
                {/* <box-icon name="moon" className="icon-toggle" style={{"filter":"invert(1)"}} ></box-icon> */}
            </div>
        </div>
        <div className="container">
           
            <h1 id="heroHead" data-aos="fade-down" data-aos-duration="1000">Hello World <span id="txt1">I'm,</span>
                <span id="txt2">Prabhat</span>
                <strong id="webtxt"><span id="and">And</span> I'm,</strong>
                <div id="wrapcont">
                    <div className="img-text">Web</div>
                    <ul className="dynamic-texts">
                        <li><span>Developer</span></li>
                        <li><span>Designer.</span></li>
                    </ul>
                </div>
            </h1>
            <div className="hireSect">
                <button className="btn1" id="btn" onClick={props.toggleModal}>Hire Me!</button>
                <a href="./prabhat-CV.pdf" download target="_blank"> <button className="btn" id="btn1">Download
                        CV</button></a>
            </div>
        </div>
        <div className="social-logos">
            <div className="logoCont" data-aos="fade-up" data-aos-duration="1500">
                <a href="https://github.com/Prabhat2373"  rel='noreferrer' target="_blank"><img src="/img/github-color.png" alt="Github logo" className="logos" /></a>
                <a href="https://www.reddit.com/user/Prabhat2373/posts/" rel='noreferrer' target="_blank" ><img src="/img/reddit-color.png" alt='reddit'
                        className="logos" /></a>
                <a href="https://www.linkedin.com/in/prabhat-tambe-a4125421b/"  rel='noreferrer' target="_blank"><img src="/img/link-color.png"
                        alt="linkedIn" className="logos" /></a>
                <a href="https://twitter.com/Prabhat300002" target="  rel='noreferrer'_blank"><img src="/img/twit-color.png" alt="twitter"
                        className="logos" /></a>
            </div>
        </div>
    </section>
</>
  )
}
