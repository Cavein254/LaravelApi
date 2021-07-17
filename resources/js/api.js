import axios from "axios";
import { useHistory } from "react-router-dom";

export const BASE_API_URL = "http://127.0.0.1:8000/api/";
export const CSRF_TOKEN = "http://127.0.0.1:8000/sanctum/csrf-cookie";

export const apiClient = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
});

export let SITE_TOKEN = "";

export const getToken = () => {
    const history = useHistory();
    let siteToken = localStorage.getItem("SITE_TOKEN");
    if (siteToken) {
        SITE_TOKEN = siteToken;
        return SITE_TOKEN;
    } else {
        history.push("/login");
    }
};

export const apiClientPost = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    method: "POST",
    headers: {
        Authurazation: localStorage.getItem("SITE_TOKEN"),
    },
});
