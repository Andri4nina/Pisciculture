import {  FaChevronLeft } from 'react-icons/fa';
import ListAchats from './components/ListAchats';

const Achats = () => {
    return (
        <>
            <div className='hidden flex items-center text-xl py-5 px-2'>
                <FaChevronLeft /> <span>Achats</span>
            </div>
            <div>
                <ListAchats />
            </div>
           
        </>
    )
}

export default Achats   