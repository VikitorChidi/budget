import { AppProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/Add ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

const App = () => {
  return ( 
    <AppProvider>
        <div className="container">
         <h2 className="mt-3">Track Your Budget</h2>

         <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>

         <h4 className="mt-3"> Expenses</h4>
      <div className="row mt-3">
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
        
         <h4 className="mt-3"> Add Expense</h4>
      <div className="row mt-3">
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
      </div>
        </div>
    </AppProvider>
   );
}
 
export default App;
