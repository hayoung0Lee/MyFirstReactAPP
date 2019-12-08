import React from "react";

function CounterView(props) {
    const { count } = props;
    return (
        <h1>{count}</h1>
    );
}

export default CounterView;