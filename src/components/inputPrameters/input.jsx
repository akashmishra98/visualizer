import './input.css'
import { useState } from 'react';
import TreeVisual from '../treeVisualizer/treeVisual';

export function InputComp() {
    const [jsonInput, setJsonInput] = useState("");
    const [error, setError] = useState("");
    const [parsedJson, setParsedJson] = useState(null); // for rendered tree deafult case

    const sampleJson = {
        name: "John Doe",
        age: 25,
        skills: ["React", "Node.js", "C++"]
    };

    // handle typing in textarea
    function handleInputBox(event) {
        const text = event.target.value;
        setJsonInput(text);

        try {
            JSON.parse(text);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    }

    // handle submit click
    function handleSubmit(event) {
        event.preventDefault();
        try {
            const parsed = JSON.parse(jsonInput);
            setParsedJson(parsed); // update tree with parsed JSON
            setError("");
        } catch (err) {
            console.log(err.message);
            alert("❌ Invalid JSON. Please fix it before submitting.");
        }
    }

    // default tree = sampleJson if no submitted input yet
    const treeData = parsedJson || sampleJson;

    return (
        <>
            <div className="inpurComponent">
                <div className="heading">
                    <h4>Paste or Type Json Data</h4>
                </div>
                <div className="inputBox">
                    <textarea
                        onChange={handleInputBox}
                        placeholder={JSON.stringify(sampleJson, null, 2)}
                    />
                </div>
                <button className='submitinputbox' onClick={handleSubmit}>
                    Submit
                </button>

                {/* optional error message */}
                {error && (
                    <div style={{ color: "red", marginTop: "5px" }}>
                        {error}
                    </div>
                )}
            </div>

            {/* show default as sampleJson) */}
            <TreeVisual value={treeData} />
        </>
    );
}
