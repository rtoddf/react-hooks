import React, { useState} from 'react';

function FunctionalCounter() {
    // array destructuring
    // [variable, function capable of changing said variable] = set initial state of the variable
    const [count, incrementCount] = useState(0)

    return (
        <div>
            <button onClick={() => incrementCount(count + 1)}>Count: { count }</button>
        </div>
    )
}

export default FunctionalCounter