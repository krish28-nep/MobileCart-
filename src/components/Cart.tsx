
const Cart = () => {
  return (
    <div className="w-[60%] m-auto mt-[100px]">
      <div className="flex items-center justify-between mt-[20px] border border-[#4caf50]">
        <div className="flex w-[400px]">
          <img className="w-[50px] h-[50px]" src="" alt="" />
          <p className="font-bold ml-[10px]">jkjsa</p>
        </div>
        <div>
          <button className="bg-[grey] py-[8px] px-[12px] mr- rounded-[6px] text-sm">+</button>
          <button className="bg-[grey] py-[8px] px-[12px] mr- rounded-[6px] text-sm">1</button>
          <button className="bg-[grey] py-[8px] px-[12px] mr- rounded-[6px] text-sm">-</button>
        </div>
        <div>
          <span>1</span>
          <button className="bg-[#ff0000] py-[8px] px-[12px] mr- rounded-[6px] text-sm">Remove</button>
        </div>
        <div>
          <span>Total Price: $price</span>
        </div>
      </div>
    </div>
  )
}

export default Cart
