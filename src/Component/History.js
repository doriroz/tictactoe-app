import React ,{useContext} from "react";
import classes from "./History.module.css";
import appContext from "../styleContext";

const History = (props) => {

    const historyContext = useContext(appContext);

    const clickHandler = (idxHistory) =>{
        props.updBoard(historyContext.history[idxHistory-1].board);
        historyContext.setCounter(idxHistory); 
        historyContext.setHistory(historyContext.history.slice(0,idxHistory));
    }

    const listStep = historyContext.history?.map((val,ind)=>{
        console.log(historyContext.history);
        return <li key={ind} onClick={()=>clickHandler(ind)}>Step {val.counter}</li>
    });

    return <div className={classes.history}>
        <ul>
            {listStep} 
        </ul>
    </div>
}

export default  History;