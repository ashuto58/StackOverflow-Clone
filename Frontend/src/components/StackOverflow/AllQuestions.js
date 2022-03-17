import React, { useState } from "react";
import "./CSS/AllQuestions.css";
import { Link } from "react-router-dom";

function AllQuestions() {

    return (
        <div className="all-questions">
            <div className="all-questions-container">
                <div className="all-questions-left">
                    <div className="all-options">
                        <div className="all-option">
                            <p>0</p>
                            <span>votes</span>
                        </div>
                        <div className="all-option">
                            <p>0</p>
                            <span>answers</span>
                        </div>
                        <div className="all-option">
                            <small>2 views</small>
                        </div>
                    </div>
                </div>
                <div className="question-answer">
                    <Link>How do I get a Date without time in Java?e</Link>


                    <div
                        style={{
                            maxWidth: "90%",
                        }}
                    >
                        <div>What is the most efficient way to get a Date object without the time?</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <span className="question-tags">java</span>
                        <span className="question-tags">date</span>
                    </div>
                    <div className="author">
                        <small>Timestamp</small>
                        <div className="auth-details">
                            <p>
                                Rosdi Kasim
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllQuestions;