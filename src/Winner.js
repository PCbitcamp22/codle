import React from "react";
import "./Modal.css";
// Guess the WORDLE in six tries.

// Each guess must be a valid five-letter word. Hit the enter button to submit.

// After each guess, the color of the tiles will change to show how close your guess was to the word.

// Examples

// W E A R Y
// The letter W is in the word and in the correct spot.

// P I L L S
// The letter I is in the word but in the wrong spot.

// V A G U E
// The letter U is not in the word in any spot.

// A new WORDLE will be available each day!

const Modal = ({ setIsOpen, respNum }) => {

  const [soln, setSoln] = React.useState("");

  function isWinner() {
    if (respNum >= 5) {
      return false;
    }
    else {
      return true;
    }
  }
  function getSolution() {
    var requestOptions = {
      method: 'GET',
    };
    fetch('https://codlebackend-4noodlwraa-ue.a.run.app/answer', requestOptions)
        .then(response => response.text()).then(setSoln)
    return soln.toString();
    
  }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            {isWinner() ? "Good job! You solved the problem in "+respNum+" tr"+(respNum===1?"y":"ies")+"!" : "Sorry, you did not solve the problem in the allotted guesses."}

            
            <br/><br/>

            Thank you for trying this demo! If you wish to play again on a random problem, refresh the page!

            {/* A new CODLE will be available tomorrow! */}

            {/* {"The recommended solution is: "}<br/><br/>{(soln ? soln : getSolution())} */}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}>
                Okay!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;