import React from "react"
import Winner from './Winner';
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
  const [isOpen, setIsOpen] = React.useState(false);

  

  const [codeText, setCodeText] = React.useState("");

  const [disable, setDisable] = React.useState(false);

  const [winner, setWinner] = React.useState(true);

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
        
        var requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({"Code-Text":codeText,"Number":props.probNum}),
          // mode: 'no-cors' as RequestMode
        };
        let result = fetch('https://codlebackend-4noodlwraa-ue.a.run.app/api', requestOptions)
            .then(response => response.json()).then(result => {
        //var result = [0,1,-1,1,1]

          console.log(result)
          console.log(typeof(result))

          const keys = Object.keys(result);
          console.log(keys);

          var x = Array.from(document.getElementsByClassName("TestBox") as HTMLCollectionOf<HTMLElement>);
          var amountRight = 0;
          for (var i = respNum*5; i < respNum*5+5; i++) {
              var ele = x[i];
              switch(result[keys[i-5*respNum]]) {
                  case 3:
                  case -3:
                  case -1:
                      x[i].style.backgroundColor = "#3a3a3c";
                      break;
                  case 0:
                      x[i].style.backgroundColor = "#b59f3b";
                      break;
                  case 1:
                      x[i].style.backgroundColor = "#538d4e";
                      amountRight++;
                      break;
                  default:
                      x[i].style.backgroundColor = "#121213";
                      break;
              }
          }
          if (respNum >= 5 || amountRight == 5) {
            setDisable(true);
            if (amountRight != 5) {
              setWinner(false);
            }
            setIsOpen(true);
          }
        });
    }

    function handleChange(event) {
        const {value} = event.target
        setCodeText(value)
    }

  return (
    <div>
      {isOpen && <Winner setIsOpen={setIsOpen} respNum={props.responseCount} winner={winner}/>}
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
                <textarea className="resp1 box" rows={18} cols={80} 
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