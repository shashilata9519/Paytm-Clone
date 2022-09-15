import React from "react";
import "../components/home.css";


export default function Content(props) {
  return (
    <>
      <div className="inside-content">
        <div className="inside-content">
          <div className="inside-box mx-5">
            <div className="d-flex align-items-center">
              <img src={props.img} alt="paytm" />
              <span>
                <div className="inside-text">
                  {props.text1}
                  <br />
                  {props.text2}
                </div>{" "}
              </span>
            </div>
            <div className="mt-5">
              <h1>{props.heading}</h1>
              <p className="mt-4">{props.para}</p>
              <button className="btn btn-dark mt-4">
                Download Paytm App <i className="fab fa-apple"></i>{" "}
                <i class="fab fa-google-play"></i>
              </button>
            </div>
          </div>
          <img src={props.img2} className="inside-box2" alt="paytm" />
        </div>
      </div>
    </>
  );
}
