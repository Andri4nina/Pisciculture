import BudgetDash from "./components/BudgetDash"
import ClientDash from "./components/ClientDash"
import EtangDash from "./components/EtangDash"
import ListCommandeDash from "./components/ListCommandeDash"
import PrevisionDash from "./components/PrevisionDash"
import StockPoissonDash from "./components/StockPoissonDash"
import StockProvendeDash from "./components/StockProvendeDash"

const Dashboard = () => {
  return (
   <>
   <div className="fixed w-full bg-white shadow-md h-16 z-10">
       <h2 className="px-5 py-5 text-2xl font-semibold">Tableau de Bord </h2>
      
   </div>
  
    <div className="mx-auto w-10/12 pt-16 flex justify-center items-center">
      <div className="w-full" >
        <div className="h-[300px] mt-5 flex gap-5">
            <BudgetDash />
            <PrevisionDash />
        </div>
        <div className="flex mt-5 gap-5 justify-center items-center">
            <div className="grid grid-cols-1 w-2/3">
              <StockPoissonDash />
              <StockProvendeDash />
            </div>
            <div className="w-1/3 h-auto">
            <ListCommandeDash />
            </div>
        </div>
        <div className="flex justify-center mt-5 gap-5">
            <ClientDash />
            <EtangDash />
        </div>
        
      </div>
    </div>
   
   </>
  )
}

export default Dashboard