import './App.css';
import './Textbox.css';

function Textbox() {

    function openResponse(respname) {
        var x = Array.from(document.getElementsByClassName("resp") as HTMLCollectionOf<HTMLElement>);
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(respname).style.display = "block";
    }

    function sendCode(respNum) {
        var x = Array.from(document.getElementsByClassName("resp") as HTMLCollectionOf<HTMLElement>);
        console.log(x[respNum].textContent); //Send this to API
        x[respNum].textContent = "";
        this.props.fn();
    }

    

    return (
        <div className="Textbox">
            {"this.props.responseCount"}
        
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
                    <textarea className="resp1 box" rows={20} cols={80}></textarea>
                </div>
                {/* <div id="resp2" className="resp" style={{display: "none"}}>
                    <textarea className="resp2 box"></textarea>
                </div>
                <div id="resp3" className="resp" style={{display: "none"}}>
                    <textarea className="resp3 box"></textarea>
                </div>
                <div id="resp4" className="resp" style={{display: "none"}}>
                    <textarea className="resp4 box"></textarea>
                </div>
                <div id="resp5" className="resp" style={{display: "none"}}>
                    <textarea className="resp5 box"></textarea>
                </div>
                <div id="resp6" className="resp" style={{display: "none"}}>
                    <textarea className="resp6 box"></textarea>
                </div> */}
                <button className='submit' onClick={() => sendCode(this.props.responseCount)}>Submit</button>
                

            </form>
        </div>
    );
}

export default Textbox;
