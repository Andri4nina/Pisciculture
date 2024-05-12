import { FaPen, FaSearch, FaTrash } from "react-icons/fa"
import "./table.css"
import { useState } from "react";


const ListCommandes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [clients, setClients] = useState([
        {
            id: 1,
            fullName: 'RASOAMANANA Razafimanantsoa Andrianina',
            email: 'raso4m4ndrianina@gmail.com',
            phone: '0341320874',
            order: 'Commande numero 1',
            orderDate: '26/04/2024',
            status: 'En attente'
        },
        {
            id: 2,
            fullName: 'RANDRIA Andosoa',
            email: 'Ando@gmail.com',
            phone: '0341320874',
            order: 'Commande numero 1',
            orderDate: '26/04/2024',
            status: 'En attente'
        },

    ]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredClients = clients.filter((client) =>
        client.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="hidden">
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
                                <th>Nom complet du clients</th>
                                <th>Adresse Email</th>
                                <th>Telephone</th>
                                <th>Commande</th>
                                <th>Date de commande</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client, index) => (
                                <tr
                                    key={client.id}
                                    className={`text-center border-b-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${searchTerm && !client.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ? 'hide' : ''} transition-all`}
                                    style={{ '--delay': `${index / 25}s` }}
                                >
                                    <td className="px-4 py-4">{client.fullName}</td>
                                    <td className="px-4 py-4">{client.email}</td>
                                    <td className="px-4 py-4">{client.phone}</td>
                                    <td className="px-4 py-4 cursor-pointer"> {client.order}</td>
                                    <td className="px-4 py-4">{client.orderDate}</td>
                                    <td className="px-4 py-4">
                                        <strong>{client.status}</strong>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex justify-center space-x-2">
                                            <div>
                                                <button className="border-blue-600 border h-10 w-10 flex justify-center items-center hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500 hover:border-blue-500 hover:text-white text-blue-600">
                                                    <FaPen />
                                                </button>
                                            </div>
                                            <div>
                                                <button className="border-red-600 border h-10 w-10 flex justify-center items-center hover:bg-red-500 hover:shadow-lg hover:shadow-red-500 hover:border-red-500 hover:text-white text-red-600" type="button">
                                                    <FaTrash />
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

export default ListCommandes