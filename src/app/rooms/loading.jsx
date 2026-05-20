"use client";

import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <HashLoader color="#06BBCC" size={60} />
        </div>
    );
};

export default LoadingSpinner;