import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa"


const ListAchats = () => {

    const [selectedFish, setSelectedFish] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);


    const [quantity, setQuantity] = useState('');
    const [pricePerKilo, setPricePerKilo] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [shoppingList, setShoppingList] = useState([]);
    const [Allprice, setAllPrice] = useState(0);
    
    
    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionClick = (fish) => {
        setSelectedFish(fish);
        setDropdownVisible(false);
    };


    const handleAddToList = () => {
        if (selectedFish !== '' && quantity !== '' && pricePerKilo !== '' && totalPrice !== '') {
            const newItem = {
                fish: selectedFish,
                quantity: quantity,
                pricePerKilo: pricePerKilo,
                totalPrice: totalPrice
            };
            setShoppingList([...shoppingList, newItem]);

            setSelectedFish('');
            setQuantity('');
            setPricePerKilo('');
            setTotalPrice('');
        } else {
            // Afficher un message d'erreur indiquant les champs manquants
            let errorMessage = 'Veuillez remplir les champs suivants : ';
            if (selectedFish === '') errorMessage += 'Poisson, ';
            if (quantity === '') errorMessage += 'Quantité, ';
            if (pricePerKilo === '') errorMessage += 'Prix du Kilo, ';
            if (totalPrice === '') errorMessage += 'Prix Total, ';

            errorMessage = errorMessage.slice(0, -2); // Supprimer la virgule et l'espace en trop
            alert(errorMessage);
        }
    };


    const handleDeleteItem = (index) => {
        const newList = [...shoppingList];
        newList.splice(index, 1);
        setShoppingList(newList);
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseFloat(e.target.value);
        const newTotalPrice = newQuantity * parseFloat(pricePerKilo);
        setQuantity(newQuantity);
        setTotalPrice(newTotalPrice || 0);
    };

    const handlePricePerKiloChange = (e) => {
        const newPricePerKilo = parseFloat(e.target.value);
        const newTotalPrice = newPricePerKilo * parseFloat(quantity);
        setPricePerKilo(newPricePerKilo);
        setTotalPrice(newTotalPrice || 0);
    };

    const handleTotalPriceChange = (e) => {
        const newTotalPrice = parseFloat(e.target.value);
        const newQuantity = newTotalPrice / parseFloat(pricePerKilo);
        setTotalPrice(newTotalPrice);
        setQuantity(newQuantity || 0);
    };


    const handleFishChange = (e) => {
        setSelectedFish(e.target.value);
    };

    const calculateTotalPrice = () => {
        const totalPrice = shoppingList.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
        setAllPrice(totalPrice);
    };

    // Appeler la méthode de calcul du prix total à chaque modification de shoppingList
    useEffect(() => {
        calculateTotalPrice();
    }, [shoppingList]);



    return (
        <>

            <div className="hidden ml-5 text-xl font-semibold mb-5 w-10/12 ">
                CLIENT N 1
            </div>
            <div className="hidden w-9/12 ">
                <div className="px-5 w-full">
                    <div className="flex justify-between items-center px-5 ">
                        <h2>Liste d'articles pour le client</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="inputfield bg-slate-100 px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2">
                            <div className="w-1/2 flex justify-center border-r-2 border-slate-400 text-black">
                                Poisson</div>
                            <div className="relative w-1/2 dropdown">
                                <input
                                    type="text"
                                    className="w-full h-12 cursor-pointer border-none outline-none bg-transparent rounded-lg text-right pr-10 text-box"
                                    placeholder="Choisir le type de poisson"
                                    readOnly
                                    onClick={handleDropdownClick}
                                    value={selectedFish}
                                    onChange={handleFishChange}
                                />
                                {dropdownVisible && (
                                    <div className="z-50 absolute top-10 w-full bg-slate-200 overflow-hidden border  shadow-xl rounded-md option">
                                        <div onClick={() => handleOptionClick('Carpes')} className="px-3 py-5 cursor-pointer border-b hover:bg-slate-100">
                                            Carpes
                                        </div>
                                        <div onClick={() => handleOptionClick('Rouger')} className="px-3 py-5 cursor-pointer border-b hover:bg-slate-100">
                                            Rouger
                                        </div>
                                        <div onClick={() => handleOptionClick('Capitaine')} className="px-3 py-5 cursor-pointer border-b hover:bg-slate-100">
                                            Capitaine
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                        <div
                            className="inputfield bg-slate-100  px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                        >
                            <div className="w-1/2 flex justify-center border-r-2 border-slate-400 text-black">
                                Quantite
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="text"
                                    className="w-full h-12 bg-transparent pr-3 outline-none"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                            </div>
                        </div>
                        <div
                            className="inputfield bg-slate-100  px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                        >
                            <div className="w-1/2 flex justify-center border-r-2 border-slate-400 text-black">
                                Prix du Kilo
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="text"
                                    className="w-full h-12 bg-transparent pr-3 outline-none"
                                    value={pricePerKilo}
                                    onChange={handlePricePerKiloChange}
                                />
                            </div>
                        </div>
                        <div
                            className="inputfield bg-slate-100  px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                        >
                            <div className="w-1/2 flex justify-center border-r-2 border-slate-400 text-black">
                                Prix
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="text"
                                    className="w-full h-12 bg-transparent pr-3 outline-none"
                                    value={totalPrice}
                                    onChange={handleTotalPriceChange}
                                />
                            </div>
                        </div>

                        <div className="rounded-md cursor-pointer hover:shadow-lg hover:shadow-blue-400 hover:text-white hover:bg-blue-600 bg-slate-200  relative h-14 w-14 flex justify-center items-center" onClick={handleAddToList}>
                            <FaPlus />
                        </div>
                    </div>
                    <div className="relative mb-5 overflow-hidden w-full h-[600px]  ">
                        <div className="list relative w-full  h-[550px] overflow-auto">
                            <table className="table-auto border-collapse w-full">
                                <thead className="sticky top-0 z-10">
                                    <tr>
                                        <th className="px-4 py-2 font-semibold bg-blue-500 text-white">Type de poisson</th>
                                        <th className="px-4 py-2 font-semibold bg-blue-500 text-white">Prix Du Kilo</th>
                                        <th className="px-4 py-2 font-semibold bg-blue-500 text-white">Quantite</th>
                                        <th className="px-4 py-2 font-semibold bg-blue-500 text-white">Prix totale</th>
                                        <th className="px-4 py-2 font-semibold bg-blue-500 text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shoppingList.map((item, index) => (
                                        <tr key={index} className="bg bg-slate-50 border-b text-center hover:bg-blue-500 hover:text-white group">
                                            <td className="px-4 py-2 ">{item.fish}</td>
                                            <td className="px-4 py-2 ">{item.pricePerKilo}</td>
                                            <td className="px-4 py-2 ">{item.quantity}</td>
                                            <td className="px-4 py-2 ">{item.totalPrice}</td>
                                            <td className="px-4 py-2 ">
                                                <button className="group-hover:text-black bg-slate-200 mx-auto shadow-md hover:shadow-none w-10 h-10 flex rounded-md justify-center items-center" onClick={() => handleDeleteItem(index)}>
                                                    <FaMinus />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="flex justify-end gap-2 ">
                    <div className="grid grid-cols-1">
                        <div
                            className="inputfield bg-slate-100  px-4 relative py-1 my-5 mx-auto border-b-2 text-slate-500 border-slate-400 flex justify-center items-center gap-2"
                        >
                            <div className="w-1/2 flex justify-center border-r-2 border-slate-400 text-black">
                                Prix Total
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="text"
                                    className="w-full h-12 bg-transparent pr-3 outline-none"
                                    value={Allprice}
                                    onChange={(e) => setAllPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="text-sm text-white btn-skin2  bg-blue-500  hover:bg-blue-600 hover:shadow-blue-700 hover:shadow-lg px-4 py-2 rounded-sm ">Enregistrer</button>
                            <button
                                className="ms-2 text-sm text-slate-200  bg-slate-800  hover:bg-slate-600 hover:shadow-slate-700 hover:shadow-lg px-4 py-2 rounded-sm "
                                type="reset">Annuler</button>
                        </div>
                    </div>





                </div>
            </div>
        </>
    )
}

export default ListAchats