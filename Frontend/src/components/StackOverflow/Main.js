import React from "react";
import "./CSS/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2>All Questions</h2>
                    <Link to="/add-question">
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className="main-desc">
                    <p>5 questions</p>
                    <div className="main-filter">
                        <div className="main-tabs">
                            <div className="main-tab">
                                <Link to="/">Newest</Link>
                            </div>
                            <div className="main-tab">
                                <Link to="/">Active</Link>
                            </div>
                            <div className="main-tab">
                                <Link to="/">More</Link>
                            </div>
                        </div>
                        <div className="main-filter-item">
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
                <div className="questions">
                    <div className="question">
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;