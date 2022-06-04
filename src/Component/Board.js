import React ,{ useState , useContext } from "react";
import classes from "./Board.module.css";
import Sequre from "./Sequre";
import appContext from "../styleContext";

const Board = (props)=>{
    
    const boardContext = useContext(appContext);
    const [XO,setXO] = useState(null);

    const clickHandler = (sequreIdx) =>{
        console.log(XO)
        const updBoard = props.board.map((value,idx)=>{
                if(idx==sequreIdx){
                return XO=='X'?'O':'X';
            }
            else{
                return value;
            }
        })
        console.log(updBoard);
        props.updHistory(prev=>[...prev,{counter:boardContext.counter,board:updBoard}]);
        props.updBoard(updBoard);
    }

    const ttboard = 
    props.board.map((val,idx)=>val = 
    <Sequre 
        key={idx}
        click={clickHandler} 
        idx={idx} 
        val={val} 
        updXO={setXO} 
        XO={XO}
        board={props.board}
        updBoard={props.updBoard}
        />);
    
    return <div className={classes.board}>{ttboard}</div>   
}

export default Board;

// // initBoard

    // console.log(new Array(BOARD).fill().map(()=> new Array(BOARD).fill(0)));
    // const initBoard = ()=>{
    //     const arr = new Array(BOARD).fill().map(()=> new Array(BOARD).fill(0));
    //     console.log(arr);
    //     let num=0;
    //     arr.forEach((val,ind,arr)=>{
    //         arr[ind].forEach((val,ind,arr)=>{
    //             arr[ind]=num;
    //             num++;
    //         })
    //     })
    //     console.log(arr);
    //     return arr;
    // }


    // const rotateBoard=(arr)=>{
    //     let t=0;
    //     for(let i=0;i<Math.floor(arr.length);i++){
    //         for(let j=i;j<arr.length-2*i-1;j++){
    //             //A<=>B
    //             t=arr[i][i+j];
    //             arr[i+j][arr.length-i-1]=arr[i][i+j];
    //             arr[i][i+j]=t;
    //             //A<=>C
    //             t=arr[arr.length-i-1][arr.length-i-j-1];
    //             arr[arr.length-i-1][arr.length-i-j-1]=arr[i][i+j];
    //             arr[i][i+j]=t;
    //             //A<=>D 30
    //             t=arr[arr.length-i-j-1][i];
    //             arr[arr.length-i-j-1][i]=arr[i][i+j];
    //             arr[i][i+j]=t;
    //         }
    //     }
    //     return arr;
    // }
