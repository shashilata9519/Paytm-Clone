import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import m7 from "../images/m7.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import b1 from "../images/b1.png";
import b2 from "../images/b2.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import e1 from "../images/e1.png";
import e2 from "../images/e2.png";
import e3 from "../images/e3.png";
import e4 from "../images/e4.png";
import k1 from "../images/k1.png";
import k2 from "../images/k2.png";
import h3 from "../images/h3.png";
import h2 from "../images/h2.png";
import h1 from "../images/h1.png";
import w1 from "../images/w1.jpeg";
import w2 from "../images/w2.png";
import "../components/home.css";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import v1 from "../images/v1.png";
import v2 from "../images/v2.png";
import n1 from "../images/n1.png";
import n2 from "../images/n2.png";
import n3 from "../images/n3.png";
import n4 from "../images/n4.png";

import Content from "./Content";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Contentbox from "./Contentbox";

export default function Home(props) {
  return (
    <>
      <div className="content-text text-center">
        <h6 className="pb-3 pt-2">
          No Wallet KYC Required<span className="fs-4"> 😊 </span> to pay using
          UPI on Paytm. Learn more.
        </h6>
      </div>
      <div className="content-first py-5">
        <div className="section-one">
          <div className="my-5">
            <img src={img1} alt="paytm" />
          </div>
          <h1 className="my-3">India's Most-loved Payments App</h1>
          <h5>
            Recharge & pay bills, book flights & movie tickets, open a savings
            account, invest in stocks & mutual funds, and do a lot more.
          </h5>
          <button className="btn btn-dark">
            Download Paytm App <i className="fab fa-apple"></i>{" "}
            <i class="fab fa-google-play"></i>
          </button>
        </div>
        <div className="section-two pt-5">
          <img src={img2} alt="paytm" />
        </div>
      </div>
      <div className="box-content py-5">
        <div>
          <h1>Recharge & Pay Bills on Paytm.</h1>
        </div>
        <div className="boxs">
          <div className="box-text mt-5">
            <img src={p1} alt="recharge" />
            <p className="mt-2">
              Recharge <br />
              Prepaid <br /> Mobile{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p2} alt="recharge" />
            <p className="mt-2">
              Pay <br />
              Rent <br /> Payment{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p3} alt="recharge" />
            <p className="mt-2">
              Pay <br />
              Electricity <br /> Bill{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p4} alt="recharge" />
            <p className="mt-2">
              Recharge <br />
              DTH <br /> Connection{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p5} alt="recharge" />
            <p className="mt-2">
              Book <br />
              Gas <br />
              Cylinder{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p6} alt="recharge" />
            <p className="mt-2">
              Pay <br />
              Credit <br /> Card Bill{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={p7} alt="recharge" />
            <p className="mt-2">
              All <br />
              Payment <br /> Services{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="box-content-second py-5">
        <div>
          <h1>Book & Buy on Paytm.</h1>
        </div>
        <div className="boxs">
          <div className="box-text mt-5">
            <img src={m1} alt="recharge" />
            <p className="mt-2">
              Movie
              <br /> Tickets{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m2} alt="recharge" />
            <p className="mt-2">
              Flight <br />
              Tickets{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m3} alt="recharge" />
            <p className="mt-2">
              Bus
              <br /> Tickets{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m4} alt="recharge" />
            <p className="mt-2">
              Train <br /> Tickets{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m5} alt="recharge" />
            <p className="mt-2">
              Car &<br />
              Bikes
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m6} alt="recharge" />
            <p className="mt-2">
              International <br /> Flights{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
          <div className="box-text mt-5">
            <img src={m7} alt="recharge" />
            <p className="mt-2">
              Invest
              <br /> in Stocks{" "}
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="content-third p-5">
        <h1 className="pt-5 third-text mb-3">Paytm Payment Instruments</h1>

        <Content
          img={s1}
          text1="Paytm"
          text2="Wallet"
          heading="The Fastest Way to Pay In-store & Online."
          para="Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."
          img2={s2}
        />
        <div className="my-5">
          <Content
            img={b1}
            text1="UPI Money"
            text2="Transfer"
            heading="Pay anyone directly from your bank account."
            para="Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."
            img2={b2}
          />
        </div>
        <div className="my-5">
          <Content
            img={c1}
            heading="Want it?
          No more waiting for it."
            para=" With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month."
            img2={c2}
          />
        </div>
        <div className="my-5 middle-content">
          <div className="w-50 middle-text px-5 py-1 mr-4">
            <img src={e1} alt="paytm" />
            <h1 className="mt-4">Unlimited Cashback Every time</h1>
            <h5 className="mt-3">
              Paytm HDFC Bank Select Credit Card. A card with assured Cashback
              and incredible offers.
            </h5>
            <img src={e2} alt="paytm" className="middle-img mt-5" />
          </div>
          <div className="w-50 middle-text1 px-5  ms-4">
            <img src={e3} alt="paytm" />
            <h1 className="mt-4">India’s Most Sincere Credit Card</h1>
            <h5 className="mt-3">
              Paytm SBI Card SELECT - With Intelligent Features & Great Rewards
              that Never Expire
            </h5>
            <img src={e4} alt="paytm" className="middle-img1 mt-5" />
          </div>
        </div>
      </div>
      <div className="content-fourth container my-5 p-5">
        <h1 className="my-5 fourth-h">Financial Services by Paytm</h1>
        <Content2
          img={k1}
          text="India's most sincere"
          text2="bank."
          para="Paytm Payments Bank offers secure, transparent and risk-free
        banking at your fingertips. With instant account opening, virtual
        debit card and zero balance requirements, experience the future of
        banking today."
          img2={k2}
        />
      </div>
      <div className="content-fifth py-5">
        <Content3
          img={h2}
          img2={h3}
          text="Build Long-term  "
          text2="Wealth & Achieve"
          text3="your Goals."
          para="Investing on Paytm Money is transparent, low-cost and
        commission-free. Buy stocks & mutual funds that can help you create
        wealth & realise your dreams."
        />

        <img className="fifth-bg" src={h1} alt="background" />
      </div>
      <div className="content-sixth py-5 my-5">
        <Content2
          img={w1}
          text="Insurance made easy."
          para="Paytm Payments Bank offers secure, transparent and risk-free
        banking at your fingertips. With instant account opening, virtual
        debit card and zero balance requirements, experience the future of
        banking today."
          img2={w2}
        />
      </div>
      <div className="content-seventh py-5">
        <Content3
          img={t1}
          img2={t2}
          text="Get a Personal Loan "
          text2="in 2 Minutes."
          para="Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."
        />
      </div>

      <div className="content-eighth my-5">
        <h1 className="my-5 pt-5 eight-h">Business Services by Paytm</h1>
        <div>
          
        </div>
        <Content4
          img={v1}
          text=" Accept payments"
          text2="online with ease"
          para=" Grow your business with the payment gateway that powers India’s
          largest brands and even the Paytm App"
        />
        <div className="my-5">
          <Content4
            img={v2}
            text=" In-shop payments"
            text2="powered by Paytm."
            para=" Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants"
          />
        </div>

        <div className="content-eighth-inner my-5 py-5">
          <h1 className="my-5">
            Business Tools to help <br /> your business grow
          </h1>

          <div className="d-flex">
            <div>
              <Contentbox
                img={n1}
                text="POS Billing"
                text1="Software"
                para="Say Hello to Smart Retail Business Management"
              />
            </div>
            <div>
              <Contentbox
                img={n2}
                text="Paytm for"
                text1="Business App"
                para="Everything you need to manage your business on your phone"
              />
            </div>
            <div>
              <Contentbox
                img={n3}
                text="Advertise on
                "
                text1="Paytm"
                para="Grow your business by advertising on India’s largest mobile busi"
              />
            </div>
            <div>
              <Contentbox
                img={n4}
                text="Business
                "
                text1="Khata"
                para="Managing Khata made easy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
