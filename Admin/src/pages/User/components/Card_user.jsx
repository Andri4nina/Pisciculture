
import { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../../Service/userService';
import Swal from 'sweetalert2';


function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function isColorLight(color) {
  const hex = color.substring(1); // retire le #
  const rgb = parseInt(hex, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150;
}

const Card_user = ({ key, user, setUsers }) => {
  const navigate = useNavigate();
  const handleDeleteUser = async (id) => {
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
        const response = await userService.deleteUser(id);
        console.log(response.data);

        Swal.fire({
          icon: 'success',
          title: 'Succès!',
          text: 'L\'utilisateur a été supprimé avec succès.',
        });
        navigate('/admincores/Utilisateur');
      } else {

        Swal.fire({
          icon: 'info',
          title: 'Annulé',
          text: 'La suppression de l\'utilisateur a été annulée.',
        });
      }
    } catch (error) {
      console.error('Error while deleting user:', error);
      // Afficher une alerte d'erreur en cas d'échec de la suppression
      Swal.fire({
        icon: 'error',
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de la suppression de l\'utilisateur. Veuillez réessayer.',
      });

    }
  };

  const backgroundColor = generateRandomColor();
  const textColor = isColorLight(backgroundColor) ? 'text-black' : 'text-white';

 

  return (
    <div className="overflow-hidden group relative flex justify-center w-full h-40 shadow-lg mt-5 hover:shadow-none transition peer bg-slate-200">
      <div
        className={`relative overflow-hidden w-4/12 flex justify-center items-center font-semibold text-7xl uppercase ${textColor}`}
        style={{ backgroundColor }}
      >
        {user.nomUser.charAt(0)}
      </div>

      <div className="w-8/12 py-8 px-6">
        <div className='px-2'>
          <h2 className="font-bold cursor-pointer ">
            <Link to={`Profil/${user.id}`}>{user.nomUser}</Link>
          </h2>
          <p className="font-semibold italic text-black-900">{user.roleUser}</p>
          <div className=' text-blue-400 text-base italic text-wrap'>{user.emailUser}</div>
        </div>
      </div>
      <div className="absolute bottom-1 right-5 opacity-0 cursor-auto group-hover:opacity-100 group-hover:cursor-pointer transition-all">
        <div className="flex gap-1 justify-between">

          <Link to={`Edit/${user.id}`}>
            <button className="border p-2 hover:text-white border-blue-500 hover:border-blue-400 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400  text-blue-500 transition-colors">
              <FaPen />
            </button>
          </Link>
          <button
            className="border p-2 hover:text-white  border-red-500 hover:border-red-400 hover:bg-red-400 hover:shadow-lg hover:shadow-red-400  text-red-500 transition-colors" onClick={() => handleDeleteUser(user.id)}>
            <FaTrash />
          </button>


        </div>
      </div>
    </div>
  )
}

export default Card_user
