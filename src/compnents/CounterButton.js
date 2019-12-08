import React from "react";

const CounterButtonType = {
    increase:"increase",
    decrease:"decrease"
};

const makeButton = (text, clickHandler) => <button onClick={clickHandler}>{text}</button>;

const makeCounterButton = (type, handler) => {
    if (type === CounterButtonType.increase) {
        return makeButton("+", handler);
    } else if (type === CounterButtonType.decrease) {
        return makeButton("-", handler);
    }

    throw new TypeError(`올바른 타입 프로퍼티를 꼭 넘겨주세요. 현재값 : ${type || "없음"}`);
}

function CounterButton(props) {
    const { type, handler } = props;
    
    return makeCounterButton(type, handler);
}

export default CounterButton;
export { CounterButtonType };