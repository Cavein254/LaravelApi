import React from "react";
import heroImage from "../../assets/img/hero.jpg";
import "./css/style.css";

export default function Hero() {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover"
            }}
        >
            <div className="bg-black bg-opacity-70">
                <h1 className="text-white text-5xl text-center pt-20 m-3">
                    People don't care about what you say, they care about what
                    you build.
                </h1>
                <p className="text-white text-2xl text-center pb-40 mb-40">
                    Mark Zuckerberg
                </p>
            </div>
            <div className="flex">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
