import Data from "./Data";

function Expenses(props) {

    return (
        
        <div>

            {
                props.item.map(
                    expense=>(
                        <Data
                         dte={expense.date}
                        descp={expense.description}
                        amont={expense.amnt}/>
                    )
                )
            }

            

            

            {/* <Date dte={props.item[1].date}
                descp={props.item[1].description}
                amont={props.item[1].amnt}/>

            

            <Date dte={props.item[2].date}
                descp={props.item[2].description}
                amont={props.item[2].amnt}/>

            

            <Date dte={props.item[3].date}
                descp={props.item[3].description}
                amont={props.item[3].amnt}/>

            

            <Date dte={props.item[4].date}
                descp={props.item[4].description}
                amont={props.item[4].amnt}/> */}

            
        </div>

    );
}

export default Expenses;