import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/home.module.css';

const SubmitQuestion = () => {
    const [title, setTitle] = useState("");
    const [correctPOCs, setCorrectPOCs] = useState(["", "", ""]);
    const [errorPOCs, setErrorPOCs] = useState(["", "", ""]);
    const [testCases, setTestCases] = useState(""); //will be stored as JSON string
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formattedTestCases = JSON.parse(testCases); // Convert to JSON array

            const response = await axios.post("http://localhost:3000/question/submit", {
                title,
                POC: correctPOCs,
                errorPOC: errorPOCs,
                testCases: formattedTestCases
            });

            setMessage(response.data.message);
            setTitle("");
            setCorrectPOCs(["", "", ""]);
            setErrorPOCs(["", "", ""]);
            setTestCases("");
        } catch (error) {
            setMessage(error.response?.data?.message || "Error submitting question");
        }
    };

    return (
        <div className={`${styles.container} max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md`}>
            <h2 className="text-2xl font-bold text-center mb-4">Submit a Question</h2>
            {message && <p className="text-center text-red-500">{message}</p>}
    
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter question title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${styles.input} w-full p-2 border rounded`}
                    required
                />
    
                <h3 className="text-lg font-semibold">Correct POCs</h3>
                {correctPOCs.map((poc, index) => (
                    <textarea
                        key={index}
                        placeholder={`Correct POC ${index + 1}`}
                        value={poc}
                        onChange={(e) => {
                            const newPOCs = [...correctPOCs];
                            newPOCs[index] = e.target.value;
                            setCorrectPOCs(newPOCs);
                        }}
                        className={`${styles.textarea} w-full p-2 border rounded`}
                        required
                    />
                ))}
    
                <h3 className="text-lg font-semibold">Buggy POCs</h3>
                {errorPOCs.map((poc, index) => (
                    <textarea
                        key={index}
                        placeholder={`Buggy POC ${index + 1}`}
                        value={poc}
                        onChange={(e) => {
                            const newPOCs = [...errorPOCs];
                            newPOCs[index] = e.target.value;
                            setErrorPOCs(newPOCs);
                        }}
                        className={`${styles.textarea} w-full p-2 border rounded`}
                        required
                    />
                ))}
    
                <h3 className="text-lg font-semibold">Test Cases (JSON format)</h3>
                <textarea
                    placeholder='[{"input": "[1,2,3]", "expected": "{1: [0], 2: [1], 3: [2]}"}]'
                    value={testCases}
                    onChange={(e) => setTestCases(e.target.value)}
                    className={`${styles.textarea} w-full p-2 border rounded`}
                    required
                />
    
                <button type="submit" className={`${styles.button} w-full bg-blue-500 text-white p-2 rounded`}>
                    Submit Question
                </button>
            </form>
        </div>
    );
    
};

export default SubmitQuestion;