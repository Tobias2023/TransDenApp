import React from "react";

//TODO: Setup email marketing (i.e MailChimp or whatever) for the email alerts button

export default function Header() {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div>
          <img src="/images/logo.png" alt="Mobile App logo" />
        </div>
        <nav className="menu-nav">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Showcase</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="btn-menu">
              <a href="#">Coming soon!</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="intro-bg">
        <div className="intro">
          <div>
            <h1>
              LGBTQ+ Social Networking Mobile App <br />
              <span>TransDen</span>
            </h1>
            <p>
              Document your journey to becoming you while making friends who share a
              similar story along the way!
            </p>
            <a href="#">Sign up for email alerts</a>
          </div>
          <div className="intro-img">
            <img src="/images/my_app.svg" alt="App illustration" />
          </div>
        </div>
      </section>
    </header>
  );
}
