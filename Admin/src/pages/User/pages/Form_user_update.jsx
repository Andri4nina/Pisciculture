import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2';
import userService from "../../../Service/userService";

const Form_user_update = () => {
    const navigate = useNavigate();
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


    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setUserData({ ...userData, roleUser: role });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Vérifier si le nom d'utilisateur, le mot de passe et le rôle sont vides
        if (!userData.nomUser || !userData.mdpUser || !userData.roleUser) {
            Swal.fire({
                icon: 'warning',
                title: 'Attention!',
                text: 'Veuillez remplir tous les champs obligatoires (Nom d\'utilisateur, Mot de passe, Rôle).'
            });
            return;
        }

        try {
            await userService.editUser(userData, userId);
            Swal.fire({
                icon: 'success',
                title: 'Succès!',
                text: 'L\'utilisateur a été modifier avec succès.'
            });
            navigate('/admincores/Utilisateur');

        } catch (error) {
            console.error('Error while saving user:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur!',
                text: 'Une erreur s\'est produite lors de l\'enregistrement de l\'utilisateur. Veuillez réessayer.'
            });
        }
    };

    return (
        <>
            <section className=" px-5 py-5">
                <div className="grid grid-cols-2 items-center justify-center ">
                    <div className="bg-slate-50 shadow-2xl rounded-md flex justify-center mt-16">
                        <form onSubmit={handleSubmit} className="w-full px-5 py-10">
                            <div className=" grid grid-cols-1 gap-2">
                                <div className="">
                                    <div className="mb-5 flex items-center gap-10">
                                        <Link to="/admincores/Utilisateur">
                                            <FaChevronLeft />
                                        </Link>  <h2 className="  text-xl font-semibold">Modifier un Utilisateurs</h2>
                                    </div>
                                    <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Nom de l'utilisateur</div>
                                        <div className="w-2/3">
                                            <input type="text" className="w-full text-left bg-transparent pr-3 outline-none" name="nomUser" value={userData.nomUser} onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Email</div>
                                        <div className="w-2/3">
                                            <input type="email" className="w-full text-left bg-transparent pr-3 outline-none" name="emailUser" value={userData.emailUser} onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Telephone</div>
                                        <div className="w-2/3">
                                            <input type="tel" className="w-full text-left bg-transparent pr-3 outline-none" name="telUser" value={userData.telUser} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    
                                    Role de l'utilisateur
                                    <div className="my-5 grid grid-cols-3 gap-2">
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Administrateur' ? 'bg-blue-500 text-white' : 'hover:bg-blue-400 bg-slate-100 hover:text-white'
                                                }`}
                                            onClick={() => handleRoleSelect('Administrateur')}
                                        >
                                            Administrateur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Co Administrateur' ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-400 hover:text-white'
                                                }`}
                                            onClick={() => handleRoleSelect('Co Administrateur')}
                                        >
                                            Co Administrateur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Vendeur' ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-400  hover:text-white'
                                                }`}
                                            onClick={() => handleRoleSelect('Vendeur')}
                                        >
                                            Vendeur
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Gestionnaire de Stock Provende' ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-400 hover:text-white'
                                                }`}
                                            onClick={() => handleRoleSelect('Gestionnaire de Stock Provende')}
                                        >
                                            Gestionnaire de Stock <br />
                                            Provende
                                        </div>
                                        <div
                                            className={` flex justify-center items-center text-center h-40 shadow-lg hover:shadow-none cursor-pointer transition-all ${selectedRole === 'Gestionnaire de Stock Poisson' ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-400 hover:text-white'
                                                }`}
                                            onClick={() => handleRoleSelect('Gestionnaire de Stock Poisson')}
                                        >
                                            Gestionnaire de Stock <br />
                                            Poisson
                                        </div>
                                        <input type="hidden" name="roleUser" value={selectedRole} />
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Mot de passe</div>
                                        <div className="w-2/3">
                                            <input type="password" className="w-full text-left bg-transparent pr-3 outline-none" name="mdpUser" value={userData.mdpUser} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="grid grid-cols-2 my-5 gap-5 w-fit mx-auto  ">

                                <button
                                    className="text-sm text-white btn-skin2  bg-blue-500  hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm ">Enregistrer</button>
                                <button
                                    className="ms-2 text-sm text-slate-200  bg-slate-500  hover:bg-slate-600 hover:shadow-slate-700 hover:shadow-lg px-4 py-2 rounded-sm "
                                    type="reset">Annuler</button>
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

export default Form_user_update