import { useSelector } from "react-redux";

const Tasks = () => {
    const taskData = useSelector((store)=>store?.data?.data?.tasks);

    return (
        <div className="grid lo:grid-cols-5 grid-cols-1 mo:w-fit  mo:pl-0 mo:grid-cols-2">
            {taskData && taskData.map((data) => (

                <div key={data?.name} className=" grid grid-cols-2 border p-4 m-4 cursor-pointer rounded-lg border-slate-700 dark:border-slate-300 dark:text-slate-300">
                    <h1 className="text-center p-1 text-[12px] mo:text-lg  col-span-1 rounded-lg shadow-2xl flex items-center justify-center w-[80px] dark:bg-slate-400 dark:text-white" >{data?.status}</h1>
                    <div className="cols-span-2">
                        <h1 className=" p-1 text-[10px] mo:text-lg text-left">{data?.task}</h1>
                        <h1 className="text-center p-1 text-[10px] mo:text-lg border-[2px] border-blue-500 rounded-full w-fit min-w-[100px]">{data?.work}</h1>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Tasks;
