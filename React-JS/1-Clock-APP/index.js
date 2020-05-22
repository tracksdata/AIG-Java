

let clockIndia = document.querySelector("#indianClock");
let clockDubai = document.querySelector("#dubaiClock");
let clockUsa = document.querySelector("#americanClock");

let jsClock = (props) => {
    return (
        `
       <div class="card">
            <p class="card-header"> ${props.timeZone}</p>
            <p class="card-body">
                <span class="badge badge-danger">
                ${new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}
                </span>
            </p>

        </div>
        `
    )
}


setInterval(() => {
    clockIndia.innerHTML = jsClock({timeZone:'Asia/Kolkata'});
    clockDubai.innerHTML = jsClock({timeZone:'Asia/Dubai'});
    clockUsa.innerHTML = jsClock({timeZone:'America/New_york'});
    
}, 1000)


let clockIndiaV2 = document.querySelector("#indianClockV2");
let clockDubaiV2 = document.querySelector("#dubaiClockV2");
let clockUsaV2 = document.querySelector("#americanClockV2");

let reactClock = (props) => {
    return (
        
       <div className="card">
            <p className="card-header"> {props.timeZone}</p>
            <p className="card-body">
                <span className="badge badge-success">
                {new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}
                </span>
            </p>

        </div>
        
    )
}

setInterval(()=>{
    ReactDOM.render(reactClock({timeZone:'Asia/Kolkata'}),clockIndiaV2);
    ReactDOM.render(reactClock({timeZone:'Asia/Dubai'}),clockDubaiV2);
    ReactDOM.render(reactClock({timeZone:'America/New_york'}),clockUsaV2);
},1000)

