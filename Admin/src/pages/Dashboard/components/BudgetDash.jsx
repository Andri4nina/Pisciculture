
import { useEffect, useState } from 'react';
import budgetService from '../../../Service/budgetService';

const BudgetDash = () => {

  const [budgetAmount, setBudgetAmount] = useState(0);
  
  useEffect(() => {
    const fetchLastGeneralBudget = async () => {
      try {
        const lastGeneralBudget = await budgetService.getGeneralBudget();
        setBudgetAmount(lastGeneralBudget.data.montant); 
      } catch (error) {
        console.error("Erreur lors de la récupération du dernier budget général :", error);
      }
    };

    fetchLastGeneralBudget(); 
  }, []); 
  
  
  return (
    <div className='h-full hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg hover:text-white transition relative bg-slate-100 px-5 py-10 text-xl w-1/3  justify-center   items-center rounded-md'>
      <div className='text-2xl font-semibold'>
          Budget
      </div>  
      <div className='absolute right-10 bottom-1/4 text-3xl'>
      {budgetAmount} Ar
      </div> 
    </div>
    
    
  )
}

export default BudgetDash