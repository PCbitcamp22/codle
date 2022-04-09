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
    var color = "whitesmoke";
    if (props.status === "blank") {
      color = "whitesmoke";
    } else if (props.status === "error") {
      color = "crimson";
    } else if (props.status === "wrong") {
      color = "yellow";
    } else if (props.status === "success"){
      color = "green";
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
        {props.num}
      </div>
    )
  }

  return (
    <div className="Tests">
      <TestBox status= {testOne.status} num = {1}/>
      <TestBox status= {testTwo.status} num={2}/>
      <TestBox status= {testThree.status} num={3}/>
      <TestBox status= {testFour.status} num={4}/>
      <TestBox status= {testFive.status} num={5}/>
      <TestBox status= {testSix.status} num={6}/>
    </div>
  )
}