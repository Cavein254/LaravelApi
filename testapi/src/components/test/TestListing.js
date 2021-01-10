import React from "react";
import Eye from "../../assets/img/eye.jpg";

export default function TestListing() {
    return (
        <div className="md:flex bg-white rounded-lg p-6">
            <img
                src={Eye}
                className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto"
            />
            <div className="text-center md:text-left">
                <h2 className="text-lg">Cavein Gate</h2>
                <div className="text-purple-500">Customer support</div>
                <div className="text-gray-500">test@tes.com</div>
                <div className="text-gray-500">1223 45454 34344</div>
            </div>
        </div>
    );
}
