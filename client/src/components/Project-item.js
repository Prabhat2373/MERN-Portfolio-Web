import React from "react";

export default function ProjectItem(props) {
  return (
    <>
      <div className="projectBoxes" data-aos="fade-up">
        <a
          href={props.link}
          rel="noreferrer"
          target="_blank"
        >
          <img src={`/img/${props.imgSrc}`} alt="Cover Img" />
          <div className="projectData">
            <h1 className="proTit">{props.title}</h1>
            <p className="proDesc">
              {props.description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
