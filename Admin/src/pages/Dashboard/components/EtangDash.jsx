
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EtangDash = () => {
 
        const estimation = [
            { type: 'Quantite', quantite: 100 },
        ];
    

    return (
        <>
            <div className="mt-5 transition relative bg-slate-100 px-5 py-10 text-xl w-2/3 justify-center h-auto items-center rounded-md">
                <div className="font-semibold px-5 py-2">Nos Etangs</div>
                <hr className="mb-5" />
                <div className='w-11/12 h-[85%] mx-auto overflow-y-hidden'>
                    <ul className='flex  w-fit pr-5 h-auto   gap-2 overflow-y-scroll '>
                        <li className='w-[600px] '>
                            <div className='text-xl font-medium'>
                                Etang 1
                            </div>
                            <div className='flex'>
                                <div className='w-2/3'>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Temperature de l'eau
                                        </div>
                                        <div>
                                            7 C
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Capacite
                                        </div>
                                        <div>
                                            2500 L
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de renouvelement
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de prevu pour peche
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Type de poissons
                                        </div>
                                        <div>
                                            Capres
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Quantite estimer
                                        </div>
                                        <div>
                                            2000
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/3 h-auto'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={estimation}
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
                                            <Bar dataKey="quantite" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>
                        </li>
                        <li className='w-[600px]'>
                            <div className='text-xl font-medium'>
                                Etang 1
                            </div>
                            <div className='flex'>
                                <div className='w-2/3'>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Temperature de l'eau
                                        </div>
                                        <div>
                                            7 C
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Capacite
                                        </div>
                                        <div>
                                            2500 L
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de renouvelement
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de prevu pour peche
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Type de poissons
                                        </div>
                                        <div>
                                            Capres
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Quantite estimer
                                        </div>
                                        <div>
                                            2000
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/3 h-auto'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={estimation}
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
                                            <Bar dataKey="quantite" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>
                        </li>
                        <li className='w-[600px]'>
                            <div className='text-xl font-medium'>
                                Etang 1
                            </div>
                            <div className='flex'>
                                <div className='w-2/3'>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Temperature de l'eau
                                        </div>
                                        <div>
                                            7 C
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Capacite
                                        </div>
                                        <div>
                                            2500 L
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de renouvelement
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Date de prevu pour peche
                                        </div>
                                        <div>
                                            12/12/12
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Type de poissons
                                        </div>
                                        <div>
                                            Capres
                                        </div>
                                    </div>
                                    <div className="flex border-b-2  py-2 justify-between gap-5">
                                        <div>
                                            Quantite estimer
                                        </div>
                                        <div>
                                            2000
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/3 h-auto'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={estimation}
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
                                            <Bar dataKey="quantite" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>
                        </li>      
                    </ul>
                </div>
            </div>

        </>

    );
};

export default EtangDash;
