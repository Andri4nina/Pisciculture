import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom"
import provendeService from "../../../../Service/provendeService";
import Swal from "sweetalert2";


const EditProv = () => {
  const navigate = useNavigate();
  const { provendeId } = useParams();

  const [provendeData, setProvendeData] = useState({
    nom: "",
    qttDispo: "",
  });


  useEffect(() => {

    provendeService.getProvendeById(provendeId)
      .then(response => {
        setProvendeData(response.data);

      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails de provende:', error);
      });
  }, [provendeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await provendeService.editProvende(provendeData, provendeId)

      Swal.fire({
        icon: 'success',
        title: 'Succès!',
        text: 'Le provende a été modifier avec succès.'
      });
      navigate('/admincores/Provende');
      setProvendeData({
        nom: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvendeData({
      ...provendeData,
      [name]: value
    });
  };




  return (
    <section className="mt-10 px-5 py-5">
      <div className="w-[600px]">
        <div className="w-full bg-slate-200 px-14 py-10">
          <div className=' flex items-center text-xl py-5 px-2'>
            <Link to="/admincores/provende">
              <FaChevronLeft />
            </Link>  <span>Modifier type de provende</span>
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

  )
}

export default EditProv