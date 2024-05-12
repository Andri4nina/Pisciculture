
import { useState } from 'react';
import { FaHome, FaStore, FaBox, FaFish, FaWater, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <nav className=" bg-blue-500 h-screen w-[300px] fixed left-0 top-0">
                <div className="my-5 flex justify-center h-auto items-center">
                    <div className="w-1/3 h-20">
                        <img src="/img/logo/logo2.png" alt=""  className=' w-full h-full object-content'/>
                    </div>
                    <div className="w-2/3 flex flex-col items-center justify-center text-white">
                        <h2 className="relative text-2xl font-semibold ">PISCICULTURE</h2>
                        <hr className="bg-white w-10/12 mx-auto border-2 rounded-md" />
                        <p>Marcel & Isabelle</p>
                    </div>
                </div>
                <hr className='my-5' />
                <div className="h-5/6 relative">
                    <div className=" pb-5">
                        <ul className=" overflow-y-auto   scrollbar">
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'dashboard' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('dashboard')}>
                                <Link to="">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaHome />
                                        <span>
                                            Tableau de bords
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'magasin' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('magasin')}>
                                <Link to="Magasin">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaStore />
                                        <span>
                                            Magasin
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'provende' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('provende')}>
                                <Link to="Provende">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaBox />
                                        <span>
                                            Stock de provende
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'poisson' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('poisson')}>
                                <Link to="Poisson">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaFish />
                                        <span>
                                            Stock de poisson
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <hr />
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'etang' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('etang')}>
                                <Link to="Etang">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaWater />
                                        <span>
                                            Étang
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'user' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('user')}>
                                <Link to="Utilisateur">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaUser />
                                        <span>
                                            Utilisateur
                                        </span>
                                    </div>
                                </Link>
                            </li>

                            <hr className='mt-5' />
                            <li className={`hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5 ${activeMenu === 'parametre' ? 'bg-blue-600 shadow-blue-700 shadow-lg' : ''}`} onClick={() => handleMenuClick('parametre')}>
                                <Link to="Parametre">
                                    <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                        <FaCog />
                                        <span>

                                            Paramètres
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <hr className='mt-5' />
                            <div className='absolute top-full left-0 w-full -translate-y-1/2'>
                                <hr />
                                <li className=' hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg py-5'>
                                    <a href="#">
                                        <div className='text-white px-5 py-2 flex justify-start text-xl gap-5 items-center'>
                                            <FaSignOutAlt />
                                            <span>
                                                Déconnexion
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar