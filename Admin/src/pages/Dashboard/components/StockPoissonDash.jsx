
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockPoissonDash = () => {
    const stockPoisson = [
        { type: 'Poisson A', stock: 100 },
        { type: 'Poisson B', stock: 200 },
        { type: 'Poisson C', stock: 300 },
        { type: 'Poisson D', stock: 400 },
        { type: 'Poisson E', stock: 500 },
    ];

    return (
        <div>
         <div className='font-semibold px-5 py-2'>Stock de poissons</div>
        
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={stockPoisson}
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
                    <Bar dataKey="stock" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockPoissonDash;
