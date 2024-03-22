import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () =>{
    return(
        <form>
        <div className='expense-FormContainer'>
               <div className='expense-Form'>
                <div className='individual-Expense'>
                   <label>Expense Title</label>
                   <input type='text' />
                   </div>
                   <div className='individual-Expense'>
                   <label>Date</label>
                   <input type='date' />
                   </div>
                   <div className='individual-Expense'>
                   <label>Expense Description</label>
                   <input type='text' />
                   </div>
                   <div className='individual-Expense'>
                   <label>Expense Amount</label>
                   <input type='number' />
                   </div>
                   <div className='expense-FormButton'>
        <button type='submit'>Submit Details</button>
        </div>
               </div>
        </div>
        </form>
        
    );
}

export default ExpenseForm;