import { useState } from 'react'
import { FaEnvelope, FaPen, FaPrint, FaSearch, FaSms, FaTrash } from 'react-icons/fa';

const ListLivraisons = () => {
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
                <th>Rappel</th>
                <th>Impression</th>
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
                    <div className="flex justify-end items-center gap-2">
                      <div className="relative group">

                        <button
                          className="flex justify-center items-center w-10 h-10 border text-purple-500 border-purple-500  hover:bg-purple-500 hover:shadow-purple-700 hover:shadow-lg hover:text-white  font-bold ">
                          <i className="bx bx-message-square-dots"></i>
                          <FaSms />
                        </button>

                        <p
                          className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-purple-500  bg-purple-500 shadow-purple-700 hover:shadow-lg text-white">
                          par SMS</p>
                      </div>
                      <div className="relative group">

                        <button

                          className="flex justify-center items-center w-10 h-10 border text-yellow-500 border-yellow-500  hover:bg-yellow-500 hover:shadow-yellow-700 hover:shadow-lg hover:text-white  font-bold ">
                          <FaEnvelope />
                        </button>

                        <p
                          className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-yellow-500  bg-yellow-500 shadow-yellow-700 hover:shadow-lg text-white">
                          par Email</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">

                    <div className="relative group">

                      <button

                        className="flex justify-center items-center w-10 h-10 border text-slate-500 border-slate-500  hover:bg-slate-500 hover:shadow-slate-700 hover:shadow-lg hover:text-white  font-bold ">
                        <FaPrint />
                      </button>

                      <p
                        className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-slate-500  bg-slate-500 shadow-slate-700 hover:shadow-lg text-white">
                        Imprimer la facture</p>
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

export default ListLivraisons