import React from 'react'

export default function Contentbox(props) {
  return (
    <>
        <div className='mx-5'>
            <div className="content-eight-box ">
              <img src={props.img} alt="paytm" />
            </div>
            <h4 className='mt-3'>
              {props.text} <br /> {props.text1}
            </h4>
            <h5 className="w-75 mt-5">
              {props.para}
            </h5>
            <button className="inner-link mt-2">
              <span>Learn More </span>
            </button>
            </div>
    </>
  )
}
