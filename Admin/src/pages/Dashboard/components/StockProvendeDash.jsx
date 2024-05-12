import  { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import provendeService from '../../../Service/provendeService';

const StockProvendeDash = () => {
    const [stockProvende, setStockProvende] = useState([]);

    useEffect(() => {
        provendeService.getAllProvendes()
            .then(response => {
                // Récupérer les données de provende et mapper le nom et la quantité
                const provendesData = response.data.map(provende => ({
                    type: provende.nom,
                    stock: provende.qttDispo
                }));
                setStockProvende(provendesData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du stock de provende:', error);
            });
    }, []);
    return (
        <div className='bg-slate-200 w-full'>
            <div className='font-semibold px-5 py-2'>Stock de Provende</div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={stockProvende}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stock" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockProvendeDash;
