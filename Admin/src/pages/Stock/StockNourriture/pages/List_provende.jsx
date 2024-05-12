import { Link } from "react-router-dom";
import AddCard from "../../components/AddCard";
import CardStockProv from "../../components/CardStockProv";
import Card_Loading from "../../../User/components/Card_Loading";
import { useEffect, useState } from "react";
import provendeService from "../../../../Service/provendeService";

const List_provende = () => {
  const [provendes, setProvendes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    provendeService.getAllProvendes()
      .then(response => {
        setProvendes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des provendes:', error);
        setLoading(false);
      });
  }, []);
  


  return (
    <section className="mt-10 px-5 py-5">
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center'>
        <Link to="Formulaire">
          <AddCard />
        </Link>
        {loading ? (
          Array.from({ length: 11 }).map((_, index) => (
            <Card_Loading key={index} />
          ))
        ) : (
          provendes.map((provende) => (
            <CardStockProv key={provende.id} provende={provende} />
          ))
        )}
      </div>
    </section>
  );
}

export default List_provende;
