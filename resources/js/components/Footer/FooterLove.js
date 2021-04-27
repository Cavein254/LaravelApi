import React, { useState } from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";

function FooterLove() {
  const [suscriber, setSubsriber] = useState();
  return (
    <div className="footer_closing">
      <h6>
        Made with{" "}
        <span className="footer_icon_closing">
          <FaHeart />
        </span>{" "}
        and several mugs of{" "}
        <span className="footer_icon_closing">
          <FaCoffee />
        </span>
      </h6>
    </div>
  );
}

export default FooterLove;
