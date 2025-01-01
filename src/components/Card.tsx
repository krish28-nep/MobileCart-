interface CardProps {
  item: {
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
  };
}
const Card:React.FC<CardProps> = ({item}) => {
  const {id, name, desc, price, image } = item;
  return (
    <div className="inline-block w-[400px] border border-[#ddd] rounded-[8px] shadow-cardShadow m-2">
      <div className="text-center" key={id}>
      <div className="flex justify-center mt-4">
          <img className="w-[150px] h-[150px]" src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p className="text-sm max-h-[3*12px] overflow-hidden text-ellipsis legacy-flex">{desc}</p>
        <p className="text-xl max-h-[2*12px] overflow-hidden text-ellipsis legacy-flex">${price}</p>
        <button className="bg-[#4caf50] text-white py-[8px] px-12px] rounded-[4px] cursor-pointer text-sm transition-bg duration-300 hover:bg-[#45a049]">Add to Cart</button>
      </div>
    </div>
  )
}

export default Card