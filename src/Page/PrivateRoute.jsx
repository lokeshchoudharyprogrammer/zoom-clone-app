import React from "react";

import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const userEmail = localStorage.getItem("auth")
    if (!userEmail) {
        return <Navigate to="/login"></Navigate>;
    }
    return children;
};

export default Private;