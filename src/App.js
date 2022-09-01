import './App.css';
import CountExpenses from './components/CountExpenses';
import ExpensesMonth from './components/ExpensesMonth';
import AddExpenses from './components/AddExpenses';
import ContextProvider from './hooks/useList';

function App() {

  return (
    <div className="App">
      <div className='App__gastos'>
      <h1>GASTOS</h1>
      <ContextProvider>
        <CountExpenses/>
        <ExpensesMonth/>
        <AddExpenses/>
      </ContextProvider>
      </div>
    </div>
  );
}

export default App;
