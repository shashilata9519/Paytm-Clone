import React from 'react'

export default function Content2(props) {
  return (
    <>
    <div className="fourth-main">
          <div className="w-50 fourth-text">
            <img src={props.img} alt="paytm" className="my-3" />
            <h1 className="my-2">
              {props.text} <br /> {props.text2}
            </h1>
            <h5 className="my-5">
              {props.para}
            </h5>
            <button>
              Learn More{" "}
              <span>
                <i className="fas fa-chevron-right"> </i>
              </span>
            </button>
          </div>
          <div className="fourth-img">
            <img src={props.img2} alt="paytm" />
          </div>
        </div>
    
    
    </>

  )
}
