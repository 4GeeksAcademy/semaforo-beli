import { useState } from "react";



const trafficLight = () =>{
    const =[color, setColor]=useState("green");
    return (
        <div className="d-flex flex-column justify-center align-items-center">
            <div className="bg-dark" style={{ width: "25px", height: "300px" }}> hello </div>
            <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center" style={{ width: "300px", height: "600px" }}>
                <div onClick={()=>{
                    setColor("red")
                }}
                 className={"bg-danger onLightRed" + (color=="red"? "onLightRed" : "")}  style={{ width: "25%", height: "25%" }}>red</div>
                <div onClick={()=>{
                    setColor("yellow")
                }}
                 className={"bg-warning" + (color=="yellow"? "onLightYellow" : "")} style={{ width: "25%", height: "25%" }}>yellow</div>
                <div onClick={()=>{
                    setColor("green")
                }}
                 className={"bg-success " + (color=="Green"? "onLightGeen" : "")} style={{ width: "25%", height: "25%" }}>green</div>
            </div>
        </div>
    );
}

export default trafficLight;

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
