import React, { useState } from "react";
import axios from "axios";
import Hero from "../../assets/img/hero.jpg";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/login", {
                email,
                password
            })
            .then(res => {
                console.log(res);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex bg-gray-100">
                <div>
                    <div className="bg-white m-10 shadow-lg">
                        <div className="-mt-3">
                            <img
                                src={Hero}
                                className="h-16 mx-auto w-16 rounded-full"
                            />
                        </div>
                        <div className="card_content p-6">
                            <div>
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
                            </div>
                            <div className="my-2">
                                <button
                                    type="submit"
                                    className=" bg-black text-white text-lg p-2 "
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
