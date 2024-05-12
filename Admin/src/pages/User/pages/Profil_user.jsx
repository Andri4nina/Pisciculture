import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import userService from "../../../Service/userService";


const Profil_user = () => {


  const { userId } = useParams();
  const [selectedRole, setSelectedRole] = useState('');
  const [userData, setUserData] = useState({
      nomUser: '',
      emailUser: '',
      telUser: '',
      roleUser: '',
      mdpUser: ''
  });
  
  useEffect(() => {

      userService.getUserById(userId)
          .then(response => {
              setUserData(response.data);
              setSelectedRole(response.data.roleUser);
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
          });
  }, [userId]);
  
  
  return (
   <>
           <section className=" px-5 py-5">
                <div className="grid grid-cols-2 items-center justify-center ">
                    <div className="bg-slate-50 shadow-2xl rounded-md flex justify-center mt-16">
                        <form className="w-full px-5 py-10">
                            <div className=" grid grid-cols-1 gap-2">
                                <div className="">
                                    <div className="mb-5 flex items-center gap-10">
                                        <Link to="/admincores/Utilisateur">
                                            <FaChevronLeft />
                                        </Link>  <h2 className="  text-xl font-semibold">Profil de l' Utilisateur</h2>
                                    </div>
                                    <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Nom de l'utilisateur</div>
                                        <div className="w-2/3">
                                            <input disabled type="text" className="w-full text-left bg-transparent pr-3 outline-none" name="nomUser" value={userData.nomUser} />
                                        </div>
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Email</div>
                                        <div className="w-2/3">
                                            <input disabled type="email" className="w-full text-left bg-transparent pr-3 outline-none" name="emailUser" value={userData.emailUser} />
                                        </div>
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Telephone</div>
                                        <div className="w-2/3">
                                            <input disabled type="tel" className="w-full text-left bg-transparent pr-3 outline-none" name="telUser" value={userData.telUser} />
                                        </div>
                                    </div>
                                    
                                    Role de l'utilisateur
                                    <div className="my-5 grid grid-cols-3 gap-2">
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Administrateur' ? 'bg-blue-500 text-white' : ' bg-slate-100 '
                                                }`}
                                            
                                        >
                                            Administrateur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Co Administrateur' ? 'bg-blue-500 text-white' : 'bg-slate-100  '
                                                }`}
                                           
                                        >
                                            Co Administrateur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Vendeur' ? 'bg-blue-500 text-white' : 'bg-slate-100   '
                                                }`}
                                         
                                        >
                                            Vendeur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Gestionnaire de Stock Provende' ? 'bg-blue-500 text-white' : 'bg-slate-100  '
                                                }`}
                           
                                        >
                                            Gestionnaire de Stock <br />
                                            Provende
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Gestionnaire de Stock Poisson' ? 'bg-blue-500 text-white' : 'bg-slate-100  '
                                                }`}
          
                                        >
                                            Gestionnaire de Stock <br />
                                            Poisson
                                        </div>
                         
                                    </div>

                                   
                                </div>


                            </div>


                        </form>
                    </div>


                    <div className="z-20 h-full w-full ">


                    </div>
                </div>
            </section>
   
   </>
  )
}

export default Profil_user