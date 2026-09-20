import { useNavigate, useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch";

const OrderedItems = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const itemId = Number(id);
  const items = UseFetch("Items");
  const style = "font-semibold px-5 py-2 text-[12px]"

  const matchingItem = items.find(
      item => (Number(item.id) === itemId)
    );
  console.log("M: ",matchingItem)

  function exit(e){
    e.preventDefault();
    navigate("/")
  }
  return (
    <div onClick={exit} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center ">
      <div className="bg-white border border-slate-200 shadow-sm rounded-lg w-80 h-60">
     
        <p className="text-sm font-semibold py-3 px-5 bg-slate-50/80 rounded-t-lg">
          Ordered Items
        </p>

        {matchingItem && (
          <div>
            <div className="grid grid-cols-2 items-center border-t border-slate-100">
              <p className={style}>Item ID:</p>
              <p className="text-[12px] text-slate-500">{matchingItem.id}</p>
            </div>

            <div className="grid grid-cols-2 items-center border-t border-slate-100">
              <p className={style}>Item Name:</p>
              <p className="text-[12px] text-slate-500">{matchingItem.name}</p>
            </div>

            <div className="grid grid-cols-2 items-center border-t border-slate-100">
              <p className={style}>Quantity:</p>
              <p className="text-[12px] text-slate-500">{matchingItem.Quantity}</p>
            </div>

            <div className="grid grid-cols-2 items-center border-t border-slate-100">
              <p className={style}>Buying Price:</p>
              <p className="text-[12px] text-slate-500">{matchingItem.buyingPrice}</p>
            </div>

            <div className="grid grid-cols-2 items-center border-t border-slate-100">
              <p className={style}>Selling Price:</p>
              <p className="text-[12px] text-slate-500">{matchingItem.SellingPrice}</p>
            </div>

          </div>       
        )}
         
      </div>
    </div>
  )
}

export default OrderedItems