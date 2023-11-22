import { cardTypes } from "../types/types"
function Card({ type, amount }: cardTypes) {
    return (
        <div className="m-5 p-5 w-72 cursor-pointer min-h-[170px] rounded-lg bg-gray-800 shadow-lg shadow-gray-800 transition-transform duration-400 hover:-translate-y-1">
            <div className="h3/4 min-h-3/5 bg-gray-800 rounded-md text-white">
                <b>{type}</b>
            </div>
            <div>
                <div className="flex items-center justify-center text-center">

                    <b className="text-2xl text-white">Amount : </b>
                    <b className="card-title p-3 text-xl text-white font-semibold mt-1 text-center">  {amount} ₺ </b>
                </div>
            </div>
        </div>
    )
}

export default Card