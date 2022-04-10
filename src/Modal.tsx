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

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            Answer the <b>CODLE</b> in six tries. <br/><br/>

            Each guess should try to solve the coding problem by passing all five unknown tests. Hit the submit button to submit.
            <br/><br/>
            After each guess, the color of the tiles will change to show how good your answer was:
            <br/><br/>
            Green- Test passed<br/>
            Yellow- Test failed<br/>
            Gray- Test had an error<br/><br/>

            A new CODLE will be available each day!
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