


const FormUserParams = () => {
    return (
        <>
        <section className=" px-5 py-5">
                <div className="grid grid-cols-1 items-center justify-center ">
                    <div className="bg-slate-50 shadow-2xl rounded-md flex justify-center mt-16">
                        <form className="w-full px-5 py-10">
                            <div className=" grid grid-cols-1 gap-2">
                                <div className="">
                                    <div className="mb-5 flex items-center gap-10">
                                        <h2 className="  text-xl font-semibold">Modifier votre profil</h2>
                                    </div>


                                    <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Nom de l'utilisateur</div>
                                        <div className="w-2/3">
                                            <input type="text" className="w-full text-left bg-transparent pr-3 outline-none" name="nomUser"  />
                                        </div>
                                    </div>

                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Email</div>
                                        <div className="w-2/3">
                                            <input type="email" className="w-full text-left bg-transparent pr-3 outline-none" name="emailUser"  />
                                        </div>
                                    </div>


                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Telephone</div>
                                        <div className="w-2/3">
                                            <input type="tel" className="w-full text-left bg-transparent pr-3 outline-none" name="telUser" />
                                        </div>
                                    </div>


                                    <div className="inputfield h-14 w-full px-4 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Mot de passe</div>
                                        <div className="w-2/3">
                                            <input type="password" className="w-full text-left bg-transparent pr-3 outline-none" name="mdpUser"  />
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


             








                </div>
            </section>

        </>
    )
}

export default FormUserParams