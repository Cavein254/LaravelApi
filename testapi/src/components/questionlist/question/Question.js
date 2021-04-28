import React from "react";
import { ArrowBarUp, Eyeglasses, ReplyAllFill } from "react-bootstrap-icons";

export default function Question({ question }) {
    console.log(question);
    return (
        <div className="flex bg-white shadow-md m-4 p-4 bg-teal-100">
            <div className="flex-1 rounded px-4 mx-4 bg-gray-100">
                <div className="bg-red-400 text-white rounded m-0 p-2 ">
                    <h3>{question.attributes.title}</h3>
                </div>
                <div className="sm:flex text-xs justify-between">
                    <div>
                        <button className="bg-green-500 p-1 text-white m-1">
                            Beginner
                        </button>
                    </div>
                    <div>
                        <button>Type:Beginner</button>
                    </div>
                    <div>
                        <button>Type:Beginner</button>
                    </div>
                </div>
                <div className="text-xs bg-gray-300 rounded p-1">
                    <code>php Angular Javascript</code>
                </div>
            </div>
            <div className="text-xs">
                <div>
                    <p>Posted: 20 mins ago</p>
                </div>
                <div>
                    <span>
                        Upvotes <ArrowBarUp />
                    </span>
                </div>
                <div>
                    <span>
                        Views <Eyeglasses />
                    </span>
                </div>
                <div>
                    <span>
                        Answers <ReplyAllFill />
                    </span>
                </div>
            </div>
        </div>
    );
}
