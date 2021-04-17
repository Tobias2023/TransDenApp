import React from "react";

import { Button } from "@material-ui/core";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default function Features() {
  return (
    <div>
      <section className="info-bg">
        <div className="info">
          <h3>Coming Soon </h3>
          <SendSharpIcon fontSize="large" />
          <p>
            <span role="img" aria-label="Raising Hands and email">
              👉
            </span>{" "}
            Sign up for email alerts to be the first to experience TransDen!{" "}
            <span role="img" aria-label="Raising Hands and email">
              🙌📧
            </span>
          </p>
        </div>
      </section>
      <section className="feature">
        <div className="feature-item">
          <h4>Personal Den</h4>
          <AccountCircleOutlinedIcon fontSize="large" />
          <p>Set up your Den (profile) and start sharing your story</p>
        </div>
        <div className="feature-item">
          <h4>Messaging</h4>
          <MessageOutlinedIcon fontSize="large" />
          <p>Meet new people, network and learn from others</p>
        </div>
        <div className="feature-item">
          <h4>UniFly </h4>
          <StorefrontOutlinedIcon fontSize="large" />
          <p>UniFly is our marketplace where users can donate/sell/buy items</p>
        </div>
      </section>
    </div>
  );
}
