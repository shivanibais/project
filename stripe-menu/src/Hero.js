import React from "react";
import { useGlobalContext } from "./context";
import phone from "./images/phone.svg";
import { FaTimes, FaBars } from "react-icons/fa";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main className="hero" onMouseOver={closeSubmenu}>
      <div className="main-body">
        <h1 className="heading"> Payments infrastructure for the internet</h1>
        <p className="subheading">
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="start-now-btn">Start now</button>
      </div>

      <img src={phone} alt="phone" className="phone-img" />
    </main>
  );
};

export default Hero;
