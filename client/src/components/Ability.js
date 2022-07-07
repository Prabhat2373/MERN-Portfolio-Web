import React from 'react'

export default function Ability() {

   
  return (
    <>
        <section id="skillSect">
        <div className="skillcont">
            <div className="h1">
                <h1 id="skillH1">My Skills</h1>
                
            </div>
            <div>
                    <p className="skillTag">Skills Which are used to Develope Full Stack Applications</p>
                </div>
        </div>
        <div className="keyskill">
            <h3>- key Skills</h3>
        </div>
        <div className="SkillBoxes">
            <div className="boxes" data-aos="fade-down">
                <div className="boxHead">
                    HTML
                </div>
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask half">
                            <div className="fill"></div>
                        </div>
                        <div className="mask full">
                            <div className="fill"></div>
                        </div>
                        <div className="inside-circle"> 75% </div>
                    </div>
                </div>
            </div>
            <div className="boxes" data-aos="fade-up">
                <div className="boxHead">
                    CSS
                </div>
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask half">
                            <div className="fill1"></div>
                        </div>
                        <div className="mask full1">
                            <div className="fill1"></div>
                        </div>
                        <div className="inside-circle"> 65% </div>
                    </div>
                </div>
            </div>
            <div className="boxes" data-aos="fade-down">
                <div className="boxHead">
                    javaScript
                </div>
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask half">
                            <div className="fill2"></div>
                        </div>
                        <div className="mask full2">
                            <div className="fill2"></div>
                        </div>
                        <div className="inside-circle"> 60% </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="optskill">
            <div className="optskillhead">
                <h1 id="optskillh1">
                    - Additional Skills
                </h1>
            </div>
            <div className="skillRangeBar">
                <div className="optskillbars">
                    <h1 className="barsHead">backend and database</h1>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="/img/node.png" alt="Node Img" className="rangeImg" />
                            <h4>Node.js <span className="meter" id="node">50%</span></h4>
                        </div>
                        <input type="range" name="nodejs" id="nodebar" defaultValue={"72"}/>
                    </div>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="/img/express2.png" alt="Express Img" className="rangeImg" />
                            <h4>Express.js <span className="meter" id="express">50%</span></h4>
                        </div>
                        <input type="range" name="expressjs" id="expressbar" defaultValue="60" />
                    </div>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="/img/mongodb.png" alt="mongoDB img" className="rangeImg" />
                            <h4>MongoDb <span className="meter" id="mongodb">50%</span></h4>
                        </div>
                        <input type="range" name="mongodb" id="mongobar" defaultValue="50" />
                    </div>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="/img/npm.png" alt="NPM Img" className="rangeImg" />
                            <h4>NPM <span className="meter" id="npm">50%</span></h4>
                        </div>
                        <input type="range" name="npm" id="npmbar" defaultValue="71" />
                    </div>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="heroku img" className="rangeImg" />
                            <h4>Heroku <span className="meter" id="heroku">50%</span></h4>
                        </div>
                        <input type="range" name="heroku" id="heroukubar" defaultValue="71" />
                    </div>
                    <div className="skillbar">
                        <div className="h1img">
                            <img src="/img/atlas.png" alt="atlas Img" className="rangeImg" />
                            <h4>Atlas <span className="meter" id="atlas">50%</span></h4>
                        </div>
                        <input type="range" name="atlas" id="atlasbar" defaultValue="71" />
                    </div>
                </div>
                <div className="optskillbars1">
                    <h1 className="barsHead">Library and Frameworks</h1>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/react.png" alt='React Img' className="rangeImg" />
                            <h4>React js<span className="meter" id="react">71%</span></h4>
                        </div>
                        <input type="range" name="bootstrap" id="bootstrapbar" defaultValue="62" />
                    </div>
                    
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/bootstrap.png" alt='bootstrap Img' className="rangeImg" />
                            <h4>BootStrap <span className="meter" id="bootstrap">66%</span></h4>
                        </div>
                        <input type="range" name="bootstrap" id="bootstrapbar" defaultValue="62" />
                    </div>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/jquery.png" alt="jQuery Img" className="rangeImg" />
                            <h4>jQuery <span className="meter" id="jquery">60%</span></h4>
                        </div>
                        <input type="range" name="jquery" id="jquerybar" defaultValue="45" />
                    </div>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="https://img.icons8.com/color-glass/48/000000/github.png" alt="Github Img" className="rangeImg" />
                            <h4>Github <span className="meter" id="github">75%</span></h4>
                        </div>
                        <input type="range" name="github" id="githubbar" defaultValue="45" />
                    </div>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/mongoose.png" alt="mongoose Img" className="rangeImg"/>
                            <h4>Mongoose <span className="meter" id="mongoose">65%</span></h4>
                        </div>
                        <input type="range" name="mongoose" id="mongoosebar" defaultValue="52" />
                    </div>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/tailwind.svg" alt='tailwind Img' className="rangeImg"/>
                            <h4>Tailwind <span className="meter" id="tailwind">50%</span></h4>
                        </div>
                        <input type="range" name="tailwind" id="tailwindbar" defaultValue="52"/>
                    </div>
                    <div className="skillbar1">
                        <div className="h1img">
                            <img src="/img/wordpress.png" alt='wordpress Img' className="rangeImg" />
                            <h4>WordPress <span className="meter" id="wordpress">50%</span></h4>
                        </div>
                        <input type="range" name="wordpress" id="wordpressbar" defaultValue="64" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
