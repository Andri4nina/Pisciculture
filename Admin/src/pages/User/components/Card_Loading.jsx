import "./Card_Loading.css"


const Card_Loading = () => {
    return (
        <>
            <div className="cursor-pointer  relative flex justify-center items-center w-full  h-40 shadow-lg hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400 bg-slate-200 mt-5  hover:text-blue-200 text-slate-400  transition">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Card_Loading