import React from "react";
import "./css/style.css";
import Customer from "../../assets/img/customer.jpg";
import Eye from "../../assets/img/eye.jpg";

export default function Main() {
    return (
        <div className="bg-black text-white">
            <div className="subheader_one flex">
                <div className="text_main">
                    <h1>Site Intro Text</h1>
                </div>
                <div className="flex pic_main">
                    <img
                        src={Customer}
                        alt="customer"
                        className="object-fill"
                    />
                    <div className="call_to_action_btn">
                        <button>Call to Action</button>
                    </div>
                </div>
            </div>
            {/* This is the second card  */}
            <div className="subheader_one flex mt-5">
                <div className="flex pic_main_two">
                    <img
                        src={Customer}
                        alt="customer"
                        className="object-fill"
                    />
                    <div className="text_main_two">
                        <h1>Site Intro Text</h1>
                    </div>
                </div>
            </div>

            {/* This is the third Card */}

            <div className="subheader_one flex">
                <div className="text_main">
                    <h1>Site Intro Text</h1>
                </div>
                <div className="flex pic_main">
                    <img
                        src={Customer}
                        alt="customer"
                        className="object-fill"
                    />
                    <div className="call_to_action_btn">
                        <button>Call to Action</button>
                    </div>
                </div>
            </div>

            {/* last card is here */}
            <div className="subheader_one flex mt-5">
                <div className="flex pic_main_two">
                    <img
                        src={Customer}
                        alt="customer"
                        className="object-fill"
                    />
                    <div className="text_main_two">
                        <h1>Site Intro Text</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
