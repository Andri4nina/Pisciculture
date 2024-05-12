
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Bar, BarChart, Legend, ReferenceLine, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import Swal from 'sweetalert2';
import provendeService from '../../../Service/provendeService';


const CardStockProv = ({ key, provende }) => {
  const navigate = useNavigate();
  const handleDeleteProvende = async (id) => {
    try {
      const confirmResult = await Swal.fire({
        icon: 'warning',
        title: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer',
        cancelButtonText: 'Annuler',
        reverseButtons: true,
      });
      if (confirmResult.isConfirmed) {
        const response = await provendeService.deleteProvende(id);
        console.log(response.data);

        Swal.fire({
          icon: 'success',
          title: 'Succès!',
          text: 'Provende a été supprimé avec succès.',
        });
        navigate('/admincores/Provende');
      } else {

        Swal.fire({
          icon: 'info',
          title: 'Annulé',
          text: 'La suppression de provende a été annulée.',
        });
      }
    } catch (error) {
      console.error('Error while deleting provende:', error);
      // Afficher une alerte d'erreur en cas d'échec de la suppression
      Swal.fire({
        icon: 'error',
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de la suppression de provende. Veuillez réessayer.',
      });

    }
  };

  return (
    <>
      <Link to={`Detail/${provende.id}`}>

        <div className='group relative mt-5 cursor-pointer bg-slate-200 shadow-lg h-48 flex overflow-hidden justify-between p-5'>
          <div className='w-2/3'>
            <h2 className='text-skin-color1'>{provende.nom}</h2>
            <p className='text-slate-300 text-xs py-5 px-2 text-black-900'>

            </p>
            <div className=''>
              <p>{provende.qttDispo} Kg</p>
            </div>
          </div>

          <div className='relative w-1/3'>
            <h2 className='text-black-900'>Status</h2>
            <div className='scale-50 absolute top-5 right-5 -translate-y-1/4'>
              <ResponsiveContainer width={200} height={300}>
                <BarChart data={[{ name: 'Restant', value: provende.qttDispo }]}>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                  <ReferenceLine y={20} stroke="red" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="absolute bottom-1 right-5 opacity-0 cursor-auto group-hover:opacity-100 group-hover:cursor-pointer transition-all">
            <div className="flex gap-1 justify-between">

              <Link to={`Edit/${provende.id}`}>
                <button className="border p-2 hover:text-white border-blue-500 hover:border-blue-400 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400  text-blue-500 transition-colors">
                  <FaPen />
                </button>
              </Link>
              <button
                className="border p-2 hover:text-white  border-red-500 hover:border-red-400 hover:bg-red-400 hover:shadow-lg hover:shadow-red-400  text-red-500 transition-colors" onClick={() => handleDeleteProvende(provende.id)}>
                <FaTrash />
              </button>


            </div>
          </div>


        </div>
      </Link>

    </>
  )
}

export default CardStockProv