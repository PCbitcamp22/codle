import React from "react"
import './Test.css';
import './Textbox.css';

export default function Test_Textbox(props) {

  // We don't need states because the value never gets update after the submission.
  const [testOne, setTestOne] = React.useState({
    status: "blank"
  })

  const [testTwo, setTestTwo] = React.useState({
    status: "blank"
  })

  const [testThree, setTestThree] = React.useState({
    status: "blank"
  })

  const [testFour, setTestFour] = React.useState({
    status: "blank"
  })

  const [testFive, setTestFive] = React.useState({
    status: "blank"
  })

  const [testSix, setTestSix] = React.useState({
    status: "blank"
  })

  

  const [codeText, setCodeText] = React.useState("");

  const [disable, setDisable] = React.useState(false);

    function openResponse(respname) {
        var x = Array.from(document.getElementsByClassName("resp") as HTMLCollectionOf<HTMLElement>);
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(respname).style.display = "block";
    }

    function sendCode(respNum) {
        console.log(codeText); //Send this to API
        props.fn();
        console.log(respNum);
        var result = [0,1,-1,1,1]

        var x = Array.from(document.getElementsByClassName("TestBox") as HTMLCollectionOf<HTMLElement>);
        console.log(x.length + " things found")
        for (var i = respNum*5; i < respNum*5+5; i++) {
            var ele = x[i];
            console.log(i);
            switch(result[i-5*respNum]) {
                case -1:
                    x[i].style.backgroundColor = "#3a3a3c";
                    break;
                case 0:
                    x[i].style.backgroundColor = "#b59f3b";
                    break;
                case 1:
                    x[i].style.backgroundColor = "#538d4e";
                    break;
                default:
                    x[i].style.backgroundColor = "#121213";
                    break;
            }
        }
        if (respNum >= 5) {
          setDisable(true);
        }
        
    }

    function handleChange(event) {
        const {value} = event.target
        setCodeText(value)
    }

  return (
    <div>
      <div className="TestWrapper">
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
        <div className="Tests">
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
            <div className="TestBox"/>
        </div>
      </div>
      <div className="Textbox">
        
            
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
                onChange={handleChange} value={codeText} disabled={disable} onKeyDown={e => {
                                                                                if ( e.key === 'Tab' && !e.shiftKey ) {
                                                                                document.execCommand('insertText', false, "    ");
                                                                                e.preventDefault();
                                                                                return false;
                                                                                }}}></textarea>
            </div>
            
            <button className='submit' disabled={disable} onClick={() => sendCode(props.responseCount)}>SUBMIT</button>
                

            
        </div>
    </div>
    

  )
}