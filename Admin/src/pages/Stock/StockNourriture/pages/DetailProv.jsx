
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom";
import provendeService from "../../../../Service/provendeService";
import { Bar, BarChart, Legend, ReferenceLine, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import Swal from "sweetalert2";
import budgetService from "../../../../Service/budgetService";


const DetailProv = () => {
    const { provendeId } = useParams();
    const navigate = useNavigate();
    const [provendeData, setProvendeData] = useState({
        nom: "",
        qttDispo: "",
    });

    const [quantite, setQuantite] = useState('');
    const [prixTotal, setPrixTotal] = useState(0);

    const handleChangeQuantite = (e) => {
        const newQuantite = e.target.value;
        if (!isNaN(newQuantite)) { // Vérifie si la valeur de la quantité est un nombre
            setQuantite(newQuantite);
            const newPrixTotal = parseFloat(newQuantite) * parseFloat(provendeData.prixUnitaire);
            setPrixTotal(isNaN(newPrixTotal) ? 0 : newPrixTotal); // Assurez-vous que le prix total est un nombre valide
        } else {
            setQuantite('');
            setPrixTotal(0);
        }
    };



    useEffect(() => {

        provendeService.getProvendeById(provendeId)
            .then(response => {
                setProvendeData(response.data);

            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails de provende:', error);
            });
    }, [provendeId]);
    
    const montants = prixTotal;
    
    const budget = {
      montants: montants 
    };


    const handleCommande = async(e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir commander?',
            text: `Vous êtes sur le point de commander ${quantite} Kg de ${provendeData.nom} pour un prix total de ${prixTotal} Ar.`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Commander'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await budgetService.depenseLastGeneralBudget(budget, parseFloat(montants));
                await budgetService.saveDepenseBudget(budget)
                provendeService.commandeProvende({ qttDispo: parseFloat(quantite) }, provendeData.id)
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Succès!',
                            text: 'La commande a été passée avec succès.'
                        });
                        // Réinitialiser les valeurs de quantité et prix total après la commande réussie si nécessaire
                        setQuantite('');
                        setPrixTotal(0);
                        navigate(`../Detail/${provendeId}`);
                    })
                  
                    .catch(error => {
                        console.error('Erreur lors de la commande du provende:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Erreur!',
                            text: 'Une erreur s\'est produite lors de la commande du provende. Veuillez réessayer.'
                        });
                    });
            }
        });
    };
    return (
        <>
            <section className="mt-10 px-5 py-5">
                <div className="bg-slate-200 px-14 py-10 w-full">
                    <div className=' flex items-center text-xl py-5 px-2'>
                        <Link to="/admincores/provende">
                            <FaChevronLeft />
                        </Link> <span>Detail du provende</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <div className='text-xl border-l-8 pl-5 border-blue-500'>
                                Information du provende
                            </div>
                            <div
                                className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                            >
                                <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                                    Nom du provende
                                </div>
                                <div className="w-2/3">
                                    <input
                                        type="text"
                                        className="w-full h-12 bg-transparent pr-3 outline-none"
                                        value={provendeData.nom}
                                        disabled />
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
                                        value={provendeData.qttDispo}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div
                                className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                            >
                                <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                                    Prix du kilo
                                </div>
                                <div className="w-2/3">
                                    <input
                                        type="text"
                                        className="w-full h-12 bg-transparent pr-3 outline-none"
                                        value={provendeData.prixUnitaire}
                                        disabled
                                    />
                                </div>
                            </div>





                        </div>
                        <div className="flex justify-center">
                            <ResponsiveContainer width={200} height={400}>
                                <BarChart data={[{ name: 'Restant', Quantite: provendeData.qttDispo }]}>
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Quantite" fill="#8884d8" />
                                    <ReferenceLine y={20} stroke="red" />
                                </BarChart>
                            </ResponsiveContainer>

                        </div>

                        <div>
                            <div className='text-xl border-l-8 pl-5 border-blue-500'>
                                Assignation
                            </div>

                            <div className="grid grid-cols-4 gap-2 mt-3">
                                <div className="cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:text-white  h-36 justify-center flex items-center bg-slate-300">
                                    Etang 1
                                </div>
                                <div className="cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:text-white  h-36 justify-center flex items-center bg-slate-300">
                                    Etang 2
                                </div>
                                <div className="cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:text-white  h-36 justify-center flex items-center bg-slate-300">
                                    Etang 3
                                </div>
                                <div className="cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:text-white  h-36 justify-center flex items-center bg-slate-300">
                                    Etang 4
                                </div>
                                <div className="cursor-pointer hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:text-white h-36 justify-center flex items-center bg-slate-300">
                                    Etang 5
                                </div>
                            </div>
                        </div>
                        <div>
                            <form action="">
                                <div className='text-xl border-l-8 pl-5 border-blue-500'>
                                    Acheter
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
                                            value={quantite}
                                            onChange={handleChangeQuantite}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="inputfield   px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                                >
                                    <div className="w-1/3 flex justify-start border-r-2 border-slate-400 text-black">
                                        Prix
                                    </div>
                                    <div className="w-2/3">
                                        <input
                                            type="text"
                                            className="w-full h-12 bg-transparent pr-3 outline-none"
                                            value={prixTotal}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="text-sm text-white btn-skin2  bg-blue-500  hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm "   onClick={handleCommande}>Enregistrer</button>
                                    <button
                                        className="ms-2 text-sm text-slate-200  bg-slate-500  hover:bg-slate-600 hover:shadow-slate-700 hover:shadow-lg px-4 py-2 rounded-sm "
                                        type="reset">Annuler</button>
                                </div>

                            </form>

                        </div>

                    </div>



                </div>
            </section>
        </>
    )
}

export default DetailProv