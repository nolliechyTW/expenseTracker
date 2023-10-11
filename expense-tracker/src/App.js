import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
