import logo from './logo.svg';
import './App.css';
import Textbox from "./Textbox.tsx";
import Tests from "./Tests";
import { useState } from "react";
import Test_Textbox from './Test_Textbox.tsx';

function App() {
    const [problemNum, setProblemNum] = useState(0);
    const [responseCount, setResponseCount] = useState(0);

    function updateCount() {
        setResponseCount(responseCount+1);
    }

    return (
        <div className="App">
            <h1>CODLE</h1>
            <p><b><u>Problem 1:</u></b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in odit sit inventore quidem omnis molestiae iste earum. Error facilis nihil aspernatur consectetur blanditiis in ad culpa quos voluptatibus animi.</p>
            
            <Test_Textbox fn={updateCount} responseCount={responseCount}/>
            {/* <Tests/>
            <Textbox fn={updateCount} responseCount={responseCount}/> */}
        </div>

    );    
}

export default App;
