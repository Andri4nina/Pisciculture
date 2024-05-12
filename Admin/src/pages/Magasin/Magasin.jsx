import MenuMag from "./component/MenuMag"
import Achats from "./pages/Achats"
import Commande from "./pages/Commande"
import Livraison from "./pages/Livraison"
import AchatsList from "./pages/components/AchatsList"
import CommandeDetail from "./pages/components/CommandeDetail"


const Magasin = () => {
  return (
    <>
      <div className="fixed w-full bg-white shadow-md h-16 z-10">
        <h2 className="px-5 py-5 text-2xl font-semibold">Magasin </h2>
        <div className="">
          <MenuMag />
        </div>
        <div className="">
          <Achats />
        </div>

        <div className="">
          <AchatsList />
        </div>

        <div className="">
          <Commande />
        </div>

        <div className="">
          <CommandeDetail />
        </div>
        
        <div>
          <Livraison />
        </div>

      </div>
    </>
  )
}

export default Magasin