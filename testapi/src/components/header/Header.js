import React from "react";

export default function Header() {
    return (
        <>
            <div className="flex">
                <div>logo</div>
                <div>Title</div>
                <div className="flex-grow">Search Bar</div>
                <div>cart</div>
                <div>sign Up</div>
                <div>sign In</div>
                <div>drop down</div>
            </div>
            <div className="flex-auto">
                <div>Questions</div>
                <div>Ask Question</div>
                <div>Blog</div>
                <div>About</div>
            </div>
        </>
    );
}
