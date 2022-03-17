import React from "react";
import "./CSS/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="sidebar-option">
                        <p>PUBLIC</p>
                        <div className="link">
                            <div className="link-tag">
                                <Link to="/">Question</Link>
                            </div>

                            <div className="tags">
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>COLLECTIVES</p>
                        <div className="link">
                            <div className="link-tag">
                                <Link to="/">Explore Collectives</Link>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>FIND A JOB</p>
                        <div className="link">
                            <a
                                style={{
                                    margin: "10px 20px",
                                }}
                                href="/"
                            >
                                Jobs
                            </a>
                            <a
                                style={{
                                    marginLeft: "20px",
                                }}
                                href="/"
                            >
                                Companies
                            </a>

                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>TEAMS</p>
                        <div className="link-tag">
                            <Link to="/">Companies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;