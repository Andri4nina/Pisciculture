import { FaEnvelope, FaKey, FaUser } from "react-icons/fa"

const Login = () => {

  const handleLogin = () => {
    localStorage.setItem('JavaToken', '');

  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className=" bg-blue-500 text-white rounded-md px-14 py-10">
          <div className="h-36">
            <img src="/img/logo/logo2.png" alt="" className=' w-full h-full object-fill' />
          </div>


          <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
            <div className="w-1/12"><FaUser /></div>
            <div className="w-11/12">
              <input placeholder="Nom de l'utilisateur" type="text" className="placeholder:text-slate-200 w-full text-left bg-transparent pr-3 outline-none" name="nomUser" />
            </div>
          </div>


          <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
            <div className="w-1/12"><FaEnvelope /></div>
            <div className="w-11/12">
              <input placeholder="exemple@exemple.com" type="text" className="placeholder:text-slate-200 w-full text-left bg-transparent pr-3 outline-none " name="emailUser" />
            </div>
          </div>

          <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
            <div className="w-1/12"><FaKey /></div>
            <div className="w-11/12">
              <input placeholder="**********" type="password" className="placeholder:text-slate-200 w-full text-left bg-transparent pr-3 outline-none " name="emailUser" />
            </div>
          </div>

          <div className="flex justify-center items-center my-5 gap-5 w-fit mx-auto  ">
          <button
              onClick={handleLogin}
              className="text-sm text-blue-500 btn-skin2  bg-slate-50  hover:bg-blue-100 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm transition-all">Se connecter</button>
       
          </div>

        </div>
      </section>
    </>
  )
}

export default Login