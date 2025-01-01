import { useSelector } from "react-redux";
import { HEADER_PROFILE } from "../utils/links";

const Birthday = () => {
const birthdayData = useSelector((store)=>store?.data?.data?.birthdays);
  return (
    <div className="flex flex-row ">
      {birthdayData  && birthdayData.map((data)=>(

        <div key={data?.name} className="flex flex-col items-center justify-center border p-2 m-2 cursor-pointer rounded-lg h-[180px] mo:min-h-[280px] min-w-[140px] mo:min-w-[240px] border-slate-700 dark:border-slate-300 dark:text-slate-300">
             <img alt="bpic" src={HEADER_PROFILE} className="rounded-full size-[80px] mo:size-[200px]"/>
             <h1 className="text-center p-1" >{data?.name}</h1>
             <h1 className="text-center p-1">{data?.profession}</h1>
        </div>
       
      ))}
    </div>
  );
};

export default Birthday;
