import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./Routes";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
