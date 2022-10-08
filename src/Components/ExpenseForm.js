import React, {useState} from "react";
const ExpenseForm=(props)=>{
    const[desc,fun_desc]=useState("");
    const[amnt,fun_amnt]=useState("");
    const[dte,fun_dte]=useState("");

    const changeDescp=(event)=>{
        fun_desc(event.target.value)
        // console.log(event.target.value)
    }
    const changeAmnt=(event)=>{
        fun_amnt(event.target.value)
    }
    const changeDate=(event)=>{
        fun_dte(event.target.value)
    }   
    const SubmitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            description:desc,
            amount:amnt,
            date:new Date(dte)
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);

        fun_desc('');
        fun_amnt('');
        fun_dte('');

    }
    return(
        <div>
            <form onSubmit={SubmitHandler}>
                {/* <div className="descript"> */}
                    <label For="DescP">Description</label>
                    <input type="text" value={desc} onChange={changeDescp} />&emsp;
                {/* </div> */}

                {/* <div className="Rupee"> */}
                    <label For="AMNT">Amount</label>
                    <input type="number" value={amnt} onChange={changeAmnt} />
                {/* </div> */}
                
                <div className="tareek">
                    <label For="DTE">Date </label>
                    <input type="date" value={dte} onChange={changeDate} />
                </div>
                             
                <button>ADD Expense</button>

            </form>
        </div>
    );
}
export default ExpenseForm;