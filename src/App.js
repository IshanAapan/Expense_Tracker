import React,{useState} from "react";
import Header from "./Components/Header";
import ExpenseForm from "./Components/ExpenseForm";
import Expenses from "./Components/Expenses";

let Dummy_Expense  = [
    {
        id: 1,
        date: new Date(2019, 5, 12),
        description: 'Samosa',
        amnt: 250
    },

    {
        id: 2,
        date: new Date(2014, 8, 6),
        description: 'Stationary',
        amnt: 150
    },

    {
        id: 3,
        date: new Date(2007, 6, 6),
        description: 'Shopping',
        amnt: 550
    },

    {
        id: 4,
        date: new Date(2003, 5, 10),
        description: 'Fee',
        amnt: 5
    },

    {
        id: 5,
        date: new Date(2003, 10, 12),
        description: 'Books ',
        amnt: 150
    }
];
function App() {
    // let date = new Date();
    // let description = "Lorem ipsum dolor sit amet.";
    // let amnt = 300;
    
        const [arr,setExpenses]=useState(Dummy_Expense);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        // const expensedata = {
        //     ...enteredExpenseData,
        //     id: Math.random().toString()
        // }
            const updatedExpense=[enteredExpenseData,...arr];
            setExpenses(updatedExpense);
    };

    return (
        <div>
           
                    <Header />
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
                    <Expenses item={arr}/>
        </div>
            
    );
}
export default App;