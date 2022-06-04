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
        const disabled = historyContext.winner!=null?true:false;
        const styled = historyContext.winner!=null ? {border:"none"}:null;
        return <button key={ind} c
                       style={styled}
                       className={classes.historyBtn} 
                       onClick={()=>clickHandler(ind)}
                       disabled={disabled}>Step {val.counter}</button>
        
        // <li key={ind} onClick={()=>clickHandler(ind)}>Step {val.counter}</li>
    });

    return <div className={classes.history}>
        {listStep}
        {/* <ul>
            {listStep} 
        </ul> */}
    </div>
}

export default  History;