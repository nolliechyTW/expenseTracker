import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "i1",
      title: "Iced Coffee",
      amount: 3.99,
      date: new Date(2023, 2, 28),
    },
    {
      id: "i2",
      title: "Boba Milk Tea",
      amount: 8.01,
      date: new Date(2023, 3, 28),
    },
    {
      id: "i3",
      title: "New Sweater",
      amount: 29.99,
      date: new Date(2022, 12, 28),
    },
    { id: "i4", title: "Milk", amount: 3.49, date: new Date(2022, 11, 28) },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
