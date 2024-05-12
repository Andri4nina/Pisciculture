import { FaEnvelope, FaPrint, FaSms, FaTrash } from "react-icons/fa"


const CommandeDetail = () => {
    return (
        <div className="hidden w-9/12 ">
            <div className="ml-5 text-xl font-semibold mb-5 w-10/12 ">
                Detail sur la commande du client
            </div>

            <div className='grid grid-cols-3 gap-2'>
                <div className='px-5'>
                    <div className='text-xl border-l-8 pl-5 border-blue-500'>
                        Information du client
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Nom complet du client
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Telephone
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Email
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Boite Postale
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Region
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                </div>

                <div className='px-5'>
                    <div className='text-xl border-l-8 pl-5 border-blue-500'>
                        Detail de la commande
                    </div>

                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Poisson commander
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Quantite
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Prix Total
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Date de commande
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Status
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="w-full h-12 bg-transparent pr-3 outline-none"

                            />
                        </div>
                    </div>


                </div>
                <div className='px-5'>
                    <div className='text-xl border-l-8 pl-5 border-blue-500'>
                        Action
                    </div>

                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Rappel
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <div className="relative group">

                                    <button
                                        className="flex justify-center items-center w-10 h-10 border text-purple-500 border-purple-500  hover:bg-purple-500 hover:shadow-purple-700 hover:shadow-lg hover:text-white  font-bold ">
                                        <i className="bx bx-message-square-dots"></i>
                                        <FaSms />
                                    </button>

                                    <p
                                        className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-purple-500  bg-purple-500 shadow-purple-700 hover:shadow-lg text-white">
                                        par SMS</p>
                                </div>
                                <div className="relative group">

                                    <button

                                        className="flex justify-center items-center w-10 h-10 border text-yellow-500 border-yellow-500  hover:bg-yellow-500 hover:shadow-yellow-700 hover:shadow-lg hover:text-white  font-bold ">
                                        <FaEnvelope />
                                    </button>

                                    <p
                                        className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-yellow-500  bg-yellow-500 shadow-yellow-700 hover:shadow-lg text-white">
                                        par Email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Imprimer
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <div className="relative group">

                                    <button

                                        className="flex justify-center items-center w-10 h-10 border text-slate-500 border-slate-500  hover:bg-slate-500 hover:shadow-slate-700 hover:shadow-lg hover:text-white  font-bold ">
                                        <FaPrint />
                                    </button>

                                    <p
                                        className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-slate-500  bg-slate-500 shadow-slate-700 hover:shadow-lg text-white">
                                        Imprimer la facture</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Traiter
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <label
                                    className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                                    for="switch">
                                    <input className="form-checkbox peer sr-only" id="switch" type="checkbox" />
                                    <span
                                        className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>
                                    <span
                                        className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
                                        <span
                                            className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition">
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Payer
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <label
                                    className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                                    for="switch">
                                    <input className="form-checkbox peer sr-only" id="switch" type="checkbox" />
                                    <span
                                        className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>
                                    <span
                                        className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
                                        <span
                                            className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition">
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Livrer
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <label
                                    className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                                    for="switch">
                                    <input className="form-checkbox peer sr-only" id="switch" type="checkbox" />
                                    <span
                                        className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>
                                    <span
                                        className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
                                        <span
                                            className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition">
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div
                        className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                    >
                        <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                            Annulation
                        </div>
                        <div className="w-2/3">
                            <div className="flex justify-end items-center gap-2">
                                <div className="relative group">

                                    <button

                                        className="flex justify-center items-center w-10 h-10 border text-red-500 border-red-500  hover:bg-red-500 hover:shadow-red-700 hover:shadow-lg hover:text-white  font-bold ">
                                        <FaTrash />
                                    </button>

                                    <p
                                        className="absolute w-20 text-center -top-3 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 duration-700  text-sm rounded-sm border-red-500  bg-red-500 shadow-red-700 hover:shadow-lg text-white">
                                        Annulation de la commande</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CommandeDetail