import React from "react";
import  Hero from "../../assets/img/hero.jpg";
import './style.css';

export default function Login() {
    return <div>
        <div className="flex m-0 mt-0 bg-gray-100">
            <div>
                <div className="auth_card shadow-xl m-20 mx-40 bg-white">
                    <div className="align-center m-0 p-0">
                        <img src={Hero} className="h-24"/>
                    </div>
                    <div className="card_content p-10">
                        <div>
                            <div>
                                <input className="px-2 my-2 text-xl" type="text" placeholder="Name"  name="name"/>
                            </div>
                            <div>
                                <input className="px-2 my-2 text-xl" type="email" placeholder="Email" name="email"/>
                            </div>
                            <div>
                                <input className="px-2 my-2 text-xl" type="password" placeholder="Password" name="password"/>
                            </div>
                            <div>
                                <input className="px-2 my-2 text-xl" type="password" placeholder="Confirm Password" name="confirm_password"/>
                            </div>
                            </div>
                        <div className="my-2">
                            <button type="submit" className=" bg-black text-white text-lg p-2 ">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auth_pic">
                <img src={Hero} />
            </div>
        </div>
    </div>;
}
