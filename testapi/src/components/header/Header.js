import React from "react";

export default function Header() {
    return (
        <div className="bg-black text-white">
            <div className="flex">
                <div>logo</div>
                <div>Title</div>
                <div className="lg:flex-grow sm:justify-between">
                    Search Bar
                </div>
                <div>cart</div>
                <div>sign Up</div>
                <div>sign In</div>
                <div>drop down</div>
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
