
import { useDispatch } from "react-redux"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { removeItem } from "../../Store/Slice/Slice"


const Cart=()=>{

const Selector=useSelector((items)=>items.cart)

const Dispatch=useDispatch()


    return(
        <>
        
        <div>At Cart</div>
        <div className="flex justify-center flex-col" style={{alignItems:"center"}}>
{Selector.map((items)=>(
<div key={items.id} className="w-44 mt-4 flex flex-col gap-4">

    <img src={items.image} alt="" />
    <div>Product Name:{items.title}</div>
    <div>Price:${items.price}</div>

    <button type="button" onClick={()=>Dispatch(removeItem(items.id))} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
</div>
))}

        </div>
        </>
    )
}
export default Cart