import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpenses/ExpenseForm";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "i1",
      title: "Iced Coffee",
      amount: 3.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: "i2",
      title: "Boba Milk Tea",
      amount: 8.01,
      date: new Date(2021, 3, 28),
    },
    {
      id: "i3",
      title: "New Sweater",
      amount: 29.99,
      date: new Date(2021, 4, 28),
    },
    { id: "i4", title: "Milk", amount: 3.49, date: new Date(2021, 5, 28) },
  ];
  return (
    <div className="App">
      <h2>Let's track the expense!</h2>
      <NewExpenses/>
      {/* pass data accross components */}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
