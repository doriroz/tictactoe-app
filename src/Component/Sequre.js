import React ,{ useState , useContext , useEffect } from "react";
import classes from "./Sequre.module.css";
import appContext from "../styleContext";

const Sequre = (props) => {
    const appStyle = useContext(appContext);
    const [stylesqr,setStylesqr] = useState();
    const [winning,setWinning] = useState(false);
    
    const winArr =
    [[0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [2,5,8],
     [1,4,7],
     [0,4,8],
     [2,4,6]];

    const checkWinner = () =>{
        console.log(props.board);
        for(let i = 0;i < winArr.length ;i++){
            let counter=0;
            for(let j = 0;j < winArr[i].length-1;j++){
                if(props.board[winArr[i][j]]!=null && props.board[winArr[i][j]]==props.board[winArr[i][j+1]]) counter++;
            }
            if(counter==winArr[i].length-1){
                // console.log(winArr[i]);
                return winArr[i];
            }
        }
        return winArr[0]=0;
    }

    const drawWinnerBoard = (winArr) => {
        const [x,y,z] = winArr;
        console.log("winboard : "+x,y,z);
        const winBoard = props.board.map((val,ind)=>{
            if(ind===x || ind===y || ind===z){
                return val;
            }
            else{
                return "";
            }
        })
        console.log("winning dz:   "+winning);
        if(!winning) props.updBoard(winBoard);
        // props.updBoard(winBoard);
        setWinning(true);
    }
    
    useEffect(()=>{     
        const winner = checkWinner();
        console.log(winner);
        if(winner!=0){
            appStyle.setStylewin({
                opacity:1,
                fontSize:"40px",
            });
            
            if(!winning) {
                appStyle.setWinner(props.board[winner[0]]);
                drawWinnerBoard(winner);
            }
        }
        console.log(appStyle.counter);
        appStyle.setCounter(appStyle.counter+1);

    },[props.board])


    const toggleXO = () => {
        
        setStylesqr(props.XO == 'X'?{color:"red"}:{color:"blue"});
        //switch X O between players
        props.updXO(props.XO=='X'?'O':'X');
        //click => update board
        props.click(props.idx);
    }

    //disabled attribute can go with button input element - not with div
    //example disabled ternary statement - disabled={winStyle.winner==null?true:false}
    return <div className={classes.sequre} style={stylesqr} onClick={props.val===null?toggleXO:null}>
            {props.val}
            </div>
}

export default Sequre;