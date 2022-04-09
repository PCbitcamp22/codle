import React from "react"
import './Test.css';

export default function Tests() {

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

  function TestBox(props) {
    var color = "#121213";
    if (props.status === "blank") {
      color = "#121213";
    } else if (props.status === "error") {
      color = "#3a3a3c";
    } else if (props.status === "wrong") {
      color = "#b59f3b";
    } else if (props.status === "success"){
      color = "#538d4e";
    } else {
      color = "blue";
    }

    const styles = {
      backgroundColor: color
    }

    return (
      <div className="TestBox" 
        style = {styles}
      >
        {/* {props.num} */}
      </div>
    )
  }

  return (
    <div>
      <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
        <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
        <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
        <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
        <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
        <div className="Tests">
        <TestBox status= {testOne.status} num = {1}/>
        <TestBox status= {testTwo.status} num={2}/>
        <TestBox status= {testThree.status} num={3}/>
        <TestBox status= {testFour.status} num={4}/>
        <TestBox status= {testFive.status} num={5}/>
        <TestBox status= {testSix.status} num={6}/>
      </div>
    </div>
    

  )
}