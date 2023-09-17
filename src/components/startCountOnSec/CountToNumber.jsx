import React, { useEffect, useState } from 'react'

export default function CountToNumber({ targetNumber }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < targetNumber) {
                setCount((prevCount) => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 130);

        return () => {
            clearInterval(interval);
        };
    }, [count, targetNumber]);
    return (
        <div>
            {count}
        </div>
    )
}
