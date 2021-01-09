import React from "react";

export default function Footer() {
    return (
        <div className="flex text-center bg-black text-white p-10">
            <div className="flex-1">
                <ul>
                    <li>Questions</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="flex-1">
                <ul>
                    <li>Legal</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="flex-1">&#169; Copyright 2021</div>
        </div>
    );
}
