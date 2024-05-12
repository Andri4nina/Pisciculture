import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import provendeService from "../../../../Service/provendeService";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import budgetService from "../../../../Service/budgetService";

const NewProv = () => {
  const navigate = useNavigate();
  const [provendeData, setProvendeData] = useState({
    nom: "",
    qttDispo: "",
    prixUnitaire: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvendeData({
      ...provendeData,
      [name]: value
    });
  };


  const calculateTotalPrice = () => {
    // Convertir les valeurs en nombre pour effectuer le calcul
    const qttDispo = parseFloat(provendeData.qttDispo);
    const prixUnitaire = parseFloat(provendeData.prixUnitaire);

    // Vérifier si les valeurs sont valides
    if (!isNaN(qttDispo) && !isNaN(prixUnitaire)) {
      // Calculer le prix total
      return qttDispo * prixUnitaire;
    }
    return "0";
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const montants = calculateTotalPrice();
    
    const budget = {
      montants: montants 
    };

    try {
      await budgetService.depenseLastGeneralBudget(budget, parseFloat(montants));
      await provendeService.saveProvende(provendeData)
      await budgetService.saveDepenseBudget(budget)
    
      Swal.fire({
        icon: 'success',
        title: 'Succès!',
        text: 'Le provende a été enregistré avec succès.'
      });
      navigate('/admincores/Provende');
      setProvendeData({
        nom: "",
        qttDispo: "",
        prixUnitaire: ""
      });
    

    } catch (error) {
      console.error('Error while saving provende:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de l\'enregistrement du provende. Veuillez réessayer.'
      });
    }




  };


  return (
    <>
      <section className="mt-10 px-5 py-5">
        <div className="w-[600px]">
          <div className="w-full bg-slate-200 px-14 py-10">
            <div className=' flex items-center text-xl py-5 px-2'>
              <Link to="/admincores/provende">
                <FaChevronLeft />
              </Link>  <span>Nouvelle type de provende</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="gap-2">
                <div>

                  <div
                    className="inputfield w-full   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                  >
                    <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                      Nom du provende
                    </div>
                    <div className="w-2/3">
                      <input
                        type="text"
                        className="w-full h-12 bg-transparent pr-3 outline-none"
                        value={provendeData.nom}
                        onChange={handleChange}
                        name="nom"
                      />
                    </div>
                  </div>
                  <div
                    className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                  >
                    <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                      Quantite
                    </div>
                    <div className="relative w-2/3">
                      <input
                        type="text"
                        className="w-full h-12 bg-transparent mr-10 outline-none"
                        value={provendeData.qttDispo}
                        onChange={handleChange}
                        name="qttDispo"
                      />
                      <span className="absolute top-1/2 right-3 -translate-y-1/2">
                        KG
                      </span>

                    </div>
                  </div>
                  <div
                    className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                  >
                    <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                      Prix du kilo
                    </div>
                    <div className="relative w-2/3">
                      <input
                        type="text"
                        className="w-full h-12 bg-transparent pr-3 outline-none"
                        value={provendeData.prixUnitaire}
                        onChange={handleChange}
                        name="prixUnitaire"
                      />

                      <span className="absolute top-1/2 right-3 -translate-y-1/2">
                        Ar
                      </span>
                    </div>
                  </div>

                  <div
                    className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                  >
                    <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                      Prix Total
                    </div>
                    <div className="relative w-2/3">
                      <input
                        type="text"
                        className="w-full h-12 bg-transparent pr-3 outline-none"
                        value={calculateTotalPrice()}
                        readOnly
                      />

                      <span className="absolute top-1/2 right-3 -translate-y-1/2">
                        Ar
                      </span>
                    </div>
                  </div>



                  <div className="flex justify-end">
                    <button
                      className="text-sm text-white btn-skin2  bg-blue-500  hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm ">Enregistrer</button>
                    <button
                      className="ms-2 text-sm text-slate-200  bg-slate-500  hover:bg-slate-600 hover:shadow-slate-700 hover:shadow-lg px-4 py-2 rounded-sm "
                      type="reset">Annuler</button>
                  </div>
                </div>
              </div>
            </form>


          </div>
        </div>

      </section>
    </>
  )
}

export default NewProv