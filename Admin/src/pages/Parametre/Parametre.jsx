import FormUserParams from "./components/FormUserParams"
import InsertEditBudget from "./components/InsertEditBudget"

const Parametre = () => {
    return (
        <>
            <section className='min-h-screen max-w-7xl mx-auto'>
                <div className="fixed w-full top-0 left-0 ml-[300px] bg-white shadow-md h-16 z-20">
                    <h2 className="px-5 py-5 text-2xl font-semibold">Parametre</h2>

                </div>
                
                <div className="grid grid-cols-2 gap-5">
                    <FormUserParams />
                   <InsertEditBudget />
                
                </div>


            </section>

        </>
    )
}

export default Parametre