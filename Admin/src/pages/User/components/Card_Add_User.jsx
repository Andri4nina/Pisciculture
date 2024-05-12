
import { FaUserPlus } from 'react-icons/fa';


const Card_Add_User = () => {
  return (
    <>
     <div className="cursor-pointer  relative flex justify-center w-full  h-40 shadow-lg hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400 bg-slate-200 mt-5  hover:text-blue-200 text-slate-400  transition">
        <FaUserPlus className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-9xl ' />
    </div>
    </>
  )
}

export default Card_Add_User
