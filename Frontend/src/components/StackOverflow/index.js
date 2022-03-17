import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./CSS/index.css";
import Main from "./Main";


function Index() {
    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default Index;