import './App.css';
import './Textbox.css';
import { useState } from "react";

function Textbox() {

    const [codeText, setCodeText] = useState("");

    function openResponse(respname) {
        var x = Array.from(document.getElementsByClassName("resp") as HTMLCollectionOf<HTMLElement>);
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(respname).style.display = "block";
    }

    function sendCode(respNum) {
        console.log(codeText); //Send this to API
        setCodeText("");
        this.props.fn();
    }

    function handleChange(event) {
        const {value} = event.target
        setCodeText(value)
    }
    

    return (
        <div className="Textbox">
        
            <form className="form">
                {/* <div className="problembar">
                    <button onClick={() => openResponse('Response 1')}>Response 1</button>
                    <button onClick={() => openResponse('Response 2')}>Response 2</button>
                    <button onClick={() => openResponse('Response 3')}>Response 3</button>
                    <button onClick={() => openResponse('Response 4')}>Response 4</button>
                    <button onClick={() => openResponse('Response 5')}>Response 5</button>
                    <button onClick={() => openResponse('Response 6')}>Response 6</button>
                </div> */}
                <div id="resp1" className="resp" style={{display: "block"}}>
                    <textarea className="resp1 box" rows={20} cols={80} 
                    onChange={handleChange} value={codeText} onKeyDown={e => {
                                                                                    if ( e.key === 'Tab' && !e.shiftKey ) {
                                                                                    document.execCommand('insertText', false, "    ");
                                                                                    e.preventDefault();
                                                                                    return false;
                                                                                    }}}></textarea>
                </div>
                
                <button className='submit' onClick={() => sendCode(1)}>SUBMIT</button>
                

            </form>
        </div>
    );
}

export default Textbox;
