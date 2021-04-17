import React from "react";

//TODO: setup and link social networks
//TODO: add more description to "About TransDen"

export default function About() {
  return (
    <div>
      <section className="about-bg2">
        <div className="about">
          <div className="about-info2">
            <h4>About TransDen</h4>
            <p>
              Safe space for everyone in the LGBTQ+ community to share
              experiences.
            </p>
            <a href="#">Download</a>
          </div>
          <div className="about-img">
            <img src="/images/messages.svg" alt="Mockup2" />
          </div>
        </div>
      </section>
      {/*REDE-SOCIAL*/}
      <section className="rede-social-bg">
        <div className="rede-social">
          <p>Follow Us</p>
          <a href="#">
            {" "}
            <img src="/images/instagram-icon.svg" alt="Instagram Logo" />
          </a>
          <a href="#">
            {" "}
            <img src="/images/facebook-official.svg" alt="Facebook Logo" />
          </a>
          <a href="#">
            {" "}
            <img src="/images/twitter-tile.svg" alt="Twitter Logo" />
          </a>
          <a href="#">
            {" "}
            <img src="/images/youtube-icon.svg" alt="YouTube Logo" />
          </a>
        </div>
      </section>
    </div>
  );
}
