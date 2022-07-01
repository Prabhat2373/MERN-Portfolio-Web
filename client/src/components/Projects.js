import React from "react";
import ProjectItem from "./Project-item";

export default function Projects() {
  return (
    <>
      <section id="ProjectSect">
        <div className="projectContainer">
          <div className="projectHead">
            <h1 id="projectH1">My Projects</h1>
            <div>
              <p className="projectPara">
                Projects that represents my Profession
              </p>
            </div>
          </div>
          <div className="projectContent">
            <ProjectItem
              key="Portfolio Web"
              link="https://prabhat-portfolio-web.herokuapp.com/index.html"
              imgSrc="portfolio.png"
              title="Personal Portfolio"
              description="Created a Personal Portfolio Website Using pure HTML/CSS and
                    JavaScript. Backend - Node.js,Express.js, MongoDb."
            />  
            <ProjectItem
              key="Netflix Web"
              link="https://github.com/Prabhat2373/Netflix-Clone-using-React.js"
              imgSrc="Netflix2.webp"
              title="Netflix Clone using MERN "
              description="Tried to make Full NEtflix Clone Using MERN Stack with kind of Exact same UI"
            />
            <ProjectItem
              key="Crypto Market Stats"
              link="https://github.com/Prabhat2373/Crypto-Market-Stats-React-Project"
              imgSrc="crypto.jpg"
              title="Crypto Market Daily Moving"
              description="Crypto Market Daily Moving and status of each crypto currency using React and Axios"
            />  
            <ProjectItem
              key="Teams Dashboard"
              link="https://github.com/Prabhat2373/Teams-Dashboard"
              imgSrc="dashboard.jpg"
              title="User Dashboard UI"
              description="A User Dashboard which is Regard with Scheduling Date and Time"
            />

            <ProjectItem
              key="Weather Web"
              link="https://github.com/Prabhat2373/Weather-and-Forecast-web-app-using-bootstrap"
              imgSrc="Weather Logo.jpg"
              title="Weather & forecast"
              description="Weather and Forecast Web App which Provides Us Realtime
                    weather Information and forecast. using - Bootstrap &
                    JavaScript"
            /> 

            <ProjectItem
              key="users Api"
              link="https://github.com/Prabhat2373/users-RESTful-Api"
              imgSrc="API.png"
              title="User's RESTful API"
              description="A RESTful API made by Node.js, Express.js and MongoDB with MVC backend Architecture."
            /> 
            <ProjectItem
              key="AJAX Web"
              link="https://github.com/Prabhat2373/News-Nation-using-AJAX"
              imgSrc="news.jpg"
              title="News Nation"
              description=" News App Which provides Live News,braking news etc. using
                    newsApi."
            /> 
            <ProjectItem
              key="DrumPad Web"
              link="https://github.com/Prabhat2373/Music-Pad-Web-App"
              imgSrc="drum.jpg"
              title="Music Pad"
              description=" Create Music pad Game Using Pure Javascript. UI of Markups
                    and CSS. Playing All the audio Tracks which is a Drum pad
                    have"
            /> 
             <ProjectItem
              key="Chicken Web"
              link="https://github.com/Prabhat2373/Kartik-Poultry-Services"
              imgSrc="poultry.jpg"
              title="Kartik Poultry Services"
              description="A Poultry Business Website using BootStrap and javaScript"
            />  
            
            <ProjectItem
              key="TicTacToe Web"
              link="https://github.com/Prabhat2373/Tic-Tac-Toe-Game-Using-Vanilla-JavaScript"
              imgSrc="tictactoe.png"
              title="Tic Tac Toe"
              description="Tic Tac Toe Game developed using pure javaScript and some
                    markups Languages."
            />

            <ProjectItem
              key="iUrban Web"
              link="https://github.com/Prabhat2373/Iurban-Website-Responsive"
              imgSrc="iurban.png"
              title="Business Website"
              description="  A Simple UI of Business website using no Library and
                    Frameworks. using Pure HTML/CSS/JavaScript."
            />

            <ProjectItem
              key="Loading Web"
              link="https://github.com/Prabhat2373/Loading-animation-in-css"
              imgSrc="loading.jpg"
              title="Loading Animation"
              description=" A loading Animation Which Takes Place While Your Data is
                    Loading."
            />

            <ProjectItem
              key="Chat Web"
              link="https://github.com/Prabhat2373/Chat-App-Web.github.io"
              imgSrc="chatapp.jpg"
              title="Chat Web App"
              description=" A Chatting App using Socket.io,Node.js and Express.js it's a
                    prety walkThrough to Backend"
            /> 

            <ProjectItem
              key="NoteBook Web app"
              link="https://github.com/Prabhat2373/NoteBook"
              imgSrc="notebook.png"
              title="NoteBook Web App"
              description="A Portable E-NoteBook Web App using HTML/CSS, javaScript"
            /> 

            <ProjectItem
              key="Dance Web"
              link="https://github.com/Prabhat2373/Dance-Web"
              imgSrc="dance.jpg"
              title="Dance Club Website"
              description="A Dance Website Using Pug,JavaScript backend -
                    Node.js,Express.js,npm etc."
            />


            <ProjectItem
              key="Snake Game Web"
              link="https://github.com/Prabhat2373/Snake-Game-With-Javascript"
              imgSrc="snake.jpg"
              title="Snake Game with javaScript"
              description="Creating a simple Snake game using Vanilla javaScript. No
                    Extra Libraries or Framework used"
            />

            <ProjectItem
              key="TODO's Web"
              link="https://github.com/Prabhat2373/Javascript-TODO-s-List-project"
              imgSrc="todo.png"
              title="To-Do web App"
              description=" A To-Do App Might be useful sometimes and Even Easier when
                    it comes to web."
            />

            <ProjectItem
              key="Clock Web"
              link="https://github.com/Prabhat2373/Javascript-Clock-Project"
              imgSrc="clock.jpg"
              title="JavaScript Clock "
              description=" simple Clock Project using Vanilla javaScript. with
                    Additional UI using HTML/CSS Advanced"
            />
          </div>
        </div>
      </section>
    </>
  );
}
