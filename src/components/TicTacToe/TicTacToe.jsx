import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import nought_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let boxRef1 = useRef(null);
    let boxRef2 = useRef(null);
    let boxRef3 = useRef(null);
    let boxRef4 = useRef(null);
    let boxRef5 = useRef(null);
    let boxRef6 = useRef(null);
    let boxRef7 = useRef(null);
    let boxRef8 = useRef(null);
    let boxRef9 = useRef(null);

    let boxRef_array = [boxRef1, boxRef2, boxRef3, boxRef4, boxRef5, boxRef6, boxRef7, boxRef8, boxRef9]

    const toggle = (e, num) => {
        // console.log("toggle called", data);
        if (lock) {
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num]='x';
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${nought_icon}'>`;
            data[num]='o';
            setCount(++count);
        }
        // console.log("end of toggle", data);
        checkWin()
    }

    const checkWin = () => {
        // console.log("checkWin called", data);
        if(data[0]===data[1] && data[1]===data[2] && data[2] !== ""){
            // console.log("won 1");
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5] !== ""){
            // console.log("won 2");
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8] !== ""){
            // console.log("won 3");
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6] !== ""){
            // console.log("won 4");
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7] !== ""){
            // console.log("won 5");
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8] !== ""){
            // console.log("won 6");
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8] !== ""){
            // console.log("won 7");
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6] !== ""){
            // console.log("won 8");
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        // console.log("in won", winner);
        if(winner==='x'){
            // titleRef.current.innerHTML = 'Congratulations';
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins`;
        }
        else {
            // titleRef.current.innerHTML = 'Congratulations';
            titleRef.current.innerHTML = `Congratulations: <img src=${nought_icon}> Wins`;
        }
    }
    
    const resetGame = () => {
        // console.log("reset game");
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
        boxRef_array.map((e) => {
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'>
            <div className="row1">
                <div className="boxes" ref={boxRef1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={boxRef2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={boxRef3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={boxRef4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={boxRef5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={boxRef6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={boxRef7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={boxRef8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={boxRef9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {resetGame()}}>Reset</button>
    </div>
  )
}

export default TicTacToe