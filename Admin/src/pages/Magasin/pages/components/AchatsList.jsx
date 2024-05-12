import { useState } from "react";
import { FaPen, FaPrint, FaSearch, FaTrash } from "react-icons/fa";


const AchatsList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [clients, setClients] = useState([
        {
            id: 1,
            poissons: 'carpes',
            quantite: '50',
            orderDate: '26/04/2024',
        },
        {
            id: 2,
            poissons: 'rouger',
            quantite: '50',
            orderDate: '26/04/2024',
        },

    ]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredClients = clients.filter((client) =>
        client.poissons.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="hidden w-9/12 ">
                <div className="flex justify-end">
                    <div
                        className="ml-auto mt-4 justify-center items-center  gap-4 mr-10"
                    >

                        <div
                            className="bg-slate-200 relative px-5 py-3 text-center mt-5 mb-5 border-b-2  searchstyle"
                        >
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="w-full h-full bg-transparent outline-none"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <FaSearch className="hover:animate-ping cursor-default absolute right-3 top-1/2 -translate-y-1/2 bx bx-search" />

                        </div>
                    </div>

                </div>


                <div className="list">
                    <table className="w-full">
                        <thead className="rounded-t-md">
                            <tr className="bg-blue-500 h-16  text-white text-center">
                                <th>Numero client</th>
                                <th>Poissons</th>
                                <th>Quantite (Kg)</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client, index) => (
                                <tr
                                    key={client.id}
                                    className={`text-center border-b-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${searchTerm && !client.poissons.toLowerCase().includes(searchTerm.toLowerCase()) ? 'hide' : ''} transition-all`}
                                    style={{ '--delay': `${index / 25}s` }}
                                >
                                    <td className="px-4 py-4">{client.id}</td>
                                    <td className="px-4 py-4">{client.poissons}</td>
                                    <td className="px-4 py-4">{client.quantite}</td>
                                    <td className="px-4 py-4">{client.orderDate}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex justify-center space-x-2">
                                            <div>
                                                <button className="border-slate-600 border h-10 w-10 flex justify-center items-center hover:bg-slate-500 hover:shadow-lg hover:shadow-slate-500 hover:border-slate-500 hover:text-white text-slate-600">
                                                    <FaPrint />
                                                </button>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>


        </>
    )
}

export default AchatsList