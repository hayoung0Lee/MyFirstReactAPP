import { useState } from "react";

function useCount(gap = 1) {
    let [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + gap);
    }

    const decrease = () => {
        setCount(count - gap)
    }

    return {
        count,
        increase,
        decrease,
        setCount
    }
}

export default useCount;