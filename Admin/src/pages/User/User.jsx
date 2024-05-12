import { Outlet } from 'react-router-dom';


const User = () => {
  return (
    <>
      <section className='min-h-screen max-w-7xl mx-auto'>
        <div className="fixed w-full top-0 left-0 ml-[300px] bg-white shadow-md h-16 z-20">
          <h2 className="px-5 py-5 text-2xl font-semibold">Utilisateur</h2>

        </div>
      
        <Outlet />
      </section>
    </>
  )
}

export default User
