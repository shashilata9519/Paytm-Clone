import React from "react";

export default function Content3(props) {
  return (
    <>
      <div className="outer-content py-5">
        <div className="fifth-img w-50 text-center">
          <img src={props.img} alt="paytm" />
        </div>
        <div className="w-50 ms-5">
          <img className="fifth-img1 my-4" src={props.img2} alt="paytm" />
          <h1 className=" my-4">{props.text} <br/> {props.text2} <br/> {props.text3}</h1>
          <h5 className="w-75 my-4">
            {props.para}
          </h5>
          <button>
            Learn More{" "}
            <span>
              <i className="fas fa-chevron-right"> </i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
