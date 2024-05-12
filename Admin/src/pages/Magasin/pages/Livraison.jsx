import { FaChevronLeft } from "react-icons/fa"
import ListLivraisons from "./components/ListLivraisons"

const Livraison = () => {
    return (
        <>
            <div className='flex items-center text-xl py-5 px-2'>
                <FaChevronLeft /> <span>Livraisons</span>
            </div>
            <div className="w-9/12 ">
                <ListLivraisons/>
            </div>
        </>
    )
}

export default Livraison