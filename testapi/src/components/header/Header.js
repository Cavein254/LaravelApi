import React from "react";
import ReactDOM from "react-dom";
import { CartPlus, ThreeDotsVertical, ArrowBarUp } from "react-bootstrap-icons";
import "../main/css/style.css";

export default function Header() {
    return (
        <div className="bg-red-500 text-white md:text-xs pt-1">
            <div className="flex mx-1">
                <div>logo</div>
                <div>Title</div>
                <div className="lg:flex-grow sm:justify-between"></div>
                <div className="center text-center">
                    {" "}
                    <CartPlus className="cart_icon" />{" "}
                </div>
                <div>sign Up</div>
                <div>sign In</div>
                <div>
                    {" "}
                    <ThreeDotsVertical />
                </div>
            </div>
            <div>
                <div className="flex lg:justify-center sm:justify-between lg:py-4">
                    <div className="lg:mr-6 sm:px-2">Questions</div>
                    <div className="lg:mr-6 sm:px-2">Ask Question</div>
                    <div className="lg:mr-6 sm:px-2">Blog</div>
                    <div className="lg:mr-6 sm:px-2">About</div>
                </div>
            </div>
        </div>
    );
}
