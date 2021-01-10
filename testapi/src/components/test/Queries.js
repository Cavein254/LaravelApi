import React from "react";
import Eye from "../../assets/img/eye.jpg";

export default function Queries() {
    return (
        <div>
            <div className="md:flex bg-white rounded-lg p-6 shadow-lg bg-teal-100 flex">
                <div className="flex">
                    <img
                        className="h-16 w-16 md:h-24 md:w-24 rounded-full"
                        src={Eye}
                    />
                    <div className="text-center md:text-left fex-1">
                        <div className="bg-red-400 text-white rounded m-0 p-2 ">
                            <h3>Here where the questions will land...</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
