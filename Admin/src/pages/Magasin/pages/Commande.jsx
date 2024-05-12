import { FaChevronLeft } from "react-icons/fa"
import ListCommandes from "./components/ListCommandes"

const Commande = () => {
    return (
        <>
            <div className='hidden flex items-center text-xl py-5 px-2'>
                <FaChevronLeft /> <span>Commandes</span>
            </div>
            
            <div className="w-9/12 ">
                <ListCommandes/>
            </div>

        </>
    )
}

export default Commande