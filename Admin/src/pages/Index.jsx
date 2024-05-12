import Navbar from "../components/Navbar"
import Dashboard from "./Dashboard/Dashboard"
import Etang from "./Etang/Etang"
import Magasin from "./Magasin/Magasin"
import Parametre from "./Parametre/Parametre"
import StockNouriture from "./Stock/StockNourriture/StockNouriture"
import StockPoisson from "./Stock/StockPoisson/StockPoisson"
import User from "./User/User"
import { Routes, Route } from 'react-router-dom';
import List_user from "./User/pages/List_user"
import Form_user from "./User/pages/Form_user"
import Profil_user from "./User/pages/Profil_user"
import Form_user_update from "./User/pages/Form_user_update"
import List_provende from "./Stock/StockNourriture/pages/List_provende"
import NewProv from "./Stock/StockNourriture/pages/NewProv"
import EditProv from "./Stock/StockNourriture/pages/EditProv"
import DetailProv from "./Stock/StockNourriture/pages/DetailProv"

const Index = () => {
    return (
        <>
            <div className="flex">
                <div className="w-[300px]">
                    <Navbar />
                </div>
                <div className="w-full" style={{ maxWidth: 'calc(100% - 300px)' }}>

                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="Magasin" element={<Magasin />} />
                        <Route path="Provende" element={<StockNouriture />} >
                              <Route index element={<List_provende />} />
                            <Route path="Formulaire" element={<NewProv />} />
                            <Route path="Detail/:provendeId" element={<DetailProv />} />
                            <Route path='Edit/:provendeId' element={<EditProv />} />
                        </Route>
                        <Route path="Poisson" element={<StockPoisson />} />
                        <Route path="Etang" element={<Etang />} />
                        
                        <Route path="Utilisateur" element={<User />} >
                            <Route index element={<List_user />} />
                            <Route path="Formulaire" element={<Form_user />} />
                            <Route path="Profil/:userId" element={<Profil_user />} />
                            <Route path='Edit/:userId' element={<Form_user_update />} />
                        </Route>
                        
                        
                        <Route path="Parametre" element={<Parametre />} />
                    </Routes>

                </div>
            </div>

        </>
    )
}

export default Index