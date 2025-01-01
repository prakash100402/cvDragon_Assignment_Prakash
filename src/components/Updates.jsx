import { useSelector } from "react-redux";
import { BACKGROUND } from "../utils/links";

const Updates = () => {
    const updatesData = useSelector((store)=>store?.data?.data?.updates);
    return (
        <div className="flex flex-row ">
            {updatesData && updatesData.map((data) => (

                <div key={data?.name} className="items-center justify-center border p-2 m-2 cursor-pointer rounded-lg h-[180px] mo:min-h-[280px] min-w-[140px] mo:min-w-[240px] border-slate-700 dark:border-slate-300 dark:text-slate-300">
                    <img alt="bpic" src={BACKGROUND} className="rounded-t-lg " />
                    <h1 className="text-center p-1 text-[12px] mo:text-lg" >{data?.title}</h1>
                    <h1 className="text-center p-1 text-[10px] mo:text-lg">{data?.desc}</h1>
                </div>

            ))}
        </div>
    );
};

export default Updates;
