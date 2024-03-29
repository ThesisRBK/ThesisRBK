const ReservationCard = () => {
    return ( 
    <div className="w-[350px] h-[380px] border border-grey-300 rounded-[10px] shadow-md mr-[170px] py-[30px] px-[20px]">
        <div className="flex justify-between"><span className="text-xl">50 $</span>
        <span className="underline">7 reviews</span></div>
        <div className="w-full h-[150px] border border-grey-400 rounded-[10px] mt-[20px]">
            <div className="h-[75px] border-b border-gray-300 rounded mt-[3px]"><input className="w-1/2 h-[65px] border-r border-gray-300" type="date"  />
            <input className="w-1/2 h-[65px]" type="date"  /></div>
            <input
            type="text"
            placeholder="Select an option"
            className="py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="flex flex-col mt-[20px] gap-5"><button className="w-full h-[50px] bg-orange-950 text-white border rounded-[10px] ">Reserve</button>
        <span className="flex justify-center text-gray-500">You won't be charged yet</span></div>
    </div>
     );
}
 
export default ReservationCard;