import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
