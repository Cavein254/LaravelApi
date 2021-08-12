import React from "react";
export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    };
    const [token, setToken] = React.useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem("SITE_TOKEN", JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        userToken: getToken,
    };
}
