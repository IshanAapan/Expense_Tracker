import Header from "./Components/Header";
import ExpenseForm from "./Components/ExpenseForm";
import Data from "./Components/Data";
function App() {
    // let date = new Date();
    // let description = "Lorem ipsum dolor sit amet.";
    // let amnt = 300;
    let arr = [
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
        },
    ]
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{

        const expensedata={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expensedata)
    }

    return (
        <div>
            props.arr.map(
                expense ={
                     <Data dte={expense.date}
                     descp={expense.description}
                     amont={expense.amnt}>
                }
            )
            <Header />
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

            <Data dte={arr[0].date}
                descp={arr[0].description}
                amont={arr[0].amnt}>

            </Data>

            <Data dte={arr[1].date}
                descp={arr[1].description}
                amont={arr[1].amnt}>

            </Data>

            <Data dte={arr[2].date}
                descp={arr[2].description}
                amont={arr[2].amnt}>

            </Data>

            <Data dte={arr[3].date}
                descp={arr[3].description}
                amont={arr[3].amnt}>

            </Data>

            <Data dte={arr[4].date}
                descp={arr[4].description}
                amont={arr[4].amnt}>

            </Data>
    );
}
export default App;