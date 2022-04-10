import logo from './logo.svg';
import './App.css';
import Textbox from "./Textbox.tsx";
import Tests from "./Tests";
import { useState } from "react";
import Test_Textbox from './Test_Textbox.tsx';
import Modal from './Modal.tsx';

function App() {
    const [isOpen, setIsOpen] = useState(true);
    const [problem, setProblem] = useState("");
    const [responseCount, setResponseCount] = useState(0);

    function updateCount() {
        setResponseCount(responseCount+1);
    }
    function getProblem() {
        var requestOptions = {
            method: 'GET',
        };
        let p = fetch('https://codlebackend-4noodlwraa-ue.a.run.app/problem', requestOptions)
            .then(response => response.text())
            .then(setProblem)
        return problem.toString();
    }

    return (
        <div className="App">
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <h1>CODLE</h1>
            <button className="infoButton" onClick={() => setIsOpen(true)}>?</button>
            <p>{problem ? problem : getProblem()}</p>
            <Test_Textbox fn={updateCount} responseCount={responseCount}/>
            {/* <Tests/>
            <Textbox fn={updateCount} responseCount={responseCount}/> */}
        </div>

    );    
}

export default App;
