
import { FaPlus } from 'react-icons/fa'

const AddCard = () => {
    return (
        <div className='cursor-pointer mt-5 relative flex justify-center w-full  h-48 shadow-lg hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400 bg-slate-200  rounded-md  hover:text-blue-200 text-slate-400  transition'>
            <FaPlus className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl' />
        </div>
    )
}

export default AddCard