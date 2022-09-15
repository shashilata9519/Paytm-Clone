import React from "react";

export default function Content4(props) {
  return (
    <>
      <div className="eighth-inner py-5 ps-5">
        <div className="p-5">
          <h1>
           {props.text} <br /> {props.text2}
          </h1>
          <h6 className="w-75 my-4">
           {props.para}
          </h6>
          <button>
            Learn More{" "}
            <span>
              <i className="fas fa-chevron-right"> </i>
            </span>
          </button>
        </div>
        <img src={props.img} alt="paytm" />
      </div>
    </>
  );
}
