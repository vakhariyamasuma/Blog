// functional Component
import { createUseStyles } from "react-jss";
import { useState } from "react";
import { Link } from "react-router-dom";
const styles = createUseStyles({
  btn: {
    height: "50px",
    width: "200px",
    background: "#61dafb",
    color: "white",
    border: "1px solid #ccc",
    fontSize: "28px",
    fontWeight: "bold",
  },
});

function Counter(props) {
  const css = styles();
  // let person_name = "abjhjw"
  // let number = 0
  const [number, setNumber] = useState(0);
  // const handleNameChange = (name)=>{
  //     setPersonName(name)
  // }

  const handleIncreament = () => {
    // number = number+1
    setNumber(number + 1);
    console.log(number);
  };

  const handleDecreament = () => {
    // number = number-1
    setNumber(number - 1);
    console.log(number);
  };

  return (
    <>
      <Link to="/home">Home</Link>&nbsp;&nbsp;
      <Link to="/about">About</Link>
      <h1 className={props.styleCss.heading}>{number}</h1>
      <button className={css.btn} onClick={() => handleIncreament()}>
        +
      </button>
      <br></br>
      <button className={css.btn} onClick={() => handleDecreament()}>
        -
      </button>
    </>
  );
}
export default Counter;

//Class Component
// import {createUseStyles} from 'react-jss'
// import React, {Component} from "react"

//  class Counter extends React.Component {
//     constructor(props){
//         super(props);

//     }
//     render() {
//       return <h1 className={this.props.styleCss.heading}>Hello, {this.props.person}</h1>;
//     }
//   }

//   export default Counter
