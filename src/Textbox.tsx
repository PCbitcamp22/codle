import logo from './logo.svg';
import './App.css';

function Textbox() {

    function openResponse(respname) {
        var x = Array.from(document.getElementsByClassName("resp") as HTMLCollectionOf<HTMLElement>);
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(respname).style.display = "block";
    }


    return (
        <div className="Textbox">
        
        <form className="form">
            <div className="problembar">
                <button onClick={() => openResponse('Response 1')}>Response 1</button>
                <button onClick={() => openResponse('Response 2')}>Response 2</button>
                <button onClick={() => openResponse('Response 3')}>Response 3</button>
            </div>
            <div id="resp1" className="resp" style={{display: "block"}}>
                <textarea className="resp1"></textarea>
            </div>
            <div id="resp2" className="resp" style={{display: "none"}}>
                <textarea className="resp2"></textarea>
            </div>
            <div id="resp3" className="resp" style={{display: "none"}}>
                <textarea className="resp3"></textarea>
            </div>
            <div id="resp4" className="resp" style={{display: "none"}}>
                <textarea className="resp4"></textarea>
            </div>
            <div id="resp5" className="resp" style={{display: "none"}}>
                <textarea className="resp5"></textarea>
            </div>
            <div id="resp6" className="resp" style={{display: "none"}}>
                <textarea className="resp6"></textarea>
            </div>
            

        </form>
        </div>
    );
}

export default Textbox;
