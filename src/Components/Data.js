import "./Data.css"
import React from "react";

function Data(props) {
const month=props.dte.toLocaleString('en-US',{month:'long'});
const year=props.dte.getFullYear();
const day=props.dte.toLocaleString('en-US',{day:'2-digit'});

// const[new_descp,fdescp]=useState(props.descp)

// const[echange,edescp]=useState("")

// const clicker=()=>{
    // fdescp(echange);
// }

// const changehandler=(event)=>{
    // edescp(event.target.value);
// }

    return (
        <div className="tbl">
            <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount in($)</th>
                    
                    {/* <th>TextBox</th> */}
                    {/* <th>Button</th> */}
                </tr>
                <tr>
                    <td><div>
                        <div>{month}</div>
                        <div>{year}</div>
                        <div>{day}</div>
                        </div></td>
                    {/* <td>{props.descp}</td> */}
                    <td>{props.descp}</td>
                    <td>{props.amont}</td>
                   {/* <td> <input type="text" value={echange} onChange={changehandler}/></td> */}
                   {/* <td> <button onClick={clicker} >Change Title</button></td> */}
                </tr>
            </table>
            {/* <h3 id="first">{props.dte.toISOString()}</h3>
            <h3 id="sec">{props.descp}</h3>
            <h3 id="th">{props.amont}</h3> */}
            <hr />
        </div>
    )
}
export default Data;