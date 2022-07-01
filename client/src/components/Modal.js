import React from "react";

export default function Modal(props) {
  return (
    <div className={`modal ${props.modal}-modal`}  id="modal">
      <div className="modal-content">
        <div className="modal-contact">
          <h1 className="modal-head">Hire Me!</h1>
          <div className="m-form-container">
            <div className="m-modal-form">
              <form action="../../../hireme" method="post" className="modal-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="modal-inps name"
                  id="name"
                  
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="modal-inps email"
                  id="email"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Contact Info"
                  className="modal-inps phone"
                  id="phone"
                />
                <textarea
                  name="message"
                  id="modal-message"
                  cols="30"
                  rows="10"
                  className="modal-inps modal-txt"
                  placeholder="Message"
                ></textarea>
                <input type="submit" className="btn" value="SUBMIT" />
              </form>
            </div>
          </div>
        </div>
        <div className="modal-btn-container">
          <button
            className="close-button modal-btn  btn"
            onClick={props.toggleModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
