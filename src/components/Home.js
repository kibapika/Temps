import React from "react";
import ThreeDays from "./ThreeDays";
import Current from "./Current";

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl">Home</h1>
            <Current />
            <ThreeDays />
        </div>
    )
}

export default Home;