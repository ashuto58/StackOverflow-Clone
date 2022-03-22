import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "react-quill/lib/toolbar";
import "./index.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import AuthService from "../../services/auth.service";

function MainQuestion() {

    var toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }], // text direction

        // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [
            { color: ["#ff0000", "#00ff00", "#0000ff", "#220055"] },
            { background: [] },
        ], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
    ];
    Editor.modules = {
        syntax: false,
        toolbar: toolbarOptions,
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };

    Editor.formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ];


    const [show, setShow] = useState(false);

    const user = AuthService.getCurrentUser();

    const [questionData, setQuestionData] = useState();
    const [answers, setanswers] = useState([]);
    const [answer, setAnswer] = useState("");

    const handleQuill = (value) => {
        setAnswer(value);
    };

    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");

    useEffect(() => {
        async function getFunctionDetails() {
            await axios
                .get(`http://localhost:8090/questions/${id}`)
                .then((res) => setQuestionData(res.data))
                .catch((err) => console.log(err));
        }
        getFunctionDetails();
    }, [id]);



    useEffect(() => {
        async function getAnswer() {
            await axios.get(`http://localhost:8090/questions/answers/${id}`).then((res) => {
                setanswers(res.data.reverse());
                // console.log(res.data)
            });
        }
        getAnswer();
    }, []);


    const handleSubmit = async () => {
        const body = {
            ans: answer,
            ques_id: id,
            username: user.username,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        await axios
            .post("http://localhost:8090/answers", body, config)
            .then(() => {
                alert("Answer added successfully");
                setAnswer("");
                // getUpdatedAnswer();
            })
            .catch((err) => console.log(err));
    };



    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2 className="main-question">{questionData?.title} </h2>
                    <Link to="/add-question">
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className="main-desc">
                    <div className="info">
                        <p>
                            dd/mm/yyyy
                        </p>
                        <p>
                            Active<span>today</span>
                        </p>
                        <p>
                            Viewed<span>13times</span>
                        </p>
                    </div>
                </div>
                <div className="all-questions">
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow">▲</p>

                                <p className="arrow">0</p>

                                <p className="arrow">▼</p>

                            </div>
                        </div>
                        <div className="question-answer">
                            <p>{ReactHtmlParser(questionData?.body)}</p>

                            <div className="author">
                                {/* <small>
                                    asked "dd/mm/yyyy"
                                </small> */}
                                <div className="auth-details">

                                    <p>
                                        {questionData?.username}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        flexDirection: "column",
                    }}
                    className="all-questions"
                >
                    <p
                        style={{
                            marginBottom: "20px",
                            fontSize: "1.3rem",
                            fontWeight: "300",
                        }}
                    >
                        {answers && answers.length} Answers
                    </p>
                    {answers.map((_q) => (
                        <>
                            <div
                                style={{
                                    borderBottom: "1px solid #eee",
                                }}
                                key={_q._id}
                                className="all-questions-container"
                            >
                                <div className="all-questions-left">
                                    <div className="all-options">
                                        <p className="arrow">▲</p>

                                        <p className="arrow">0</p>

                                        <p className="arrow">▼</p>

                                    </div>
                                </div>
                                <div className="question-answer">
                                    {ReactHtmlParser(_q.ans)}
                                    <div className="author">
                                        {/* <small>
                                            asked dd/mm/yyyy
                                        </small> */}
                                        <div className="auth-details">

                                            <p>
                                                {_q.username}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="main-answer">
                <h3
                    style={{
                        fontSize: "22px",
                        margin: "10px 0",
                        fontWeight: "400",
                    }}
                >
                    Your Answer
                </h3>
                <ReactQuill
                    value={answer}
                    onChange={handleQuill}
                    modules={Editor.modules}
                    className="react-quill"
                    theme="snow"
                    style={{
                        height: "200px",
                    }}
                />
            </div>
            <button
                onClick={handleSubmit}
                style={{
                    marginTop: "100px",
                    maxWidth: "fit-content",
                }}
            >
                Post your answer
            </button>
        </div>
    );
}

export default MainQuestion;