
import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import budgetService from '../../../Service/budgetService';

const MonthNames = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Auo", "Sep", "Oct", "Nov", "Dec"];

const AbbreviateMonth = (dateString) => {
    const date = new Date(dateString);
    return MonthNames[date.getMonth()] + ' ' + date.getFullYear().toString().substr(-2);
}


const PrevisionDash = () => {
    const [previsionstats, setPrevisionStats] = useState([]);

    useEffect(() => {
        budgetService.getsixMonthLastAllTypeBudgetGroup()
            .then(response => {
                const formattedData = response.data.map(item => ({
                    month: AbbreviateMonth(item[0]), // Formatage du mois
                    budget: item[1],
                    depense: item[2],
                    gain: item[3]
                }));
                setPrevisionStats(formattedData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de prévision budgétaire : ', error);
            });
    }, []);
    return (
        <div className='bg-slate-50 rounded w-2/3'>
            <div className='font-semibold px-5 py-2'>Traffic Budgetaire</div>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart
                    data={previsionstats}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="budget" stroke="#8884d8" />
                    <Line type="monotone" dataKey="depense" stroke="#d2ca9d" />
                    <Line type="monotone" dataKey="gain" stroke="#04c441" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PrevisionDash;
