import React, { useState } from "react";
import "./CSS/AllQuestions.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

function AllQuestions({ data }) {

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
                    <Link to={`/question?q=${data?.id}`}>{data?.title}</Link>


                    <div
                        style={{
                            maxWidth: "90%",
                        }}
                    >
                        <div>{ReactHtmlParser(data?.body)}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <span className="question-tags">Tag1</span>
                        <span className="question-tags">Tag2</span>
                        <span className="question-tags">Tag3</span>
                    </div>
                    <div className="author">
                        {/* <small>Timestamp</small> */}
                        <div className="auth-details">
                            <p>
                                {data?.username}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllQuestions;