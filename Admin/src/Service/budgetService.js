import axios from "axios";

const API = "http://localhost:8050";

const budgetService = {
  
    saveGeneralBudget:  (budget) => {
        return axios.post(`${API}/budget/general`, budget);
    },
    saveDepenseBudget:  (budget) => {
        return axios.post(`${API}/budget/depense`, budget);
    },
    saveGainBudget:  (budget) => {
        return axios.post(`${API}/budget/gain`, budget);
    },
    
    getGeneralBudget:() => {
        return axios.get(`${API}/budget/general/last`);
    },
    
    updateLastGeneralBudget: (updatedBudget, valueToAdd) => {
        return axios.post(`${API}/budget/general/last/update?valueToAdd=${valueToAdd}`, updatedBudget);
    },
        
    depenseLastGeneralBudget: (updatedBudget, valueToAdd) => {
        return axios.post(`${API}/budget/general/last/depense?valueToAdd=${valueToAdd}`, updatedBudget);
    },
    
    addLastGeneralBudget: (updatedBudget, valueToAdd) => {
        return axios.post(`${API}/budget/general/last/add?valueToAdd=${valueToAdd}`, updatedBudget);
    },    
    
    getsixMonthLastAllTypeBudgetGroup:() => {
        return axios.get(`${API}/budget/six-month-last-all-type`);
    },
};

export default budgetService;
