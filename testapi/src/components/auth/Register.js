import React from "react";

export default function Register() {
    return (
        <div>
            <div className="flex bg-gray-100">
                <div>
                    <div className="bg-white m-10 shadow-lg">
                        <div className="">
                            <img
                                src={Hero}
                                className="h-16 mx-auto w-16 rounded-full -mt-2"
                            />
                        </div>
                        <div className="card_content p-6">
                            <div>
                                <div>
                                    <input
                                        className="px-2 my-2 text-md"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="px-2 my-2 text-md"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="px-2 my-2 text-md"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="px-2 my-2 text-md"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirm_password"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <button
                                    type="submit"
                                    className=" bg-black text-white text-lg p-2 "
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
