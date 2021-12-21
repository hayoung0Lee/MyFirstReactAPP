import React from "react";
import CounterView from "./CounterView";
import CounterButton, {CounterButtonType} from "./CounterButton";
import useCount from "../hooks/useCount";

const outlineStyle = {
    width:"20rem",
    height:"20rem",
    borderRadius: "10%",
    display: "flex",
    margin:"1rem"
}

const flexStyle = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const fontStyle = {
    color: "white",
    fontSize: "2rem"
};

const style = {
    ...outlineStyle,
    ...flexStyle,
    ...fontStyle
};

function Gap({gap}) {
    return (
        <p style={
            {
                fontSize: "1rem"
            }
        }>Gap : {gap || 1}</p>
    );
}

function Counter({gap, bgColor="dodgerblue"}) {
    const {
        count,
        increase,
        decrease
    } = useCount(gap);

    return (
        <div className="counter" style={
            {
                ...style,
                backgroundColor: bgColor
            }
        }>

            <CounterView count={count}/>
            <Gap gap={gap} />

            <div className="counter-buttons">

                <CounterButton 
                    count={count} 
                    type={CounterButtonType.increase}
                    handler={increase} 
                />
                <CounterButton
                    count={count}
                    type={CounterButtonType.decrease} 
                    handler={decrease} 
                />

            </div>
        </div>
    );
}

export default Counter;