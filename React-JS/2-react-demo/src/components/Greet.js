import React, { useState } from 'react';

const Greet = (props) => {
    let [count, setCount] = useState(0);
    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }
    
    return (
        <div className="alert alert-info text-center mt-3">
            <h1>Greet Component</h1>
            <h2> {props.message} </h2>
            <hr />
            <h1>{count}</h1> <br />
            <button onClick={e => { incrementCount() }} className="btn btn-primary" style={{ margin: "5px" }}> +</button>
            <button onClick={e => { decrementCount() }} className="btn btn-primary"> -</button>

        </div>
    )
}

export default Greet;