import { useState } from "react";
import Swal from "sweetalert2";
import budgetService from "../../../Service/budgetService";

const InsertEditBudget = () => {

    const [montants, setMontant] = useState("");

    const handleFormSubmit = async (event, action) => {
        event.preventDefault();

        if (montants.trim() === "") {
            await Swal.fire("Erreur", "Veuillez entrer un montant avant de continuer.", "error");
            return;
        }

        const confirmation = await Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Ceci est une action assez délicate. Veuillez bien réfléchir avant de le faire.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Oui, je suis sûr",
            cancelButtonText: "Annuler"
        });

        if (confirmation.isConfirmed) {
            try {
                const budget = {
                    type: 'Generale',
                };
                const b = {
                    montant: parseFloat(0)
                };

                if (action === "modifier") {
                    await budgetService.updateLastGeneralBudget(budget, parseFloat(montants));
                    await budgetService.saveDepenseBudget(b);
                    await budgetService.saveGainBudget(b);
                } else if (action === "additionner") {
                    await budgetService.addLastGeneralBudget(budget, parseFloat(montants));
                }

              

                setMontant("");
                await Swal.fire("Succès !", "Le budget général a été enregistré avec succès.", "success");
            } catch (error) {
                console.error("Erreur lors de l'enregistrement du budget :", error);
                await Swal.fire("Erreur", "Une erreur est survenue lors de l'enregistrement du budget.", "error");
            }
        }
    };


    return (
        <>
            <section className=" px-5 py-5">
                <div className="grid grid-cols-1 items-center justify-center ">
                    <div className="bg-red-300 shadow-2xl rounded-md flex justify-center mt-16">
                        <form className="w-full px-5 py-10" onSubmit={handleFormSubmit}>
                            <div className=" grid grid-cols-1 gap-2">
                                <div className="">
                                    <div className="mb-5 flex items-center gap-10">
                                        <h2 className="  text-xl font-semibold">Votre budget</h2>
                                    </div>
                                    <p>Veuillez bien verifier avant d'effectuer cette operation</p>
                                    <br />
                                    <p>Si vous voulez changer le budget cliquer sur modifier sinon si vous voulez en ajouter cliquer sur additionner</p>
                                    <br />
                                    <div className="inputfield w-full px-4 h-14 relative py-1 mb-5 border-b-2 flex justify-between items-center gap-2">
                                        <div className="w-1/3 border-r">Montant</div>
                                        <div className="w-2/3 relative">
                                            <div className="absolute right-0">AR</div>
                                            <input type="text" className="w-full text-left bg-transparent pr-3 outline-none" name="montant" onChange={(e) => setMontant(e.target.value)} />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="grid grid-cols-3 my-5 gap-5 w-fit mx-auto  ">

                                <button
                                    className="text-sm text-white btn-skin2 bg-blue-500 hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm "
                                    onClick={(e) => handleFormSubmit(e, "modifier")}>
                                    Modifier
                                </button>
                                <button
                                    className="text-sm text-white btn-skin2 bg-purple-500 hover:bg-purple-600 hover:shadow-purple-700 hover:shadow-lg px-4 py-2 rounded-sm "
                                    onClick={(e) => handleFormSubmit(e, "additionner")}>
                                    Additionner
                                </button>
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

export default InsertEditBudget