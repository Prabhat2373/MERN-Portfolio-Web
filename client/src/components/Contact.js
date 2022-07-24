import React from 'react';

export default function Contact() {
  const text = document.getElementById('text')
  const email = document.getElementById('email')
  const handleSubmit = ()=>{
    if(text === "" && email === ""){
      alert("Name and Email Are Required ")
    }
  }

  return (
    <>
      <section id="contactSect">
        <div className="contactHead">
          <div className="contHead">
            <h1 id="contactH1">Contact Me!</h1>
            <div>
              <p className="contactPara">Get in Touch With Me!</p>
            </div>
          </div>
        </div>
        <div className="contForm">
          <div className="form">
            <form action="../../../contact" method="post" id="contactForm">
              <input
                type="text"
                id="text"
                name="name"
                placeholder="Name"
                className="inptxt"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="inptxt"
                required
              />
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Contact No."
                className="inptxt"
              />
              <textarea
                name="feedBack"
                id="feedBack"
                cols="30"
                rows="8"
                placeholder="Give Your FeedBack"
                className="inptxt"
              ></textarea>
              <input type="submit" value="Submit" name="submit" id="submit" onClick={handleSubmit} />
            </form>
          </div>
        </div>
        <hr></hr>
      </section>
    </>
  );
}
