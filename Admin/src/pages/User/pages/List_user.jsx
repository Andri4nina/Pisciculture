import { Link } from "react-router-dom"
import Card_Add_User from "../components/Card_Add_User"
import Card_user from "../components/Card_user"
import { useEffect, useState } from "react"
import userService from "../../../Service/userService"
import Card_Loading from "../components/Card_Loading"





const List_user = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userService.getAllUsers()
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
                setLoading(false);
            });
    }, []);
    
    



    return (
        <>
            <section className="mt-10 px-5 py-5">
                <div className='grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    <Link to="Formulaire">
                        <Card_Add_User />
                    </Link>
                    {loading ? (
                    
                        Array.from({ length: 11 }).map((_, index) => (
                            <Card_Loading key={index} />
                        ))
                    ) : (
                        users.map && users.map((user) => (
                            <Card_user key={user.id} user={user} setUsers={setUsers} />
                        ))
                    )}
                </div>
            </section>

        </>
    )
}

export default List_user